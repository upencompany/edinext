import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { toLocale } from "@/lib/i18n";

/**
 * Contact form endpoint.
 *
 * Delivery is delegated to a webhook (the company's mail relay, a ticketing
 * system or an automation service) configured through CONTACT_WEBHOOK_URL.
 * Without it the endpoint answers 503 and the form points visitors to the
 * e-mail address instead — it never pretends a message was delivered.
 *
 * Hardening: same-origin check, JSON only, body size cap, per-IP rate limit,
 * honeypot + minimum fill time, length limits, control-character stripping,
 * HMAC-signed and time-limited webhook call.
 */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;
const MAX_BODY = 16_000;
const MIN_FILL_MS = 2_500;
const limits = { name: 120, organisation: 160, email: 200, phone: 40, topic: 60, message: 5000 } as const;

// Best-effort, per-instance rate limit (5 requests / 10 minutes / IP).
// Behind a CDN or on serverless, pair it with the platform's WAF rules.
const WINDOW_MS = 10 * 60_000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, list] of hits) if (list.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  }
  return recent.length > MAX_HITS;
}

function json(body: object, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

/** Remove control characters (keeping newlines and tabs in the message). */
function sanitize(value: string, multiline: boolean) {
  const cleaned = value.normalize("NFC").replace(multiline ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, "");
  return cleaned.trim();
}

export async function POST(request: Request) {
  // Same-origin only: browsers always send Origin on cross-site POSTs.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {
      /* "null" or malformed origin */
    }
    if (originHost !== host) return json({ error: "forbidden" }, 403);
  }

  if (!(request.headers.get("content-type") ?? "").toLowerCase().startsWith("application/json")) {
    return json({ error: "unsupported_media_type" }, 415);
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "600", "Cache-Control": "no-store" } });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: "payload_too_large" }, 413);

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  // Bots: honeypot filled in, or form submitted implausibly fast → accept silently, deliver nothing.
  const elapsed = Number(body.elapsed);
  if ((typeof body.website === "string" && body.website.trim() !== "") || (Number.isFinite(elapsed) && elapsed < MIN_FILL_MS)) {
    return json({ ok: true });
  }

  const clean: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = typeof body[key] === "string" ? sanitize(body[key] as string, key === "message") : "";
    if (value.length > max) return json({ error: "too_long", field: key }, 422);
    clean[key] = value;
  }

  const missing = ["name", "email", "message"].filter((k) => !clean[k]);
  if (missing.length || !EMAIL_RE.test(clean.email) || body.privacy !== "yes") {
    return json({ error: "validation", missing }, 422);
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return json({ error: "unavailable" }, 503);

  const payload = JSON.stringify({
    ...clean,
    locale: toLocale(body.locale),
    consent: true,
    receivedAt: new Date().toISOString(),
  });
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = process.env.CONTACT_WEBHOOK_SECRET;
  if (secret) headers["X-Edinext-Signature"] = `sha256=${createHmac("sha256", secret).update(payload).digest("hex")}`;

  try {
    const res = await fetch(webhook, { method: "POST", headers, body: payload, signal: AbortSignal.timeout(8000), redirect: "error" });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[contact] delivery failed", err instanceof Error ? err.message : err);
    return json({ error: "delivery_failed" }, 502);
  }

  return json({ ok: true });
}

export function GET() {
  return NextResponse.json({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });
}

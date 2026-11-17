import "server-only";

/**
 * The only module that reads environment variables. Server-only: importing it
 * from a client component fails the build, so no value can leak to the browser.
 * None of these variables needs the NEXT_PUBLIC_ prefix (nothing is read in the browser).
 */

function url(name: string, value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "https:" && parsed.hostname !== "localhost") throw new Error("must use https");
    return value.replace(/\/$/, "");
  } catch (err) {
    throw new Error(`Invalid ${name}: ${err instanceof Error ? err.message : String(err)}`);
  }
}

export const env = {
  /** Canonical origin used in canonical links, hreflang, sitemap and JSON-LD. Read at build time. */
  siteUrl:
    url("SITE_URL", process.env.SITE_URL) ??
    // Backwards compatibility with the first deployment's variable name.
    url("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL) ??
    "https://edinext.it",

  /**
   * Only the Vercel production deployment is indexable by default.
   * ALLOW_INDEXING=true forces indexing elsewhere; ALLOW_INDEXING=false hides production too.
   */
  allowIndexing:
    process.env.ALLOW_INDEXING === "true" ||
    (process.env.VERCEL_ENV === "production" && process.env.ALLOW_INDEXING !== "false"),

  /** Contact form delivery (optional). */
  contactWebhookUrl: url("CONTACT_WEBHOOK_URL", process.env.CONTACT_WEBHOOK_URL),
  contactWebhookSecret: process.env.CONTACT_WEBHOOK_SECRET || undefined,
} as const;

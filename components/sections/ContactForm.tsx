"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { cx } from "@/lib/format";
import { ArrowRight } from "@/components/ui/Icons";
import type { contactPage } from "@/content/pages";

type Copy = (typeof contactPage)["it"]["form"];
type Field = "name" | "email" | "message" | "privacy";
type Status = "idle" | "sending" | "success" | "unavailable" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm({ locale, copy, privacyHref, email }: { locale: Locale; copy: Copy; privacyHref: string; email: string }) {
  const id = useId();
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const fid = (name: string) => `${id}-${name}`;

  function validate(data: FormData) {
    const next: Partial<Record<Field, string>> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = copy.required;
    const mail = String(data.get("email") ?? "").trim();
    if (!mail) next.email = copy.required;
    else if (!EMAIL_RE.test(mail)) next.email = copy.invalidEmail;
    if (!String(data.get("message") ?? "").trim()) next.message = copy.required;
    if (!data.get("privacy")) next.privacy = copy.required;
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data.entries()), locale, elapsed: Date.now() - mountedAt.current }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        mountedAt.current = Date.now();
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const errorList = Object.entries(errors) as [Field, string][];
  const labels: Record<Field, string> = { name: copy.name, email: copy.email, message: copy.message, privacy: copy.privacyLink };

  const inputCls = (field?: Field) =>
    cx(
      "mt-2 block w-full rounded-xl border bg-card px-4 py-3.5 text-lg outline-none transition-colors placeholder:text-ink-3",
      "focus:border-brand focus:bg-paper focus-visible:outline-none focus:ring-4 focus:ring-brand/15",
      field && errors[field] ? "border-[#b42318]" : "border-line hover:border-line-strong",
    );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-8" aria-describedby={errorList.length ? `${id}-summary` : undefined}>
      {errorList.length > 0 && (
        <div id={`${id}-summary`} ref={summaryRef} tabIndex={-1} role="alert" className="border-l-2 border-[#b42318] bg-[#fdf1ef] px-5 py-4">
          <p className="font-semibold text-[#8a1c12]">{copy.errorsSummary}</p>
          <ul className="mt-2 space-y-1">
            {errorList.map(([f, msg]) => (
              <li key={f}>
                <a href={`#${fid(f)}`} className="link-inline text-[#8a1c12]">
                  {labels[f]}: {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className={cx(status === "idle" || status === "sending" ? "sr-only" : "border-l-2 px-5 py-4", status === "success" ? "border-accent bg-accent-tint" : "border-brand bg-brand-tint")}
      >
        {status === "success" && copy.success}
        {status === "unavailable" && (
          <>
            {copy.unavailable}{" "}
            <a className="link-inline" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </>
        )}
        {status === "error" && (
          <>
            {copy.error}{" "}
            <a className="link-inline" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </>
        )}
        {status === "sending" && copy.sending}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor={fid("name")} className="t-label text-ink-2">
            {copy.name} <span aria-hidden="true" className="text-brand-ink">*</span>
          </label>
          <input
            id={fid("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${fid("name")}-err` : undefined}
            className={inputCls("name")}
          />
          {errors.name && (
            <p id={`${fid("name")}-err`} className="mt-2 text-sm text-[#b42318]">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={fid("org")} className="t-label text-ink-2">
            {copy.organisation} <span className="normal-case tracking-normal text-ink-3">({copy.optional})</span>
          </label>
          <input id={fid("org")} name="organisation" type="text" autoComplete="organization" className={inputCls()} />
        </div>
        <div>
          <label htmlFor={fid("email")} className="t-label text-ink-2">
            {copy.email} <span aria-hidden="true" className="text-brand-ink">*</span>
          </label>
          <input
            id={fid("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${fid("email")}-err` : undefined}
            className={inputCls("email")}
          />
          {errors.email && (
            <p id={`${fid("email")}-err`} className="mt-2 text-sm text-[#b42318]">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={fid("phone")} className="t-label text-ink-2">
            {copy.phone} <span className="normal-case tracking-normal text-ink-3">({copy.optional})</span>
          </label>
          <input id={fid("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputCls()} />
        </div>
      </div>

      <fieldset>
        <legend className="t-label text-ink-2">{copy.topic}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {copy.topics.map((topic, i) => (
            <label key={topic} className="cursor-pointer">
              <input type="radio" name="topic" value={topic} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-line px-4 py-2 transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-brand hover:border-ink">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={fid("message")} className="t-label text-ink-2">
          {copy.message} <span aria-hidden="true" className="text-brand-ink">*</span>
        </label>
        <textarea
          id={fid("message")}
          name="message"
          rows={6}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${fid("message")}-err` : undefined}
          className={cx(inputCls("message"), "resize-y")}
        />
        {errors.message && (
          <p id={`${fid("message")}-err`} className="mt-2 text-sm text-[#b42318]">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={fid("website")}>Website</label>
        <input id={fid("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={fid("privacy")}
            name="privacy"
            type="checkbox"
            value="yes"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? `${fid("privacy")}-err` : undefined}
            className="mt-1 h-5 w-5 shrink-0 accent-brand"
          />
          <label htmlFor={fid("privacy")} className="text-ink-2">
            {copy.privacy}{" "}
            <Link href={privacyHref} className="link-inline">
              {copy.privacyLink}
            </Link>
          </label>
        </div>
        {errors.privacy && (
          <p id={`${fid("privacy")}-err`} className="ml-8 mt-2 text-sm text-[#b42318]">
            {errors.privacy}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-6 rounded-full bg-ink py-4 pl-7 pr-6 text-lg font-medium text-paper transition-colors hover:bg-brand-ink disabled:opacity-60"
      >
        {status === "sending" ? copy.sending : copy.submit}
        <ArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

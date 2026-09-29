"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ui } from "@/content/ui";
import { href, toLocale } from "@/lib/i18n";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const locale = toLocale(useParams<{ locale?: string }>()?.locale);
  const t = ui[locale].errorPage;
  return (
    <section className="wrap grid-12 gap-y-10 py-24 md:py-40">
      <p className="t-label col-span-4 text-brand-ink md:col-span-3">500</p>
      <div className="col-span-4 md:col-span-9">
        <h1 className="t-h1">{t.title}</h1>
        <p className="t-lede mt-6 max-w-2xl">{t.body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="rounded-full bg-ink px-6 py-3.5 font-medium text-paper hover:bg-brand">
            {t.retry}
          </button>
          <Link href={href(locale, "home")} className="rounded-full border border-ink/80 px-6 py-3.5 font-medium hover:bg-ink hover:text-paper">
            {t.home}
          </Link>
        </div>
      </div>
    </section>
  );
}

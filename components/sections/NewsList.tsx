import Link from "next/link";
import type { NewsArticle } from "@/content/types";
import { formatDate } from "@/lib/format";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight } from "@/components/ui/Icons";

export function NewsList({ items, locale, headingLevel = "h3" }: { items: NewsArticle[]; locale: Locale; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-t border-ink">
      {items.map((n, i) => (
        <li key={n.slug} className="group relative border-b border-line" data-reveal style={{ ["--reveal-i" as string]: i }}>
          <div className="grid-12 gap-y-2 py-7 md:py-9">
            <p className="t-meta col-span-2 text-ink-3 tabular md:col-span-2">
              <time dateTime={n.date}>{formatDate(n.date, locale, "short")}</time>
            </p>
            <p className="t-label col-span-2 text-right text-brand-ink md:col-span-2 md:text-left">{n[locale].category}</p>
            <div className="col-span-4 md:col-span-7">
              <H className="text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                <Link href={href(locale, "news", n.slug)} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-ink">
                  {n[locale].title}
                </Link>
              </H>
              <p className="mt-2 line-clamp-2 max-w-2xl text-ink-2">{n[locale].excerpt}</p>
            </div>
            <div className="col-span-4 hidden justify-end md:col-span-1 md:flex">
              <ArrowRight size={20} className="mt-1 text-ink-3 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-ink" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

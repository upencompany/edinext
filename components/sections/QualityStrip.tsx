import Link from "next/link";
import { company } from "@/content/company";
import { formatDate } from "@/lib/format";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";

/** Three verifiable credentials, each linking to its section and source document. */
export function QualityStrip({ locale }: { locale: Locale }) {
  const t = ui[locale].quality;
  const c = company.certifications;
  const items = [
    {
      code: c.iso9001.standard,
      title: t.isoTitle,
      note: `${t.reference} ${c.iso9001.reference}`,
      href: href(locale, "compliance", undefined, "iso-9001"),
    },
    {
      code: c.pdr125.standard,
      title: t.pdrTitle,
      note: t.pdrNote,
      href: href(locale, "compliance", undefined, "pdr-125"),
    },
    {
      code: t.legalityCode,
      title: t.legalityTitle,
      note: `${"★".repeat(c.legality.score)} · ${formatDate(c.legality.date, locale)}`,
      href: href(locale, "compliance", undefined, "rating-di-legalita"),
    },
  ];

  return (
    <ul className="grid gap-px bg-line md:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.code} className="bg-paper" data-reveal style={{ ["--reveal-i" as string]: i }}>
          <Link href={item.href} className="group flex h-full flex-col justify-between gap-10 p-6 transition-colors hover:bg-card md:p-8">
            <span className="t-h3 font-mono !tracking-tight text-ink group-hover:text-brand-ink">{item.code}</span>
            <span>
              <span className="block font-medium">{item.title}</span>
              <span className="t-meta mt-1 block text-ink-3">{item.note}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

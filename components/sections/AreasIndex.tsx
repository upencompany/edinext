import Link from "next/link";
import { families } from "@/content/ecosystem";
import { solutionsByFamily } from "@/content/solutions";
import { href, type Locale } from "@/lib/i18n";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Editorial index of the solution areas: one row per area, numbered like a
 * table of contents. Application names are inline links, not cards.
 */
export function AreasIndex({ locale, headingLevel = "h3" }: { locale: Locale; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ol className="border-t border-ink">
      {families.map((f, i) => {
        const apps = solutionsByFamily(f.id);
        const familyHref = f.slug ? href(locale, "solutions", f.slug) : href(locale, "solutions", apps[0].slug);
        return (
          <li key={f.id} className="group relative border-b border-line" data-reveal style={{ ["--reveal-i" as string]: i }}>
            <div className="grid-12 gap-y-4 py-8 md:py-10">
              <p className="t-label col-span-1 pt-2 text-brand-ink tabular md:col-span-1">{f.index}</p>
              <div className="col-span-3 md:col-span-5">
                <H className="t-h3">
                  <Link href={familyHref} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-ink">
                    {f.name[locale]}
                  </Link>
                </H>
                <p className="t-label mt-2 text-ink-3">{f.short[locale]}</p>
              </div>
              <div className="col-span-4 md:col-span-5 md:col-start-7">
                <p className="text-ink-2">{f.summary[locale]}</p>
                <ul className="relative z-10 mt-4 flex flex-wrap gap-x-1 gap-y-1">
                  {apps.map((s) => (
                    <li key={s.slug}>
                      {s.hasPage ? (
                        <Link
                          href={href(locale, "solutions", s.slug)}
                          className="t-meta inline-block rounded-full border border-line px-3 py-1 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                        >
                          {s.name}
                        </Link>
                      ) : (
                        <span className="t-meta inline-block rounded-full border border-dashed border-line px-3 py-1 text-ink-3">{s.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-4 hidden justify-end md:col-span-1 md:flex">
                <ArrowRight size={22} className="mt-1 text-ink-3 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-ink" />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-brand transition-transform duration-500 ease-(--ease-out-quart) group-hover:scale-x-100"
            />
          </li>
        );
      })}
    </ol>
  );
}

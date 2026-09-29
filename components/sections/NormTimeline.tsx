import Link from "next/link";
import { norms } from "@/content/ecosystem";
import { getSolution } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import { ScrollerControls } from "./ScrollerControls";

/**
 * Horizontal timeline of the regulations the platforms implement.
 * Native horizontal scroll (keyboard-focusable region) plus prev/next controls.
 */
export function NormTimeline({ locale, filter }: { locale: Locale; filter?: string[] }) {
  const items = filter ? norms.filter((n) => filter.includes(n.id)) : norms;
  const t = ui[locale].labels;
  const regionLabel = t.regulatoryTimeline;
  const id = "norm-timeline";

  return (
    <div>
      <div className="mb-6 flex items-center justify-end">
        <ScrollerControls targetId={id} labels={[t.previous, t.next]} />
      </div>
      <div
        id={id}
        role="region"
        aria-label={regionLabel}
        tabIndex={0}
        className="scroller -mx-(--gutter) snap-x snap-mandatory scroll-px-(--gutter) overflow-x-auto px-(--gutter) pb-6"
      >
        <ol className="relative flex min-w-max">
          {items.map((n, i) => (
            <li
              key={n.id}
              className="relative w-[78vw] max-w-[22rem] shrink-0 snap-start pr-8 sm:w-[19rem]"
              data-reveal
              style={{ ["--reveal-i" as string]: i }}
            >
              <p className="t-h2 font-medium tabular text-ink">{n.year}</p>
              <span aria-hidden="true" className="relative mt-3 block h-3">
                <span className="absolute inset-x-0 top-1/2 h-px bg-ink" />
                <span className="relative block h-3 w-3 rounded-full border-2 border-ink bg-paper" />
              </span>
              <p className="t-label mt-6 text-brand-ink">{n.ref[locale]}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">{n.subject[locale]}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{n.duty[locale]}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={t.applications}>
                {n.solutions.map((slug) => {
                  const s = getSolution(slug);
                  if (!s) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={href(locale, "solutions", slug)}
                        className="t-meta inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1 text-brand-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        {s.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

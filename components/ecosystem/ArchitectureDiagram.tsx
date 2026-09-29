import { reteAvisArchitecture } from "@/content/architecture";
import { cx } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

/** Layered architecture diagram (ReteAVIS). Copy lives in content/architecture.ts. */
export function ArchitectureDiagram({ locale }: { locale: Locale }) {
  const { caption, columns } = reteAvisArchitecture[locale];

  return (
    <figure>
      <ol className="grid gap-3 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-0">
        {columns.map((col, i) => (
          <li key={col.label} className="relative xl:pr-8">
            <p className="t-label mb-3 text-ink-3">
              <span className="text-brand-ink tabular">{String(i + 1).padStart(2, "0")}</span> · {col.label}
            </p>
            <ul className="flex h-[calc(100%-2rem)] flex-col justify-center gap-3">
              {col.nodes.map((n) => (
                <li
                  key={n.title}
                  className={cx(
                    "rounded-xl border px-4",
                    col.dark ? "border-ink bg-ink py-4 text-paper" : "border-line bg-card py-3",
                  )}
                >
                  <span className="block font-semibold leading-snug">{n.title}</span>
                  <span className={cx("t-meta mt-1 block", col.dark ? "text-paper/70" : "text-ink-3")}>{n.sub}</span>
                </li>
              ))}
            </ul>
            {i < columns.length - 1 && (
              <>
                <span aria-hidden="true" className="absolute right-2 top-1/2 hidden text-ink-3 xl:block">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M0 6h17M12 1l6 5-6 5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </span>
                <span aria-hidden="true" className="mx-auto mt-3 block h-5 w-px bg-ink/30 sm:hidden" />
              </>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="t-meta mt-6 text-ink-3">{caption}</figcaption>
    </figure>
  );
}

import type { SolutionDiagram } from "@/content/types";
import { Kicker } from "@/components/ui/Editorial";
import { HubDiagram } from "./HubDiagram";

/**
 * Structured versions of the schemas the old site published as images
 * (vaccination list, care network, stakeholders, school-health model).
 * Text lives in the DOM, so it is searchable, translatable and accessible.
 */
export function SolutionDiagrams({ diagrams, label }: { diagrams: SolutionDiagram[]; label: string }) {
  return (
    <>
      {diagrams.map((d, i) => (
        <section key={d.title} aria-labelledby={`schema-${i}`} className="wrap pt-20 md:pt-28" id={i === 0 ? "schema" : undefined}>
          <div className="grid-12 gap-y-6">
            <div className="col-span-4 md:col-span-3" data-reveal>
              <Kicker>{label}</Kicker>
            </div>
            <div className="col-span-4 md:col-span-9" data-reveal>
              <h2 id={`schema-${i}`} className="t-h2">
                {d.title}
              </h2>
              {d.lede && <p className="t-lede mt-5 max-w-2xl">{d.lede}</p>}
            </div>
          </div>
          <div className="mt-12" data-reveal>
            {d.kind === "hub" && (
              <div className="rounded-[1.75rem] bg-card px-4 py-12 md:px-10">
                <HubDiagram center={d.center} items={d.items} />
              </div>
            )}
            {d.kind === "groups" && <Groups groups={d.groups} />}
            {d.kind === "cycle" && <Cycle center={d.center} items={d.items} />}
          </div>
        </section>
      ))}
    </>
  );
}

function Groups({ groups }: { groups: { name: string; items: string[] }[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((g, i) => {
        const wide = g.items.length > 2;
        const single = g.items.length === 1 && g.items[0].toLowerCase() === g.name.toLowerCase();
        return (
          <li
            key={g.name}
            className={`flex flex-col justify-between gap-6 rounded-2xl border border-line p-5 transition-colors hover:border-ink ${wide ? "sm:col-span-2" : ""}`}
          >
            <p className="flex items-center justify-between gap-3">
              <span className="text-lg font-semibold tracking-tight">{g.name}</span>
              <span className="t-meta text-ink-3 tabular">{String(i + 1).padStart(2, "0")}</span>
            </p>
            {!single && (
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li key={it} className="t-meta rounded-full bg-brand-tint px-3 py-1 text-brand-ink">
                    {it}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Tile({ text, n }: { text: string; n: number }) {
  return (
    <li className="rounded-2xl border border-line bg-paper-2 p-5">
      <span className="t-meta text-accent tabular">{String(n).padStart(2, "0")}</span>
      <span className="mt-3 block text-lg font-medium leading-snug">{text}</span>
    </li>
  );
}

function Cycle({ center, items }: { center: string; items: string[] }) {
  const top = items.slice(0, 3);
  const bottom = items.slice(3);
  return (
    <div className="theme-dark relative overflow-hidden rounded-[1.75rem] p-5 md:p-10">
      <svg aria-hidden="true" viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] opacity-40">
        <circle cx="200" cy="200" r="170" fill="none" stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="640 420" />
        <path d="M330 90 l18 -6 -4 19" fill="none" stroke="var(--color-brand)" strokeWidth="2" />
      </svg>
      <ol className="relative grid gap-3 md:grid-cols-3">
        {top.map((t, i) => (
          <Tile key={t} text={t} n={i + 1} />
        ))}
      </ol>
      <p className="relative my-3 rounded-2xl bg-brand px-5 py-4 text-center font-mono text-sm font-medium uppercase tracking-[0.12em] text-white">
        {center}
      </p>
      <ol start={4} className="relative grid gap-3 md:grid-cols-3">
        {bottom.map((t, i) => (
          <Tile key={t} text={t} n={i + 4} />
        ))}
      </ol>
    </div>
  );
}

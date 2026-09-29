/**
 * A central platform with the systems or bodies it exchanges data with.
 * Labels are real text in the DOM (not SVG), so they wrap and scale; the
 * connectors are drawn with CSS.
 */
type HubItem = { label: string; detail?: string };

function Column({ list, side }: { list: HubItem[]; side: "l" | "r" }) {
  return (
    <ul className="flex flex-col justify-center gap-4">
      {list.map((it) => (
        <li key={it.label} className={`relative ${side === "l" ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
          <span
            aria-hidden="true"
            className={`absolute top-1/2 hidden h-px w-10 bg-ink/40 md:block ${side === "l" ? "right-0" : "left-0"}`}
          />
          <span className="block rounded-xl border border-line bg-paper px-4 py-3">
            <span className="block font-semibold leading-snug">{it.label}</span>
            {it.detail && <span className="t-meta mt-0.5 block text-ink-3">{it.detail}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function HubDiagram({
  center,
  items,
  caption,
}: {
  center: string;
  items: { label: string; detail?: string }[];
  caption?: string;
}) {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <figure>
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <Column list={left} side="l" />
        <div className="relative my-2 grid place-items-center md:my-0">
          <span aria-hidden="true" className="absolute inset-y-[-2rem] left-1/2 w-px bg-ink/20 md:hidden" />
          <span className="relative grid h-36 w-36 place-items-center rounded-full bg-ink p-4 text-center text-lg font-semibold leading-tight text-paper ring-8 ring-paper-2 md:h-44 md:w-44 md:text-xl">
            {center}
          </span>
        </div>
        <Column list={right} side="r" />
      </div>
      {caption && <figcaption className="t-meta mt-6 text-center text-ink-3">{caption}</figcaption>}
    </figure>
  );
}

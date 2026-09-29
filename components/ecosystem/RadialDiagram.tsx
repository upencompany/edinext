import type { ActorId, FamilyId } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { cx } from "@/lib/format";
import { C, R_ACTOR, SIZE, layout } from "./geometry";

export const actorShort: Record<ActorId, Record<Locale, string>> = {
  cittadini: { it: "Cittadini", en: "Citizens" },
  imprese: { it: "Imprese", en: "Businesses" },
  prevenzione: { it: "Prevenzione", en: "Prevention" },
  strutture: { it: "Strutture", en: "Facilities" },
  istituzioni: { it: "Regioni", en: "Regions" },
  comunita: { it: "Scuole", en: "Schools" },
};

interface RadialDiagramProps {
  locale: Locale;
  activeActor?: ActorId | null;
  activeApp?: string | null;
  /** Highlight every application of one area. */
  activeFamily?: FamilyId | null;
  /** Animate links drawing in on first paint (hero). */
  animate?: boolean;
  showLabels?: boolean;
  className?: string;
  title?: string;
}

/**
 * Pure SVG rendering of the ecosystem. Server-renderable; the interactive
 * explorer re-renders it with an active actor or application.
 */
export function RadialDiagram({ locale, activeActor, activeApp, activeFamily, animate, showLabels = true, className, title }: RadialDiagramProps) {
  const { apps, arcs, actorNodes, links } = layout;
  const focus = activeActor ?? null;
  const familyOf = new Map(apps.map((a) => [a.slug, a.family]));
  const appOn = (slug: string, actors: ActorId[]) =>
    activeApp ? activeApp === slug : activeFamily ? familyOf.get(slug) === activeFamily : focus ? actors.includes(focus) : true;

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={cx("block h-auto w-full select-none", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {/* Guide rings */}
      <circle cx={C} cy={C} r={R_ACTOR} fill="none" stroke="var(--color-line)" strokeDasharray="2 5" />
      <circle cx={C} cy={C} r={R_ACTOR + 64} fill="none" stroke="var(--color-line)" strokeOpacity="0.6" />

      {/* Area arcs */}
      {arcs.map((a) => (
        <g key={a.id}>
          <path d={a.d} fill="none" stroke={activeFamily === a.id ? "var(--color-brand)" : "var(--color-ink)"} strokeOpacity={activeFamily === a.id ? 1 : 0.55} strokeWidth={activeFamily === a.id ? 2.5 : 1} />
          <text x={a.lx} y={a.ly} textAnchor="middle" className="fill-ink-3 font-mono" fontSize="10.5" letterSpacing="0.06em">
            {a.index}
          </text>
        </g>
      ))}

      {/* Links */}
      <g fill="none" strokeLinecap="round">
        {links.map((l, i) => {
          const on = activeApp
            ? l.app === activeApp
            : activeFamily
              ? familyOf.get(l.app) === activeFamily
              : focus
                ? l.actor === focus
                : null;
          return (
            <path
              key={`${l.app}-${l.actor}`}
              d={l.d}
              className={cx("eco-link", animate && "draw-path")}
              style={animate ? ({ ["--len" as string]: l.length, ["--i" as string]: i % 12 } as React.CSSProperties) : undefined}
              stroke="var(--color-brand)"
              strokeOpacity={on === null ? 0.45 : on ? 1 : 0.12}
              strokeWidth={on ? 1.6 : 1}
            />
          );
        })}
      </g>

      {/* Application nodes */}
      {apps.map((a) => {
        const on = appOn(a.slug, a.actors);
        return (
          <g key={a.slug} opacity={on ? 1 : 0.28} className="transition-opacity duration-300">
            <circle cx={a.x} cy={a.y} r={activeApp === a.slug ? 6.5 : 4.5} fill={a.hasPage ? "var(--color-brand)" : "var(--color-paper)"} stroke="var(--color-brand)" strokeWidth="1.5" />
            {showLabels && (
              <text x={a.lx} y={a.ly} textAnchor={a.anchor} className="fill-ink font-mono" fontSize="12.5" fontWeight={activeApp === a.slug ? 600 : 500}>
                {a.name}
              </text>
            )}
          </g>
        );
      })}

      {/* Actor nodes */}
      {actorNodes.map((n) => {
        const linked = activeApp || activeFamily ? links.some((l) => l.actor === n.id && (activeApp ? l.app === activeApp : familyOf.get(l.app) === activeFamily)) : true;
        const on = (!focus || focus === n.id) && linked;
        const labelOffset = n.y < C ? -14 : 22;
        return (
          <g key={n.id} opacity={on ? 1 : 0.35} className="transition-opacity duration-300">
            <circle cx={n.x} cy={n.y} r={focus === n.id ? 9 : 7} fill={focus === n.id ? "var(--color-accent)" : "var(--color-ink)"} stroke="var(--color-paper)" strokeWidth="2" />
            {showLabels && (
              <text x={n.x} y={n.y + labelOffset} textAnchor="middle" className="fill-ink-2" fontSize="12.5" fontWeight={600}>
                {actorShort[n.id][locale]}
              </text>
            )}
          </g>
        );
      })}

      {/* Centre: the brand's "×" — connecting, in the sense of the logo */}
      <g transform={`translate(${C - 13} ${C - 13}) scale(1.1)`}>
        <path
          d="M4.2 3.1c1.6-.6 3 .7 4 1.9l3.9 4.7 3.6-4.8c1-1.3 2.4-2.6 4.1-1.8 1.4.8.9 2.5 0 3.7l-4.6 5.5 4.8 5.8c.9 1.1 1.3 2.8-.1 3.5-1.6.8-3-.6-3.9-1.8l-4-5-4.1 5.1c-.9 1.2-2.5 2.4-4 1.5-1.3-.9-.7-2.5.2-3.6l4.8-5.6-4.6-5.4c-1-1.2-1.5-3.1-.1-3.7Z"
          fill="var(--color-accent)"
        />
      </g>
    </svg>
  );
}

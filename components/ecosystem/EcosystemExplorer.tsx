"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { ActorId } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { cx } from "@/lib/format";
import { ArrowRight } from "@/components/ui/Icons";
import { RadialDiagram } from "./RadialDiagram";

export interface ExplorerActor {
  id: ActorId;
  name: string;
  who: string;
}

export interface ExplorerApp {
  slug: string;
  name: string;
  expansion: string;
  family: string;
  href: string | null;
  actors: ActorId[];
  roles: Partial<Record<ActorId, string>>;
  summary: string;
}

interface Props {
  locale: Locale;
  actors: ExplorerActor[];
  apps: ExplorerApp[];
  labels: { actors: string; platforms: string; all: string; one: string; many: string };
  compact?: boolean;
}

/**
 * Accessible explorer on a dark stage. The buttons and the list are the
 * real interface; the diagram mirrors the selection and stays pinned in
 * view while the list scrolls (it is hidden from assistive technology,
 * which receives the same information as text).
 */
export function EcosystemExplorer({ locale, actors, apps, labels }: Props) {
  const [actor, setActor] = useState<ActorId | null>(actors[0]?.id ?? null);
  const [hoverApp, setHoverApp] = useState<string | null>(null);
  const id = useId();

  const visible = actor ? apps.filter((a) => a.actors.includes(actor)) : apps;
  const current = actors.find((a) => a.id === actor);

  return (
    <div className="theme-dark rounded-[1.75rem] p-4 sm:p-6 md:p-10">
      {/* Selector */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p id={`${id}-label`} className="t-label text-ink-3">
          {labels.actors}
        </p>
        <p className="t-meta text-ink-3 tabular" aria-live="polite">
          <span className="text-ink">{visible.length}</span> {visible.length === 1 ? labels.one : labels.many}
        </p>
      </div>
      <ul aria-labelledby={`${id}-label`} className="scroller -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {actors.map((a) => {
          const on = a.id === actor;
          return (
            <li key={a.id} className="shrink-0">
              <button
                type="button"
                aria-pressed={on}
                aria-controls={`${id}-panel`}
                onClick={() => setActor(on ? null : a.id)}
                className={cx(
                  "flex items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2.5 text-[0.9375rem] font-medium transition-all duration-300",
                  on ? "border-ink bg-ink text-paper" : "border-line-strong text-ink-2 hover:border-ink hover:text-ink",
                )}
              >
                <span aria-hidden="true" className={cx("h-2 w-2 rounded-full transition-colors", on ? "bg-accent" : "bg-ink-3")} />
                {a.name}
              </button>
            </li>
          );
        })}
        <li className="shrink-0">
          <button
            type="button"
            aria-pressed={actor === null}
            onClick={() => setActor(null)}
            className={cx(
              "rounded-full border px-4 py-2.5 text-[0.9375rem] font-medium transition-colors",
              actor === null ? "border-accent bg-accent text-[#0b1220]" : "border-dashed border-line-strong text-ink-3 hover:text-ink",
            )}
          >
            {labels.all}
          </button>
        </li>
      </ul>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-12">
        {/* Diagram — pinned while the list scrolls */}
        <div className="sticky top-0 z-20 -mx-4 self-start border-b border-line bg-paper px-4 py-3 sm:-mx-6 sm:px-6 md:static md:mx-0 md:self-stretch md:border-0 md:bg-transparent md:px-0 md:py-0">
          <div className="md:sticky md:top-[calc(var(--header-h)+2rem)]">
            <div className="mx-auto max-w-[min(300px,38svh)] sm:max-w-[min(380px,40svh)] md:max-w-[560px]">
              <RadialDiagram locale={locale} activeActor={actor} activeApp={hoverApp} />
            </div>
          </div>
        </div>

        {/* Panel */}
        <div id={`${id}-panel`} className="min-w-0">
          <div className="border-b border-line pb-5">
            <p className="t-label text-ink-3">{labels.platforms}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{current ? current.name : labels.all}</p>
            {current && <p className="mt-2 text-[0.9375rem] leading-snug text-ink-2">{current.who}</p>}
          </div>
          <ul className="divide-y divide-line">
            {visible.map((a) => {
              const role = actor ? a.roles[actor] ?? a.summary : a.summary;
              const on = hoverApp === a.slug;
              const content = (
                <>
                  <span className="flex items-baseline justify-between gap-3">
                    <span className={cx("font-mono text-[1.02rem] font-medium transition-colors", on ? "text-brand-ink" : "text-ink")}>{a.name}</span>
                    <span className="t-label truncate text-ink-3">{a.family}</span>
                  </span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-snug text-ink-2">{role}</span>
                </>
              );
              return (
                <li key={a.slug} onPointerEnter={() => setHoverApp(a.slug)} onPointerLeave={() => setHoverApp(null)}>
                  {a.href ? (
                    <Link
                      href={a.href}
                      onFocus={() => setHoverApp(a.slug)}
                      onBlur={() => setHoverApp(null)}
                      className="group relative -mx-3 block rounded-xl px-3 py-4 pr-10 transition-colors hover:bg-card"
                    >
                      {content}
                      <ArrowRight
                        size={15}
                        className="absolute right-3 top-5 text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-brand-ink"
                      />
                    </Link>
                  ) : (
                    <div className="py-4 pr-10">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

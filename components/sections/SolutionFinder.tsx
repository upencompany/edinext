"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { ArrowRight } from "@/components/ui/Icons";
import { ProductMark } from "@/components/ui/ProductMark";
import type { ActorId, FamilyId } from "@/content/types";
import type { UI } from "@/content/ui";
import { cx } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

export interface FinderApp {
  slug: string;
  name: string;
  expansion: string;
  family: FamilyId;
  href: string | null;
  actors: ActorId[];
  roles: Partial<Record<ActorId, string>>;
  summary: string;
  logo?: string;
  monogram?: string;
}

export interface FinderProps {
  locale: Locale;
  labels: UI["finder"];
  contactHref: string;
  solutionsHref: string;
  actors: { id: ActorId; name: string; who: string }[];
  families: { id: FamilyId; index: string; name: string; short: string }[];
  apps: FinderApp[];
}

type Area = FamilyId | "all";

/**
 * "Which solution is right for you?" — two questions (who you are, your field),
 * then the matching applications. The ecosystem diagram narrows live with each
 * answer. Buttons and results are the real interface; the diagram is decorative.
 */
export function SolutionFinder({ locale, labels: t, contactHref, solutionsHref, actors, families, apps }: FinderProps) {
  const [actor, setActor] = useState<ActorId | null>(null);
  const [area, setArea] = useState<Area | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const id = useId();

  const step = actor === null ? 1 : area === null ? 2 : 3;
  const actorApps = actor ? apps.filter((a) => a.actors.includes(actor)) : [];
  const areas = families.filter((f) => actorApps.some((a) => a.family === f.id));
  const results = area === null ? [] : actorApps.filter((a) => area === "all" || a.family === area);
  const current = actors.find((a) => a.id === actor);
  const currentArea = families.find((f) => f.id === area);

  /** Move focus to the new step's heading so keyboard and screen-reader users follow along. */
  const go = (update: () => void) => {
    update();
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  return (
    <div className="theme-dark grid gap-10 overflow-hidden rounded-[1.75rem] p-5 sm:p-8 md:p-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
      <div className="min-w-0">
        {/* Progress */}
        <div className="flex items-center gap-4">
          <p className="t-label shrink-0 text-ink-3 tabular">
            {t.step} {Math.min(step, 2)} {t.of} 2
          </p>
          <div className="flex flex-1 gap-2" aria-hidden="true">
            {[1, 2].map((n) => (
              <span key={n} className="h-1 flex-1 overflow-hidden rounded-full bg-line">
                <span className={cx("block h-full rounded-full bg-accent transition-all duration-500", step > n ? "w-full" : step === n ? "w-1/3" : "w-0")} />
              </span>
            ))}
          </div>
          {step > 1 && (
            <button
              type="button"
              onClick={() => go(() => (step === 3 ? setArea(null) : setActor(null)))}
              className="t-label shrink-0 rounded-full border border-line-strong px-3 py-1.5 text-ink-2 transition-colors hover:border-ink hover:text-ink"
            >
              ← {t.back}
            </button>
          )}
        </div>

        <div key={step} className="finder-step mt-8" aria-live="polite">
          {step === 1 && (
            <>
              <h3 ref={headingRef} tabIndex={-1} className="text-3xl font-semibold tracking-tight outline-none sm:text-4xl">
                {t.q1}
              </h3>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {actors.map((a, i) => (
                  <li key={a.id} className="finder-item" style={{ ["--i" as string]: i }}>
                    <Option onClick={() => go(() => setActor(a.id))} title={a.name} hint={a.who} />
                  </li>
                ))}
              </ul>
            </>
          )}

          {step === 2 && current && (
            <>
              <p className="t-label text-accent">{current.name}</p>
              <h3 ref={headingRef} tabIndex={-1} className="mt-3 text-3xl font-semibold tracking-tight outline-none sm:text-4xl">
                {t.q2}
              </h3>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {areas.map((f, i) => (
                  <li key={f.id} className="finder-item" style={{ ["--i" as string]: i }}>
                    <Option
                      onClick={() => go(() => setArea(f.id))}
                      index={f.index}
                      title={f.name}
                      hint={`${f.short} · ${actorApps.filter((a) => a.family === f.id).length}`}
                    />
                  </li>
                ))}
                <li className="finder-item" style={{ ["--i" as string]: areas.length }}>
                  <Option onClick={() => go(() => setArea("all"))} title={t.anyArea} hint={`${t.anyAreaHint} · ${actorApps.length}`} dashed />
                </li>
              </ul>
            </>
          )}

          {step === 3 && current && (
            <>
              <p className="t-label text-accent">
                {current.name} · {currentArea ? currentArea.name : t.anyArea}
              </p>
              <h3 id={`${id}-results`} ref={headingRef} tabIndex={-1} className="mt-3 text-3xl font-semibold tracking-tight outline-none sm:text-4xl">
                {t.results}<span className="text-ink-3 tabular">({results.length})</span>
              </h3>
              {results.length === 0 ? (
                <p className="mt-6 text-ink-2">{t.none}</p>
              ) : (
                <ul className="mt-7 space-y-3" aria-labelledby={`${id}-results`}>
                  {results.map((a, i) => (
                    <li key={a.slug} className="finder-item" style={{ ["--i" as string]: i }}>
                      <Result app={a} role={actor ? a.roles[actor] ?? a.summary : a.summary} />
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={contactHref} className="group inline-flex items-center gap-3 rounded-full bg-ink py-3 pl-6 pr-5 font-medium text-paper transition-colors hover:bg-accent hover:text-[#0b1220]">
                  {t.talk}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  type="button"
                  onClick={() => go(() => (setArea(null), setActor(null)))}
                  className="rounded-full border border-line-strong px-6 py-3 font-medium text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  {t.restart}
                </button>
                <Link href={solutionsHref} className="inline-flex items-center px-2 py-3 font-medium text-brand-ink hover:underline">
                  {t.seeAll}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* The ecosystem narrows with every answer. */}
      <div className="relative hidden lg:block" aria-hidden="true">
        <div className="sticky top-[calc(var(--header-h)+2rem)]">
          <RadialDiagram locale={locale} activeActor={actor} activeFamily={area && area !== "all" ? area : null} />
        </div>
      </div>
    </div>
  );
}

function Option({ onClick, title, hint, index, dashed }: { onClick: () => void; title: string; hint: string; index?: string; dashed?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "group flex h-full w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-card",
        dashed ? "border-dashed border-line-strong" : "border-line",
      )}
    >
      {index && <span className="font-mono text-sm text-brand-ink tabular">{index}</span>}
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold leading-snug tracking-tight">{title}</span>
        <span className="mt-1 block text-[0.9rem] leading-snug text-ink-3">{hint}</span>
      </span>
      <ArrowRight size={16} className="mt-1.5 shrink-0 text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-accent" />
    </button>
  );
}

function Result({ app, role }: { app: FinderApp; role: string }) {
  const body = (
    <>
      <ProductMark src={app.logo} monogram={app.monogram} size={52} />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-mono text-lg font-medium">{app.name}</span>
          <span className="t-label text-ink-3">{app.expansion}</span>
        </span>
        <span className="mt-1.5 block leading-snug text-ink-2">{role}</span>
      </span>
      {app.href && <ArrowRight size={16} className="mt-1 shrink-0 text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-accent" />}
    </>
  );
  const cls = "group flex items-start gap-4 rounded-2xl border border-line bg-card/60 p-4 transition-colors";
  return app.href ? (
    <Link href={app.href} className={cx(cls, "hover:border-accent hover:bg-card")}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

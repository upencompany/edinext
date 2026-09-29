import Link from "next/link";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Kicker, PageIntro } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { ProductMark } from "@/components/ui/ProductMark";
import { actors, families, norms } from "@/content/ecosystem";
import { solutionsByFamily } from "@/content/solutions";
import type { Family } from "@/content/types";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import { ContactBand } from "./ContactBand";
import { NormTimeline } from "./NormTimeline";

export function FamilyDetail({ family: f, locale }: { family: Family; locale: Locale }) {
  const t = ui[locale];
  const apps = solutionsByFamily(f.id);
  const familyNorms = norms.filter((n) => n.solutions.some((slug) => apps.some((a) => a.slug === slug)));
  const actorIds = Array.from(new Set(apps.flatMap((a) => a.actors)));
  const others = families.filter((x) => x.id !== f.id);

  return (
    <>
      <PageIntro
        label={`${f.index} — ${f.short[locale]}`}
        title={f.name[locale]}
        lede={f.summary[locale]}
        breadcrumbs={
          <Breadcrumbs
            label={t.common.breadcrumb}
            items={[
              { name: t.common.home, path: href(locale, "home") },
              { name: t.solutions.label, path: href(locale, "solutions") },
              { name: f.name[locale], path: href(locale, "solutions", f.slug!) },
            ]}
          />
        }
        meta={
          <div className="space-y-5">
            <ProductMark src={f.logo} size={72} />
            <p className="t-meta text-ink-3">
              <span className="text-ink tabular">{apps.length}</span> {t.common.applications}
            </p>
          </div>
        }
      />

      <section className="wrap grid-12 gap-y-12 pb-20 md:pb-28">
        <div className="col-span-4 space-y-5 md:col-span-6 md:col-start-4 lg:col-span-5 lg:col-start-4" data-reveal>
          {f.intro[locale].map((p, i) => (
            <p key={i} className="text-lg text-ink-2">
              {p}
            </p>
          ))}
          <div className="border-t border-line pt-5">
            <p className="t-label text-ink-3">{t.solution.whoUses}</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {actors
                .filter((a) => actorIds.includes(a.id))
                .map((a) => (
                  <li key={a.id} className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ink" />
                    {a.name[locale]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-span-4 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-9" aria-hidden="true" data-reveal>
          <RadialDiagram locale={locale} activeFamily={f.id} />
        </div>
      </section>

      <section aria-labelledby="apps-title" className="border-t border-ink">
        <h2 id="apps-title" className="sr-only">
          {t.ecosystem.platforms}
        </h2>
        <ol className="wrap">
          {apps.map((s, i) => {
            const c = s[locale];
            const content = (
              <div className="grid-12 gap-y-4 py-12 md:py-16">
                <p className="t-label col-span-4 text-brand-ink tabular md:col-span-1">
                  {f.index}.{i + 1}
                </p>
                <div className="col-span-4 md:col-span-4">
                  <ProductMark src={s.logo} monogram={s.monogram} size={48} className="mb-4" />
                  <h3 className="t-h2 font-medium group-hover:text-brand-ink">{s.name}</h3>
                  <p className="t-label mt-3 text-ink-3">{c.expansion}</p>
                </div>
                <div className="col-span-4 md:col-span-6">
                  <p className="text-xl font-medium leading-snug">{c.tagline}</p>
                  <p className="mt-3 text-ink-2">{c.summary}</p>
                  {c.features[0] && (
                    <ul className="t-meta mt-5 flex flex-wrap gap-x-4 gap-y-1 text-ink-3">
                      {c.features[0].items.slice(0, 3).map((it) => (
                        <li key={it} className="before:mr-2 before:text-brand before:content-['—']">
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-span-4 hidden justify-end md:col-span-1 md:flex">
                  {s.hasPage && <ArrowRight size={24} className="mt-2 text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-brand-ink" />}
                </div>
              </div>
            );
            return (
              <li key={s.slug} className="group border-b border-line" data-reveal>
                {s.hasPage ? (
                  <Link href={href(locale, "solutions", s.slug)} className="block">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {familyNorms.length > 0 && (
        <section aria-labelledby="fam-norms" className="section-y bg-paper-2">
          <div className="wrap">
            <div className="grid-12 gap-y-6">
              <div className="col-span-4 md:col-span-3">
                <Kicker>{t.solution.norms}</Kicker>
              </div>
              <h2 id="fam-norms" className="t-h2 col-span-4 md:col-span-9">
                {t.labels.familyNormsTitle}
              </h2>
            </div>
            <div className="mt-12">
              <NormTimeline locale={locale} filter={familyNorms.map((n) => n.id)} />
            </div>
          </div>
        </section>
      )}

      <nav aria-labelledby="other-areas" className="border-t border-line">
        <div className="wrap grid-12 gap-y-8 py-16 md:py-20">
          <h2 id="other-areas" className="t-label col-span-4 text-ink-3 md:col-span-3">
            {t.solution.otherAreas}
          </h2>
          <ul className="col-span-4 md:col-span-9">
            {others.map((o) => {
              const target = o.slug ? href(locale, "solutions", o.slug) : href(locale, "solutions", "rete-avis");
              return (
                <li key={o.id} className="group border-b border-line first:border-t first:border-ink">
                  <Link href={target} className="flex items-baseline gap-6 py-5">
                    <span className="t-label w-8 text-brand-ink tabular">{o.index}</span>
                    <span className="flex-1 text-xl font-semibold tracking-tight group-hover:text-brand-ink">{o.name[locale]}</span>
                    <ArrowRight className="text-ink-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <ContactBand locale={locale} />
    </>
  );
}

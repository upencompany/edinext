import Link from "next/link";
import { notFound } from "next/navigation";
import { EcosystemExplorer } from "@/components/ecosystem/EcosystemExplorer";
import { explorerProps } from "@/components/ecosystem/explorer-data";
import { ContactBand } from "@/components/sections/ContactBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Kicker, PageIntro, SectionHead } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { ProductMark } from "@/components/ui/ProductMark";
import { families } from "@/content/ecosystem";
import { solutions, solutionsByFamily } from "@/content/solutions";
import { fill, ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/soluzioni">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = ui[locale].solutions;
  return pageMetadata({
    locale,
    section: "solutions",
    title: ui[locale].meta.solutionsTitle,
    description: ui[locale].meta.solutionsDescription,
    ogKicker: t.label,
  });
}

export default async function SolutionsPage({ params }: PageProps<"/[locale]/soluzioni">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = ui[locale];
  const withPages = solutions.filter((s) => s.hasPage).length;

  return (
    <>
      <PageIntro
        label={t.solutions.label}
        title={t.solutions.title}
        lede={t.solutions.lede}
        breadcrumbs={
          <Breadcrumbs
            label={t.common.breadcrumb}
            items={[
              { name: t.common.home, path: href(locale, "home") },
              { name: t.solutions.label, path: href(locale, "solutions") },
            ]}
          />
        }
        meta={
          <dl className="t-meta space-y-3 text-ink-3">
            <div>
              <dt className="sr-only">{t.common.applications}</dt>
              <dd>
                <span className="text-ink tabular">{solutions.length}</span> {t.common.applications}
              </dd>
            </div>
            <div>
              <dt className="sr-only">{t.solution.family}</dt>
              <dd>
                <span className="text-ink tabular">{families.length}</span> {t.labels.areas}
              </dd>
            </div>
          </dl>
        }
      >
        <nav aria-label={t.solutions.catalogueTitle} className="mt-10 flex flex-wrap gap-2">
          {families.map((f) => (
            <a key={f.id} href={`#${f.id}`} className="t-meta rounded-full border border-line px-4 py-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper">
              <span className="text-brand-ink tabular">{f.index}</span> {f.name[locale]}
            </a>
          ))}
        </nav>
      </PageIntro>

      {/* Relationship map */}
      <section aria-labelledby="map-title" className="section-y border-y border-line bg-card">
        <div className="wrap">
          <SectionHead index="A" label={t.ecosystem.actors} title={t.solutions.mapTitle} lede={t.solutions.mapLede} id="map-title" />
          <div className="mt-14 md:mt-20">
            <EcosystemExplorer {...explorerProps(locale)} />
          </div>
        </div>
      </section>

      {/* Catalogue by area */}
      <section aria-labelledby="catalogue-title" className="section-y">
        <div className="wrap">
          <SectionHead
            index="B"
            label={t.ecosystem.platforms}
            title={t.solutions.catalogueTitle}
            id="catalogue-title"
            lede={fill(t.labels.catalogueLede, { count: withPages })}
          />

          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {families.map((f) => {
              const apps = solutionsByFamily(f.id);
              return (
                <section key={f.id} id={f.id} aria-labelledby={`${f.id}-title`} className="grid-12 gap-y-8">
                  <div className="col-span-4 md:col-span-4 lg:col-span-4" data-reveal>
                    <div className="md:sticky md:top-[calc(var(--header-h)+2rem)]">
                      <Kicker index={f.index}>{f.short[locale]}</Kicker>
                      <h3 id={`${f.id}-title`} className="t-h3 mt-4 text-[clamp(1.6rem,1.3rem+1vw,2.25rem)]">
                        {f.slug ? (
                          <Link href={href(locale, "solutions", f.slug)} className="hover:text-brand-ink">
                            {f.name[locale]}
                          </Link>
                        ) : (
                          f.name[locale]
                        )}
                      </h3>
                      <p className="mt-4 max-w-sm text-ink-2">{f.summary[locale]}</p>
                      {f.slug && (
                        <Link href={href(locale, "solutions", f.slug)} className="group mt-6 inline-flex items-center gap-2 font-medium text-brand-ink">
                          <span className="link-u">
                            {t.common.readMore}
                            <span className="sr-only">: {f.name[locale]}</span>
                          </span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <ul className="col-span-4 border-t border-ink md:col-span-8 lg:col-span-7 lg:col-start-6">
                    {apps.map((s, i) => {
                      const c = s[locale];
                      const inner = (
                        <div className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-1 py-6 sm:grid-cols-[8rem_1fr_auto] md:py-7">
                          <p className="flex flex-col items-start gap-2 font-mono text-[1.05rem] font-medium text-ink group-hover:text-brand-ink">
                            <ProductMark src={s.logo} monogram={s.monogram} size={36} />
                            {s.name}
                          </p>
                          <div>
                            <p className="t-label text-ink-3">{c.expansion}</p>
                            <p className="mt-2 text-ink-2">{c.summary}</p>
                          </div>
                          <span className="hidden sm:block">
                            {s.hasPage ? (
                              <ArrowRight size={18} className="mt-1 text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-brand-ink" />
                            ) : (
                              <span className="t-meta text-ink-3">—</span>
                            )}
                          </span>
                        </div>
                      );
                      return (
                        <li key={s.slug} className="group border-b border-line" data-reveal style={{ ["--reveal-i" as string]: i }}>
                          {s.hasPage ? (
                            <Link href={href(locale, "solutions", s.slug)} className="block">
                              {inner}
                            </Link>
                          ) : (
                            inner
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section aria-labelledby="report-title" className="theme-dark">
        <div className="wrap grid-12 gap-y-8 py-20 md:py-28">
          <div className="col-span-4 md:col-span-3" data-reveal>
            <Kicker index="C" tone="dark">
              {t.labels.data}
            </Kicker>
          </div>
          <div className="col-span-4 md:col-span-8" data-reveal>
            <h2 id="report-title" className="t-h2">
              {t.solutions.reportTitle}
            </h2>
            <p className="t-lede mt-6 max-w-3xl text-ink-2">{t.solutions.reportBody}</p>
          </div>
        </div>
      </section>

      <ContactBand locale={locale} />
    </>
  );
}

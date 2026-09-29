import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ecosystem/ArchitectureDiagram";
import { HubDiagram } from "@/components/ecosystem/HubDiagram";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { SolutionDiagrams } from "@/components/ecosystem/SolutionDiagrams";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLink, Kicker } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProductMark } from "@/components/ui/ProductMark";
import { actors, families, norms } from "@/content/ecosystem";
import { news } from "@/content/news";
import { projects } from "@/content/projects";
import { getSolution, solutionsByFamily } from "@/content/solutions";
import type { Solution } from "@/content/types";
import { fill, ui } from "@/content/ui";
import { formatDate } from "@/lib/format";
import { href, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { organizationId } from "@/lib/structured-data";
import { ContactBand } from "./ContactBand";

export function SolutionDetail({ solution: s, locale }: { solution: Solution; locale: Locale }) {
  const t = ui[locale];
  const sp = t.solutionPage;
  const c = s[locale];
  const family = families.find((f) => f.id === s.family)!;
  const familyHref = family.slug ? href(locale, "solutions", family.slug) : null;
  const siblings = solutionsByFamily(s.family).filter((x) => x.slug !== s.slug);
  const related = (s.related ?? []).map(getSolution).filter((x): x is Solution => Boolean(x) && !siblings.includes(x!));
  const solutionNorms = norms.filter((n) => s.norms?.includes(n.id));
  const solutionNews = news.filter((n) => n.solutions?.includes(s.slug));
  const solutionProjects = projects.filter((p) => p.solutions.includes(s.slug));
  const roleActors = actors.filter((a) => s.actors.includes(a.id));

  const toc = [
    c.context && { id: "contesto", label: c.context.title },
    { id: "cose", label: c.about.title },
    c.features.length > 0 && { id: "funzionalita", label: t.solution.features },
    c.diagrams?.[0] && { id: "schema", label: c.diagrams[0].title },
    c.roles && { id: "chi-la-usa", label: t.solution.whoUses },
    (c.integrations || s.slug === "rete-avis") && { id: "integrazioni", label: c.integrations?.title ?? t.solution.integrations },
    solutionNorms.length > 0 && { id: "norme", label: t.solution.norms },
  ].filter(Boolean) as { id: string; label: string }[];

  const crumbs = [
    { name: t.common.home, path: href(locale, "home") },
    { name: t.solutions.label, path: href(locale, "solutions") },
    ...(familyHref ? [{ name: family.name[locale], path: familyHref }] : []),
    { name: s.name, path: href(locale, "solutions", s.slug) },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: s.name,
          alternateName: c.expansion,
          description: c.summary,
          applicationCategory: "BusinessApplication",
          applicationSubCategory: family.name[locale],
          operatingSystem: "Web",
          url: absoluteUrl(href(locale, "solutions", s.slug)),
          inLanguage: "it",
          publisher: { "@id": organizationId },
          audience: roleActors.map((a) => ({ "@type": "Audience", audienceType: a.name[locale] })),
        }}
      />

      {/* Hero */}
      <section className="wrap pt-8 pb-12 md:pt-12 md:pb-16">
        <Breadcrumbs label={t.common.breadcrumb} items={crumbs} />
        <div className="grid-12 mt-12 gap-y-10 md:mt-20">
          <div className="col-span-4 md:col-span-7">
            <Kicker index={family.index}>{family.name[locale]}</Kicker>
            <h1 className="mt-6">
              <span className="flex items-center gap-4 sm:gap-6">
                <ProductMark src={s.logo} monogram={s.monogram} size={72} className="hidden sm:grid" />
                <ProductMark src={s.logo} monogram={s.monogram} size={52} className="sm:hidden" />
                <span className="line-mask">
                  <span className="t-display block">{s.name}</span>
                </span>
              </span>
              <span className="t-label mt-5 block text-ink-3">{c.expansion}</span>
            </h1>
            <p className="t-h3 mt-10 max-w-2xl font-medium">{c.tagline}</p>
            <p className="t-lede mt-5 max-w-2xl">{c.summary}</p>
          </div>

          <aside className="col-span-4 md:col-span-4 md:col-start-9" aria-label={t.solution.index}>
            <div className="border-t border-ink pt-5">
              <p className="t-label text-ink-3">{t.solution.whoUses}</p>
              <ul className="mt-3 space-y-1.5">
                {roleActors.map((a) => (
                  <li key={a.id} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ink" />
                    {a.name[locale]}
                  </li>
                ))}
              </ul>
              {solutionNorms.length > 0 && (
                <>
                  <p className="t-label mt-8 text-ink-3">{t.solution.norms}</p>
                  <ul className="t-meta mt-3 space-y-1.5 text-ink-2">
                    {solutionNorms.map((n) => (
                      <li key={n.id}>{n.ref[locale]}</li>
                    ))}
                  </ul>
                </>
              )}
              {toc.length > 2 && (
                <nav aria-label={t.solution.index} className="mt-8 hidden md:block">
                  <p className="t-label text-ink-3">{t.solution.index}</p>
                  <ol className="mt-3 space-y-1">
                    {toc.map((item, i) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="group flex gap-3 py-0.5 text-ink-2 hover:text-brand-ink">
                          <span className="t-meta text-ink-3 tabular">{String(i + 1).padStart(2, "0")}</span>
                          <span className="link-u">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Visual: the product's place in the ecosystem, on a dark stage */}
      <section className="wrap" aria-label={sp.inEcosystem}>
        <div className="theme-dark grid items-center gap-8 overflow-hidden rounded-[1.75rem] p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:p-12">
          <div>
            <p className="t-label flex items-center gap-2 text-accent">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {sp.inEcosystem}
            </p>
            <p className="mt-4 max-w-md text-xl leading-snug text-ink-2">
              {fill(sp.ecosystemCaption, { name: s.name })}
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <div className="flex flex-col-reverse">
                <dt className="t-label mt-1 text-ink-3">{sp.actors}</dt>
                <dd className="text-4xl font-semibold tracking-tight tabular">{roleActors.length}</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="t-label mt-1 text-ink-3">{t.solution.features}</dt>
                <dd className="text-4xl font-semibold tracking-tight tabular">{c.features.reduce((n, g) => n + g.items.length, 0)}</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="t-label mt-1 text-ink-3">{sp.norms}</dt>
                <dd className="text-4xl font-semibold tracking-tight tabular">{solutionNorms.length || "—"}</dd>
              </div>
            </dl>
          </div>
          <div className="mx-auto w-full max-w-[520px]" aria-hidden="true">
            <RadialDiagram locale={locale} activeApp={s.slug} />
          </div>
        </div>
      </section>

      {/* Context */}
      {c.context && (
        <section id="contesto" aria-labelledby="contesto-title" className="wrap grid-12 gap-y-6 pt-20 md:pt-28">
          <div className="col-span-4 md:col-span-3" data-reveal>
            <Kicker>{t.solution.context}</Kicker>
          </div>
          <div className="col-span-4 md:col-span-8" data-reveal>
            <h2 id="contesto-title" className="t-h3">
              {c.context.title}
            </h2>
            {c.context.body.map((p, i) => (
              <p key={i} className="mt-4 max-w-3xl text-lg text-ink-2">
                {p}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* About */}
      <section id="cose" aria-labelledby="cose-title" className="wrap grid-12 gap-y-6 pt-20 md:pt-28">
        <div className="col-span-4 md:col-span-3" data-reveal>
          <Kicker>{s.name}</Kicker>
        </div>
        <div className="col-span-4 md:col-span-8" data-reveal>
          <h2 id="cose-title" className="t-h2">
            {c.about.title}
          </h2>
          <div className="mt-8 space-y-5">
            {c.about.body.map((p, i) => (
              <p key={i} className="max-w-3xl text-lg text-ink-2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {c.features.length > 0 && (
        <section id="funzionalita" aria-labelledby="funzionalita-title" className="wrap pt-20 md:pt-28">
          <div className="grid-12 gap-y-6">
            <div className="col-span-4 md:col-span-3" data-reveal>
              <Kicker>{t.solution.features}</Kicker>
            </div>
            <h2 id="funzionalita-title" className="sr-only">
              {t.solution.features}
            </h2>
          </div>
          <div className={`mt-8 grid gap-x-10 gap-y-14 ${c.features.length > 2 ? "lg:grid-cols-3" : c.features.length === 2 ? "md:grid-cols-2" : ""}`}>
            {c.features.map((g, gi) => (
              <div key={g.title} className="border-t border-ink pt-6" data-reveal style={{ ["--reveal-i" as string]: gi }}>
                <h3 className="t-h3">{g.title}</h3>
                {g.lede && <p className="mt-3 text-ink-2">{g.lede}</p>}
                <ol className={`mt-6 ${c.features.length === 1 ? "grid gap-x-10 sm:grid-cols-2" : ""}`}>
                  {g.items.map((item, i) => (
                    <li key={item} className="flex gap-4 border-b border-line py-3.5">
                      <span className="t-meta w-6 shrink-0 pt-0.5 text-brand-ink tabular">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      )}

      {c.diagrams && c.diagrams.length > 0 && (
        <SolutionDiagrams diagrams={c.diagrams} label={sp.schema} />
      )}

      {/* Who uses it */}
      {c.roles && (
        <section id="chi-la-usa" aria-labelledby="ruoli-title" className="mt-20 border-y border-line bg-card py-20 md:mt-28 md:py-24">
          <div className="wrap grid-12 gap-y-8">
            <div className="col-span-4 md:col-span-3" data-reveal>
              <Kicker>{t.solution.whoUses}</Kicker>
            </div>
            <div className="col-span-4 md:col-span-9">
              <h2 id="ruoli-title" className="t-h2 max-w-[20ch]" data-reveal>
                {sp.rolesTitle}
              </h2>
              <dl className="mt-10 border-t border-ink">
                {roleActors.map((a, i) =>
                  c.roles?.[a.id] ? (
                    <div key={a.id} className="grid gap-2 border-b border-line py-6 md:grid-cols-[16rem_1fr] md:gap-8" data-reveal style={{ ["--reveal-i" as string]: i }}>
                      <dt className="flex items-center gap-3 font-semibold">
                        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                        {a.name[locale]}
                      </dt>
                      <dd className="text-lg text-ink-2">{c.roles[a.id]}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Integrations */}
      {(c.integrations || s.slug === "rete-avis") && (
        <section id="integrazioni" aria-labelledby="integrazioni-title" className="wrap pt-20 md:pt-28">
          <div className="grid-12 gap-y-6">
            <div className="col-span-4 md:col-span-3" data-reveal>
              <Kicker>{t.solution.integrations}</Kicker>
            </div>
            <h2 id="integrazioni-title" className="t-h2 col-span-4 md:col-span-9" data-reveal>
              {c.integrations?.title ?? t.solution.integrations}
            </h2>
          </div>
          {c.integrations && (
            <div className="mt-12 bg-paper-2 px-4 py-12 md:px-10" data-reveal>
              <HubDiagram center={s.name} items={c.integrations.items} />
            </div>
          )}
          {s.slug === "rete-avis" && (
            <div className="mt-10 border-t border-line pt-10" data-reveal>
              <ArchitectureDiagram locale={locale} />
            </div>
          )}
        </section>
      )}

      {/* Norms */}
      {solutionNorms.length > 0 && (
        <section id="norme" aria-labelledby="norme-title" className="wrap grid-12 gap-y-6 pt-20 md:pt-28">
          <div className="col-span-4 md:col-span-3" data-reveal>
            <Kicker>{t.solution.norms}</Kicker>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h2 id="norme-title" className="sr-only">
              {t.solution.norms}
            </h2>
            <ul className="border-t border-ink">
              {solutionNorms.map((n) => (
                <li key={n.id} className="grid gap-2 border-b border-line py-6 md:grid-cols-[6rem_18rem_1fr] md:gap-8" data-reveal>
                  <span className="t-h3 font-medium tabular">{n.year}</span>
                  <span>
                    <span className="t-label block text-brand-ink">{n.ref[locale]}</span>
                    <span className="mt-1 block font-semibold">{n.subject[locale]}</span>
                  </span>
                  <span className="text-ink-2">{n.duty[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Projects & news */}
      {(solutionProjects.length > 0 || solutionNews.length > 0) && (
        <section aria-labelledby="stories-title" className="wrap grid-12 gap-y-6 pt-20 md:pt-28">
          <div className="col-span-4 md:col-span-3" data-reveal>
            <Kicker>{t.common.relatedNews}</Kicker>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h2 id="stories-title" className="sr-only">
              {t.common.relatedNews}
            </h2>
            <ul className="border-t border-ink">
              {solutionProjects.map((p) => (
                <li key={p.slug} className="group border-b border-line">
                  <Link href={href(locale, "projects", p.slug)} className="flex items-baseline justify-between gap-6 py-5">
                    <span>
                      <span className="t-label block text-ink-3">
                        {t.projects.label} · {p.year}
                      </span>
                      <span className="mt-1 block text-lg font-semibold group-hover:text-brand-ink">{p[locale].title}</span>
                    </span>
                    <ArrowRight className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
              {solutionNews.map((n) => (
                <li key={n.slug} className="group border-b border-line">
                  <Link href={href(locale, "news", n.slug)} className="flex items-baseline justify-between gap-6 py-5">
                    <span>
                      <span className="t-label block text-ink-3">
                        {t.news.label} · <time dateTime={n.date}>{formatDate(n.date, locale)}</time>
                      </span>
                      <span className="mt-1 block text-lg font-semibold group-hover:text-brand-ink">{n[locale].title}</span>
                    </span>
                    <ArrowRight className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Contextual navigation */}
      <nav aria-labelledby="next-title" className="mt-20 border-t border-line md:mt-28">
        <div className="wrap grid-12 gap-y-10 py-16 md:py-20">
          <div className="col-span-4 md:col-span-3">
            <h2 id="next-title" className="t-label text-ink-3">
              {siblings.length ? t.solution.also : t.common.relatedSolutions}
            </h2>
            {familyHref && (
              <ArrowLink href={familyHref} className="mt-4 text-[0.9375rem]">
                {family.name[locale]}
              </ArrowLink>
            )}
          </div>
          <ul className="col-span-4 grid gap-3 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
            {[...siblings, ...related].slice(0, 6).map((x) => {
              const body = (
                <>
                  <span className="font-mono text-lg font-medium group-hover:text-brand-ink">{x.name}</span>
                  <span className="t-label mt-1 block text-ink-3">{x[locale].expansion}</span>
                  <span className="mt-4 block text-[0.9375rem] leading-snug text-ink-2">{x[locale].summary}</span>
                </>
              );
              return (
                <li key={x.slug} className="rounded-2xl border border-line transition-colors hover:border-ink">
                  {x.hasPage ? (
                    <Link href={href(locale, "solutions", x.slug)} className="group block h-full rounded-2xl p-6">
                      {body}
                    </Link>
                  ) : (
                    <div className="h-full p-6">{body}</div>
                  )}
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

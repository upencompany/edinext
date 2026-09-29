import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/ecosystem/ArchitectureDiagram";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { ContactBand } from "@/components/sections/ContactBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Kicker } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { getArticle } from "@/content/news";
import { getProject, projects } from "@/content/projects";
import { getSolution } from "@/content/solutions";
import { ui } from "@/content/ui";
import { formatDate } from "@/lib/format";
import { href, isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/progetti/[slug]">) {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!isLocale(locale) || !p) return {};
  return pageMetadata({ locale, section: "projects", slug, title: p[locale].title, description: p[locale].summary, ogKicker: p[locale].client });
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/progetti/[slug]">) {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!isLocale(locale) || !p) notFound();
  const u = ui[locale];
  const t = u.projects;
  const c = p[locale];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];

  return (
    <article>
      <header className="wrap pt-8 pb-12 md:pt-12 md:pb-16">
        <Breadcrumbs
          label={u.common.breadcrumb}
          items={[
            { name: u.common.home, path: href(locale, "home") },
            { name: t.label, path: href(locale, "projects") },
            { name: c.title, path: href(locale, "projects", p.slug) },
          ]}
        />
        <div className="grid-12 mt-12 gap-y-10 md:mt-20">
          <div className="col-span-4 md:col-span-3">
            <Kicker>{t.label}</Kicker>
            <dl className="mt-8 hidden space-y-4 md:block">
              <div>
                <dt className="t-label text-ink-3">{t.client}</dt>
                <dd className="mt-1 font-medium">{c.client}</dd>
              </div>
              <div>
                <dt className="t-label text-ink-3">{t.place}</dt>
                <dd className="mt-1 font-medium">{c.place}</dd>
              </div>
              <div>
                <dt className="t-label text-ink-3">{t.year}</dt>
                <dd className="mt-1 font-medium tabular">{p.year}</dd>
              </div>
              <div>
                <dt className="t-label text-ink-3">{u.common.relatedSolutions}</dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {p.solutions.map((s) => (
                    <Link key={s} href={href(locale, "solutions", s)} className="t-meta bg-brand-tint px-2 py-1 text-brand-ink hover:bg-brand hover:text-white">
                      {getSolution(s)?.name}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h1 className="t-h1">
              <span className="line-mask">
                <span>{c.title}</span>
              </span>
            </h1>
            <p className="t-lede mt-8 max-w-3xl">{c.summary}</p>
            <p className="t-meta mt-6 text-ink-3 md:hidden">
              {c.client} · {c.place} · {p.year}
            </p>
          </div>
        </div>
      </header>

      <div className="wrap">
        <figure>
          <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[21/9] ${p.image ? "duotone" : "theme-dark"}`}>
            {p.image ? (
              <Image src={p.image.src} alt={p.image.alt[locale]} fill priority sizes="(min-width: 1440px) 1312px, 100vw" className="photo-ed object-cover" />
            ) : (
              <div className="absolute inset-0 grid place-items-center p-6" aria-hidden="true">
                <RadialDiagram locale={locale} activeApp={p.solutions[0]} className="h-full w-auto" />
              </div>
            )}
          </div>
          {p.image?.credit && (
            <figcaption className="t-meta mt-3 text-ink-3">
              {u.common.photo}: {p.image.credit}
            </figcaption>
          )}
        </figure>

        <div className="mt-12 md:mt-20">
          <Block label={t.context} index="01">
            {c.context.map((x, i) => (
              <p key={i} className="text-lg text-ink-2">
                {x}
              </p>
            ))}
          </Block>
          <Block label={t.solution} index="02">
            {c.solution.map((x, i) => (
              <p key={i} className="text-lg text-ink-2">
                {x}
              </p>
            ))}
            {p.slug === "reteavis-avis-puglia" && (
              <div className="pt-6">
                <ArchitectureDiagram locale={locale} />
              </div>
            )}
          </Block>
          <Block label={t.actors} index="03">
            <dl className="border-t border-ink">
              {c.actors.map((a) => (
                <div key={a.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="flex items-center gap-3 font-semibold">
                    <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent" />
                    {a.name}
                  </dt>
                  <dd className="text-ink-2">{a.role}</dd>
                </div>
              ))}
            </dl>
          </Block>
          <Block label={t.outcome} index="04">
            {c.outcome.map((x, i) => (
              <p key={i} className="text-xl font-medium leading-snug tracking-tight">
                {x}
              </p>
            ))}
            {c.quote && (
              <figure className="border-l-2 border-brand pl-6 pt-2">
                <blockquote className="text-lg text-ink-2">“{c.quote.text}”</blockquote>
                <figcaption className="t-meta mt-3 text-ink-3">— {c.quote.cite}</figcaption>
              </figure>
            )}
          </Block>
          <Block label={t.sources} index="05">
            <ul className="border-t border-ink">
              {p.news.map((slug) => {
                const n = getArticle(slug);
                if (!n) return null;
                return (
                  <li key={slug} className="group border-b border-line">
                    <Link href={href(locale, "news", slug)} className="flex items-baseline justify-between gap-6 py-5">
                      <span>
                        <span className="t-meta block text-ink-3">
                          <time dateTime={n.date}>{formatDate(n.date, locale)}</time>
                          {n.source && ` · ${n.source.name}`}
                        </span>
                        <span className="mt-1 block font-semibold group-hover:text-brand-ink">{n[locale].title}</span>
                      </span>
                      <ArrowRight className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Block>
        </div>
      </div>

      <nav aria-label={u.labels.nextProject} className="mt-8 border-t border-line">
        <Link href={href(locale, "projects", next.slug)} className="group wrap flex items-center justify-between gap-8 py-14">
          <span>
            <span className="t-label block text-ink-3">{u.labels.nextProject}</span>
            <span className="t-h3 mt-2 block group-hover:text-brand-ink">{next[locale].title}</span>
          </span>
          <ArrowRight size={28} className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-2 group-hover:text-brand-ink" />
        </Link>
      </nav>

      <ContactBand locale={locale} />
    </article>
  );
}

function Block({ label, index, children }: { label: string; index: string; children: React.ReactNode }) {
  return (
    <section className="grid-12 gap-y-4 border-t border-line py-12 md:py-16" data-reveal>
      <h2 className="col-span-4 md:col-span-3">
        <Kicker index={index}>{label}</Kicker>
      </h2>
      <div className="col-span-4 space-y-5 md:col-span-8">{children}</div>
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { EcosystemExplorer } from "@/components/ecosystem/EcosystemExplorer";
import { explorerProps } from "@/components/ecosystem/explorer-data";
import { FlowSignals } from "@/components/ecosystem/FlowSignals";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { AreasIndex } from "@/components/sections/AreasIndex";
import { ContactBand } from "@/components/sections/ContactBand";
import { NewsList } from "@/components/sections/NewsList";
import { NormTimeline } from "@/components/sections/NormTimeline";
import { QualityStrip } from "@/components/sections/QualityStrip";
import { ArrowLink, ButtonLink, Kicker, SectionHead } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { news } from "@/content/news";
import { home, servicesPage } from "@/content/pages";
import { projects } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = home[locale];
  return pageMetadata({ locale, section: "home", title: t.metaTitle, description: t.metaDescription, absoluteTitle: true });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = home[locale];
  const services = servicesPage[locale].services;
  const nolProject = projects.find((p) => p.slug === "nol-cantieri-taranto")!;
  const solutionsCount = solutions.length;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-title" className="wrap pt-8 md:pt-12">
        <div className="grid-12 items-center gap-y-12">
          <div className="col-span-4 md:col-span-12 lg:col-span-7">
            <Kicker>{t.eyebrow}</Kicker>
            <h1 id="hero-title" className="t-display mt-8">
              {t.titleLines.map((line, i) => (
                <span key={line} className="line-mask" style={{ ["--i" as string]: i }}>
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <p className="t-lede mt-10 max-w-2xl">{t.lede}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={href(locale, "solutions")}>{t.ctaPrimary}</ButtonLink>
              <ButtonLink href={href(locale, "contact")} variant="outline">
                {t.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
          <figure className="theme-dark col-span-4 rounded-[1.75rem] p-5 sm:p-8 md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-8">
            <div className="flex items-center justify-between">
              <span className="t-label text-ink-3">{t.ecosystem.label}</span>
              <span className="t-label flex items-center gap-2 text-accent">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                {solutionsCount} {ui[locale].common.applications}
              </span>
            </div>
            <div className="relative mt-2">
              <RadialDiagram locale={locale} animate />
              <FlowSignals />
            </div>
            <figcaption className="t-meta mx-auto max-w-sm text-center text-ink-3">{t.figureCaption}</figcaption>
          </figure>
        </div>

        <dl className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {t.facts.map((f, i) => (
            <div
              key={f.label}
              className="flex items-baseline gap-4 border-b border-line py-6 sm:pr-6 lg:flex-col lg:gap-2 lg:border-b-0 lg:border-r lg:py-8"
              data-reveal
              style={{ ["--reveal-i" as string]: i }}
            >
              <dt className="order-2 text-[0.9375rem] leading-snug text-ink-2 lg:order-2">{f.label}</dt>
              <dd className="order-1 t-h2 shrink-0 font-medium tabular lg:order-1">{f.value}</dd>
            </div>
          ))}
          <div className="flex items-baseline gap-4 py-6 lg:flex-col lg:gap-2 lg:py-8 lg:pl-6" data-reveal style={{ ["--reveal-i" as string]: 3 }}>
            <dt className="order-2 text-[0.9375rem] leading-snug text-ink-2">
              {company.address.street}, {company.address.postalCode}
            </dt>
            <dd className="order-1 t-h2 font-medium">{company.address.city}</dd>
          </div>
        </dl>
      </section>

      {/* ── 01 · Company ─────────────────────────────────────────────── */}
      <section aria-labelledby="about-title" className="section-y">
        <div className="wrap">
          <div className="grid-12 gap-y-10">
            <div className="col-span-4 md:col-span-3" data-reveal>
              <Kicker index="01">{t.about.label}</Kicker>
            </div>
            <div className="col-span-4 md:col-span-9">
              <h2 id="about-title" className="t-h2 max-w-[22ch]" data-reveal>
                {t.about.title}
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {t.about.body.map((p, i) => (
                  <p key={i} className="text-lg text-ink-2" data-reveal style={{ ["--reveal-i" as string]: i + 1 }}>
                    {p}
                  </p>
                ))}
              </div>
              <ArrowLink href={href(locale, "company")} className="mt-10">
                {t.about.link}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · Ecosystem ───────────────────────────────────────────── */}
      <section aria-labelledby="eco-title" className="section-y">
        <div className="wrap">
          <SectionHead index="02" label={t.ecosystem.label} title={t.ecosystem.title} lede={t.ecosystem.lede} id="eco-title" />
          <div className="mt-14 md:mt-20">
            <EcosystemExplorer {...explorerProps(locale)} compact />
          </div>
          <div className="mt-12 flex justify-end">
            <ArrowLink href={href(locale, "solutions")}>{t.ecosystem.link}</ArrowLink>
          </div>
        </div>
      </section>

      {/* ── 03 · Areas ───────────────────────────────────────────────── */}
      <section aria-labelledby="areas-title" className="section-y">
        <div className="wrap">
          <SectionHead index="03" label={t.areas.label} title={t.areas.title} lede={t.areas.lede} id="areas-title" />
          <div className="mt-14 md:mt-20">
            <AreasIndex locale={locale} />
          </div>
        </div>
      </section>

      {/* ── 04 · Regulation ──────────────────────────────────────────── */}
      <section aria-labelledby="norms-title" className="section-y bg-paper-2">
        <div className="wrap">
          <SectionHead index="04" label={t.norms.label} title={t.norms.title} lede={t.norms.lede} id="norms-title" />
          <div className="mt-14 md:mt-16">
            <NormTimeline locale={locale} />
          </div>
        </div>
      </section>

      {/* ── 05 · Services ────────────────────────────────────────────── */}
      <section aria-labelledby="services-title" className="theme-dark section-y">
        <div className="wrap">
          <SectionHead index="05" label={t.services.label} title={t.services.title} lede={t.services.lede} id="services-title" tone="dark" />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.id} className="bg-paper p-6 pb-10 transition-colors hover:bg-card md:p-8 md:pb-14" data-reveal style={{ ["--reveal-i" as string]: i }}>
                <p className="t-label text-accent tabular">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="t-h3 mt-6">{s.title}</h3>
                <p className="mt-3 text-ink-2">{s.summary}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <ArrowLink href={href(locale, "services")} tone="dark">
              {t.services.link}
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* ── 06 · Projects ────────────────────────────────────────────── */}
      <section aria-labelledby="projects-title" className="section-y">
        <div className="wrap">
          <div className="grid-12 gap-y-6">
            <div className="col-span-4 md:col-span-3" data-reveal>
              <Kicker index="06">{t.projects.label}</Kicker>
            </div>
            <h2 id="projects-title" className="t-h2 col-span-4 md:col-span-9" data-reveal>
              {t.projects.title}
            </h2>
          </div>
          <div className="grid-12 mt-14 gap-y-14">
            {nolProject[locale].quote && (
              <figure className="col-span-4 md:col-span-7" data-reveal>
                <span aria-hidden="true" className="block font-mono text-6xl leading-none text-brand">“</span>
                <blockquote className="mt-2 text-[clamp(1.4rem,1.1rem+1.2vw,2.25rem)] font-medium leading-[1.25] tracking-tight">
                  {nolProject[locale].quote.text}
                </blockquote>
                <figcaption className="t-meta mt-6 text-ink-3">— {nolProject[locale].quote.cite}</figcaption>
                <ArrowLink href={href(locale, "projects", nolProject.slug)} className="mt-8">
                  {nolProject[locale].title}
                </ArrowLink>
              </figure>
            )}
            <ul className="col-span-4 border-t border-ink md:col-span-4 md:col-start-9">
              {projects.map((p, i) => (
                <li key={p.slug} className="group relative border-b border-line" data-reveal style={{ ["--reveal-i" as string]: i }}>
                  <Link href={href(locale, "projects", p.slug)} className="block py-6 pr-8">
                    <span className="t-meta flex gap-3 text-ink-3 tabular">
                      <span>{p.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p[locale].place}</span>
                    </span>
                    <span className="mt-2 block text-lg font-semibold leading-snug tracking-tight group-hover:text-brand-ink">
                      {p[locale].title}
                    </span>
                    <ArrowRight size={16} className="absolute right-0 top-7 text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-brand-ink" />
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <ArrowLink href={href(locale, "projects")}>{t.projects.link}</ArrowLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 07 · Quality ─────────────────────────────────────────────── */}
      <section aria-labelledby="quality-title" className="pb-[clamp(4.5rem,3rem+6vw,9rem)]">
        <div className="wrap">
          <SectionHead index="07" label={t.quality.label} title={t.quality.title} id="quality-title" />
          <div className="mt-12 border-y border-line">
            <QualityStrip locale={locale} />
          </div>
        </div>
      </section>

      {/* ── 08 · News ────────────────────────────────────────────────── */}
      <section aria-labelledby="news-title" className="section-y border-t border-line">
        <div className="wrap">
          <SectionHead
            index="08"
            label={t.news.label}
            title={t.news.title}
            id="news-title"
            aside={<ArrowLink href={href(locale, "news")}>{t.news.link}</ArrowLink>}
          />
          <div className="mt-12">
            <NewsList items={news.slice(0, 3)} locale={locale} />
          </div>
        </div>
      </section>

      <ContactBand locale={locale} />
    </>
  );
}

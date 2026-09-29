import { notFound } from "next/navigation";
import { ContactBand } from "@/components/sections/ContactBand";
import { QualityStrip } from "@/components/sections/QualityStrip";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLink, Kicker, PageIntro, SectionHead } from "@/components/ui/Editorial";
import { company, mapsUrl } from "@/content/company";
import { companyPage, home } from "@/content/pages";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/azienda">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = companyPage[locale];
  return pageMetadata({ locale, section: "company", title: t.metaTitle, description: t.metaDescription, ogKicker: t.eyebrow });
}

export default async function CompanyPage({ params }: PageProps<"/[locale]/azienda">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = companyPage[locale];
  const u = ui[locale];
  const facts = home[locale].facts;

  return (
    <>
      <PageIntro
        label={t.eyebrow}
        title={t.title}
        lede={t.lede}
        breadcrumbs={
          <Breadcrumbs
            label={u.common.breadcrumb}
            items={[
              { name: u.common.home, path: href(locale, "home") },
              { name: u.nav.companyOverview, path: href(locale, "company") },
            ]}
          />
        }
      />

      {/* Key facts as a typographic ledger */}
      <section aria-label={u.labels.atAGlance} className="wrap">
        <dl className="grid border-y border-ink md:grid-cols-3">
          {facts.map((f, i) => (
            <div key={f.label} className="flex flex-col-reverse border-b border-line py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0" data-reveal style={{ ["--reveal-i" as string]: i }}>
              <dt className="mt-3 max-w-[22ch] text-ink-2">{f.label}</dt>
              <dd className="t-display font-medium tabular">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Mission */}
      <section aria-labelledby="mission-title" className="section-y">
        <div className="wrap">
          <SectionHead index="01" label={t.mission.label} title={t.mission.title} id="mission-title" />
          <ol className="mt-16 grid gap-px bg-line md:grid-cols-5">
            {t.mission.items.map((m, i) => (
              <li key={m.title} className="bg-paper py-6 md:px-5 md:py-8 md:first:pl-0" data-reveal style={{ ["--reveal-i" as string]: i }}>
                <p className="t-label text-brand-ink tabular">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{m.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-ink-2">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Strengths */}
      <section aria-labelledby="strengths-title" className="theme-dark section-y">
        <div className="wrap grid-12 gap-y-12">
          <div className="col-span-4 md:col-span-3" data-reveal>
            <Kicker index="02" tone="dark">
              {t.strengths.label}
            </Kicker>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h2 id="strengths-title" className="sr-only">
              {t.strengths.label}
            </h2>
            <ul className="divide-y divide-line border-y border-line">
              {t.strengths.items.map((s, i) => (
                <li key={s.title} className="grid gap-4 py-10 md:grid-cols-[14rem_1fr] md:gap-10" data-reveal style={{ ["--reveal-i" as string]: i }}>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="text-lg text-ink-2">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technical principles */}
      <section aria-labelledby="principles-title" className="section-y">
        <div className="wrap">
          <SectionHead index="03" label={t.principles.label} title={t.principles.title} lede={t.principles.lede} id="principles-title" />
          <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.principles.items.map((p, i) => (
              <div key={p.title} className="border-t border-ink pt-5" data-reveal style={{ ["--reveal-i" as string]: i }}>
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-ink-2">{p.body}</p>
              </div>
            ))}
          </div>
          <ArrowLink href={href(locale, "services")} className="mt-12">
            {u.nav.services}
          </ArrowLink>
        </div>
      </section>

      {/* Quality */}
      <section aria-labelledby="quality-title" className="pb-[clamp(4.5rem,3rem+6vw,9rem)]">
        <div className="wrap">
          <SectionHead index="04" label={home[locale].quality.label} title={home[locale].quality.title} id="quality-title" />
          <div className="mt-12 border-y border-line">
            <QualityStrip locale={locale} />
          </div>
        </div>
      </section>

      {/* Place */}
      <section aria-labelledby="place-title" className="border-t border-line bg-card">
        <div className="wrap grid-12 gap-y-8 py-20 md:py-28">
          <div className="col-span-4 md:col-span-3" data-reveal>
            <Kicker index="05">{t.place.label}</Kicker>
          </div>
          <div className="col-span-4 md:col-span-5" data-reveal>
            <h2 id="place-title" className="t-display">
              {t.place.title}
            </h2>
            <p className="t-lede mt-6">{t.place.body}</p>
          </div>
          <address className="col-span-4 not-italic md:col-span-3 md:col-start-10 md:self-end" data-reveal>
            <p className="font-semibold">{company.legalName}</p>
            <p className="mt-1 text-ink-2">
              {company.address.street}
              <br />
              {company.address.postalCode} {company.address.city} ({company.address.province})
            </p>
            <ArrowLink href={mapsUrl} external className="mt-4 text-[0.9375rem]">
              Google Maps
            </ArrowLink>
            <p className="mt-6">
              <ArrowLink href={href(locale, "careers")}>{u.nav.careers}</ArrowLink>
            </p>
          </address>
        </div>
      </section>

      <ContactBand locale={locale} />
    </>
  );
}

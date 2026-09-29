import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/ecosystem/ArchitectureDiagram";
import { ContactBand } from "@/components/sections/ContactBand";
import { ServiceCycle } from "@/components/sections/ServiceCycle";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLink, PageIntro, SectionHead } from "@/components/ui/Editorial";
import { servicesPage } from "@/content/pages";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/servizi">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = servicesPage[locale];
  return pageMetadata({ locale, section: "services", title: t.metaTitle, description: t.metaDescription, ogKicker: t.eyebrow });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/servizi">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = servicesPage[locale];
  const u = ui[locale];

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
              { name: u.nav.services, path: href(locale, "services") },
            ]}
          />
        }
      />

      <section aria-labelledby="cycle-title" className="border-t border-line pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="wrap">
          <SectionHead index="01" label={t.cycleLabel} title={t.cycleTitle} id="cycle-title" />
          <div className="mt-12 md:mt-16">
            <ServiceCycle steps={t.services} label={t.cycleLabel} />
          </div>
        </div>
      </section>

      <section aria-labelledby="tech-title" className="section-y border-t border-line bg-card">
        <div className="wrap">
          <SectionHead index="02" label={t.tech.label} title={t.tech.title} lede={t.tech.lede} id="tech-title" />
          <div className="mt-16 grid gap-px border-y border-ink bg-line md:grid-cols-4">
            {t.tech.layers.map((layer, i) => (
              <div key={layer.title} className="bg-card py-6 md:px-6 md:py-8 md:first:pl-0" data-reveal style={{ ["--reveal-i" as string]: i }}>
                <p className="t-label text-brand-ink tabular">
                  {String(i + 1).padStart(2, "0")} · {layer.title}
                </p>
                <ul className="mt-5 space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 grid-12 gap-y-8">
            <p className="t-label col-span-4 text-ink-3 md:col-span-3">{t.tech.note}</p>
            <div className="col-span-4 md:col-span-9" data-reveal>
              <ArchitectureDiagram locale={locale} />
              <ArrowLink href={href(locale, "solutions", "rete-avis")} className="mt-8">
                ReteAVIS
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <ContactBand locale={locale} />
    </>
  );
}

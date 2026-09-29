import { notFound } from "next/navigation";
import { ContactForm } from "@/components/sections/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLink, PageIntro } from "@/components/ui/Editorial";
import { company, mapsUrl } from "@/content/company";
import { contactPage } from "@/content/pages";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/contatti">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = contactPage[locale];
  return pageMetadata({ locale, section: "contact", title: t.metaTitle, description: t.metaDescription, ogKicker: t.eyebrow });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contatti">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = contactPage[locale];
  const u = ui[locale];
  const ch = t.channels;

  const channels = [
    { label: ch.email, value: company.email, href: `mailto:${company.email}` },
    { label: ch.phone, value: company.phone.display, href: `tel:${company.phone.e164}` },
    { label: ch.pec, value: company.pec, href: `mailto:${company.pec}` },
    { label: ch.hours, value: company.hours[locale] },
  ];

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
              { name: t.eyebrow, path: href(locale, "contact") },
            ]}
          />
        }
      />

      <div className="wrap grid-12 gap-y-16 pb-24 md:pb-32">
        <section aria-labelledby="channels-title" className="col-span-4 md:col-span-5 lg:col-span-4">
          <h2 id="channels-title" className="sr-only">
            {t.eyebrow}
          </h2>
          <dl className="border-t border-ink">
            {channels.map((c) => (
              <div key={c.label} className="border-b border-line py-5">
                <dt className="t-label text-ink-3">{c.label}</dt>
                <dd className="mt-1.5 text-xl font-medium tracking-tight">
                  {c.href ? (
                    <a href={c.href} className="link-u">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
            <div className="py-5">
              <dt className="t-label text-ink-3">{ch.address}</dt>
              <dd className="mt-1.5 text-xl font-medium leading-snug tracking-tight">
                <address className="not-italic">
                  {company.legalName}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.postalCode} {company.address.city} ({company.address.province})
                </address>
                <ArrowLink href={mapsUrl} external className="mt-4 text-base">
                  {ch.directions}
                </ArrowLink>
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="form-title" className="col-span-4 md:col-span-7 lg:col-span-7 lg:col-start-6">
          <h2 id="form-title" className="t-h2">
            {t.form.title}
          </h2>
          <div className="mt-10">
            <ContactForm locale={locale} copy={t.form} privacyHref={href(locale, "privacy")} email={company.email} />
          </div>
        </section>
      </div>
    </>
  );
}

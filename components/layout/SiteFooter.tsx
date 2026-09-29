import Link from "next/link";
import { company, mapsUrl } from "@/content/company";
import { families } from "@/content/ecosystem";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const year = new Date().getFullYear();

  const sections = [
    { label: t.nav.companyOverview, href: href(locale, "company") },
    { label: t.nav.solutions, href: href(locale, "solutions") },
    { label: t.nav.services, href: href(locale, "services") },
    { label: t.nav.projects, href: href(locale, "projects") },
    { label: t.nav.news, href: href(locale, "news") },
    { label: t.nav.careers, href: href(locale, "careers") },
    { label: t.nav.contact, href: href(locale, "contact") },
  ];
  const legal = [
    { label: t.nav.certifications, href: href(locale, "compliance") },
    { label: t.nav.legality, href: href(locale, "compliance", undefined, "rating-di-legalita") },
    { label: t.nav.privacy, href: href(locale, "privacy") },
  ];

  return (
    <footer className="theme-dark" id="footer">
      <div className="wrap pt-20 pb-10 md:pt-28">
        <div className="grid-12 gap-y-14">
          <div className="col-span-4 md:col-span-5">
            <Logo tone="reverse" className="h-8 w-auto" sizes="140px" />
            <p className="mt-6 max-w-sm text-lg leading-snug text-ink-2">{t.footer.tagline}</p>
            <p className="t-label mt-10 text-accent">Innovare × Crescere</p>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h2 className="t-label text-ink-3">{t.footer.sections}</h2>
            <ul className="mt-5 space-y-2.5">
              {sections.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-u text-ink hover:text-brand-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h2 className="t-label text-ink-3">{t.footer.solutions}</h2>
            <ul className="mt-5 space-y-2.5">
              {families
                .filter((f) => f.slug)
                .map((f) => (
                  <li key={f.id}>
                    <Link href={href(locale, "solutions", f.slug!)} className="link-u text-ink hover:text-brand-ink">
                      {f.name[locale]}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href={href(locale, "solutions", "rete-avis")} className="link-u text-ink hover:text-brand-ink">
                  ReteAVIS
                </Link>
              </li>
            </ul>
          </div>

          <address className="col-span-4 not-italic md:col-span-3">
            <h2 className="t-label text-ink-3">{t.footer.contacts}</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a href={`mailto:${company.email}`} className="link-u text-lg">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.e164}`} className="link-u text-lg tabular">
                  {company.phone.display}
                </a>
              </li>
              <li className="pt-2 text-ink-2">
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city} ({company.address.province})
              </li>
              <li className="text-ink-2">{company.hours[locale]}</li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                >
                  <span className="link-u">Google Maps</span>
                  <ArrowUpRight size={14} />
                  <span className="sr-only">{t.labels.newTab}</span>
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 text-sm text-ink-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName} — {t.footer.registered}: {company.address.street}, {company.address.postalCode}{" "}
            {company.address.city} — {t.footer.vat} {company.vat}. {t.footer.rights}
          </p>
          <nav aria-label={t.footer.legal}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-u hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

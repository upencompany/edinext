import { notFound } from "next/navigation";
import { ContactBand } from "@/components/sections/ContactBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Kicker, PageIntro } from "@/components/ui/Editorial";
import { Download } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { compliancePage } from "@/content/pages";
import { ui } from "@/content/ui";
import { formatDate } from "@/lib/format";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/compliance">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = compliancePage[locale];
  return pageMetadata({ locale, section: "compliance", title: t.metaTitle, description: t.metaDescription, ogKicker: t.eyebrow });
}

function DocLink({ href: url, label }: { href: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="group mt-8 inline-flex items-center gap-4 rounded-full border border-ink/80 px-6 py-3.5 font-medium transition-colors hover:bg-ink hover:text-paper"
    >
      <Download />
      <span>{label}</span>
      <span className="t-meta text-ink-3 group-hover:text-paper/70">PDF</span>
    </a>
  );
}

export default async function CompliancePage({ params }: PageProps<"/[locale]/compliance">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = compliancePage[locale];
  const u = ui[locale];
  const cert = company.certifications;

  const blocks = [
    {
      id: "iso-9001",
      index: "01",
      title: t.iso.title,
      subtitle: t.iso.subtitle,
      body: t.iso.body,
      meta: (
        <dl className="t-meta mt-6 text-ink-3">
          <dt className="inline">{t.iso.reference}: </dt>
          <dd className="inline text-ink">{cert.iso9001.reference}</dd>
        </dl>
      ),
      doc: { href: cert.iso9001.document, label: t.iso.download },
    },
    {
      id: "pdr-125",
      index: "02",
      title: t.pdr.title,
      subtitle: t.pdr.subtitle,
      body: t.pdr.body,
      doc: { href: cert.pdr125.document, label: t.pdr.download },
    },
    {
      id: "rating-di-legalita",
      index: "03",
      title: t.legality.title,
      subtitle: t.legality.subtitle,
      body: t.legality.body,
      meta: (
        <dl className="mt-6 grid max-w-md grid-cols-2 border-y border-line">
          <div className="py-4">
            <dt className="t-label text-ink-3">{t.legality.score}</dt>
            <dd className="mt-1 text-2xl text-brand-ink">
              <span aria-hidden="true">{"★".repeat(cert.legality.score)}</span>
              <span className="sr-only">{cert.legality.score} / 3</span>
            </dd>
          </div>
          <div className="py-4">
            <dt className="t-label text-ink-3">{t.legality.awarded}</dt>
            <dd className="mt-1 font-medium">
              <time dateTime={cert.legality.date}>{formatDate(cert.legality.date, locale)}</time>
            </dd>
          </div>
        </dl>
      ),
      doc: { href: cert.legality.document, label: t.legality.download },
    },
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
              { name: u.nav.compliance, path: href(locale, "compliance") },
            ]}
          />
        }
      >
        <nav aria-label={t.documents} className="mt-10 flex flex-wrap gap-2">
          {blocks.map((b) => (
            <a key={b.id} href={`#${b.id}`} className="t-meta rounded-full border border-line px-4 py-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper">
              <span className="text-brand-ink">{b.index}</span> {b.title}
            </a>
          ))}
        </nav>
      </PageIntro>

      <div className="wrap pb-24 md:pb-32">
        {blocks.map((b) => (
          <section key={b.id} id={b.id} aria-labelledby={`${b.id}-title`} className="grid-12 gap-y-6 border-t border-ink py-14 md:py-20" data-reveal>
            <div className="col-span-4 md:col-span-3">
              <Kicker index={b.index}>{b.subtitle}</Kicker>
            </div>
            <div className="col-span-4 md:col-span-4">
              <h2 id={`${b.id}-title`} className="t-h2 font-mono !tracking-tight">
                {b.title}
              </h2>
            </div>
            <div className="col-span-4 md:col-span-5">
              <div className="space-y-4 text-lg text-ink-2">
                {b.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {b.meta}
              <DocLink href={b.doc.href} label={b.doc.label} />
            </div>
          </section>
        ))}
        <p className="t-meta border-t border-line pt-6 text-ink-3">
          <a className="link-inline" href={href(locale, "privacy")}>
            {u.nav.privacy}
          </a>
        </p>
      </div>

      <ContactBand locale={locale} />
    </>
  );
}

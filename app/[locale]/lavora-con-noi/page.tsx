import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/sections/ContactBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Kicker, PageIntro } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { company } from "@/content/company";
import { news } from "@/content/news";
import { careersPage } from "@/content/pages";
import { ui } from "@/content/ui";
import { formatDate } from "@/lib/format";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/lavora-con-noi">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = careersPage[locale];
  return pageMetadata({ locale, section: "careers", title: t.metaTitle, description: t.metaDescription, ogKicker: t.eyebrow });
}

export default async function CareersPage({ params }: PageProps<"/[locale]/lavora-con-noi">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = careersPage[locale];
  const u = ui[locale];
  const jobs = news.filter((n) => n.kind === "job");

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
              { name: u.nav.company, path: href(locale, "company") },
              { name: t.eyebrow, path: href(locale, "careers") },
            ]}
          />
        }
      />

      <section aria-labelledby="open-title" className="wrap grid-12 gap-y-8 pb-20 md:pb-28">
        <div className="col-span-4 md:col-span-3">
          <h2 id="open-title">
            <Kicker index={String(jobs.length).padStart(2, "0")}>{t.open}</Kicker>
          </h2>
        </div>
        <div className="col-span-4 md:col-span-9">
          {jobs.length === 0 ? (
            <p className="t-lede">{t.none}</p>
          ) : (
            <ul className="border-t border-ink">
              {jobs.map((j) => {
                const facts = j[locale].body.find((b) => b.type === "facts");
                return (
                  <li key={j.slug} className="group relative border-b border-line">
                    <div className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-end md:py-10">
                      <div>
                        <p className="t-meta text-ink-3">
                          <time dateTime={j.date}>{formatDate(j.date, locale)}</time>
                        </p>
                        <h3 className="t-h2 mt-3">
                          <Link href={href(locale, "news", j.slug)} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-ink">
                            {j[locale].title}
                          </Link>
                        </h3>
                        <p className="mt-4 max-w-2xl text-lg text-ink-2">{j[locale].excerpt}</p>
                        {facts?.type === "facts" && (
                          <ul className="t-meta mt-5 flex flex-wrap gap-2">
                            {facts.items.map((f) => (
                              <li key={f.label} className="border border-line px-2 py-1">
                                {f.label}: <span className="text-ink">{f.value}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <span className="flex items-center gap-2 font-medium text-brand-ink">
                        {t.details}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-16 grid gap-6 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="t-h3">{t.spontaneous.title}</h2>
              <p className="mt-2 text-ink-2">{t.spontaneous.body}</p>
            </div>
            <a href={`mailto:${company.email}`} className="link-inline text-lg font-medium">
              {company.email}
            </a>
          </div>
        </div>
      </section>

      <ContactBand locale={locale} />
    </>
  );
}

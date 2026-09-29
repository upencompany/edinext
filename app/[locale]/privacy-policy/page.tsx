import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/Editorial";
import { privacyPage } from "@/content/pages";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = privacyPage[locale];
  return pageMetadata({ locale, section: "privacy", title: t.metaTitle, description: t.metaDescription });
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = privacyPage[locale];
  const u = ui[locale];

  return (
    <>
      <PageIntro
        label={u.nav.privacy}
        title={t.title}
        lede={t.updated}
        breadcrumbs={
          <Breadcrumbs
            label={u.common.breadcrumb}
            items={[
              { name: u.common.home, path: href(locale, "home") },
              { name: u.nav.privacy, path: href(locale, "privacy") },
            ]}
          />
        }
      />
      <div className="wrap grid-12 pb-24 md:pb-32">
        <nav aria-label={u.solution.index} className="col-span-4 mb-10 md:col-span-3 md:mb-0">
          <ol className="t-meta space-y-2 md:sticky md:top-[calc(var(--header-h)+2rem)]">
            {t.sections.map((s, i) => (
              <li key={s.title}>
                <a href={`#s-${i + 1}`} className="flex gap-3 text-ink-2 hover:text-brand-ink">
                  <span className="text-ink-3 tabular">{String(i + 1).padStart(2, "0")}</span>
                  <span className="link-u">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="prose-ed col-span-4 text-lg text-ink-2 md:col-span-8 md:col-start-5 [&_h2]:mt-0 [&_h2]:text-ink">
          {t.note && <p className="border-l-2 border-brand pl-4 text-base">{t.note}</p>}
          {t.sections.map((s, i) => (
            <section key={s.title} id={`s-${i + 1}`} className="border-t border-line pt-8 first:border-t-0 first:pt-0 [&+section]:mt-10">
              <h2>{s.title}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-4">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

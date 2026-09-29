import { notFound } from "next/navigation";
import { ContactBand } from "@/components/sections/ContactBand";
import { NewsList } from "@/components/sections/NewsList";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/Editorial";
import { news } from "@/content/news";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = ui[locale].news;
  return pageMetadata({
    locale,
    section: "news",
    title: ui[locale].meta.newsTitle,
    description: t.lede,
    ogKicker: t.label,
  });
}

export default async function NewsPage({ params }: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const u = ui[locale];

  // Group by year for an archive-like reading.
  const years = Array.from(new Set(news.map((n) => n.date.slice(0, 4))));

  return (
    <>
      <PageIntro
        label={u.news.label}
        title={u.news.title}
        lede={u.news.lede}
        breadcrumbs={
          <Breadcrumbs
            label={u.common.breadcrumb}
            items={[
              { name: u.common.home, path: href(locale, "home") },
              { name: u.news.label, path: href(locale, "news") },
            ]}
          />
        }
      />
      <div className="wrap space-y-16 pb-24 md:pb-32">
        {years.map((y) => (
          <section key={y} aria-labelledby={`y-${y}`} className="grid-12 gap-y-4">
            <h2 id={`y-${y}`} className="t-h2 col-span-4 font-medium tabular text-ink-3 md:col-span-2">
              {y}
            </h2>
            <div className="col-span-4 md:col-span-10">
              <NewsList items={news.filter((n) => n.date.startsWith(y))} locale={locale} />
            </div>
          </section>
        ))}
      </div>
      <ContactBand locale={locale} />
    </>
  );
}

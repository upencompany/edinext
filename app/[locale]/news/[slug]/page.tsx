import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/sections/ContactBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLink, Kicker } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { company } from "@/content/company";
import { getArticle, news } from "@/content/news";
import { getSolution } from "@/content/solutions";
import type { ArticleBlock } from "@/content/types";
import { ui } from "@/content/ui";
import { formatDate } from "@/lib/format";
import { href, isLocale, locales } from "@/lib/i18n";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { organizationId } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => news.map((n) => ({ locale, slug: n.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/news/[slug]">) {
  const { locale, slug } = await params;
  const n = getArticle(slug);
  if (!isLocale(locale) || !n) return {};
  return pageMetadata({
    locale,
    section: "news",
    slug,
    title: n[locale].metaTitle ?? n[locale].title,
    description: n[locale].excerpt,
    type: "article",
    publishedTime: n.date,
    ogKicker: n[locale].category,
  });
}

function blockText(b: ArticleBlock): string {
  switch (b.type) {
    case "list":
      return b.items.join("; ");
    case "facts":
      return b.items.map((i) => `${i.label}: ${i.value}`).join("; ");
    default:
      return b.text;
  }
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="!my-10 border-l-2 border-brand pl-6">
          <blockquote className="text-[1.35rem] font-medium leading-snug tracking-tight text-ink">“{block.text}”</blockquote>
          <figcaption className="t-meta mt-3 text-ink-3">— {block.cite}</figcaption>
        </figure>
      );
    case "facts":
      return (
        <dl className="!my-8 grid grid-cols-2 border-y border-ink">
          {block.items.map((f) => (
            <div key={f.label} className="py-4 pr-4">
              <dt className="t-label text-ink-3">{f.label}</dt>
              <dd className="mt-1 text-lg font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default async function ArticlePage({ params }: PageProps<"/[locale]/news/[slug]">) {
  const { locale, slug } = await params;
  const n = getArticle(slug);
  if (!isLocale(locale) || !n) notFound();
  const u = ui[locale];
  const c = n[locale];
  const others = news.filter((x) => x.slug !== n.slug).slice(0, 3);
  const url = absoluteUrl(href(locale, "news", n.slug));

  const schema =
    n.kind === "job"
      ? {
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: c.title,
          description: c.body.map(blockText).join("\n"),
          datePosted: n.date,
          employmentType: "FULL_TIME",
          hiringOrganization: { "@id": organizationId, "@type": "Organization", name: company.legalName, sameAs: absoluteUrl("/") },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address.street,
              addressLocality: company.address.city,
              postalCode: company.address.postalCode,
              addressRegion: company.address.province,
              addressCountry: company.address.country,
            },
          },
          url,
        }
      : {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: c.title,
          description: c.excerpt,
          datePublished: n.date,
          inLanguage: locale,
          mainEntityOfPage: url,
          publisher: { "@id": organizationId },
          author: { "@id": organizationId },
          ...(n.image ? { image: absoluteUrl(n.image.src) } : {}),
        };

  return (
    <article>
      <JsonLd data={schema} />
      <header className="wrap pt-8 pb-12 md:pt-12 md:pb-16">
        <Breadcrumbs
          label={u.common.breadcrumb}
          items={[
            { name: u.common.home, path: href(locale, "home") },
            { name: u.news.label, path: href(locale, "news") },
            { name: c.title, path: href(locale, "news", n.slug) },
          ]}
        />
        <div className="grid-12 mt-12 gap-y-8 md:mt-20">
          <div className="col-span-4 md:col-span-3">
            <Kicker>{c.category}</Kicker>
            <p className="t-meta mt-4 text-ink-3">
              {u.common.published} <time dateTime={n.date}>{formatDate(n.date, locale)}</time>
            </p>
            {n.source && (
              <p className="t-meta mt-1 text-ink-3">
                {u.common.source}: {n.source.name}, {n.source.date[locale]}
              </p>
            )}
          </div>
          <div className="col-span-4 md:col-span-9">
            <h1 className="t-h1 max-w-[24ch] text-[clamp(2rem,1.4rem+2.6vw,3.9rem)]">{c.title}</h1>
            <p className="t-lede mt-8 max-w-3xl">{c.excerpt}</p>
          </div>
        </div>
      </header>

      {n.image && (
        <figure className="wrap">
          <div className="duotone relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[21/9]">
            <Image src={n.image.src} alt={n.image.alt[locale]} fill priority sizes="(min-width: 1440px) 1312px, 100vw" className="photo-ed object-cover" />
          </div>
          {n.image.credit && (
            <figcaption className="t-meta mt-3 text-ink-3">
              {u.common.photo}: {n.image.credit}
            </figcaption>
          )}
        </figure>
      )}

      <div className="wrap grid-12 gap-y-12 py-16 md:py-24">
        <div className="prose-ed col-span-4 text-lg text-ink-2 md:col-span-8 md:col-start-4 [&_h2]:text-ink">
          {c.body.map((b, i) => (
            <Block key={i} block={b} />
          ))}
          {n.kind === "job" && (
            <p className="!mt-10">
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent("Candidatura Oracle DBA Senior")}`}
                className="inline-flex items-center gap-3 rounded-full !bg-brand px-6 py-3.5 font-medium !text-white !no-underline hover:!bg-brand-ink"
              >
                {u.labels.applyByEmail}
                <ArrowRight size={16} />
              </a>
            </p>
          )}
        </div>
        {n.solutions && (
          <aside className="col-span-4 md:col-span-3 md:col-start-1 md:row-start-1">
            <p className="t-label text-ink-3">{u.common.relatedSolutions}</p>
            <ul className="mt-3 space-y-2">
              {n.solutions.map((s) => {
                const sol = getSolution(s);
                return sol ? (
                  <li key={s}>
                    <ArrowLink href={href(locale, "solutions", s)}>{sol.name}</ArrowLink>
                    <span className="t-meta block text-ink-3">{sol[locale].expansion}</span>
                  </li>
                ) : null;
              })}
            </ul>
          </aside>
        )}
      </div>

      <nav aria-labelledby="more-news" className="border-t border-line">
        <div className="wrap grid-12 gap-y-6 py-16">
          <h2 id="more-news" className="t-label col-span-4 text-ink-3 md:col-span-3">
            {u.common.relatedNews}
          </h2>
          <ul className="col-span-4 border-t border-ink md:col-span-9">
            {others.map((o) => (
              <li key={o.slug} className="group border-b border-line">
                <Link href={href(locale, "news", o.slug)} className="flex items-baseline justify-between gap-6 py-5">
                  <span>
                    <span className="t-meta block text-ink-3">
                      <time dateTime={o.date}>{formatDate(o.date, locale)}</time> · {o[locale].category}
                    </span>
                    <span className="mt-1 block text-lg font-semibold group-hover:text-brand-ink">{o[locale].title}</span>
                  </span>
                  <ArrowRight className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <ContactBand locale={locale} />
    </article>
  );
}

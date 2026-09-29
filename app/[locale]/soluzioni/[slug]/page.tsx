import { notFound } from "next/navigation";
import { FamilyDetail } from "@/components/sections/FamilyDetail";
import { SolutionDetail } from "@/components/sections/SolutionDetail";
import { families } from "@/content/ecosystem";
import { getSolution, solutions } from "@/content/solutions";
import type { Family, Solution } from "@/content/types";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

/** One route for both area pages (e.g. /clicprevenzione) and product pages (e.g. /nol). */
export function generateStaticParams() {
  const slugs = [
    ...families.filter((f) => f.slug).map((f) => f.slug!),
    ...solutions.filter((s) => s.hasPage).map((s) => s.slug),
  ];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

type Resolved = { kind: "family"; family: Family } | { kind: "solution"; solution: Solution };

function resolve(slug: string): Resolved | null {
  const family = families.find((f) => f.slug === slug);
  if (family) return { kind: "family", family };
  const solution = getSolution(slug);
  if (solution?.hasPage) return { kind: "solution", solution };
  return null;
}

export async function generateMetadata({ params }: PageProps<"/[locale]/soluzioni/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const found = resolve(slug);
  if (!found) return {};
  if (found.kind === "family") {
    const f = found.family;
    return pageMetadata({
      locale,
      section: "solutions",
      slug,
      title: `${f.name[locale]} — ${f.short[locale]}`,
      description: f.summary[locale],
      ogKicker: f.short[locale],
    });
  }
  const s = found.solution;
  const c = s[locale];
  return pageMetadata({
    locale,
    section: "solutions",
    slug,
    title: c.metaTitle ?? `${s.name} — ${c.expansion}`,
    description: c.summary,
    ogKicker: c.expansion,
  });
}

export default async function SolutionPage({ params }: PageProps<"/[locale]/soluzioni/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const found = resolve(slug);
  if (!found) notFound();
  return found.kind === "family" ? (
    <FamilyDetail family={found.family} locale={locale} />
  ) : (
    <SolutionDetail solution={found.solution} locale={locale} />
  );
}

import { actors, families } from "@/content/ecosystem";
import { solutions } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import type { FinderProps } from "./SolutionFinder";

/** Serialisable props for the solution finder: only what the client renders. */
export function finderProps(locale: Locale): FinderProps {
  return {
    locale,
    labels: ui[locale].finder,
    contactHref: href(locale, "contact"),
    solutionsHref: href(locale, "solutions", undefined, "catalogue-title"),
    actors: actors.map((a) => ({ id: a.id, name: a.name[locale], who: a.who[locale] })),
    families: families.map((f) => ({ id: f.id, index: f.index, name: f.name[locale], short: f.short[locale] })),
    apps: solutions.map((s) => ({
      slug: s.slug,
      name: s.name,
      expansion: s[locale].expansion,
      family: s.family,
      href: s.hasPage ? href(locale, "solutions", s.slug) : null,
      actors: s.actors,
      roles: s[locale].roles ?? {},
      summary: s[locale].summary,
      logo: s.logo,
      monogram: s.monogram,
    })),
  };
}

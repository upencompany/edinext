import { families } from "@/content/ecosystem";
import { solutions } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";

export interface NavLink {
  label: string;
  href: string;
  note?: string;
  logo?: string;
  monogram?: string;
}

export interface NavFamily {
  index: string;
  name: string;
  short: string;
  href: string | null;
  products: NavLink[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  /** Path prefix used to mark the item as current. */
  match: string;
  children?: NavLink[];
  mega?: boolean;
}

export interface NavData {
  locale: Locale;
  homeHref: string;
  items: NavItem[];
  families: NavFamily[];
  overview: NavLink;
  contact: NavLink;
  labels: {
    nav: string;
    menu: string;
    close: string;
    language: string;
    solutionsIntro: string;
  };
}

export function buildNav(locale: Locale): NavData {
  const t = ui[locale];
  const n = t.nav;
  return {
    locale,
    homeHref: href(locale, "home"),
    items: [
      {
        id: "company",
        label: n.company,
        href: href(locale, "company"),
        match: href(locale, "company"),
        children: [
          { label: n.companyOverview, href: href(locale, "company") },
          { label: n.careers, href: href(locale, "careers") },
        ],
      },
      { id: "solutions", label: n.solutions, href: href(locale, "solutions"), match: href(locale, "solutions"), mega: true },
      { id: "services", label: n.services, href: href(locale, "services"), match: href(locale, "services") },
      { id: "projects", label: n.projects, href: href(locale, "projects"), match: href(locale, "projects") },
      { id: "news", label: n.news, href: href(locale, "news"), match: href(locale, "news") },
      {
        id: "compliance",
        label: n.compliance,
        href: href(locale, "compliance"),
        match: href(locale, "compliance"),
        children: [
          { label: n.certifications, href: href(locale, "compliance") },
          { label: n.legality, href: href(locale, "compliance", undefined, "rating-di-legalita") },
          { label: n.privacy, href: href(locale, "privacy") },
        ],
      },
    ],
    families: families.map((f) => ({
      index: f.index,
      name: f.name[locale],
      short: f.short[locale],
      href: f.slug ? href(locale, "solutions", f.slug) : null,
      products: solutions
        .filter((s) => s.family === f.id)
        .map((s) => ({
          label: s.name,
          note: s[locale].expansion,
          href: s.hasPage ? href(locale, "solutions", s.slug) : "",
          logo: s.logo,
          monogram: s.monogram,
        })),
    })),
    overview: { label: n.solutionsOverview, href: href(locale, "solutions") },
    contact: { label: n.contact, href: href(locale, "contact") },
    labels: {
      nav: n.label,
      menu: n.menu,
      close: n.close,
      language: n.language,
      solutionsIntro: t.solutions.lede,
    },
  };
}

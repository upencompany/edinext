import { families, norms } from "@/content/ecosystem";
import { news } from "@/content/news";
import { careersPage, companyPage, compliancePage, contactPage, privacyPage, servicesPage } from "@/content/pages";
import { pressKitPage } from "@/content/brand";
import { projects } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, type Locale, type SectionKey } from "@/lib/i18n";

export type SearchKind = "solution" | "area" | "norm" | "news" | "project" | "page";

/** One entry of the static search index (served as JSON, searched in the browser). */
export interface SearchItem {
  kind: SearchKind;
  title: string;
  subtitle: string;
  href: string;
  /** Extra text that matches but is not displayed. */
  keywords: string;
  logo?: string;
  monogram?: string;
}

/** Builds the whole index for one language from the content modules. */
export function buildSearchIndex(locale: Locale): SearchItem[] {
  const solutionHref = (slug: string) => {
    const s = solutions.find((x) => x.slug === slug);
    return s?.hasPage ? href(locale, "solutions", slug) : null;
  };

  const items: SearchItem[] = [];

  for (const s of solutions) {
    const c = s[locale];
    const family = families.find((f) => f.id === s.family);
    const familyHref = family?.slug ? href(locale, "solutions", family.slug) : href(locale, "solutions");
    items.push({
      kind: "solution",
      title: s.name,
      subtitle: c.expansion,
      href: solutionHref(s.slug) ?? familyHref,
      keywords: [c.tagline, c.summary, family?.name[locale], ...c.features.map((f) => f.title)].join(" "),
      logo: s.logo,
      monogram: s.monogram,
    });
  }

  for (const f of families) {
    items.push({
      kind: "area",
      title: f.name[locale],
      subtitle: f.short[locale],
      href: f.slug ? href(locale, "solutions", f.slug) : href(locale, "solutions"),
      keywords: [f.summary[locale], ...solutions.filter((s) => s.family === f.id).map((s) => s.name)].join(" "),
    });
  }

  for (const n of norms) {
    const target = n.solutions.map(solutionHref).find(Boolean);
    items.push({
      kind: "norm",
      title: n.ref[locale],
      subtitle: n.subject[locale],
      href: target ?? href(locale, "home", undefined, "norms-title"),
      keywords: [n.duty[locale], String(n.year), ...n.solutions].join(" "),
    });
  }

  for (const a of news) {
    const c = a[locale];
    items.push({
      kind: "news",
      title: c.metaTitle ?? c.title,
      subtitle: `${c.category} · ${a.date.slice(0, 4)}`,
      href: href(locale, "news", a.slug),
      keywords: [c.title, c.excerpt, ...(a.solutions ?? [])].join(" "),
    });
  }

  for (const p of projects) {
    const c = p[locale];
    items.push({
      kind: "project",
      title: c.title,
      subtitle: `${c.client} · ${c.place}`,
      href: href(locale, "projects", p.slug),
      keywords: [c.summary, ...p.solutions].join(" "),
    });
  }

  // Top-level pages: titles from the navigation, descriptions from each page's own copy.
  const n = ui[locale].nav;
  const pages: [SectionKey, string, string][] = [
    ["solutions", n.solutionsOverview, ui[locale].solutions.lede],
    ["company", n.companyOverview, companyPage[locale].metaDescription],
    ["services", n.services, servicesPage[locale].metaDescription],
    ["projects", n.projects, ui[locale].projects.lede],
    ["news", n.news, ui[locale].news.lede],
    ["compliance", n.compliance, compliancePage[locale].metaDescription],
    ["careers", n.careers, careersPage[locale].metaDescription],
    ["pressKit", n.pressKit, pressKitPage[locale].metaDescription],
    ["contact", n.contact, contactPage[locale].metaDescription],
    ["privacy", n.privacy, privacyPage[locale].metaDescription],
  ];
  for (const [section, title, description] of pages) {
    items.push({ kind: "page", title, subtitle: description, href: href(locale, section), keywords: "" });
  }

  return items;
}

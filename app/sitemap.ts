import type { MetadataRoute } from "next";
import { families } from "@/content/ecosystem";
import { news } from "@/content/news";
import { projects } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { defaultLocale, href, locales, type SectionKey } from "@/lib/i18n";
import { absoluteUrl, alternatesFor } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { section: SectionKey; slug?: string; priority: number; lastModified?: string }[] = [
    { section: "home", priority: 1 },
    { section: "solutions", priority: 0.9 },
    { section: "company", priority: 0.8 },
    { section: "services", priority: 0.8 },
    { section: "projects", priority: 0.7 },
    { section: "news", priority: 0.6 },
    { section: "compliance", priority: 0.5 },
    { section: "careers", priority: 0.5 },
    { section: "pressKit", priority: 0.5 },
    { section: "contact", priority: 0.6 },
    { section: "privacy", priority: 0.2 },
    ...families.filter((f) => f.slug).map((f) => ({ section: "solutions" as const, slug: f.slug!, priority: 0.8 })),
    ...solutions.filter((s) => s.hasPage).map((s) => ({ section: "solutions" as const, slug: s.slug, priority: 0.8 })),
    ...projects.map((p) => ({ section: "projects" as const, slug: p.slug, priority: 0.6 })),
    ...news.map((n) => ({ section: "news" as const, slug: n.slug, priority: 0.5, lastModified: n.date })),
  ];

  return entries.flatMap((e) =>
    locales.map((locale) => ({
      url: absoluteUrl(href(locale, e.section, e.slug)),
      ...(e.lastModified ? { lastModified: e.lastModified } : {}),
      priority: locale === defaultLocale ? e.priority : Math.round(e.priority * 8) / 10,
      alternates: { languages: alternatesFor(e.section, e.slug) },
    })),
  );
}

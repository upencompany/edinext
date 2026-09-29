import type { Metadata } from "next";
import { company } from "@/content/company";
import { defaultLocale, href, localeNames, locales, type Locale, type SectionKey } from "./i18n";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://edinext.it").replace(/\/$/, "");

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Keep descriptions inside the ~160 characters search engines display. */
export function clampDescription(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.—–-]+$/, "")}…`;
}

export function alternatesFor(section: SectionKey, slug?: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = absoluteUrl(href(l, section, slug));
  languages["x-default"] = absoluteUrl(href(defaultLocale, section, slug));
  return languages;
}

interface PageMetaInput {
  locale: Locale;
  section: SectionKey;
  slug?: string;
  title: string;
  description: string;
  /** Use the title verbatim, without the " — Edinext" suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  ogKicker?: string;
}

export function pageMetadata({
  locale,
  section,
  slug,
  title,
  description,
  absoluteTitle,
  type = "website",
  publishedTime,
  ogKicker,
}: PageMetaInput): Metadata {
  const path = href(locale, section, slug);
  description = clampDescription(description);
  // Long titles drop the " — Edinext" suffix so the meaningful part is not truncated.
  const useAbsolute = absoluteTitle || title.length > 52;
  const og = new URLSearchParams({ title, kicker: ogKicker ?? "Edinext", lang: locale });
  const image = { url: `/og?${og.toString()}`, width: 1200, height: 630, alt: title };
  return {
    title: useAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path), languages: alternatesFor(section, slug) },
    openGraph: {
      type,
      url: absoluteUrl(path),
      siteName: company.name,
      title,
      description,
      locale: localeNames[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeNames[l].og),
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

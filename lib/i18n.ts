export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Route keys are language-neutral identifiers for every section of the site.
 * Internally (in `app/[locale]/…`) folders use the Italian segment; English
 * URLs are served through rewrites declared in `next.config.ts`.
 */
export const sections = {
  home: { it: "", en: "" },
  company: { it: "azienda", en: "company" },
  solutions: { it: "soluzioni", en: "solutions" },
  services: { it: "servizi", en: "services" },
  projects: { it: "progetti", en: "projects" },
  news: { it: "news", en: "news" },
  compliance: { it: "compliance", en: "compliance" },
  privacy: { it: "privacy-policy", en: "privacy-policy" },
  careers: { it: "lavora-con-noi", en: "careers" },
  pressKit: { it: "kit-stampa", en: "press-kit" },
  contact: { it: "contatti", en: "contact" },
} as const satisfies Record<string, Record<Locale, string>>;

export type SectionKey = keyof typeof sections;

/** Build a public, localized path: href("en", "solutions", "nol") → /en/solutions/nol */
export function href(locale: Locale, section: SectionKey, slug?: string, hash?: string) {
  const segment = sections[section][locale];
  const parts = [locale, segment, slug].filter(Boolean);
  return `/${parts.join("/")}${hash ? `#${hash}` : ""}`;
}

/**
 * Normalise a pathname to its public form. During static generation a
 * rewritten page sees its internal path (/en/soluzioni/nol); in the browser
 * it is /en/solutions/nol. Components that compare paths must use this so
 * server and client render the same markup.
 */
export function publicPath(pathname: string): string {
  const [, locale, segment, ...rest] = pathname.split("/");
  if (!locale || !isLocale(locale) || !segment) return pathname;
  const entry = Object.values(sections).find((s) => s[defaultLocale] === segment || s[locale] === segment);
  return "/" + [locale, entry ? entry[locale] : segment, ...rest].filter(Boolean).join("/");
}

/** Translate a public pathname into the equivalent path in another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const [, current, segment, ...rest] = pathname.split("/");
  if (!current || !isLocale(current)) return `/${target}`;
  if (!segment) return `/${target}`;
  const entry = Object.values(sections).find((s) => s[current] === segment || s[defaultLocale] === segment);
  const translated = entry ? entry[target] : segment;
  return "/" + [target, translated, ...rest].filter(Boolean).join("/");
}

/** Everything a locale needs besides translated text. */
export const localeNames: Record<Locale, { short: string; long: string; htmlLang: string; og: string; intl: string }> = {
  it: { short: "IT", long: "Italiano", htmlLang: "it", og: "it_IT", intl: "it-IT" },
  en: { short: "EN", long: "English", htmlLang: "en", og: "en_GB", intl: "en-GB" },
};

/** Content that exists once per locale. Adding a locale makes TypeScript list every missing translation. */
export type Localized<T> = Record<Locale, T>;

/**
 * Declare per-locale copy whose shape is taken from the default locale:
 * every other locale must provide exactly the same keys.
 */
export function defineLocalized<T>(value: { [defaultLocale]: T } & Record<Locale, NoInfer<T>>): Localized<T> {
  return value;
}

export function toLocale(value: unknown): Locale {
  return typeof value === "string" && isLocale(value) ? value : defaultLocale;
}

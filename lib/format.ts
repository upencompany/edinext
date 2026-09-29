import { localeNames, type Locale } from "./i18n";

export function formatDate(iso: string, locale: Locale, style: "long" | "short" = "long") {
  return new Intl.DateTimeFormat(localeNames[locale].intl, {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric",
    timeZone: "Europe/Rome",
  }).format(new Date(`${iso}T12:00:00Z`));
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

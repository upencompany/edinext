import { company } from "@/content/company";
import { ui } from "@/content/ui";
import { href, type Locale } from "./i18n";
import { absoluteUrl, siteUrl } from "./seo";

export const organizationId = `${siteUrl}/#organization`;

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: absoluteUrl("/brand/edinext-logo.png"),
    email: company.email,
    telephone: company.phone.e164,
    vatID: `IT${company.vat}`,
    taxID: company.taxCode,
    slogan: company.tagline,
    description: ui[locale].meta.organizationDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: company.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: company.phone.e164,
      email: company.email,
      availableLanguage: ["Italian"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: company.openingHoursSpec.days,
        opens: company.openingHoursSpec.opens,
        closes: company.openingHoursSpec.closes,
      },
    },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: company.certifications.iso9001.standard },
      { "@type": "EducationalOccupationalCredential", name: company.certifications.pdr125.standard },
    ],
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: absoluteUrl(href(locale, "home")),
    name: company.name,
    inLanguage: locale,
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

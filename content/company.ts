/**
 * Company facts. Every value below is taken from edinext.it or from the
 * documents it publishes (quality policy, AGCM rating letter).
 */
import type { Localized } from "@/lib/i18n";

const hours: Localized<string> = {
  it: "Lunedì – Venerdì, 9.00 – 18.00",
  en: "Monday – Friday, 9:00 – 18:00",
};

export const company = {
  name: "Edinext",
  legalName: "Edinext S.r.l.",
  vat: "04388090757",
  taxCode: "04388090757",
  email: "info@edinext.it",
  pec: "edinext@pec.it",
  phone: { display: "0832 242649", e164: "+390832242649" },
  address: {
    street: "Via Marco Biagi 26",
    postalCode: "73100",
    city: "Lecce",
    province: "LE",
    region: "Puglia",
    country: "IT",
  },
  hours,
  openingHoursSpec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  tagline: "Innovare × Crescere",
  /** "oltre 30 Dipartimenti di Prevenzione delle ASL" — chi-siamo page. */
  preventionDepartments: "30",
  certifications: {
    iso9001: { standard: "ISO 9001:2015", reference: "SC 0217/00510", document: "/documents/politica-qualita.pdf" },
    pdr125: { standard: "UNI/PdR 125:2022", document: "/documents/politica-parita-di-genere.pdf" },
    legality: {
      authority: "AGCM",
      date: "2024-05-21",
      requestDate: "2024-03-22",
      score: 2,
      protocol: "RT21697",
      document: "/documents/rating-di-legalita-agcm-2024.pdf",
    },
  },
} as const;

export const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Via+Marco+Biagi+26+73100+Lecce";

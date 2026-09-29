import { defineLocalized } from "@/lib/i18n";

/**
 * ReteAVIS architecture, transcribed from the schema published on the old
 * site (archietettura_reteavis.webp). Columns flow left to right; `dark`
 * marks the application core.
 */
export const reteAvisArchitecture = defineLocalized({
  it: {
    caption: "Architettura della piattaforma ReteAVIS — ridisegnata dallo schema pubblicato da Edinext.",
    columns: [
      {
        label: "Accesso",
        dark: false,
        nodes: [
          { title: "Gestionale Associazioni", sub: "Sedi AVIS, web app" },
          { title: "App Donatori", sub: "Web app, anche mobile" },
        ],
      },
      { label: "Middleware", dark: true, nodes: [{ title: "ORDS", sub: "Oracle REST Data Services · Tomcat" }] },
      { label: "Applicazione", dark: true, nodes: [{ title: "Oracle APEX", sub: "Metadati applicativi, sessioni, cache" }] },
      {
        label: "Cooperazione applicativa",
        dark: false,
        nodes: [
          { title: "IAM", sub: "Identity and Access Management regionale" },
          { title: "EmoPuglia", sub: "Portale dei Centri Trasfusionali" },
          { title: "Oracle Database", sub: "Tabelle, viste, package — via REST/ORDS" },
        ],
      },
    ],
  },
  en: {
    caption: "ReteAVIS platform architecture — redrawn from the diagram published by Edinext.",
    columns: [
      {
        label: "Access",
        dark: false,
        nodes: [
          { title: "Association management", sub: "AVIS branches, web app" },
          { title: "Donor app", sub: "Web app, mobile included" },
        ],
      },
      { label: "Middleware", dark: true, nodes: [{ title: "ORDS", sub: "Oracle REST Data Services · Tomcat" }] },
      { label: "Application", dark: true, nodes: [{ title: "Oracle APEX", sub: "Application metadata, sessions, cache" }] },
      {
        label: "Application cooperation",
        dark: false,
        nodes: [
          { title: "IAM", sub: "Regional Identity and Access Management" },
          { title: "EmoPuglia", sub: "Transfusion centres’ portal" },
          { title: "Oracle Database", sub: "Tables, views, packages — via REST/ORDS" },
        ],
      },
    ],
  },
});

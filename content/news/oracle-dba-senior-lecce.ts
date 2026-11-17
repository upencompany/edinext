import type { NewsArticle } from "../types";

const article: NewsArticle = {
  slug: "oracle-dba-senior-lecce",
  date: "2026-02-13",
  kind: "job",
  it: {
    title: "Oracle DBA Senior",
    category: "Posizioni aperte",
    excerpt:
      "Cerchiamo un Oracle Database Administrator Senior con esperienza in ambienti mission-critical e in contesti ibridi on-premise e cloud. Sede di Lecce, tempo indeterminato.",
    body: [
      { type: "h2", text: "Chi cerchiamo" },
      {
        type: "p",
        text: "Ricerchiamo un Oracle Database Administrator Senior con esperienza consolidata nella gestione di ambienti mission-critical e competenze in contesti ibridi on-premise e cloud.",
      },
      {
        type: "p",
        text: "La risorsa sarà coinvolta nella gestione operativa quotidiana delle infrastrutture Oracle e in progetti di migrazione verso e da Oracle Cloud Infrastructure (OCI).",
      },
      {
        type: "facts",
        items: [
          { label: "Sede", value: "Lecce" },
          { label: "Contratto", value: "Tempo indeterminato" },
        ],
      },
      { type: "h2", text: "Responsabilità principali" },
      {
        type: "list",
        items: [
          "Amministrazione e gestione dei database Oracle",
          "Configurazione e gestione di ambienti Oracle RAC e Data Guard",
          "Gestione di backup e recovery",
          "Monitoraggio delle performance e attività di tuning",
          "Installazione, patching e upgrade di Oracle Database",
          "Progettazione e gestione delle migrazioni on-premise → OCI e OCI → on-premise",
          "Installazione e configurazione di Oracle APEX",
          "Supporto alla definizione di architetture ibride",
          "Collaborazione con il team infrastrutturale e sicurezza",
        ],
      },
      { type: "h2", text: "Candidatura" },
      { type: "p", text: "Invia il tuo CV a info@edinext.it indicando nell’oggetto: Candidatura Oracle DBA Senior." },
    ],
  },
  en: {
    title: "Senior Oracle DBA",
    category: "Open positions",
    excerpt:
      "We are looking for a Senior Oracle Database Administrator with experience of mission-critical environments and hybrid on-premise and cloud contexts. Based in Lecce, permanent contract.",
    body: [
      { type: "h2", text: "Who we are looking for" },
      {
        type: "p",
        text: "We are looking for a Senior Oracle Database Administrator with solid experience managing mission-critical environments and skills in hybrid on-premise and cloud contexts.",
      },
      {
        type: "p",
        text: "The role covers day-to-day operation of Oracle infrastructure and migration projects to and from Oracle Cloud Infrastructure (OCI).",
      },
      {
        type: "facts",
        items: [
          { label: "Location", value: "Lecce, Italy" },
          { label: "Contract", value: "Permanent" },
        ],
      },
      { type: "h2", text: "Main responsibilities" },
      {
        type: "list",
        items: [
          "Administration and management of Oracle databases",
          "Configuration and management of Oracle RAC and Data Guard environments",
          "Backup and recovery",
          "Performance monitoring and tuning",
          "Installation, patching and upgrades of Oracle Database",
          "Design and management of migrations on-premise → OCI and OCI → on-premise",
          "Installation and configuration of Oracle APEX",
          "Support in defining hybrid architectures",
          "Collaboration with the infrastructure and security team",
        ],
      },
      { type: "h2", text: "How to apply" },
      { type: "p", text: "Send your CV to info@edinext.it with the subject line: Candidatura Oracle DBA Senior." },
    ],
  },
};

export default article;

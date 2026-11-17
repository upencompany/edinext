import type { Solution } from "../types";

const solution: Solution = {
  slug: "clicvaccino",
  name: "ClicVaccino",
  family: "vaccinazioni",
  hasPage: true,
  logo: "/brand/products/clicvaccino.png",
  actors: ["prevenzione", "cittadini", "comunita"],
  norms: ["dl73-2017"],
  related: ["avr", "spuv"],
  it: {
    expansion: "Gestione dei servizi vaccinali",
    tagline: "Il sistema operativo dei servizi vaccinali della ASL.",
    summary:
      "Sistema informatico in uso al Servizio di Epidemiologia del Dipartimento di Prevenzione per la gestione di tutte le attività connesse alle vaccinazioni.",
    context: {
      title: "Prevenzione vaccinale",
      body: [
        "Per garantire l’immunità di gregge, l’Organizzazione Mondiale della Sanità indica la soglia del 95% di copertura vaccinale. In Italia il D.L. 73/2017, convertito dalla L. 119/2017, ha portato le vaccinazioni obbligatorie nell’infanzia e nell’adolescenza da quattro a dieci.",
      ],
    },
    about: {
      title: "ClicVaccino",
      body: ["L’applicazione accompagna il servizio vaccinale in ogni fase: dall’agenda degli appuntamenti alla registrazione della vaccinazione, fino al magazzino e agli adempimenti scolastici."],
    },
    features: [
      {
        title: "Funzionalità",
        items: [
          "Prenotazione semplificata degli appuntamenti",
          "Gestione e riepilogo degli appuntamenti",
          "Inserimento dei dati di vaccinazione",
          "Cruscotto di gestione",
          "Schedario assistiti",
          "Gestione del magazzino",
          "Tabelle e grafici di riepilogo",
          "Documentazione degli adempimenti scolastici",
        ],
      },
    ],
    roles: {
      prevenzione: "Il Servizio di Epidemiologia organizza le sedute e registra le vaccinazioni.",
      cittadini: "Le famiglie ricevono appuntamenti e documentazione.",
      comunita: "Gli adempimenti scolastici sono documentati dal sistema.",
    },
  },
  en: {
    expansion: "Vaccination service management",
    tagline: "The operational system for the health authority’s vaccination services.",
    summary:
      "The information system used by the Epidemiology Service of the Prevention Department to manage every activity related to vaccination.",
    context: {
      title: "Vaccination prevention",
      body: [
        "To achieve herd immunity, the World Health Organization indicates a 95% vaccination coverage threshold. In Italy, Decree-Law 73/2017, converted by Law 119/2017, raised the number of mandatory childhood and adolescent vaccinations from four to ten.",
      ],
    },
    about: {
      title: "ClicVaccino",
      body: ["The application supports the vaccination service at every stage: from the appointment calendar to recording the vaccination, through to stock and school requirements."],
    },
    features: [
      {
        title: "Features",
        items: [
          "Simple appointment booking",
          "Appointment management and overview",
          "Recording of vaccinations",
          "Management dashboard",
          "Patient records",
          "Stock management",
          "Summary tables and charts",
          "Documentation of school requirements",
        ],
      },
    ],
    roles: {
      prevenzione: "The Epidemiology Service organises sessions and records vaccinations.",
      cittadini: "Families receive appointments and documentation.",
      comunita: "School requirements are documented by the system.",
    },
  },
};

export default solution;

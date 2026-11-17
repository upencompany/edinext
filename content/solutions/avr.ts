import type { Solution } from "../types";

const solution: Solution = {
  slug: "avr",
  name: "AVR",
  family: "vaccinazioni",
  hasPage: true,
  monogram: "AVR",
  actors: ["istituzioni", "prevenzione", "comunita"],
  norms: ["dl73-2017"],
  related: ["clicvaccino", "spuv"],
  it: {
    expansion: "Anagrafe Vaccinale Regionale",
    tagline: "L’analisi vaccinale per gli uffici regionali della prevenzione.",
    summary:
      "Applicazione in uso nell’area di Prevenzione delle Regioni per la gestione telematica e l’ottimizzazione di tutte le attività connesse ai servizi di vaccinazione.",
    about: {
      title: "AVR, Anagrafe Vaccinale Regionale",
      body: [
        "AVR riunisce in un unico sistema la gestione delle coperture vaccinali, i flussi verso il livello nazionale e gli strumenti operativi per le sedute vaccinali. Consente di rappresentare il raggiungimento degli obiettivi LEA e di individuare i destinatari delle campagne di chiamata attiva.",
      ],
    },
    features: [
      {
        title: "Analisi e governo",
        items: [
          "Gestione delle coperture vaccinali",
          "Rappresentazione del raggiungimento degli obiettivi LEA",
          "Strumenti di analisi per progetti di chiamata attiva",
          "Individuazione del denominatore degli assistiti",
          "Tabelle e grafici di riepilogo",
        ],
      },
      {
        title: "Flussi informativi",
        items: ["Flussi ministeriali verso l’Anagrafe Vaccinale Nazionale (AVN)", "Conferimento dei dati vaccinali nel Fascicolo Sanitario Elettronico 2.0"],
      },
      {
        title: "Operatività",
        items: [
          "Prenotazione semplificata e riepilogo degli appuntamenti",
          "Inserimento dei dati di vaccinazione",
          "Cruscotto di gestione e schedario assistiti",
          "Gestione del magazzino",
          "Valutazione della posizione vaccinale degli alunni (D.L. 73/2017)",
        ],
      },
    ],
    roles: {
      istituzioni: "Gli uffici regionali monitorano coperture e obiettivi LEA e alimentano AVN e FSE.",
      prevenzione: "I servizi vaccinali gestiscono agende, sedute e magazzino.",
      comunita: "Le scuole ricevono la valutazione della posizione vaccinale degli alunni.",
    },
    integrations: {
      title: "Flussi",
      items: [{ label: "AVN", detail: "Anagrafe Vaccinale Nazionale" }, { label: "FSE 2.0", detail: "Fascicolo Sanitario Elettronico" }],
    },
    diagrams: [
      {
        kind: "groups",
        title: "Le principali vaccinazioni gestite",
        lede: "Le vaccinazioni gestite con AVR, per gruppo.",
        groups: [
          { name: "Herpes zoster", items: ["Herpes zoster per adulti"] },
          { name: "Epatite A", items: ["Epatite A"] },
          { name: "HPV", items: ["Papilloma virus"] },
          { name: "Meningococco C/ACWY", items: ["Meningococco C o ACWY"] },
          { name: "Varicella", items: ["Varicella"] },
          { name: "MPR", items: ["Rosolia", "Parotite", "Morbillo"] },
          { name: "Influenza", items: ["Influenza"] },
          { name: "Meningococco B", items: ["Meningococco B"] },
          { name: "Rotavirus", items: ["Rotavirus"] },
          { name: "Pneumococco", items: ["Pneumococco"] },
          { name: "Esavalente", items: ["Tetano", "Poliomielite", "Pertosse", "Haemophilus influenzae B", "Epatite B", "Difterite"] },
        ],
      },
    ],
  },
  en: {
    expansion: "Regional Vaccination Registry",
    tagline: "Vaccination analysis for regional prevention offices.",
    summary:
      "An application used by regional prevention departments to manage and optimise every activity connected with vaccination services.",
    about: {
      title: "AVR, Regional Vaccination Registry",
      body: [
        "AVR brings together coverage management, flows to the national level and the operational tools for vaccination sessions. It shows progress against essential levels of care (LEA) targets and identifies the recipients of active outreach campaigns.",
      ],
    },
    features: [
      {
        title: "Analysis and governance",
        items: [
          "Vaccination coverage management",
          "Tracking of LEA targets",
          "Analysis tools for active outreach projects",
          "Identification of the eligible population",
          "Summary tables and charts",
        ],
      },
      {
        title: "Data flows",
        items: ["Ministerial flows to the National Vaccination Registry (AVN)", "Transfer of vaccination data to the Electronic Health Record (FSE 2.0)"],
      },
      {
        title: "Operations",
        items: [
          "Simple booking and appointment overview",
          "Recording of vaccinations",
          "Management dashboard and patient records",
          "Stock management",
          "Assessment of pupils’ vaccination status (Decree-Law 73/2017)",
        ],
      },
    ],
    roles: {
      istituzioni: "Regional offices monitor coverage and LEA targets and feed AVN and the health record.",
      prevenzione: "Vaccination services manage schedules, sessions and stock.",
      comunita: "Schools receive the assessment of pupils’ vaccination status.",
    },
    integrations: {
      title: "Flows",
      items: [{ label: "AVN", detail: "National Vaccination Registry" }, { label: "FSE 2.0", detail: "Electronic Health Record" }],
    },
    diagrams: [
      {
        kind: "groups",
        title: "Main vaccinations managed",
        lede: "Vaccinations managed with AVR, by group.",
        groups: [
          { name: "Herpes zoster", items: ["Herpes zoster (adults)"] },
          { name: "Hepatitis A", items: ["Hepatitis A"] },
          { name: "HPV", items: ["Human papillomavirus"] },
          { name: "Meningococcal C/ACWY", items: ["Meningococcal C or ACWY"] },
          { name: "Varicella", items: ["Chickenpox"] },
          { name: "MMR", items: ["Rubella", "Mumps", "Measles"] },
          { name: "Influenza", items: ["Influenza"] },
          { name: "Meningococcal B", items: ["Meningococcal B"] },
          { name: "Rotavirus", items: ["Rotavirus"] },
          { name: "Pneumococcal", items: ["Pneumococcal"] },
          { name: "Hexavalent", items: ["Tetanus", "Polio", "Pertussis", "Haemophilus influenzae type b", "Hepatitis B", "Diphtheria"] },
        ],
      },
    ],
  },
};

export default solution;

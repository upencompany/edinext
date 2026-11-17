import type { Solution } from "../types";

const solution: Solution = {
  slug: "luna",
  name: "LUNA",
  family: "governance",
  hasPage: true,
  logo: "/brand/products/luna.png",
  actors: ["strutture", "cittadini", "prevenzione"],
  related: ["smart", "consultorio"],
  it: {
    expansion: "Lista Unica di Attesa",
    tagline: "La gestione informatizzata della lista unica di attesa nelle strutture sanitarie e sociosanitarie.",
    summary:
      "Fascicolo delle strutture sanitarie, sociosanitarie e sociali, pubbliche e private accreditate, e monitoraggio delle liste di attesa.",
    about: {
      title: "Cos’è LUNA",
      body: [
        "LUNA fornisce lo strumento per la gestione del Fascicolo delle strutture sanitarie, sociosanitarie e sociali, pubbliche e private accreditate.",
        "Il sistema certifica le informazioni delle strutture e delle funzioni che erogano, gestisce e monitora le liste di attesa per le diverse attività e tipologie di prestazioni, e accompagna il percorso del paziente: inserimento in lista, presa in carico, dimissione. Il Dipartimento di Prevenzione monitora così le prestazioni dell’intera rete di offerta.",
      ],
    },
    features: [
      {
        title: "Centralità del sistema",
        items: [
          "Classificazione in funzione della modalità assistenziale",
          "Anagrafica delle strutture sanitarie",
          "Anagrafica degli operatori",
          "Fascicolo della struttura",
          "Georeferenziazione delle strutture su mappa cartografica",
        ],
      },
      {
        title: "Il percorso del paziente",
        items: ["Inserimento in lista di attesa", "Presa in carico", "Dimissione", "Monitoraggio delle liste per attività e tipologia di prestazione"],
      },
    ],
    roles: {
      strutture: "Le strutture accreditate gestiscono inserimenti, prese in carico e dimissioni.",
      cittadini: "Il percorso del paziente è tracciato: inserimento in lista, presa in carico, dimissione.",
      prevenzione: "Il Dipartimento di Prevenzione monitora le prestazioni della rete di offerta.",
    },
    diagrams: [
      {
        kind: "hub",
        title: "Stakeholder dell’infrastruttura informatica",
        lede: "Le strutture e gli uffici coinvolti nel sistema.",
        center: "LUNA",
        items: [
          { label: "U.O.C. Accreditamento e gestione delle strutture accreditate" },
          { label: "U.O.C. di Igiene Pubblica" },
          { label: "Strutture sanitarie accreditate" },
          { label: "U.O.C. RSA e Hospice" },
          { label: "Dipartimento di Prevenzione" },
          { label: "Area amministrativo-contabile" },
          { label: "Disabilità adulto" },
          { label: "Dipartimenti distrettuali" },
          { label: "TSMREE", detail: "Tutela salute mentale e riabilitazione in età evolutiva" },
          { label: "Altre strutture interessate" },
        ],
      },
    ],
  },
  en: {
    expansion: "Single Waiting List",
    tagline: "Digital management of the single waiting list in healthcare and social-care facilities.",
    summary: "A facility file for accredited public and private healthcare, social-care and social facilities, plus waiting-list monitoring.",
    about: {
      title: "What LUNA is",
      body: [
        "LUNA provides the tool to manage the file of accredited public and private healthcare, social-care and social facilities.",
        "The system certifies information about facilities and the services they provide, manages and monitors waiting lists by activity and type of service, and follows the patient pathway: waiting-list entry, admission to care, discharge. The Prevention Department can therefore monitor the performance of the whole care network.",
      ],
    },
    features: [
      {
        title: "The system at the centre",
        items: ["Classification by type of care", "Facility registry", "Staff registry", "Facility file", "Facilities geolocated on a map"],
      },
      {
        title: "The patient pathway",
        items: ["Waiting-list entry", "Admission to care", "Discharge", "Waiting-list monitoring by activity and type of service"],
      },
    ],
    roles: {
      strutture: "Accredited facilities manage entries, admissions and discharges.",
      cittadini: "The patient pathway is traced: waiting-list entry, admission to care, discharge.",
      prevenzione: "The Prevention Department monitors the performance of the care network.",
    },
    diagrams: [
      {
        kind: "hub",
        title: "Stakeholders of the IT infrastructure",
        lede: "The facilities and offices involved in the system.",
        center: "LUNA",
        items: [
          { label: "Accreditation and accredited facilities management unit" },
          { label: "Public hygiene unit" },
          { label: "Accredited healthcare facilities" },
          { label: "Care homes (RSA) and hospice unit" },
          { label: "Prevention Department" },
          { label: "Administration and accounting" },
          { label: "Adult disability services" },
          { label: "District departments" },
          { label: "TSMREE", detail: "Child and adolescent mental health and rehabilitation" },
          { label: "Other facilities involved" },
        ],
      },
    ],
  },
};

export default solution;

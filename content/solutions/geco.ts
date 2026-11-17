import type { Solution } from "../types";

const solution: Solution = {
  slug: "geco",
  name: "G.E.Co.",
  family: "sanita",
  hasPage: true,
  logo: "/brand/products/geco.png",
  actors: ["prevenzione", "cittadini", "strutture"],
  related: ["smart", "clicvaccino"],
  image: {
    src: "/media/emergenza-sanitaria.jpg",
    width: 1600,
    height: 1067,
    alt: {
      it: "Stetoscopio appoggiato su moduli di referto di test diagnostici",
      en: "Stethoscope resting on diagnostic test report forms",
    },
  },
  it: {
    expansion: "Gestione Emergenza Covid",
    tagline: "La piattaforma nata per la gestione dell’emergenza sanitaria.",
    summary:
      "Acquisire, catalogare, elaborare e condividere tempestivamente le informazioni sui pazienti in tutte le fasi del processo.",
    about: {
      title: "Gestione dell’emergenza",
      body: [
        "G.E.Co. nasce con l’insorgere dei contagi da Covid-19 per rispondere alle necessità dell’organizzazione sanitaria: acquisire, catalogare, elaborare e condividere tempestivamente le informazioni relative ai pazienti in tutte le fasi del processo.",
        "Da un lato consente di monitorare costantemente il paziente e l’evoluzione delle sue condizioni cliniche; dall’altro supporta e semplifica il lavoro del personale coinvolto. La piattaforma è conforme alla normativa vigente e offre una visione dell’intero processo di segnalazione e presa in carico del cittadino.",
      ],
    },
    features: [
      {
        title: "Punti di forza",
        items: [
          "Completezza: informazioni integrate con l’anagrafe regionale, i laboratori di analisi e i sistemi di telemedicina",
          "Puntualità: ogni scheda paziente è consultabile dagli operatori abilitati con precisione",
          "Categorizzazione: ogni scheda è classificata per gruppo di afferenza (farmacie, MMG, scuola, RSA…)",
          "Tempestività: esiti dei test e referti in PDF ricevuti in tempo reale",
        ],
      },
      {
        title: "Integrazioni",
        items: [
          "Sistemi regionali di controllo su esecuzione ed esito di tamponi ed esami sierologici",
          "Individuazione dei pazienti afferenti ad altre ASL e invio dei dati per la presa in carico",
          "Raccolta, elaborazione e aggregazione dei dati per un impiego efficiente di personale e infrastrutture",
          "Contatto diretto tra il cittadino e la propria ASL",
        ],
      },
    ],
    roles: {
      prevenzione: "Gli operatori seguono segnalazione, presa in carico e monitoraggio del paziente.",
      cittadini: "Il cittadino è in contatto diretto con la propria ASL.",
      strutture: "Le schede sono classificate per gruppo di afferenza — farmacie, MMG, scuole, RSA — e integrate con i laboratori.",
    },
  },
  en: {
    expansion: "Covid Emergency Management",
    tagline: "The platform created to manage the health emergency.",
    summary: "Capturing, cataloguing, processing and sharing patient information promptly at every stage of the process.",
    about: {
      title: "Emergency management",
      body: [
        "G.E.Co. was created when Covid-19 infections began, to meet the needs of the health organisation: capturing, cataloguing, processing and sharing patient information promptly at every stage of the process.",
        "On one side it allows constant monitoring of patients and their clinical condition; on the other it supports and simplifies the work of the staff involved. The platform complies with current regulations and offers a view of the entire process of reporting and taking charge of the citizen.",
      ],
    },
    features: [
      {
        title: "Strengths",
        items: [
          "Completeness: information integrated with the regional registry, laboratories and telemedicine systems",
          "Precision: each patient file can be consulted accurately by authorised staff",
          "Categorisation: each file is classified by reference group (pharmacies, GPs, schools, care homes…)",
          "Timeliness: test results and PDF reports received in real time",
        ],
      },
      {
        title: "Integrations",
        items: [
          "Regional control systems for swab and serology testing and results",
          "Identification of patients belonging to other health authorities and transfer of data for care",
          "Collection, processing and aggregation of data for efficient use of staff and infrastructure",
          "Direct contact between citizens and their health authority",
        ],
      },
    ],
    roles: {
      prevenzione: "Staff follow reporting, admission to care and patient monitoring.",
      cittadini: "Citizens are in direct contact with their health authority.",
      strutture: "Files are classified by reference group — pharmacies, GPs, schools, care homes — and integrated with laboratories.",
    },
  },
};

export default solution;

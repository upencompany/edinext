import type { Solution } from "../types";

const solution: Solution = {
  slug: "smart",
  name: "SMART",
  family: "governance",
  hasPage: true,
  logo: "/brand/products/smart.png",
  actors: ["strutture", "cittadini", "prevenzione", "istituzioni"],
  norms: ["dm77-2022"],
  related: ["luna", "avr"],
  it: {
    metaTitle: "SMART — Governance della sanità territoriale (D.M. 77/2022)",
    expansion: "Sistema informativo per il Monitoraggio e l’Assistenza alla Rete Territoriale",
    tagline: "La governance dei nuovi modelli organizzativi dell’assistenza sanitaria territoriale.",
    summary:
      "Conforme al D.M. 77/2022, SMART parte dal Fascicolo Sanitario del paziente per mettere in relazione cittadino, professionisti e servizi del territorio.",
    about: {
      title: "Cos’è SMART",
      body: [
        "SMART è il sistema informativo per il monitoraggio e l’assistenza alla rete territoriale, conforme al Decreto 23 maggio 2022, n. 77. Partendo dal Fascicolo Sanitario del paziente, si fonda su tre principi: centralità del cittadino-assistito; stratificazione della popolazione e monitoraggio del rischio; programmazione e promozione degli interventi.",
        "Per una sanità più equa, sostenibile ed evoluta, la piattaforma interagisce con le altre applicazioni e con i sistemi informativi della Pubblica Amministrazione e delle strutture sanitarie.",
      ],
    },
    features: [
      {
        title: "Funzioni integrate",
        items: [
          "Monitoraggio dei bisogni socio-assistenziali",
          "Prevenzione e gestione delle malattie croniche",
          "Campagne di screening",
          "Snellimento delle attività burocratico-autorizzative",
          "Cruscotto delle prestazioni e dei flussi organizzativi",
        ],
      },
    ],
    roles: {
      cittadini: "Il cittadino-assistito è al centro: ogni intervento parte dal suo Fascicolo Sanitario.",
      strutture: "MMG e PLS, COT, ADI, IFeC e specialisti ambulatoriali lavorano sulla stessa base informativa.",
      prevenzione: "Il Dipartimento di Prevenzione programma screening e interventi.",
      istituzioni: "Il sistema dialoga con i sistemi aziendali, regionali e nazionali.",
    },
    integrations: {
      title: "Centralità della piattaforma",
      items: [
        { label: "Sistemi aziendali", detail: "SIO, SIAR, AVR…" },
        { label: "Sistemi regionali", detail: "FSE, CUP, ASUR…" },
        { label: "Sistemi nazionali", detail: "ANAS, pagoPA, SPID…" },
      ],
    },
    diagrams: [
      {
        kind: "hub",
        title: "La rete intorno al paziente",
        lede: "I professionisti e i servizi della rete territoriale che lavorano a partire dal Fascicolo Sanitario del paziente.",
        center: "Fascicolo Sanitario del paziente",
        items: [
          { label: "MMG e PLS", detail: "Medici di medicina generale e pediatri di libera scelta" },
          { label: "IFeC", detail: "Infermiere di famiglia e di comunità" },
          { label: "COT", detail: "Centrale operativa territoriale" },
          { label: "Specialisti ambulatoriali integrati" },
          { label: "ADI", detail: "Assistenza domiciliare integrata" },
          { label: "Dipartimento di Prevenzione" },
        ],
      },
    ],
  },
  en: {
    metaTitle: "SMART — Community healthcare governance (DM 77/2022)",
    expansion: "Information system for Monitoring and Assisting the Community Care Network",
    tagline: "Governance for the new organisational models of community healthcare.",
    summary:
      "Compliant with Ministerial Decree 77/2022, SMART starts from the patient’s health record to connect citizens, professionals and local services.",
    about: {
      title: "What SMART is",
      body: [
        "SMART is the information system for monitoring and supporting the community care network, compliant with Ministerial Decree no. 77 of 23 May 2022. Starting from the patient’s health record, it is built on three principles: the citizen-patient at the centre; population stratification and risk monitoring; planning and promotion of interventions.",
        "For fairer, more sustainable and more advanced healthcare, the platform works with other applications and with the information systems of public administrations and healthcare facilities.",
      ],
    },
    features: [
      {
        title: "Integrated functions",
        items: [
          "Monitoring of social-care needs",
          "Prevention and management of chronic diseases",
          "Screening campaigns",
          "Streamlined administrative and authorisation procedures",
          "Dashboard of services and organisational flows",
        ],
      },
    ],
    roles: {
      cittadini: "The citizen-patient is at the centre: every intervention starts from their health record.",
      strutture: "GPs and paediatricians, operations centres (COT), home care (ADI), community nurses and specialists work on the same information.",
      prevenzione: "The Prevention Department plans screening and interventions.",
      istituzioni: "The system works with local, regional and national systems.",
    },
    integrations: {
      title: "The platform at the centre",
      items: [
        { label: "Health authority systems", detail: "SIO, SIAR, AVR…" },
        { label: "Regional systems", detail: "FSE, CUP, ASUR…" },
        { label: "National systems", detail: "ANAS, pagoPA, SPID…" },
      ],
    },
    diagrams: [
      {
        kind: "hub",
        title: "The network around the patient",
        lede: "The professionals and services of the community care network who work from the patient’s health record.",
        center: "Patient health record",
        items: [
          { label: "GPs and paediatricians", detail: "MMG and PLS" },
          { label: "IFeC", detail: "Family and community nurses" },
          { label: "COT", detail: "Community operations centre" },
          { label: "Integrated outpatient specialists" },
          { label: "ADI", detail: "Integrated home care" },
          { label: "Prevention Department" },
        ],
      },
    ],
  },
};

export default solution;

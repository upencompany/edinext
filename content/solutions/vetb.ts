import type { Solution } from "../types";

const solution: Solution = {
  slug: "vetb",
  name: "VETB",
  family: "clicprevenzione",
  hasPage: true,
  monogram: "VETB",
  actors: ["prevenzione", "imprese", "istituzioni"],
  norms: ["ce852-2004", "dlgs32-2021"],
  related: ["sian", "vetc"],
  it: {
    expansion: "Servizio Veterinario — Area B",
    tagline: "Controlli sulla filiera degli alimenti di origine animale.",
    summary:
      "Gestione telematica delle attività ispettive alle imprese di produzione, commercializzazione e trasporto di alimenti di origine animale.",
    about: {
      title: "Cos’è VETB",
      body: [
        "L’applicativo gestisce le attività del Servizio Veterinario Area B lungo la catena produttiva e distributiva degli alimenti di origine animale.",
        "Le funzionalità sono aggiornate al D.Lgs. 32/2021: registrazione delle autodichiarazioni degli OSA, storico del livello di rischio, tariffe applicate e pagamenti effettuati.",
      ],
    },
    features: [
      {
        title: "Controllo ufficiale e campionamento",
        items: [
          "Anagrafe geolocalizzata delle attività di interesse del Servizio",
          "Notifiche sanitarie ai sensi del Reg. CE 852/2004",
          "Attività ispettiva e prescrittiva con tariffario sanzionatorio",
          "Pagamenti tariffari dei controlli ufficiali su macelli e stabilimenti di lavorazione delle carni (D.Lgs. 32/2021)",
          "Allerte RASFF e gestione di infezioni, intossicazioni e tossinfezioni alimentari",
          "Rilascio di certificazioni, pareri e attestati",
        ],
      },
      {
        title: "Pianificazione e rendicontazione",
        items: [
          "Piani e sottopiani delle campagne di vigilanza, con monitoraggio dell’avanzamento",
          "Stampa di verbali e modelli per le attività ispettive",
          "Riepiloghi, statistiche e scadenzari",
          "Report ministeriali per la rendicontazione delle attività ispettive e di audit",
        ],
      },
    ],
    roles: {
      prevenzione: "I veterinari dell’Area B programmano i controlli e registrano ispezioni, campioni e tariffe.",
      imprese: "Gli operatori del settore alimentare presentano autodichiarazioni e notifiche.",
      istituzioni: "La rendicontazione ministeriale è generata dai dati raccolti.",
    },
  },
  en: {
    expansion: "Veterinary Service — Area B",
    tagline: "Controls on the animal-based food chain.",
    summary:
      "Electronic management of inspections on businesses that produce, sell and transport food of animal origin.",
    about: {
      title: "What VETB is",
      body: [
        "The application manages the activities of Veterinary Service Area B along the production and distribution chain of food of animal origin.",
        "Its functions are aligned with Legislative Decree 32/2021: recording of food business operators’ self-declarations, risk-level history, fees applied and payments made.",
      ],
    },
    features: [
      {
        title: "Official controls and sampling",
        items: [
          "Geolocated registry of the businesses supervised by the service",
          "Health notifications under Regulation (EC) 852/2004",
          "Inspection and enforcement activity with a penalty schedule",
          "Fee payments for official controls in slaughterhouses and meat processing plants (Legislative Decree 32/2021)",
          "RASFF alerts and management of foodborne infections and intoxications",
          "Issuing of certificates, opinions and attestations",
        ],
      },
      {
        title: "Planning and reporting",
        items: [
          "Plans and sub-plans for supervision campaigns, with progress monitoring",
          "Printing of reports and forms for inspections",
          "Summaries, statistics and schedules",
          "Ministerial reports on inspection and audit activity",
        ],
      },
    ],
    roles: {
      prevenzione: "Area B veterinarians schedule controls and record inspections, samples and fees.",
      imprese: "Food business operators submit self-declarations and notifications.",
      istituzioni: "Ministerial reporting is generated from the data collected.",
    },
  },
};

export default solution;

import type { Solution } from "../types";

const solution: Solution = {
  slug: "sian",
  name: "SIAN",
  family: "clicprevenzione",
  hasPage: true,
  logo: "/brand/products/sian.png",
  actors: ["prevenzione", "imprese", "cittadini"],
  norms: ["ce852-2004"],
  related: ["vetb", "clicspesal"],
  it: {
    expansion: "Servizio Igiene degli Alimenti e della Nutrizione",
    tagline: "Controlli sulla filiera degli alimenti di origine vegetale e sulle acque destinate al consumo umano.",
    summary:
      "Gestione dei controlli alle imprese di produzione, commercializzazione e trasporto di alimenti di origine vegetale.",
    about: {
      title: "Cos’è SIAN",
      body: [
        "L’applicazione gestisce le attività di interesse del Servizio Igiene degli Alimenti e della Nutrizione lungo la catena produttiva e distributiva degli alimenti di origine vegetale.",
        "È possibile definire piani e sottopiani per realizzare campagne di vigilanza e controllo, d’iniziativa o istituzionali, e monitorarne lo stato di avanzamento.",
        "Un modulo dedicato alle acque potabili consente di mappare ogni tipo di opera acquedottistica, definire i punti di prelievo e gestire gli esami e i controlli istituzionali sulle acque destinate al consumo umano.",
      ],
    },
    features: [
      {
        title: "Caratteristiche e funzionalità",
        items: [
          "Anagrafe geolocalizzata delle attività di interesse del Servizio",
          "Registrazione delle notifiche sanitarie (avvio di nuova attività, aggiornamento, subentro) ai sensi del Reg. CE 852/2004",
          "Controllo ufficiale e campionamento: matrice, esami richiesti ed esiti, piano di campionamento, tecnici incaricati",
          "Attività ispettiva e prescrittiva con tariffario sanzionatorio",
          "Gestione delle allerte RASFF e di infezioni, intossicazioni e tossinfezioni alimentari",
          "Rilascio di certificazioni, pareri e attestati su richiesta dell’utenza",
        ],
      },
      {
        title: "Acque destinate al consumo umano",
        items: ["Mappatura delle opere acquedottistiche", "Definizione dei punti di prelievo", "Gestione e monitoraggio di esami e controlli istituzionali"],
      },
    ],
    roles: {
      prevenzione: "Il SIAN pianifica campagne di controllo, registra campionamenti ed esiti, gestisce le allerte.",
      imprese: "Gli operatori del settore alimentare vengono registrati tramite notifica sanitaria.",
      cittadini: "L’utenza richiede certificazioni, pareri e attestati.",
    },
  },
  en: {
    expansion: "Food Hygiene and Nutrition Service",
    tagline: "Controls on the plant-based food chain and on water intended for human consumption.",
    summary: "Management of controls on businesses that produce, sell and transport food of plant origin.",
    about: {
      title: "What SIAN is",
      body: [
        "The application manages the activities of the Food Hygiene and Nutrition Service along the production and distribution chain of food of plant origin.",
        "Plans and sub-plans can be defined to run supervision and control campaigns, either self-initiated or institutional, and to monitor their progress.",
        "A dedicated drinking-water module maps every kind of water-supply infrastructure, defines sampling points and manages the institutional tests and controls on water intended for human consumption.",
      ],
    },
    features: [
      {
        title: "Features",
        items: [
          "Geolocated registry of the businesses supervised by the service",
          "Recording of health notifications (new activity, update, takeover) under Regulation (EC) 852/2004",
          "Official controls and sampling: matrix, tests requested and results, sampling plan, technicians involved",
          "Inspection and enforcement activity with a penalty schedule",
          "Management of RASFF alerts and foodborne infections and intoxications",
          "Issuing of certificates, opinions and attestations on request",
        ],
      },
      {
        title: "Water for human consumption",
        items: ["Mapping of water-supply infrastructure", "Definition of sampling points", "Management and monitoring of institutional tests and controls"],
      },
    ],
    roles: {
      prevenzione: "SIAN plans control campaigns, records samples and results, and manages alerts.",
      imprese: "Food business operators are registered through health notifications.",
      cittadini: "Members of the public request certificates, opinions and attestations.",
    },
  },
};

export default solution;

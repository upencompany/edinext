import type { Actor, Family, Norm } from "./types";

export const actors: Actor[] = [
  {
    id: "cittadini",
    name: { it: "Cittadini e pazienti", en: "Citizens and patients" },
    who: {
      it: "Famiglie, assistiti, donatori di sangue, lavoratori",
      en: "Families, patients, blood donors, workers",
    },
  },
  {
    id: "imprese",
    name: { it: "Imprese e professionisti", en: "Businesses and professionals" },
    who: {
      it: "Committenti e imprese edili, aziende di bonifica, operatori del settore alimentare",
      en: "Construction clients and contractors, asbestos removal companies, food business operators",
    },
  },
  {
    id: "prevenzione",
    name: { it: "Operatori della prevenzione", en: "Prevention staff" },
    who: {
      it: "Servizi del Dipartimento di Prevenzione delle ASL: SPESAL, SIAN, Servizi Veterinari, Epidemiologia",
      en: "Services of the ASL Prevention Department: SPESAL, SIAN, Veterinary Services, Epidemiology",
    },
  },
  {
    id: "strutture",
    name: { it: "Strutture e professionisti sanitari", en: "Healthcare facilities and professionals" },
    who: {
      it: "Strutture sanitarie e sociosanitarie, consultori, MMG e PLS, medici competenti, centri trasfusionali",
      en: "Healthcare and social-care facilities, family health centres, GPs and paediatricians, occupational physicians, transfusion centres",
    },
  },
  {
    id: "istituzioni",
    name: { it: "Regioni ed enti pubblici", en: "Regions and public bodies" },
    who: {
      it: "Regioni, ASL, Ispettorato del Lavoro, INAIL, flussi ministeriali",
      en: "Regional governments, local health authorities, Labour Inspectorate, INAIL, national reporting",
    },
  },
  {
    id: "comunita",
    name: { it: "Scuole e associazioni", en: "Schools and associations" },
    who: {
      it: "Istituti scolastici, reti associative di volontariato",
      en: "Schools, volunteer associations",
    },
  },
];

export const families: Family[] = [
  {
    id: "clicprevenzione",
    slug: "clicprevenzione",
    index: "01",
    logo: "/brand/products/clicprevenzione.png",
    name: { it: "ClicPrevenzione", en: "ClicPrevenzione" },
    short: { it: "Prevenzione e sicurezza", en: "Prevention and safety" },
    summary: {
      it: "La suite integrata per i Servizi del Dipartimento di Prevenzione: sicurezza nei luoghi di lavoro, cantieri, amianto, igiene degli alimenti e sanità veterinaria.",
      en: "The integrated suite for the services of the Prevention Department: workplace and construction-site safety, asbestos, food hygiene and veterinary public health.",
    },
    intro: {
      it: [
        "ClicPrevenzione è una suite di soluzioni integrate, sviluppata per supportare la gestione e l’ottimizzazione dei processi e delle attività erogate dai Servizi del Dipartimento di Prevenzione delle Aziende Sanitarie.",
        "La piattaforma è articolata in sistemi applicativi indipendenti, configurati in relazione alle aree funzionali della prevenzione. Ogni modulo può essere adottato singolarmente e dialoga con gli altri.",
      ],
      en: [
        "ClicPrevenzione is a suite of integrated solutions built to support the management and optimisation of the processes and activities carried out by the services of a local health authority’s Prevention Department.",
        "The platform is organised into independent applications, each configured around a functional area of prevention. Every module can be adopted on its own and exchanges data with the others.",
      ],
    },
  },
  {
    id: "vaccinazioni",
    slug: "anagrafe-vaccinale-regionale",
    index: "02",
    name: { it: "Anagrafe vaccinale regionale", en: "Regional vaccination registry" },
    short: { it: "Vaccinazioni", en: "Vaccinations" },
    summary: {
      it: "Dalla prenotazione del cittadino alla seduta vaccinale, fino all’analisi delle coperture a livello regionale e ai flussi verso l’Anagrafe Vaccinale Nazionale.",
      en: "From the citizen’s booking to the vaccination session, through to regional coverage analysis and data flows to the National Vaccination Registry.",
    },
    intro: {
      it: [
        "Tre applicazioni coprono l’intera filiera vaccinale: lo sportello di prenotazione per il cittadino, il sistema operativo dei servizi vaccinali delle ASL e lo strumento di analisi per gli uffici regionali della prevenzione.",
      ],
      en: [
        "Three applications cover the entire vaccination chain: the citizen booking desk, the operational system used by local health authority vaccination services, and the analysis tool for regional prevention offices.",
      ],
    },
  },
  {
    id: "governance",
    slug: "governance-sanita-territoriale",
    index: "03",
    name: { it: "Governance della sanità territoriale", en: "Community healthcare governance" },
    short: { it: "Sanità territoriale", en: "Community healthcare" },
    summary: {
      it: "Sistemi per il monitoraggio della rete di assistenza territoriale, la gestione amministrativa delle strutture e le liste di attesa.",
      en: "Systems to monitor the community care network, manage healthcare facilities administratively and govern waiting lists.",
    },
    intro: {
      it: [
        "La riorganizzazione dell’assistenza territoriale richiede strumenti capaci di mettere in relazione cittadino, strutture e servizi. Questi sistemi forniscono alle Aziende Sanitarie e alle Regioni una visione d’insieme della rete di offerta.",
      ],
      en: [
        "The reorganisation of community healthcare requires tools that connect citizens, facilities and services. These systems give local health authorities and regions a complete view of the care network.",
      ],
    },
  },
  {
    id: "sanita",
    slug: "sanita",
    index: "04",
    name: { it: "Soluzioni in sanità", en: "Healthcare solutions" },
    short: { it: "Servizi sanitari", en: "Health services" },
    summary: {
      it: "Applicazioni verticali per consultori, promozione della salute nelle scuole, sorveglianza sanitaria del personale e gestione delle emergenze.",
      en: "Dedicated applications for family health centres, health promotion in schools, occupational health surveillance of staff and emergency management.",
    },
    intro: {
      it: [
        "Soluzioni costruite attorno a servizi sanitari specifici, in cui lavorano insieme professionisti diversi: ostetriche e psicologi, medici competenti, scuole e strutture sanitarie.",
      ],
      en: [
        "Solutions built around specific health services where different professionals work together: midwives and psychologists, occupational physicians, schools and healthcare facilities.",
      ],
    },
  },
  {
    id: "volontariato",
    slug: null,
    index: "05",
    name: { it: "Reti associative", en: "Volunteer networks" },
    short: { it: "Donazione del sangue", en: "Blood donation" },
    summary: {
      it: "La piattaforma realizzata con Avis Puglia per la rete dei volontari donatori di sangue.",
      en: "The platform built with Avis Puglia for the regional network of voluntary blood donors.",
    },
    intro: { it: [], en: [] },
  },
];

/** Regulatory framework the platforms implement, as cited on the product pages. */
export const norms: Norm[] = [
  {
    id: "l257-1992",
    year: 1992,
    ref: { it: "L. 27 marzo 1992, n. 257", en: "Law no. 257 of 27 March 1992" },
    subject: { it: "Cessazione dell’impiego dell’amianto", en: "Phasing out of asbestos" },
    duty: {
      it: "Relazione annuale delle aziende sull’utilizzo diretto o indiretto di amianto (art. 9).",
      en: "Annual report by companies on direct or indirect use of asbestos (art. 9).",
    },
    solutions: ["nola"],
  },
  {
    id: "ce852-2004",
    year: 2004,
    ref: { it: "Reg. CE n. 852/2004", en: "Regulation (EC) No 852/2004" },
    subject: { it: "Igiene dei prodotti alimentari", en: "Hygiene of foodstuffs" },
    duty: {
      it: "Registrazione degli operatori del settore alimentare tramite notifica sanitaria.",
      en: "Registration of food business operators through health notifications.",
    },
    solutions: ["sian", "vetb"],
  },
  {
    id: "dlgs81-2008",
    year: 2008,
    ref: { it: "D.Lgs. 9 aprile 2008, n. 81", en: "Legislative Decree no. 81/2008" },
    subject: { it: "Testo Unico sulla salute e sicurezza nei luoghi di lavoro", en: "Consolidated Act on occupational health and safety" },
    duty: {
      it: "Notifica preliminare dei cantieri (art. 99), notifiche e piani di lavoro amianto (artt. 250 e 256), vigilanza e sorveglianza sanitaria.",
      en: "Preliminary notification of construction sites (art. 99), asbestos notifications and work plans (arts. 250 and 256), inspections and health surveillance.",
    },
    solutions: ["nol", "nola", "clicspesal", "ca-sa"],
  },
  {
    id: "dl73-2017",
    year: 2017,
    ref: { it: "D.L. 7 giugno 2017, n. 73 — L. 31 luglio 2017, n. 119", en: "Decree-Law no. 73/2017 — Law no. 119/2017" },
    subject: { it: "Prevenzione vaccinale", en: "Vaccination prevention" },
    duty: {
      it: "Le vaccinazioni obbligatorie nell’infanzia e nell’adolescenza passano da quattro a dieci; adempimenti vaccinali per l’iscrizione scolastica.",
      en: "Mandatory childhood and adolescent vaccinations rise from four to ten; vaccination requirements for school enrolment.",
    },
    solutions: ["clicvaccino", "avr"],
  },
  {
    id: "dlgs101-2020",
    year: 2020,
    ref: { it: "D.Lgs. 31 luglio 2020, n. 101", en: "Legislative Decree no. 101/2020" },
    subject: { it: "Radioprotezione e sorveglianza sanitaria", en: "Radiation protection and health surveillance" },
    duty: {
      it: "Sorveglianza sanitaria dei lavoratori da parte del Medico Competente e del Medico Autorizzato.",
      en: "Health surveillance of workers by the occupational physician and the authorised physician.",
    },
    solutions: ["ca-sa"],
  },
  {
    id: "dlgs32-2021",
    year: 2021,
    ref: { it: "D.Lgs. 2 febbraio 2021, n. 32", en: "Legislative Decree no. 32/2021" },
    subject: { it: "Finanziamento dei controlli ufficiali", en: "Financing of official controls" },
    duty: {
      it: "Tariffe e pagamenti dei controlli ufficiali su macelli e stabilimenti di lavorazione delle carni; autodichiarazioni degli OSA.",
      en: "Fees and payments for official controls in slaughterhouses and meat processing plants; self-declarations by food business operators.",
    },
    solutions: ["vetb"],
  },
  {
    id: "dm77-2022",
    year: 2022,
    ref: { it: "D.M. 23 maggio 2022, n. 77", en: "Ministerial Decree no. 77/2022" },
    subject: { it: "Modelli e standard dell’assistenza territoriale", en: "Models and standards for community healthcare" },
    duty: {
      it: "Nuovi modelli organizzativi per lo sviluppo della rete di assistenza sanitaria territoriale.",
      en: "New organisational models for the development of the community healthcare network.",
    },
    solutions: ["smart"],
  },
];

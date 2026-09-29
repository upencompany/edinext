import type { FamilyId, Solution } from "./types";

/**
 * The Edinext application catalogue, as published on edinext.it/soluzioni.
 * Descriptions are rewritten for clarity but preserve the original meaning.
 */
export const solutions: Solution[] = [
  // ─── 01 · ClicPrevenzione ──────────────────────────────────────────────
  {
    slug: "nola",
    name: "NOLA",
    family: "clicprevenzione",
    hasPage: true,
    logo: "/brand/products/nola.png",
    actors: ["imprese", "cittadini", "prevenzione", "istituzioni"],
    norms: ["dlgs81-2008", "l257-1992"],
    related: ["nol", "clicspesal"],
    image: {
      src: "/media/bonifica-amianto.jpg",
      width: 800,
      height: 479,
      alt: {
        it: "Sacchi di materiale contenente amianto rimosso, allineati lungo un cantiere di bonifica",
        en: "Bags of removed asbestos-containing material lined up along a remediation site",
      },
    },
    it: {
      expansion: "Notifiche e Piani di Lavoro Amianto",
      tagline: "Il portale per le notifiche dei lavori di bonifica da amianto.",
      summary:
        "Applicazione web per l’invio telematico delle notifiche e la gestione delle comunicazioni tra imprese di bonifica e organo di vigilanza.",
      context: {
        title: "L’obbligo di notifica",
        body: [
          "Le imprese esecutrici dei lavori di bonifica da amianto sono tenute, ai sensi degli artt. 250 e 256 del D.Lgs. 81/08, a comunicare le proprie attività al Servizio di Prevenzione e Sicurezza negli Ambienti di Lavoro (SPESAL) della ASL territorialmente competente.",
        ],
      },
      about: {
        title: "Cos’è NOLA",
        body: [
          "NOLA è un’applicazione web che consente l’invio telematico delle notifiche e la gestione delle comunicazioni tra le imprese esecutrici e l’organo di vigilanza. Le banche dati vengono create e aggiornate direttamente dalle imprese, e lo SPESAL dispone in tempo reale di un quadro completo degli interventi sul territorio.",
        ],
      },
      features: [
        {
          title: "Per le imprese di bonifica",
          lede: "Tutte le comunicazioni previste dagli artt. 250 e 256 del D.Lgs. 81/08 e dalla Regione, in un unico punto di accesso.",
          items: [
            "Iscrizione all’Anagrafe Territoriale Aziende Bonifica Amianto",
            "Notifica dei lavoratori addetti alle operazioni di bonifica",
            "Notifica di inizio lavori con rischio di esposizione ad amianto (art. 250)",
            "Piano di lavoro per la rimozione di amianto in matrice compatta (art. 256)",
            "Piano di lavoro per la rimozione di amianto in matrice friabile (art. 256)",
            "Relazione annuale sull’utilizzo diretto o indiretto di amianto (art. 9, L. 257/1992)",
          ],
        },
        {
          title: "Per l’Azienda Sanitaria",
          lede: "NOLA consente allo SPESAL di ottemperare alle disposizioni sull’aggiornamento delle banche dati informative.",
          items: [
            "Azzeramento dei tempi di comunicazione tra imprese e SPESAL, in entrambe le direzioni",
            "Georeferenziazione degli interventi di bonifica",
            "Registro dei lavoratori esposti, banca dati dei piani di lavoro e dei singoli interventi, aggiornati dalle imprese",
            "Verifiche sui cantieri semplificate per l’organo di vigilanza",
            "Rendicontazione annuale semplificata verso ASL e Regione",
            "Statistiche, grafici e tabelle di riepilogo",
          ],
        },
      ],
      roles: {
        imprese: "Inviano notifiche, piani di lavoro e relazioni annuali in via telematica.",
        cittadini: "Dialogano con lo SPESAL attraverso lo sportello online dedicato all’amianto.",
        prevenzione: "Lo SPESAL riceve le notifiche in tempo reale e pianifica le verifiche in cantiere.",
        istituzioni: "La Regione riceve una rendicontazione annuale già strutturata.",
      },
    },
    en: {
      expansion: "Asbestos Notifications and Work Plans",
      tagline: "The portal for notifying asbestos removal work.",
      summary:
        "A web application for submitting notifications electronically and managing communications between asbestos removal contractors and the supervisory authority.",
      context: {
        title: "The notification duty",
        body: [
          "Under articles 250 and 256 of Legislative Decree 81/08, contractors carrying out asbestos removal must notify their activities to the Workplace Prevention and Safety Service (SPESAL) of the competent local health authority.",
        ],
      },
      about: {
        title: "What NOLA is",
        body: [
          "NOLA is a web application for submitting notifications electronically and managing communications between contractors and the supervisory authority. Databases are created and kept up to date directly by the contractors, giving SPESAL a real-time picture of work across the territory.",
        ],
      },
      features: [
        {
          title: "For removal contractors",
          lede: "Every communication required by articles 250 and 256 of Legislative Decree 81/08 and by the Region, in a single access point.",
          items: [
            "Registration in the Territorial Registry of Asbestos Removal Companies",
            "Notification of workers assigned to removal operations",
            "Notice of start of work with risk of asbestos exposure (art. 250)",
            "Work plan for removing non-friable asbestos (art. 256)",
            "Work plan for removing friable asbestos (art. 256)",
            "Annual report on direct or indirect use of asbestos (art. 9, Law 257/1992)",
          ],
        },
        {
          title: "For the health authority",
          lede: "NOLA allows SPESAL to comply with the rules on keeping information databases up to date.",
          items: [
            "No delay in communications between contractors and SPESAL, in either direction",
            "Geolocation of removal work",
            "Register of exposed workers, work-plan and intervention databases, updated by contractors",
            "Simpler site inspections for the supervisory authority",
            "Simpler annual reporting to the health authority and the Region",
            "Statistics, charts and summary tables",
          ],
        },
      ],
      roles: {
        imprese: "Submit notifications, work plans and annual reports online.",
        cittadini: "Communicate with SPESAL through the dedicated asbestos help desk.",
        prevenzione: "SPESAL receives notifications in real time and plans site inspections.",
        istituzioni: "The Region receives structured annual reporting.",
      },
    },
  },
  {
    slug: "nol",
    name: "NOL",
    family: "clicprevenzione",
    hasPage: true,
    logo: "/brand/products/nol.png",
    actors: ["imprese", "cittadini", "prevenzione", "istituzioni"],
    norms: ["dlgs81-2008"],
    related: ["nola", "clicspesal"],
    image: {
      src: "/media/cantiere-edile.jpg",
      width: 1024,
      height: 576,
      alt: {
        it: "Casco da cantiere e tavole di progetto su un tavolo, con gru e edifici in costruzione sullo sfondo",
        en: "Hard hat and drawings on a table, with cranes and buildings under construction in the background",
      },
    },
    it: {
      expansion: "Notifiche Preliminari Cantieri Edili",
      tagline: "Gestione e invio telematico delle notifiche preliminari dei cantieri edili.",
      summary:
        "La notifica di avvio lavori arriva in tempo reale agli enti competenti, che condividono le informazioni per coordinare ispezioni e controlli.",
      context: {
        title: "La notifica preliminare",
        body: [
          "Prima dell’inizio dei lavori, il committente o il responsabile dei lavori trasmette all’Azienda Sanitaria Locale e all’Ispettorato del Lavoro territorialmente competenti la notifica preliminare di avvio del cantiere (art. 99, D.Lgs. 81/08).",
        ],
      },
      about: {
        title: "L’applicazione NOL",
        body: [
          "NOL permette di assolvere in via telematica alla trasmissione della notifica preliminare. La compilazione guidata porta vantaggi sia al cittadino o all’impresa che usufruisce del servizio, sia alle Amministrazioni destinatarie, rispetto all’invio tradizionale in formato cartaceo.",
        ],
      },
      features: [
        {
          title: "I vantaggi",
          items: [
            "Semplificazione: la notifica è guidata passo passo e riduce la probabilità di errori",
            "Acquisizione in tempo reale, con riduzione dei tempi di lavorazione",
            "Dematerializzazione: il processo elimina ogni supporto cartaceo",
            "Archivio informatico strutturato di tutte le notifiche, con ricerche, verifiche e riepiloghi statistici",
            "Integrazione con il sistema informativo Prevenzione e Sicurezza degli Ambienti di Lavoro delle ASL",
          ],
        },
        {
          title: "Funzionalità integrate",
          items: [
            "Governance interistituzionale: condivisione delle notifiche tra ASL e altri enti (Ispettorato del Lavoro, CPT, INAIL) per coordinare la vigilanza",
            "Mappatura delle notifiche sul territorio, grazie all’integrazione con il sistema web-GIS",
          ],
        },
      ],
      roles: {
        imprese: "Committenti e imprese compilano la notifica online, senza raccomandate né carta.",
        cittadini: "Anche il committente privato trasmette la notifica con una procedura guidata.",
        prevenzione: "Lo SPESAL riceve la notifica in tempo reale e mappa i cantieri attivi.",
        istituzioni: "Ispettorato del Lavoro, CPT e INAIL condividono le stesse informazioni.",
      },
      integrations: {
        title: "Enti collegati",
        items: [
          { label: "ASL — SPESAL" },
          { label: "Ispettorato Territoriale del Lavoro" },
          { label: "CPT", detail: "Comitato paritetico territoriale" },
          { label: "INAIL" },
          { label: "Web-GIS", detail: "Mappatura delle notifiche" },
        ],
      },
    },
    en: {
      expansion: "Preliminary Notifications for Construction Sites",
      tagline: "Electronic submission and management of preliminary construction-site notifications.",
      summary:
        "The notice of start of work reaches the competent bodies in real time, and they share the information to coordinate inspections.",
      context: {
        title: "The preliminary notification",
        body: [
          "Before work begins, the client or the project supervisor must send the preliminary notification to the competent local health authority and Labour Inspectorate (art. 99, Legislative Decree 81/08).",
        ],
      },
      about: {
        title: "The NOL application",
        body: [
          "NOL lets the preliminary notification be submitted electronically. Guided completion benefits both the citizen or business using the service and the administrations receiving it, compared with traditional paper submission.",
        ],
      },
      features: [
        {
          title: "Benefits",
          items: [
            "Simplicity: step-by-step guidance reduces the chance of errors",
            "Real-time receipt, with shorter processing times",
            "Paperless: the whole process removes paper documents entirely",
            "A structured digital archive of all notifications, with searches, checks and statistical summaries",
            "Integration with the health authorities’ workplace prevention and safety information system",
          ],
        },
        {
          title: "Integrated functions",
          items: [
            "Inter-agency governance: notifications shared between the health authority and other bodies (Labour Inspectorate, CPT, INAIL) to coordinate supervision",
            "Mapping of notifications across the territory through the web-GIS integration",
          ],
        },
      ],
      roles: {
        imprese: "Clients and contractors file the notification online, with no registered mail or paper.",
        cittadini: "Private clients can also submit the notification through a guided procedure.",
        prevenzione: "SPESAL receives the notification in real time and maps active sites.",
        istituzioni: "The Labour Inspectorate, CPT and INAIL share the same information.",
      },
      integrations: {
        title: "Connected bodies",
        items: [
          { label: "Health authority — SPESAL" },
          { label: "Territorial Labour Inspectorate" },
          { label: "CPT", detail: "Joint territorial safety committee" },
          { label: "INAIL" },
          { label: "Web-GIS", detail: "Mapping of notifications" },
        ],
      },
    },
  },
  {
    slug: "clicspesal",
    name: "ClicSPESAL",
    family: "clicprevenzione",
    hasPage: true,
    logo: "/brand/products/clicspesal.png",
    actors: ["prevenzione", "istituzioni"],
    norms: ["dlgs81-2008"],
    related: ["nol", "nola"],
    image: {
      src: "/media/sicurezza-lavoro.jpg",
      width: 1200,
      height: 801,
      alt: {
        it: "Tecnici al lavoro su tavole di progetto accanto a un casco di sicurezza",
        en: "Technicians working on drawings next to a safety helmet",
      },
    },
    it: {
      metaTitle: "ClicSPESAL — Software per la prevenzione e sicurezza sul lavoro",
      expansion: "Servizio di Prevenzione e Sicurezza negli Ambienti di Lavoro",
      tagline: "Il sistema informativo per lo SPESAL.",
      summary:
        "Pianificazione e rendicontazione delle attività di vigilanza e controllo negli ambienti di lavoro e sui cantieri edili.",
      context: {
        title: "Prevenzione e sicurezza",
        body: [
          "Il Testo Unico in materia di tutela della salute e della sicurezza nei luoghi di lavoro (D.Lgs. 81/08) recepisce le direttive comunitarie in materia e definisce i compiti di vigilanza delle Aziende Sanitarie.",
        ],
      },
      about: {
        title: "ClicSPESAL",
        body: [
          "L’applicazione supporta le attività del Servizio Prevenzione e Sicurezza negli Ambienti di Lavoro: consente di gestire, pianificare e rendicontare la vigilanza e il controllo nei luoghi di lavoro e nei cantieri.",
        ],
      },
      features: [
        {
          title: "Attività ispettiva e sanzionatoria",
          items: [
            "Gestione dell’attività ispettiva e prescrittiva",
            "Tariffario sanzionatorio per ogni violazione prevista dalla normativa in materia di igiene e sicurezza del lavoro",
          ],
        },
        {
          title: "Verbali e documenti",
          items: [
            "Stampa automatica di verbali e modelli per attività ispettive, prescrittive e autorizzative",
            "Riepiloghi, statistiche e scadenzari delle attività",
          ],
        },
        {
          title: "Gestione delle pratiche",
          items: [
            "Inchieste su infortuni sul lavoro e malattie professionali",
            "Modulo dedicato alle visite di medicina del lavoro, con certificati di idoneità e riepiloghi",
          ],
        },
      ],
      roles: {
        prevenzione: "Tecnici e medici dello SPESAL pianificano ispezioni, redigono verbali e seguono le inchieste.",
        istituzioni: "I dati dialogano con i flussi informativi INAIL.",
      },
      integrations: {
        title: "Integrazioni",
        items: [{ label: "Flussi informativi INAIL – ex ISPESL" }, { label: "NOL", detail: "Notifiche preliminari dei cantieri" }, { label: "NOLA", detail: "Notifiche amianto" }],
      },
    },
    en: {
      metaTitle: "ClicSPESAL — Software for workplace prevention and safety",
      expansion: "Workplace Prevention and Safety Service",
      tagline: "The information system for SPESAL.",
      summary: "Planning and reporting of supervision and inspection activity in workplaces and on construction sites.",
      context: {
        title: "Prevention and safety",
        body: [
          "The Consolidated Act on occupational health and safety (Legislative Decree 81/08) transposes EU directives on the subject and sets out the supervisory duties of local health authorities.",
        ],
      },
      about: {
        title: "ClicSPESAL",
        body: [
          "The application supports the Workplace Prevention and Safety Service: it is used to manage, plan and report on supervision and inspections in workplaces and on construction sites.",
        ],
      },
      features: [
        {
          title: "Inspections and penalties",
          items: [
            "Management of inspection and enforcement activity",
            "Penalty schedule for every violation under occupational health and safety law",
          ],
        },
        {
          title: "Reports and documents",
          items: [
            "Automatic printing of reports and forms for inspection, enforcement and authorisation activity",
            "Summaries, statistics and activity schedules",
          ],
        },
        {
          title: "Case management",
          items: [
            "Investigations into workplace accidents and occupational diseases",
            "A dedicated module for occupational medicine visits, with fitness certificates and summaries",
          ],
        },
      ],
      roles: {
        prevenzione: "SPESAL technicians and physicians plan inspections, draw up reports and follow investigations.",
        istituzioni: "Data is exchanged with INAIL reporting flows.",
      },
      integrations: {
        title: "Integrations",
        items: [{ label: "INAIL – former ISPESL data flows" }, { label: "NOL", detail: "Construction-site notifications" }, { label: "NOLA", detail: "Asbestos notifications" }],
      },
    },
  },
  {
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
  },
  {
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
  },
  {
    slug: "vetc",
    name: "VETC",
    family: "clicprevenzione",
    hasPage: false,
    monogram: "VETC",
    actors: ["prevenzione"],
    it: {
      expansion: "Servizio Veterinario — Area C",
      tagline: "Igiene degli allevamenti e delle produzioni zootecniche.",
      summary: "Gestione delle attività del Servizio Veterinario di Igiene degli Allevamenti e delle Produzioni Zootecniche (Area C).",
      about: { title: "VETC", body: [] },
      features: [],
    },
    en: {
      expansion: "Veterinary Service — Area C",
      tagline: "Livestock farming and animal production hygiene.",
      summary: "Management of the activities of the Veterinary Service for Livestock Farming and Animal Production Hygiene (Area C).",
      about: { title: "VETC", body: [] },
      features: [],
    },
  },

  // ─── 02 · Anagrafe vaccinale ───────────────────────────────────────────
  {
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
  },
  {
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
  },
  {
    slug: "spuv",
    name: "SPUV",
    family: "vaccinazioni",
    hasPage: true,
    logo: "/brand/products/spuv.png",
    actors: ["cittadini", "prevenzione"],
    related: ["clicvaccino", "avr"],
    it: {
      expansion: "Sportello Unico Vaccinazioni",
      tagline: "La prenotazione online delle vaccinazioni, con i soli dati anagrafici.",
      summary:
        "Il cittadino si collega al sistema informatico della propria ASL e prenota in autonomia le vaccinazioni necessarie.",
      about: {
        title: "Prenotazione online",
        body: [
          "SPUV consente al cittadino di collegarsi, mediante i propri dati anagrafici, al sistema informatico dell’ASL di riferimento per prenotare in completa autonomia le vaccinazioni necessarie. Dall’altra parte, l’ASL governa agende e disponibilità.",
        ],
      },
      features: [
        {
          title: "Per il cittadino",
          items: [
            "Prenotazione agile e semplificata",
            "Prenotazioni a proprio nome per parenti impossibilitati",
            "Prenotazioni per minori da parte di genitori o affidatari",
          ],
        },
        { title: "Per l’ASL", items: ["Gestione dell’agenda appuntamenti", "Reportistica", "Ricerche, tabelle e grafici sui dati in archivio"] },
      ],
      roles: {
        cittadini: "Prenotano per sé, per i figli o per un familiare, senza recarsi allo sportello.",
        prevenzione: "I servizi vaccinali pubblicano le agende e seguono le prenotazioni.",
      },
    },
    en: {
      expansion: "Single Vaccination Desk",
      tagline: "Online vaccination booking with personal details only.",
      summary: "Citizens connect to their health authority’s system and book the vaccinations they need on their own.",
      about: {
        title: "Online booking",
        body: [
          "SPUV lets citizens log in to their health authority’s system using their personal details and book the vaccinations they need entirely on their own. On the other side, the health authority manages calendars and availability.",
        ],
      },
      features: [
        {
          title: "For citizens",
          items: ["Quick, simple booking", "Bookings on behalf of relatives who cannot do so themselves", "Bookings for minors by parents or guardians"],
        },
        { title: "For the health authority", items: ["Appointment calendar management", "Reporting", "Searches, tables and charts on archived data"] },
      ],
      roles: {
        cittadini: "Book for themselves, their children or a relative, without going to a desk.",
        prevenzione: "Vaccination services publish calendars and follow bookings.",
      },
    },
  },

  // ─── 03 · Governance della sanità territoriale ─────────────────────────
  {
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
  },
  {
    slug: "strutture-sanitarie",
    name: "Strutture Sanitarie",
    family: "governance",
    hasPage: false,
    monogram: "SS",
    actors: ["strutture", "istituzioni"],
    it: {
      expansion: "Gestione amministrativa delle strutture",
      tagline: "Piattaforma telematica per la gestione amministrativa delle strutture sanitarie.",
      summary: "Piattaforma telematica per la gestione amministrativa delle strutture sanitarie.",
      about: { title: "Strutture Sanitarie", body: [] },
      features: [],
    },
    en: {
      expansion: "Administrative management of facilities",
      tagline: "Online platform for the administrative management of healthcare facilities.",
      summary: "Online platform for the administrative management of healthcare facilities.",
      about: { title: "Healthcare Facilities", body: [] },
      features: [],
    },
  },
  {
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
  },

  // ─── 04 · Soluzioni in sanità ──────────────────────────────────────────
  {
    slug: "consultorio",
    name: "Consultorio",
    family: "sanita",
    hasPage: true,
    monogram: "CON",
    actors: ["strutture", "cittadini"],
    related: ["luna", "clicvaccino"],
    it: {
      expansion: "Sistema informativo per i consultori",
      tagline: "Le attività e i servizi dei consultori familiari, in un unico strumento di lavoro.",
      summary: "Gestione delle attività di prevenzione dei consultori dislocati sul territorio.",
      about: {
        title: "Servizi di prevenzione",
        body: [
          "I consultori svolgono numerose attività di presidio sanitario e prevenzione. L’applicazione è uno strumento di lavoro che consente di programmare gli appuntamenti, informatizzare i dati sanitari della cartella del paziente, coordinare il lavoro degli operatori coinvolti e restituire il flusso di dati con report e grafici.",
        ],
      },
      features: [
        {
          title: "Aree funzionali integrate",
          items: [
            "Assistenza sociale e psicologica",
            "Ginecologia",
            "Infermieristica",
            "Ostetricia",
            "Pediatria",
            "Vaccinazione",
            "Attività psicoeducazionale",
            "Spazio Giovani",
            "Asilo nido",
            "Gestione delle prenotazioni",
          ],
        },
      ],
      roles: {
        strutture: "Ginecologi, ostetriche, psicologi, assistenti sociali e pediatri condividono cartella e agenda.",
        cittadini: "Donne, coppie, giovani e famiglie trovano un percorso coordinato tra i servizi.",
      },
    },
    en: {
      expansion: "Information system for family health centres",
      tagline: "The activities and services of family health centres in a single working tool.",
      summary: "Management of prevention activities in family health centres across the territory.",
      about: {
        title: "Prevention services",
        body: [
          "Family health centres provide a wide range of healthcare and prevention services. The application is a working tool for scheduling appointments, digitising patient record data, coordinating the professionals involved and reporting the data flow through reports and charts.",
        ],
      },
      features: [
        {
          title: "Integrated functional areas",
          items: [
            "Social and psychological support",
            "Gynaecology",
            "Nursing",
            "Midwifery",
            "Paediatrics",
            "Vaccination",
            "Psycho-educational activity",
            "Youth space",
            "Nursery",
            "Booking management",
          ],
        },
      ],
      roles: {
        strutture: "Gynaecologists, midwives, psychologists, social workers and paediatricians share records and calendars.",
        cittadini: "Women, couples, young people and families find a coordinated pathway across services.",
      },
    },
  },
  {
    slug: "sps",
    name: "SPS",
    family: "sanita",
    hasPage: true,
    monogram: "SPS",
    actors: ["comunita", "prevenzione", "istituzioni"],
    related: ["clicvaccino", "consultorio"],
    it: {
      expansion: "Scuole che Promuovono Salute",
      tagline: "La promozione della salute nella comunità scolastica.",
      summary:
        "Gestione del progetto regionale Scuole che Promuovono Salute: comunicazione e notifiche tra istituti scolastici e struttura sanitaria.",
      context: {
        title: "Scuole che Promuovono Salute",
        body: [
          "È un progetto promosso dalla Regione Puglia e inserito nel Piano strategico regionale per l’educazione alla salute, basato sui principi di equità, inclusione, partecipazione e sostenibilità. Supporta e qualifica le istituzioni scolastiche nelle attività di educazione alla salute e di prevenzione dei comportamenti a rischio.",
        ],
      },
      about: {
        title: "Cos’è SPS",
        body: ["L’applicazione gestisce tutte le attività del progetto e la comunicazione tra istituti scolastici e struttura sanitaria."],
      },
      features: [
        {
          title: "Funzionalità",
          items: [
            "Adesione ai progetti disponibili",
            "Compilazione del Profilo Salute Scuola",
            "Registrazione delle attività quotidiane",
            "Monitoraggio delle attività",
            "Mappa degli istituti aderenti",
            "Monitoraggio e valutazione dello stato di salute scolastica",
            "Produzione dei documenti digitali necessari",
            "Sistema integrato di ricezione e invio notifiche",
          ],
        },
      ],
      roles: {
        comunita: "Le scuole aderiscono ai progetti, compilano il Profilo Salute e registrano le attività.",
        prevenzione: "La struttura sanitaria monitora e valuta le attività di promozione della salute.",
        istituzioni: "La Regione dispone della mappa degli istituti aderenti.",
      },
      diagrams: [
        {
          kind: "cycle",
          title: "Il modello della scuola che promuove salute",
          lede: "Sei componenti, in un ciclo continuo di monitoraggio e valutazione.",
          center: "Monitoraggio e valutazione",
          items: [
            "Sviluppare competenze individuali",
            "Policy scolastica per la promozione della salute",
            "Rafforzare la collaborazione comunitaria",
            "Ambiente sociale",
            "Educazione alla salute",
            "Migliorare l’ambiente strutturale e organizzativo",
          ],
        },
      ],
    },
    en: {
      expansion: "Health-Promoting Schools",
      tagline: "Health promotion within the school community.",
      summary:
        "Management of the regional Health-Promoting Schools project: communication and notifications between schools and the health authority.",
      context: {
        title: "Health-Promoting Schools",
        body: [
          "A project promoted by the Puglia Region as part of its regional strategic plan for health education, based on the principles of equity, inclusion, participation and sustainability. It supports schools in health education and in preventing risk behaviours.",
        ],
      },
      about: {
        title: "What SPS is",
        body: ["The application manages every activity of the project and the communication between schools and the health authority."],
      },
      features: [
        {
          title: "Features",
          items: [
            "Enrolment in available projects",
            "Completion of the School Health Profile",
            "Recording of daily activities",
            "Activity monitoring",
            "Map of participating schools",
            "Monitoring and assessment of school health",
            "Production of the required digital documents",
            "Integrated system for sending and receiving notifications",
          ],
        },
      ],
      roles: {
        comunita: "Schools join projects, complete the Health Profile and record activities.",
        prevenzione: "The health authority monitors and assesses health promotion activities.",
        istituzioni: "The Region has a map of participating schools.",
      },
      diagrams: [
        {
          kind: "cycle",
          title: "The health-promoting school model",
          lede: "Six components, in a continuous cycle of monitoring and assessment.",
          center: "Monitoring and assessment",
          items: [
            "Developing individual skills",
            "School policy for health promotion",
            "Strengthening community collaboration",
            "Social environment",
            "Health education",
            "Improving the physical and organisational environment",
          ],
        },
      ],
    },
  },
  {
    slug: "ca-sa",
    name: "CA.SA",
    family: "sanita",
    hasPage: true,
    monogram: "CA.SA",
    actors: ["strutture", "cittadini"],
    norms: ["dlgs81-2008", "dlgs101-2020"],
    related: ["clicspesal", "consultorio"],
    it: {
      expansion: "Cartella Sanitaria del dipendente",
      tagline: "La sorveglianza sanitaria del personale delle ASL.",
      summary:
        "Informatizzazione completa della sorveglianza sanitaria dei dipendenti delle ASL, con funzionalità dedicate alla segreteria del Medico Competente e del Medico Autorizzato.",
      context: {
        title: "Sorveglianza sanitaria del personale",
        body: ["Il D.Lgs. 81/2008 e il D.Lgs. 101/2020 regolano l’attività di sorveglianza sanitaria del personale delle Aziende Sanitarie."],
      },
      about: {
        title: "CA.SA",
        body: [
          "CA.SA informatizza tutte le attività connesse alla sorveglianza sanitaria dei dipendenti: dalla programmazione delle visite alla cartella clinica, fino alla firma grafometrica del giudizio di idoneità e alla formazione obbligatoria.",
        ],
      },
      features: [
        {
          title: "Per il Medico Competente",
          items: [
            "Anagrafica del personale sottoposto a sorveglianza sanitaria",
            "Agenda di visite mediche e accertamenti diagnostici",
            "Convocazione del lavoratore via e-mail",
            "Cartella sanitaria informatizzata con la storia clinica del lavoratore",
            "Firma del giudizio di idoneità, di lavoratore e medico, tramite tavoletta grafometrica",
            "Invio del giudizio a dipendente, direttore generale e direttore della struttura",
            "Programmazione delle visite in base alla scadenza del giudizio di idoneità",
          ],
        },
        {
          title: "Formazione e accesso del dipendente",
          items: [
            "Gestione dei corsi di formazione obbligatori in materia di sicurezza (D.Lgs. 81/08)",
            "Accesso online del lavoratore ai propri giudizi di idoneità",
            "Programmazione della partecipazione ai corsi",
          ],
        },
      ],
      roles: {
        strutture: "Il Medico Competente e la sua segreteria gestiscono visite, cartelle e giudizi.",
        cittadini: "Il dipendente consulta online i propri giudizi di idoneità e i corsi.",
      },
    },
    en: {
      expansion: "Employee Health Record",
      tagline: "Health surveillance of health authority staff.",
      summary:
        "Full digitisation of health surveillance for health authority employees, with dedicated functions for the office of the occupational and authorised physician.",
      context: {
        title: "Staff health surveillance",
        body: ["Legislative Decrees 81/2008 and 101/2020 govern the health surveillance of health authority staff."],
      },
      about: {
        title: "CA.SA",
        body: [
          "CA.SA digitises every activity related to employee health surveillance: from scheduling visits to the clinical record, through to graphometric signing of fitness assessments and mandatory training.",
        ],
      },
      features: [
        {
          title: "For the occupational physician",
          items: [
            "Registry of staff under health surveillance",
            "Calendar of medical visits and diagnostic tests",
            "Worker notification by e-mail",
            "Digital health record with the worker’s clinical history",
            "Signature of the fitness assessment by worker and physician on a graphometric tablet",
            "Delivery of the assessment to the employee, general manager and head of unit",
            "Visit scheduling based on the expiry of fitness assessments",
          ],
        },
        {
          title: "Training and employee access",
          items: [
            "Management of mandatory safety training (Legislative Decree 81/08)",
            "Online access for workers to their own fitness assessments",
            "Scheduling of course attendance",
          ],
        },
      ],
      roles: {
        strutture: "The occupational physician and their office manage visits, records and assessments.",
        cittadini: "Employees view their fitness assessments and courses online.",
      },
    },
  },
  {
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
  },

  // ─── 05 · Reti associative ─────────────────────────────────────────────
  {
    slug: "rete-avis",
    name: "ReteAVIS",
    family: "volontariato",
    hasPage: true,
    monogram: "AVIS",
    actors: ["comunita", "cittadini", "strutture"],
    related: ["spuv", "smart"],
    it: {
      expansion: "Piattaforma per la rete AVIS Puglia",
      tagline: "L’informatizzazione delle attività dell’associazione regionale Avis Puglia.",
      summary:
        "Il portale realizzato con Avis Puglia per ottimizzare la raccolta dati sui donatori volontari di sangue e il flusso di informazioni tra sedi associative e centri trasfusionali.",
      about: {
        title: "Cos’è ReteAVIS",
        body: [
          "ReteAVIS è il portale realizzato da Edinext per AVIS Puglia, l’associazione dei volontari donatori di sangue. Ha l’obiettivo di ottimizzare la raccolta dei dati relativi alle persone che donano il proprio sangue volontariamente, gratuitamente e anonimamente.",
          "I dati sono archiviati in un unico server centralizzato, gestito da Avis Puglia di concerto con Edinext.",
        ],
      },
      features: [
        {
          title: "Modulo per i donatori",
          lede: "Una web app utilizzabile da qualsiasi dispositivo, anche mobile.",
          items: [
            "Autenticazione all’accesso",
            "Anagrafe del donatore e relativo status",
            "Prenotazione, modifica e cancellazione dell’appuntamento alla donazione",
            "Sezione informativa, avvisi e annunci",
            "Notifiche push",
            "Moduli per le richieste di informazioni",
          ],
        },
        {
          title: "Modulo per la rete associativa",
          lede: "Per le sedi AVIS regionale, provinciali e comunali, con diversi livelli di accesso.",
          items: [
            "Gestione di utenti e profili della rete associativa",
            "Anagrafica donatori, collegata ove disponibile all’anagrafe regionale degli assistiti",
            "Consenso informato al trattamento dei dati",
            "Gestione di donazioni, benemerenze e soci",
            "Chiamata attiva e invio di notifiche push",
            "Agende appuntamenti per ogni singola sede",
          ],
        },
      ],
      roles: {
        cittadini: "I donatori prenotano la donazione e gestiscono il proprio profilo dallo smartphone.",
        comunita: "Le sedi comunali, provinciali e regionali organizzano chiamata attiva e agende.",
        strutture: "I centri trasfusionali scambiano dati con la rete tramite EmoPuglia.",
      },
      integrations: {
        title: "Cooperazione applicativa",
        items: [
          { label: "EmoPuglia", detail: "Piattaforma dei Centri Trasfusionali" },
          { label: "IAM regionale", detail: "Identity and Access Management" },
          { label: "Anagrafe regionale degli assistiti", detail: "Tramite servizi web, ove disponibile" },
        ],
      },
    },
    en: {
      expansion: "Platform for the AVIS Puglia network",
      tagline: "Digitising the activities of the regional association Avis Puglia.",
      summary:
        "The portal built with Avis Puglia to streamline data on voluntary blood donors and the flow of information between local branches and transfusion centres.",
      about: {
        title: "What ReteAVIS is",
        body: [
          "ReteAVIS is the portal Edinext built for AVIS Puglia, the association of voluntary blood donors. Its aim is to streamline the collection of data on people who donate blood voluntarily, freely and anonymously.",
          "Data is stored on a single centralised server, managed by Avis Puglia together with Edinext.",
        ],
      },
      features: [
        {
          title: "Donor module",
          lede: "A web app that works on any device, including mobile.",
          items: [
            "Secure log-in",
            "Donor registry and status",
            "Book, change and cancel donation appointments",
            "Information section, notices and announcements",
            "Push notifications",
            "Information request forms",
          ],
        },
        {
          title: "Association network module",
          lede: "For regional, provincial and municipal AVIS branches, with different access levels.",
          items: [
            "Management of users and profiles across the network",
            "Donor registry, linked where available to the regional patient registry",
            "Informed consent to data processing",
            "Management of donations, awards and members",
            "Active donor outreach and push notifications",
            "Appointment calendars for every branch",
          ],
        },
      ],
      roles: {
        cittadini: "Donors book their donation and manage their profile from a smartphone.",
        comunita: "Municipal, provincial and regional branches organise outreach and calendars.",
        strutture: "Transfusion centres exchange data with the network through EmoPuglia.",
      },
      integrations: {
        title: "Application cooperation",
        items: [
          { label: "EmoPuglia", detail: "Transfusion centres’ platform" },
          { label: "Regional IAM", detail: "Identity and Access Management" },
          { label: "Regional patient registry", detail: "Via web services, where available" },
        ],
      },
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function solutionsByFamily(family: FamilyId) {
  return solutions.filter((s) => s.family === family);
}

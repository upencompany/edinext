import { defineLocalized, type Localized } from "@/lib/i18n";

/**
 * Editorial copy for each page. Kept apart from components so it can be
 * moved to a CMS without touching presentation.
 */

export const home = defineLocalized({
  it: {
    metaTitle: "Edinext — Software per la prevenzione e la sanità territoriale",
    metaDescription:
      "Sistemi informativi per i Dipartimenti di Prevenzione delle ASL, le strutture sanitarie e sociosanitarie e le Regioni. Vent’anni di esperienza, sede a Lecce.",
    eyebrow: "Software per ASL, Regioni e strutture sanitarie",
    title: "Sistemi informativi per la prevenzione e la sanità del territorio.",
    titleLines: ["Sistemi informativi", "per la prevenzione", "e la sanità del territorio."],
    figureCaption: "Ogni linea è una relazione reale: un’applicazione Edinext e il gruppo di persone che la usa.",
    lede:
      "Edinext progetta, realizza e gestisce le applicazioni con cui i Dipartimenti di Prevenzione delle ASL, le strutture sanitarie, sociosanitarie e sociali e le Regioni governano processi complessi — e con cui cittadini e imprese dialogano con loro.",
    ctaPrimary: "Esplora l’ecosistema",
    ctaSecondary: "Parla con noi",
    facts: [
      { value: "30+", label: "Dipartimenti di Prevenzione delle ASL informatizzati" },
      { value: "20", label: "anni di esperienza nell’ICT per la Pubblica Amministrazione" },
      { value: "H24", label: "Help Desk per assistenza e manutenzione" },
    ],
    about: {
      label: "L’azienda",
      title: "Una software house di Lecce che conosce la prevenzione dall’interno.",
      body: [
        "Edinext S.r.l. opera nel settore ICT con un team di professionisti della progettazione e realizzazione di applicativi per la Pubblica Amministrazione e l’impresa.",
        "Il patrimonio di competenze accumulato in vent’anni di attività ne fa un riferimento nazionale per i sistemi informativi dei Dipartimenti di Prevenzione delle ASL.",
      ],
      link: "Chi siamo",
    },
    ecosystem: {
      label: "Ecosistema",
      title: "Chi lavora con le piattaforme Edinext.",
      lede:
        "Ogni applicazione mette in relazione persone e servizi diversi. Seleziona un gruppo per vedere quali sistemi usa e che cosa ci fa.",
      link: "Vedi tutte le soluzioni",
    },
    areas: {
      label: "Ambiti",
      title: "Cinque ambiti, un’unica architettura.",
      lede:
        "Le applicazioni Edinext sono modulari e indipendenti, ma progettate per integrarsi tra loro e con i sistemi già in uso negli enti.",
    },
    norms: {
      label: "Quadro normativo",
      title: "Dalla norma al sistema.",
      lede:
        "Ogni applicazione traduce un obbligo di legge in un processo digitale: chi deve comunicare cosa, a chi, entro quando. Ecco le norme a cui rispondono le piattaforme Edinext.",
    },
    services: {
      label: "Servizi",
      title: "Accanto all’ente in ogni fase del progetto.",
      lede:
        "Tenendo conto delle esigenze di ogni cliente, Edinext eroga servizi tecnici e professionali per supportare il personale dell’ente — dall’analisi organizzativa alla formazione, fino all’assistenza continuativa.",
      link: "Scopri i servizi",
    },
    projects: {
      label: "Progetti",
      title: "Sul territorio.",
      link: "Tutti i progetti",
    },
    quality: {
      label: "Qualità e legalità",
      title: "Processi certificati, condotta verificata.",
    },
    news: { label: "News", title: "Dall’azienda.", link: "Tutte le news" },
  },
  en: {
    metaTitle: "Edinext — Information systems for prevention and community healthcare",
    metaDescription:
      "Information systems for Italian health authority Prevention Departments, healthcare facilities and regions. Twenty years of experience, based in Lecce.",
    eyebrow: "Software for health authorities, regions and healthcare facilities",
    title: "Information systems for prevention and community healthcare.",
    titleLines: ["Information systems", "for prevention and", "community healthcare."],
    figureCaption: "Each line is a real relationship: an Edinext application and the group of people who use it.",
    lede:
      "Edinext designs, builds and runs the applications that Italian local health authorities’ Prevention Departments, healthcare and social-care facilities and regional governments use to manage complex processes — and through which citizens and businesses communicate with them.",
    ctaPrimary: "Explore the ecosystem",
    ctaSecondary: "Talk to us",
    facts: [
      { value: "30+", label: "health authority Prevention Departments digitised" },
      { value: "20", label: "years of experience in ICT for the public sector" },
      { value: "24/7", label: "help desk for support and maintenance" },
    ],
    about: {
      label: "The company",
      title: "A software house from Lecce that knows prevention from the inside.",
      body: [
        "Edinext S.r.l. works in ICT with a team of professionals who design and build applications for public administrations and businesses.",
        "Twenty years of accumulated expertise have made it a national reference for the information systems of health authority Prevention Departments.",
      ],
      link: "About us",
    },
    ecosystem: {
      label: "Ecosystem",
      title: "Who works with Edinext platforms.",
      lede: "Each application connects different people and services. Select a group to see which systems it uses and what for.",
      link: "See all solutions",
    },
    areas: {
      label: "Areas",
      title: "Five areas, one architecture.",
      lede: "Edinext applications are modular and independent, yet designed to integrate with each other and with the systems already in use.",
    },
    norms: {
      label: "Regulatory framework",
      title: "From regulation to system.",
      lede:
        "Each application turns a legal obligation into a digital process: who must communicate what, to whom, and by when. These are the regulations Edinext platforms respond to.",
    },
    services: {
      label: "Services",
      title: "Alongside the organisation at every stage.",
      lede:
        "Shaped around each client’s needs, Edinext provides technical and professional services that support the organisation’s staff — from organisational analysis to training and ongoing support.",
      link: "Discover our services",
    },
    projects: { label: "Projects", title: "On the ground.", link: "All projects" },
    quality: { label: "Quality and legality", title: "Certified processes, verified conduct." },
    news: { label: "News", title: "From the company.", link: "All news" },
  },
});

export const companyPage = defineLocalized({
  it: {
    metaTitle: "Chi siamo",
    metaDescription:
      "Edinext S.r.l., società ICT di Lecce: vent’anni di sistemi informativi per la PA e oltre 30 Dipartimenti di Prevenzione delle ASL informatizzati.",
    eyebrow: "Azienda",
    title: "Soluzioni semplici per gestire processi complessi.",
    lede:
      "Edinext S.r.l. è una società ICT composta da professionisti della progettazione e realizzazione di applicativi per la Pubblica Amministrazione e l’impresa. Il patrimonio di competenze accumulato in vent’anni ne fa un riferimento nazionale per i sistemi informativi dei Dipartimenti di Prevenzione delle ASL.",
    mission: {
      label: "Missione",
      title: "Ricercare per fornire ai clienti soluzioni semplici, integrate e complete.",
      items: [
        { title: "Soluzioni flessibili", body: "Applicazioni modulari, adattabili in tempi brevi all’organizzazione di ogni ente." },
        { title: "Qualità come standard", body: "Un sistema di gestione certificato ISO 9001:2015 guida ogni attività aziendale." },
        { title: "Ricerche personalizzate", body: "Report, griglie e grafici configurabili sui dati di ogni servizio." },
        { title: "Gestione della complessità", body: "Informazioni eterogenee, flussi tra enti diversi, normative in evoluzione." },
        { title: "Pianificazione strategica", body: "Ottimizzazione delle risorse, dall’analisi organizzativa all’affiancamento operativo." },
      ],
    },
    strengths: {
      label: "Punti di forza",
      items: [
        {
          title: "Know-how",
          body: "Con un’esperienza ventennale nella progettazione e realizzazione di soluzioni ICT per la Pubblica Amministrazione, Edinext ha informatizzato oltre 30 Dipartimenti di Prevenzione delle ASL.",
        },
        {
          title: "Qualità certificata",
          body: "Edinext opera con un sistema di conduzione aziendale conforme alla norma ISO 9001. Prestazioni, processi, procedure e persone sono analizzati rispetto a parametri di qualità riconosciuti a livello internazionale.",
        },
        {
          title: "Flessibilità e innovazione",
          body: "Edinext progetta, sviluppa e fornisce soluzioni semplici ed efficaci, ed eroga servizi per supportare il personale dell’ente in tutte le fasi di gestione di un progetto.",
        },
      ],
    },
    principles: {
      label: "Come costruiamo il software",
      title: "Ottimizzazione della produttività.",
      lede: "Le soluzioni Edinext migliorano l’efficienza e riducono i tempi per l’espletamento delle pratiche. Quattro principi tecnici lo rendono possibile.",
      items: [
        { title: "Applicazioni modulari", body: "La modularità di sviluppo delle applicazioni web consente di apportare in breve tempo modifiche e personalizzazioni." },
        { title: "Integrazione dei sistemi", body: "Ogni applicazione è realizzata per integrarsi con gli altri sistemi utilizzati dagli enti." },
        { title: "Velocità", body: "La rapidità delle operazioni di inserimento e modifica dei dati è garantita dalla potenza dei database Oracle." },
        { title: "Report e grafici flessibili", body: "Report e grafici dei dati inseriti si ottengono in modo semplice e rapido." },
      ],
    },
    place: {
      label: "Sede",
      title: "Lecce.",
      body: "Edinext ha sede a Lecce, in Via Marco Biagi 26. Da qui il team segue progettazione, sviluppo, formazione e assistenza.",
    },
  },
  en: {
    metaTitle: "About us",
    metaDescription:
      "Edinext S.r.l., an ICT company in Lecce, Italy: twenty years of public-sector information systems, more than 30 Prevention Departments digitised.",
    eyebrow: "Company",
    title: "Simple solutions for managing complex processes.",
    lede:
      "Edinext S.r.l. is an ICT company made up of professionals who design and build applications for public administrations and businesses. Twenty years of accumulated expertise have made it a national reference for the information systems of health authority Prevention Departments.",
    mission: {
      label: "Mission",
      title: "Research that gives clients simple, integrated and complete solutions.",
      items: [
        { title: "Flexible solutions", body: "Modular applications that adapt quickly to each organisation." },
        { title: "Quality as standard", body: "An ISO 9001:2015 certified management system guides every company activity." },
        { title: "Tailored searches", body: "Configurable reports, grids and charts on each service’s data." },
        { title: "Managing complexity", body: "Heterogeneous information, flows between different bodies, evolving regulation." },
        { title: "Strategic planning", body: "Optimised resources, from organisational analysis to on-the-job support." },
      ],
    },
    strengths: {
      label: "Strengths",
      items: [
        {
          title: "Know-how",
          body: "With twenty years of experience designing and building ICT solutions for the public sector, Edinext has digitised more than 30 health authority Prevention Departments.",
        },
        {
          title: "Certified quality",
          body: "Edinext runs a management system that complies with ISO 9001. Performance, processes, procedures and people are assessed against internationally recognised quality parameters.",
        },
        {
          title: "Flexibility and innovation",
          body: "Edinext designs, develops and delivers simple, effective solutions, and provides services that support the organisation’s staff at every stage of a project.",
        },
      ],
    },
    principles: {
      label: "How we build software",
      title: "Higher productivity.",
      lede: "Edinext solutions improve efficiency and cut the time needed to complete administrative procedures. Four technical principles make it possible.",
      items: [
        { title: "Modular applications", body: "Modular development of our web applications allows changes and customisations to be made quickly." },
        { title: "System integration", body: "Every application is built to integrate with the other systems the organisation uses." },
        { title: "Speed", body: "Fast data entry and editing, backed by the power of Oracle databases." },
        { title: "Flexible reports and charts", body: "Reports and charts on the data entered are simple and quick to produce." },
      ],
    },
    place: {
      label: "Location",
      title: "Lecce.",
      body: "Edinext is based at Via Marco Biagi 26, Lecce, Italy. From here the team handles design, development, training and support.",
    },
  },
});

export const servicesPage = defineLocalized({
  it: {
    metaTitle: "Servizi",
    metaDescription:
      "SaaS, Help Desk H24, reengineering dei processi, formazione, personalizzazione e aggiornamenti continui: i servizi Edinext per ASL, Regioni e strutture sanitarie.",
    eyebrow: "Servizi",
    title: "Il software è l’inizio. Il servizio è ciò che lo fa funzionare.",
    lede:
      "Tenendo conto delle esigenze specifiche di ogni cliente, Edinext eroga servizi tecnici e professionali finalizzati a supportare il personale dell’ente in tutte le fasi di gestione di un progetto.",
    cycleLabel: "Il ciclo di progetto",
    cycleTitle: "Dall’analisi organizzativa all’affiancamento operativo.",
    services: [
      {
        id: "reengineering",
        title: "Reengineering",
        summary: "Studio delle soluzioni e riprogettazione organica dei processi.",
        body: "Prima del software, il processo. Analizziamo come lavora il servizio, dove si perdono tempo e informazioni, e riprogettiamo i flussi in modo organico.",
      },
      {
        id: "customization",
        title: "Personalizzazione",
        summary: "Soluzioni adattate alle esigenze specifiche del cliente.",
        body: "La modularità delle applicazioni consente di adattarle in tempi brevi alla struttura organizzativa, ai modelli documentali e alle regole dell’ente.",
      },
      {
        id: "training",
        title: "Formazione",
        summary: "Affiancamento del personale e strumenti multimediali.",
        body: "Formiamo gli operatori con affiancamento diretto e sistemi multimediali, perché l’adozione del sistema sia effettiva e non solo formale.",
      },
      {
        id: "saas",
        title: "Software as a Service",
        summary: "Nessun onere di gestione dell’infrastruttura per l’ente.",
        body: "Il cliente è libero dagli oneri di gestione e manutenzione dell’infrastruttura hardware e software: Edinext eroga le applicazioni come servizio.",
      },
      {
        id: "helpdesk",
        title: "Help Desk H24",
        summary: "Assistenza e manutenzione dei sistemi informativi.",
        body: "Assistenza e manutenzione dei sistemi informativi, con un’offerta di servizi H24.",
      },
      {
        id: "updates",
        title: "Aggiornamenti continui",
        summary: "Test e rilasci costanti, allineati alle esigenze e alla normativa.",
        body: "Le applicazioni sono soggette a test e aggiornamenti continui per rispondere alle esigenze dei clienti.",
      },
    ],
    tech: {
      label: "Architettura",
      title: "Tecnologie solide, scelte per durare.",
      lede:
        "Le piattaforme Edinext poggiano su database Oracle e su un’architettura orientata alla cooperazione applicativa: servizi REST, integrazione con i sistemi regionali e nazionali, georeferenziazione dei dati.",
      layers: [
        { title: "Accesso", items: ["Web app per operatori", "Web app per cittadini e imprese, anche da mobile", "IAM regionale, SPID"] },
        { title: "Applicazione", items: ["Oracle APEX", "ORDS", "Servizi REST"] },
        { title: "Dati", items: ["Oracle Database", "Oracle RAC e Data Guard", "Ambienti on-premise e Oracle Cloud Infrastructure"] },
        { title: "Integrazione", items: ["FSE, CUP, anagrafi regionali", "AVN, flussi ministeriali, INAIL", "pagoPA", "Web-GIS"] },
      ],
      note: "Esempio documentato: l’architettura della piattaforma ReteAVIS.",
    },
  },
  en: {
    metaTitle: "Services",
    metaDescription:
      "SaaS, 24/7 help desk, process reengineering, training, customisation and continuous updates for health authorities, regions and facilities.",
    eyebrow: "Services",
    title: "Software is the start. Service is what makes it work.",
    lede:
      "Shaped around the specific needs of each client, Edinext provides technical and professional services to support the organisation’s staff at every stage of a project.",
    cycleLabel: "The project cycle",
    cycleTitle: "From organisational analysis to on-the-job support.",
    services: [
      {
        id: "reengineering",
        title: "Reengineering",
        summary: "Solution design and comprehensive process redesign.",
        body: "Process comes before software. We analyse how the service works, where time and information are lost, and redesign the flows as a whole.",
      },
      {
        id: "customization",
        title: "Customisation",
        summary: "Solutions adapted to each client’s specific needs.",
        body: "Modular applications can be quickly adapted to the organisation’s structure, document templates and rules.",
      },
      {
        id: "training",
        title: "Training",
        summary: "On-the-job support and multimedia tools.",
        body: "We train staff through direct support and multimedia tools, so the system is genuinely adopted rather than just installed.",
      },
      {
        id: "saas",
        title: "Software as a Service",
        summary: "No infrastructure management burden for the organisation.",
        body: "Clients are freed from managing and maintaining hardware and software infrastructure: Edinext delivers its applications as a service.",
      },
      {
        id: "helpdesk",
        title: "24/7 help desk",
        summary: "Support and maintenance for information systems.",
        body: "Support and maintenance of information systems, with a round-the-clock service offering.",
      },
      {
        id: "updates",
        title: "Continuous updates",
        summary: "Constant testing and releases, aligned with needs and regulation.",
        body: "Our applications are continuously tested and updated to respond to clients’ needs.",
      },
    ],
    tech: {
      label: "Architecture",
      title: "Solid technology, chosen to last.",
      lede:
        "Edinext platforms run on Oracle databases and an architecture built for application cooperation: REST services, integration with regional and national systems, and geolocated data.",
      layers: [
        { title: "Access", items: ["Web apps for staff", "Web apps for citizens and businesses, mobile included", "Regional IAM, SPID"] },
        { title: "Application", items: ["Oracle APEX", "ORDS", "REST services"] },
        { title: "Data", items: ["Oracle Database", "Oracle RAC and Data Guard", "On-premise and Oracle Cloud Infrastructure"] },
        { title: "Integration", items: ["Health records, booking, regional registries", "AVN, ministerial flows, INAIL", "pagoPA", "Web-GIS"] },
      ],
      note: "Documented example: the architecture of the ReteAVIS platform.",
    },
  },
});

export const compliancePage = defineLocalized({
  it: {
    metaTitle: "Compliance — Certificazioni e rating di legalità",
    metaDescription:
      "Il sistema di gestione per la qualità ISO 9001:2015, la politica per la parità di genere UNI/PdR 125:2022 e il rating di legalità attribuito dall’AGCM a Edinext.",
    eyebrow: "Compliance",
    title: "Qualità, parità, legalità.",
    lede:
      "Chi affida a Edinext i sistemi informativi di un servizio sanitario pubblico deve poter verificare come l’azienda lavora. Qui sono raccolti gli impegni e i documenti che lo attestano.",
    iso: {
      title: "ISO 9001:2015",
      subtitle: "Sistema di gestione per la qualità",
      body: [
        "Edinext adotta da tempo un sistema di gestione della qualità conforme alla norma ISO 9001:2015. La norma fornisce indicazioni precise su come operare per ottenere la soddisfazione dei clienti e mantenere una politica aziendale orientata al miglioramento continuo.",
        "Con la creazione del Sistema Qualità e la sua certificazione, la Direzione assicura ai clienti che tutte le attività aziendali sono condotte in modo coerente con la loro piena soddisfazione.",
      ],
      reference: "Riferimento",
      download: "Scarica la Politica per la qualità",
    },
    pdr: {
      title: "UNI/PdR 125:2022",
      subtitle: "Parità di genere",
      body: [
        "Edinext si impegna a promuovere e sostenere la parità di genere in ogni aspetto delle proprie attività. Un ambiente di lavoro inclusivo, in cui ogni persona ha pari opportunità di crescita e sviluppo, è fondamentale per il successo dell’azienda.",
        "Le decisioni relative ad assunzione, promozione e retribuzione sono prese in modo equo e imparziale, all’interno di una cultura aziendale che valorizza la diversità e rispetta la dignità di ogni persona.",
      ],
      download: "Scarica la Politica per la parità di genere",
    },
    legality: {
      title: "Rating di legalità",
      subtitle: "Autorità Garante della Concorrenza e del Mercato",
      body: [
        "Nel 2024 Edinext ha ottenuto il rating di legalità, lo strumento che promuove l’introduzione di principi di comportamento etico in ambito aziendale e consente di valutare l’attenzione riposta nella corretta gestione del business.",
      ],
      awarded: "Attribuito nell’adunanza AGCM del",
      score: "Punteggio",
      download: "Scarica la comunicazione AGCM",
    },
    documents: "Documenti",
  },
  en: {
    metaTitle: "Compliance — Certifications and legality rating",
    metaDescription:
      "Edinext’s ISO 9001:2015 quality system, UNI/PdR 125:2022 gender equality policy and the legality rating awarded by the Italian Competition Authority.",
    eyebrow: "Compliance",
    title: "Quality, equality, legality.",
    lede:
      "Anyone entrusting Edinext with the information systems of a public health service should be able to check how the company works. Here are the commitments and documents that show it.",
    iso: {
      title: "ISO 9001:2015",
      subtitle: "Quality management system",
      body: [
        "Edinext has long operated a quality management system that complies with ISO 9001:2015. The standard sets out precisely how to work to achieve customer satisfaction and maintain a company policy focused on continuous improvement.",
        "By establishing and certifying its Quality System, management assures clients that every company activity is conducted with their full satisfaction in mind.",
      ],
      reference: "Reference",
      download: "Download the Quality Policy (Italian)",
    },
    pdr: {
      title: "UNI/PdR 125:2022",
      subtitle: "Gender equality",
      body: [
        "Edinext is committed to promoting and supporting gender equality in every aspect of its operations. An inclusive workplace, where everyone has equal opportunities to grow and develop, is fundamental to the company’s success.",
        "Decisions on hiring, promotion and pay are made fairly and impartially, within a company culture that values diversity and respects the dignity of every person.",
      ],
      download: "Download the Gender Equality Policy (Italian)",
    },
    legality: {
      title: "Legality rating",
      subtitle: "Italian Competition Authority (AGCM)",
      body: [
        "In 2024 Edinext obtained the legality rating, the instrument that promotes ethical principles in business conduct and makes it possible to assess the attention a company pays to running its business correctly.",
      ],
      awarded: "Awarded at the AGCM meeting of",
      score: "Score",
      download: "Download the AGCM notice (Italian)",
    },
    documents: "Documents",
  },
});

export const careersPage = defineLocalized({
  it: {
    metaTitle: "Lavora con noi",
    metaDescription: "Posizioni aperte in Edinext, Lecce. Progettiamo sistemi informativi per la sanità pubblica.",
    eyebrow: "Lavora con noi",
    title: "Software che serve a chi si prende cura degli altri.",
    lede:
      "In Edinext si progettano i sistemi con cui lavorano ogni giorno tecnici della prevenzione, medici, operatori sanitari e uffici regionali. Se ti interessa costruire software pubblico solido, scrivici.",
    open: "Posizioni aperte",
    none: "Al momento non ci sono posizioni aperte. Puoi comunque inviare una candidatura spontanea.",
    spontaneous: {
      title: "Candidatura spontanea",
      body: "Invia il tuo CV a info@edinext.it indicando nell’oggetto l’area di interesse.",
    },
    details: "Dettagli della posizione",
  },
  en: {
    metaTitle: "Careers",
    metaDescription: "Open positions at Edinext, Lecce. We design information systems for public healthcare.",
    eyebrow: "Careers",
    title: "Software for the people who take care of others.",
    lede:
      "At Edinext we design the systems that prevention technicians, physicians, healthcare staff and regional offices use every day. If you want to build solid public-sector software, get in touch.",
    open: "Open positions",
    none: "There are no open positions at the moment. You can still send a spontaneous application.",
    spontaneous: {
      title: "Spontaneous application",
      body: "Send your CV to info@edinext.it, stating your area of interest in the subject line.",
    },
    details: "Position details",
  },
});

export const contactPage = defineLocalized({
  it: {
    metaTitle: "Contatti",
    metaDescription: "Contatta Edinext: Via Marco Biagi 26, 73100 Lecce. Telefono 0832 242649, e-mail info@edinext.it.",
    eyebrow: "Contatti",
    title: "Ci siamo, ogni volta che hai bisogno di noi.",
    lede: "Per informazioni sulle soluzioni, consulenza o assistenza, scrivici o chiamaci. Rispondiamo dal lunedì al venerdì.",
    channels: { email: "E-mail", pec: "PEC", phone: "Telefono", hours: "Orari", address: "Indirizzo", directions: "Indicazioni stradali" },
    form: {
      title: "Scrivici",
      name: "Nome e cognome",
      organisation: "Ente o azienda",
      email: "E-mail",
      phone: "Telefono",
      topic: "Motivo del contatto",
      topics: ["Informazioni sui prodotti", "Consulenza", "Assistenza", "Altro"],
      message: "Messaggio",
      optional: "facoltativo",
      privacy: "Ho letto l’informativa sulla privacy e acconsento al trattamento dei dati inseriti per essere ricontattato.",
      privacyLink: "Informativa sulla privacy",
      submit: "Invia messaggio",
      sending: "Invio in corso…",
      success: "Grazie. Il messaggio è stato inviato: ti risponderemo al più presto.",
      unavailable: "Il modulo non è al momento disponibile. Scrivici direttamente a",
      error: "Non è stato possibile inviare il messaggio. Riprova o scrivici a",
      required: "Campo obbligatorio",
      invalidEmail: "Inserisci un indirizzo e-mail valido",
      errorsSummary: "Controlla i campi evidenziati",
    },
  },
  en: {
    metaTitle: "Contact",
    metaDescription: "Contact Edinext: Via Marco Biagi 26, 73100 Lecce, Italy. Phone +39 0832 242649, e-mail info@edinext.it.",
    eyebrow: "Contact",
    title: "We’re here whenever you need us.",
    lede: "For information on our solutions, consultancy or support, write or call us. We answer Monday to Friday.",
    channels: { email: "E-mail", pec: "Certified e-mail (PEC)", phone: "Phone", hours: "Hours", address: "Address", directions: "Get directions" },
    form: {
      title: "Write to us",
      name: "Full name",
      organisation: "Organisation",
      email: "E-mail",
      phone: "Phone",
      topic: "Reason for contact",
      topics: ["Product information", "Consultancy", "Support", "Other"],
      message: "Message",
      optional: "optional",
      privacy: "I have read the privacy notice and consent to the processing of this data so that I can be contacted.",
      privacyLink: "Privacy notice",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you. Your message has been sent and we will reply as soon as possible.",
      unavailable: "The form is not available right now. Please write to us directly at",
      error: "Your message could not be sent. Please try again or write to",
      required: "Required field",
      invalidEmail: "Enter a valid e-mail address",
      errorsSummary: "Please check the highlighted fields",
    },
  },
});

export const privacyPage: Localized<{
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  sections: { title: string; body: string[] }[];
  note?: string;
}> = {
  it: {
    metaTitle: "Informativa sulla privacy",
    metaDescription: "Come Edinext S.r.l. tratta i dati personali raccolti tramite il sito edinext.it e il modulo di contatto: finalità, conservazione, cookie e diritti.",
    title: "Informativa sulla privacy",
    updated: "Informativa relativa al sito web edinext.it",
    sections: [
      {
        title: "Titolare del trattamento",
        body: [
          "Edinext S.r.l., Via Marco Biagi 26, 73100 Lecce — Partita IVA 04388090757. Per qualsiasi richiesta relativa ai dati personali: info@edinext.it.",
        ],
      },
      {
        title: "Dati raccolti tramite il modulo di contatto",
        body: [
          "Quando i visitatori inviano un messaggio tramite il modulo Contatti, raccogliamo i dati inseriti al solo fine di ricontattarli, ove richiesto. Dopo un periodo di un mese i dati vengono cancellati dai nostri archivi.",
          "I messaggi inviati tramite il modulo possono essere controllati attraverso un servizio di rilevamento automatico dello spam, che utilizza l’indirizzo IP del visitatore e la stringa dello user agent del browser.",
        ],
      },
      {
        title: "Cookie",
        body: [
          "Questo sito non utilizza cookie di profilazione né strumenti di tracciamento di terze parti. Possono essere impiegati esclusivamente cookie tecnici necessari al funzionamento del sito.",
        ],
      },
      {
        title: "Contenuti incorporati da altri siti",
        body: [
          "Le pagine possono includere collegamenti o contenuti provenienti da altri siti web (ad esempio mappe o documenti). I contenuti incorporati si comportano come se il visitatore avesse visitato direttamente l’altro sito, che può raccogliere dati, usare cookie e monitorare l’interazione.",
        ],
      },
      {
        title: "Quali diritti hai sui tuoi dati",
        body: [
          "Puoi richiedere in qualsiasi momento l’accesso ai dati personali che ti riguardano, la loro rettifica o cancellazione, scrivendo a info@edinext.it. Sono esclusi i dati che siamo obbligati a conservare per scopi amministrativi, legali o di sicurezza.",
        ],
      },
    ],
  },
  en: {
    metaTitle: "Privacy notice",
    metaDescription: "How Edinext S.r.l. processes personal data collected through the edinext.it website and contact form: purposes, retention, cookies and rights.",
    title: "Privacy notice",
    updated: "Notice for the edinext.it website",
    note: "This is an English translation provided for convenience. The Italian version is the reference text.",
    sections: [
      {
        title: "Data controller",
        body: ["Edinext S.r.l., Via Marco Biagi 26, 73100 Lecce, Italy — VAT no. IT04388090757. For any request regarding personal data: info@edinext.it."],
      },
      {
        title: "Data collected through the contact form",
        body: [
          "When visitors send a message through the contact form, we collect the data entered solely to reply to them where requested. After one month the data is deleted from our records.",
          "Messages sent through the form may be checked by an automated spam detection service, which uses the visitor’s IP address and browser user agent string.",
        ],
      },
      {
        title: "Cookies",
        body: ["This website does not use profiling cookies or third-party tracking tools. Only technical cookies required for the site to work may be used."],
      },
      {
        title: "Embedded content from other websites",
        body: [
          "Pages may include links to or content from other websites (for example maps or documents). Embedded content behaves as if the visitor had visited the other website directly, which may collect data, use cookies and monitor interaction.",
        ],
      },
      {
        title: "Your rights over your data",
        body: [
          "You may request access to, correction or deletion of your personal data at any time by writing to info@edinext.it. This excludes data we are required to keep for administrative, legal or security purposes.",
        ],
      },
    ],
  },
};

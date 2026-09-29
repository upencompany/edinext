import type { NewsArticle } from "./types";

/** Articles published on edinext.it, newest first. */
export const news: NewsArticle[] = [
  {
    slug: "oracle-dba-senior-lecce",
    date: "2026-02-13",
    kind: "job",
    it: {
      title: "Oracle DBA Senior",
      category: "Posizioni aperte",
      excerpt:
        "Cerchiamo un Oracle Database Administrator Senior con esperienza in ambienti mission-critical e in contesti ibridi on-premise e cloud. Sede di Lecce, tempo indeterminato.",
      body: [
        { type: "h2", text: "Chi cerchiamo" },
        {
          type: "p",
          text: "Ricerchiamo un Oracle Database Administrator Senior con esperienza consolidata nella gestione di ambienti mission-critical e competenze in contesti ibridi on-premise e cloud.",
        },
        {
          type: "p",
          text: "La risorsa sarà coinvolta nella gestione operativa quotidiana delle infrastrutture Oracle e in progetti di migrazione verso e da Oracle Cloud Infrastructure (OCI).",
        },
        {
          type: "facts",
          items: [
            { label: "Sede", value: "Lecce" },
            { label: "Contratto", value: "Tempo indeterminato" },
          ],
        },
        { type: "h2", text: "Responsabilità principali" },
        {
          type: "list",
          items: [
            "Amministrazione e gestione dei database Oracle",
            "Configurazione e gestione di ambienti Oracle RAC e Data Guard",
            "Gestione di backup e recovery",
            "Monitoraggio delle performance e attività di tuning",
            "Installazione, patching e upgrade di Oracle Database",
            "Progettazione e gestione delle migrazioni on-premise → OCI e OCI → on-premise",
            "Installazione e configurazione di Oracle APEX",
            "Supporto alla definizione di architetture ibride",
            "Collaborazione con il team infrastrutturale e sicurezza",
          ],
        },
        { type: "h2", text: "Candidatura" },
        { type: "p", text: "Invia il tuo CV a info@edinext.it indicando nell’oggetto: Candidatura Oracle DBA Senior." },
      ],
    },
    en: {
      title: "Senior Oracle DBA",
      category: "Open positions",
      excerpt:
        "We are looking for a Senior Oracle Database Administrator with experience of mission-critical environments and hybrid on-premise and cloud contexts. Based in Lecce, permanent contract.",
      body: [
        { type: "h2", text: "Who we are looking for" },
        {
          type: "p",
          text: "We are looking for a Senior Oracle Database Administrator with solid experience managing mission-critical environments and skills in hybrid on-premise and cloud contexts.",
        },
        {
          type: "p",
          text: "The role covers day-to-day operation of Oracle infrastructure and migration projects to and from Oracle Cloud Infrastructure (OCI).",
        },
        {
          type: "facts",
          items: [
            { label: "Location", value: "Lecce, Italy" },
            { label: "Contract", value: "Permanent" },
          ],
        },
        { type: "h2", text: "Main responsibilities" },
        {
          type: "list",
          items: [
            "Administration and management of Oracle databases",
            "Configuration and management of Oracle RAC and Data Guard environments",
            "Backup and recovery",
            "Performance monitoring and tuning",
            "Installation, patching and upgrades of Oracle Database",
            "Design and management of migrations on-premise → OCI and OCI → on-premise",
            "Installation and configuration of Oracle APEX",
            "Support in defining hybrid architectures",
            "Collaboration with the infrastructure and security team",
          ],
        },
        { type: "h2", text: "How to apply" },
        { type: "p", text: "Send your CV to info@edinext.it with the subject line: Candidatura Oracle DBA Senior." },
      ],
    },
  },
  {
    slug: "reteavis-il-portale-per-la-gestione-delle-attivita-dei-volontari-donatori-di-sangue",
    date: "2024-11-09",
    kind: "product",
    solutions: ["rete-avis"],
    it: {
      title: "ReteAVIS, il portale per la gestione delle attività dei volontari donatori di sangue",
      metaTitle: "ReteAVIS, il portale per i donatori di sangue di Avis Puglia",
      category: "Applicazioni web",
      excerpt:
        "ReteAVIS è la nuova piattaforma web realizzata da Edinext per la digitalizzazione delle attività di Avis Puglia, l’associazione dei volontari donatori di sangue del territorio pugliese.",
      body: [
        {
          type: "p",
          text: "ReteAVIS è la nuova piattaforma web per la digitalizzazione delle attività di Avis Puglia, l’associazione dei volontari donatori di sangue del territorio pugliese.",
        },
        {
          type: "p",
          text: "Realizzata da Edinext S.r.l. insieme ad Avis Puglia, ReteAVIS consentirà di informatizzare in un unico portale l’intero flusso delle attività dell’associazione, a livello comunale, provinciale e regionale, per il reclutamento dei volontari e la partecipazione alle giornate programmate di donazione.",
        },
        {
          type: "p",
          text: "Grazie all’esperienza maturata nello sviluppo di sistemi informativi per i Dipartimenti di Prevenzione delle ASL, Edinext ha realizzato ReteAVIS con l’obiettivo di ottimizzare il flusso di informazioni tra le diverse sedi AVIS del territorio e i centri trasfusionali.",
        },
        {
          type: "p",
          text: "In particolare, la nuova applicazione web consentirà lo scambio di dati con la piattaforma EmoPuglia, in uso presso i Centri Trasfusionali, per ottimizzare le attività delle reti associative di Avis sull’intero territorio regionale.",
        },
      ],
    },
    en: {
      title: "ReteAVIS, the portal for managing the activities of voluntary blood donors",
      metaTitle: "ReteAVIS, the portal for Avis Puglia blood donors",
      category: "Web applications",
      excerpt:
        "ReteAVIS is the new web platform built by Edinext to digitise the activities of Avis Puglia, the association of voluntary blood donors in the Puglia region.",
      body: [
        {
          type: "p",
          text: "ReteAVIS is the new web platform for digitising the activities of Avis Puglia, the association of voluntary blood donors in the Puglia region.",
        },
        {
          type: "p",
          text: "Built by Edinext S.r.l. together with Avis Puglia, ReteAVIS will bring the association’s entire workflow into a single portal — at municipal, provincial and regional level — for recruiting volunteers and taking part in scheduled donation days.",
        },
        {
          type: "p",
          text: "Drawing on its experience developing information systems for the Prevention Departments of local health authorities, Edinext built ReteAVIS to streamline the flow of information between AVIS branches and transfusion centres.",
        },
        {
          type: "p",
          text: "In particular, the new web application will exchange data with EmoPuglia, the platform used by transfusion centres, to optimise the work of Avis networks across the whole region.",
        },
      ],
    },
  },
  {
    slug: "sicurezza-nei-cantieri-con-la-piattaforma-clicnol-di-edinext",
    date: "2017-07-19",
    kind: "press",
    solutions: ["nol"],
    source: { name: "Il Sole 24 Ore", date: { it: "18 luglio 2017", en: "18 July 2017" } },
    image: {
      src: "/media/ponteggio-cantiere.jpg",
      width: 650,
      height: 341,
      alt: {
        it: "Operai su un ponteggio in controluce",
        en: "Workers on scaffolding, silhouetted against the sky",
      },
      credit: "Il Sole 24 Ore",
    },
    it: {
      title: "Da Il Sole 24 Ore — Sicurezza nei cantieri: Taranto si candida a modello con la piattaforma NOL di Edinext",
      metaTitle: "Il Sole 24 Ore: sicurezza nei cantieri a Taranto con NOL",
      category: "Rassegna stampa",
      excerpt:
        "NOL è l’applicazione web di Edinext per la comunicazione in tempo reale dell’avvio lavori nei cantieri e la condivisione delle informazioni tra gli enti per ispezioni e controlli.",
      body: [
        { type: "p", text: "Da Il Sole 24 Ore del 18 luglio 2017." },
        {
          type: "p",
          text: "A Taranto l’edilizia fa passi avanti per la sicurezza del lavoro nei cantieri: si registra il maggior numero di visite in cantiere effettuate in Puglia, un’attività che assicura assistenza e consulenza alle imprese sugli adempimenti necessari a tutelare i lavoratori e a rispettare le norme.",
        },
        { type: "h2", text: "I vantaggi della comunicazione online di avvio lavori" },
        {
          type: "p",
          text: "A Taranto è attivo il sistema di notifiche online per le comunicazioni di avvio lavori nei cantieri. Ne derivano un vantaggio economico per i committenti e una gestione più efficace della pratica da parte degli enti di controllo, a partire da Ispettorato del Lavoro e Spesal ASL.",
        },
        {
          type: "quote",
          text: "Nel 2016 abbiamo ricevuto 1.860 notifiche di avvio lavori e quindi altrettante raccomandate e migliaia di fogli di carta da gestire e archiviare. Adesso la notifica arriva in tempo reale a Spesal Asl e Ispettorato territoriale del Lavoro.",
          cite: "Cosimo Scarnera, direttore Spesal ASL",
        },
        { type: "h2", text: "L’applicazione NOL di Edinext per la sicurezza nei cantieri" },
        { type: "p", text: "NOL è il sistema telematico messo a punto da Edinext che consente di conseguire importanti vantaggi:" },
        {
          type: "list",
          items: [
            "comunicazione in tempo reale dell’avvio lavori",
            "condivisione delle informazioni tra gli enti deputati a ispezioni e controlli",
            "risparmio economico e di tempo per i committenti",
          ],
        },
        {
          type: "quote",
          text: "L’informatizzazione delle notifiche facilita il lavoro degli enti di controllo ai quali è affidato il compito di verificare che nei cantieri tutto si svolga nel rispetto delle regole e della trasparenza.",
          cite: "Fabio De Bartolomeo, presidente del Formedil — Comitato paritetico territoriale Taranto",
        },
      ],
    },
    en: {
      title: "From Il Sole 24 Ore — Construction-site safety: Taranto as a model with Edinext’s NOL platform",
      metaTitle: "Il Sole 24 Ore: construction-site safety in Taranto with NOL",
      category: "Press",
      excerpt:
        "NOL is Edinext’s web application for real-time notification of construction start-up and for sharing information between inspection bodies.",
      body: [
        { type: "p", text: "From Il Sole 24 Ore, 18 July 2017 (summary in English)." },
        {
          type: "p",
          text: "In Taranto, the construction sector is making progress on workplace safety: the province records the highest number of site visits in Puglia, an activity that provides businesses with assistance and advice on the measures needed to protect workers and comply with the rules.",
        },
        { type: "h2", text: "The benefits of online start-of-work notifications" },
        {
          type: "p",
          text: "Taranto has an online notification system for construction start-up. This brings savings for clients and more effective case handling for inspection bodies, starting with the Labour Inspectorate and the health authority’s SPESAL.",
        },
        {
          type: "quote",
          text: "In 2016 we received 1,860 start-of-work notifications — as many registered letters and thousands of sheets of paper to handle and archive. Now the notification reaches SPESAL and the Territorial Labour Inspectorate in real time.",
          cite: "Cosimo Scarnera, director of SPESAL, local health authority (translated)",
        },
        { type: "h2", text: "Edinext’s NOL application for site safety" },
        { type: "p", text: "NOL is the online system developed by Edinext, delivering significant benefits:" },
        {
          type: "list",
          items: [
            "real-time notification of the start of work",
            "information shared between the bodies responsible for inspections",
            "savings in time and money for clients",
          ],
        },
        {
          type: "quote",
          text: "Digitising notifications makes the job easier for the inspection bodies responsible for checking that everything on site complies with the rules and is transparent.",
          cite: "Fabio De Bartolomeo, president of Formedil — Taranto joint territorial committee (translated)",
        },
      ],
    },
  },
  {
    slug: "amianto-il-servizio-on-line-clicnola-consente-ad-aziende-e-cittadini-di-dialogare-con-lo-spesal",
    date: "2017-07-04",
    kind: "press",
    solutions: ["nola"],
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
      title: "Amianto, presentato il servizio online ClicNoLa che consente a cittadini e aziende di dialogare con lo SPESAL",
      metaTitle: "Amianto: ClicNoLa, lo sportello online tra SPESAL e imprese",
      category: "Applicazioni web",
      excerpt:
        "NOLA è l’applicazione sviluppata da Edinext per la gestione online delle comunicazioni previste dal D.Lgs. 81/08 per la rimozione e lo smaltimento dell’amianto.",
      body: [
        {
          type: "p",
          text: "Le aziende e i cittadini che hanno a che fare con l’amianto potranno dialogare online con lo SPESAL della ASL Lecce.",
        },
        {
          type: "p",
          text: "Si chiama ClicNoLa ed è un’applicazione sviluppata come servizio web per la gestione online delle comunicazioni previste dal D.Lgs. 81/08 (Testo Unico in materia di sicurezza sul lavoro) per la rimozione o la raccolta di materiale contenente amianto.",
        },
        {
          type: "p",
          text: "Il servizio è stato presentato martedì 4 luglio 2017 nella sala riunioni del Dipartimento di Prevenzione della ASL Lecce. Il direttore del Dipartimento, dott. Giovanni De Filippis, ha illustrato il nuovo programma di gestione delle attività, con approfondimenti sul Piano Regionale Amianto (A. Tommasi, Regione Puglia), sui flussi informativi in tema di amianto (N. Dipalma, ASL BAT) e sullo Sportello Informativo Amianto (M. Matarrelli, SPESAL ASL Lecce).",
        },
        {
          type: "p",
          text: "Edinext, software house che ha sviluppato l’applicativo, ha presentato al pubblico e agli addetti ai lavori la piattaforma NOLA e le possibilità di interazione con il nuovo servizio.",
        },
        { type: "h2", text: "Integrazione con ClicPrevenzione" },
        {
          type: "p",
          text: "L’integrazione tra ClicPrevenzione e il modulo NOLA, che gestisce le pratiche e funge da interfaccia attiva con le imprese, consente un’interazione diretta e tempi più rapidi. Uno strumento per dialogare e velocizzare le pratiche, inserito nel quadro normativo del Piano Regionale Amianto approvato dalla Regione Puglia.",
        },
        {
          type: "p",
          text: "Sul portale della ASL Lecce, tra i servizi online, sono disponibili i collegamenti allo Sportello Informativo Amianto, con una sezione per i cittadini e una parte operativa per le aziende che rimanda direttamente all’applicativo NOLA.",
        },
        { type: "h2", text: "Lo Sportello Informativo Amianto" },
        {
          type: "p",
          text: "Il Dipartimento di Prevenzione della ASL Lecce ha istituito un gruppo di lavoro interdisciplinare per approfondire gli aspetti interpretativi della norma e contribuire all’attuazione del piano regionale. Tra gli obblighi previsti, il cittadino deve segnalare la detenzione o la presenza di manufatti contenenti amianto attraverso schede informatiche di autonotifica; per questo lo SPESAL ha istituito uno sportello informativo con numero verde e un tecnico della prevenzione a disposizione di cittadini, lavoratori esposti ed ex esposti.",
        },
        {
          type: "p",
          text: "Lo SPESAL ASL Lecce è stato individuato dalla Regione Puglia come capofila del progetto pilota NOLA, che consentirà a tutte le ASL regionali di adottare l’applicativo.",
        },
      ],
    },
    en: {
      title: "Asbestos: ClicNoLa online service lets citizens and businesses communicate with SPESAL",
      metaTitle: "Asbestos: ClicNoLa, the online desk for SPESAL and businesses",
      category: "Web applications",
      excerpt:
        "NOLA is the application developed by Edinext to manage online the communications required by Legislative Decree 81/08 for the removal and disposal of asbestos.",
      body: [
        {
          type: "p",
          text: "Businesses and citizens dealing with asbestos can now communicate online with the SPESAL service of the Lecce local health authority (ASL Lecce).",
        },
        {
          type: "p",
          text: "The service is called ClicNoLa: a web application for managing online the communications required by Legislative Decree 81/08 (the Consolidated Act on workplace safety) for the removal or collection of asbestos-containing material.",
        },
        {
          type: "p",
          text: "The service was presented on Tuesday 4 July 2017 at the Prevention Department of ASL Lecce. The head of the Department, Dr Giovanni De Filippis, introduced the new activity management programme, with contributions on the Regional Asbestos Plan (A. Tommasi, Puglia Region), asbestos information flows (N. Dipalma, ASL BAT) and the Asbestos Information Desk (M. Matarrelli, SPESAL ASL Lecce).",
        },
        {
          type: "p",
          text: "Edinext, the software house that developed the application, presented the NOLA platform to the public and to professionals, together with the ways it interacts with the new service.",
        },
        { type: "h2", text: "Integration with ClicPrevenzione" },
        {
          type: "p",
          text: "Integration between ClicPrevenzione and the NOLA module — which manages cases and acts as an active interface with businesses — enables direct interaction and faster processing, within the framework of the Regional Asbestos Plan approved by the Puglia Region.",
        },
        {
          type: "p",
          text: "The ASL Lecce website links to the Asbestos Information Desk, with a section for citizens and an operational section for businesses that leads directly to NOLA.",
        },
        { type: "h2", text: "The Asbestos Information Desk" },
        {
          type: "p",
          text: "The ASL Lecce Prevention Department set up an interdisciplinary working group to examine how the rules should be interpreted and help implement the regional plan. Citizens are required to report possession or presence of asbestos-containing items through online self-notification forms; SPESAL therefore set up an information desk with a free phone number and a prevention technician available to citizens and to exposed or formerly exposed workers.",
        },
        {
          type: "p",
          text: "SPESAL ASL Lecce was chosen by the Puglia Region to lead the NOLA pilot project, which will allow every health authority in the region to adopt the application.",
        },
      ],
    },
  },
];

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug);
}

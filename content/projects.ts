import type { Project } from "./types";

/**
 * Documented deployments. Each case is built exclusively from articles and
 * product pages published by Edinext; the `news` field links to the sources.
 */
export const projects: Project[] = [
  {
    slug: "reteavis-avis-puglia",
    year: 2024,
    solutions: ["rete-avis"],
    news: ["reteavis-il-portale-per-la-gestione-delle-attivita-dei-volontari-donatori-di-sangue"],
    it: {
      title: "Una rete regionale per i donatori di sangue",
      client: "Avis Puglia",
      place: "Puglia",
      summary:
        "Un unico portale per l’intero flusso delle attività associative — comunale, provinciale e regionale — progettato insieme ad Avis Puglia e collegato ai centri trasfusionali.",
      context: [
        "Il contesto associativo mostrava diverse criticità nella chiamata attiva del donatore e nell’individuazione del campione bersaglio di ogni campagna di donazione.",
        "Serviva inoltre un quadro donazionale aggiornato, per evitare errori nella gestione manuale delle informazioni e contatti inutili o inopportuni con i volontari.",
      ],
      solution: [
        "In collaborazione con Avis Puglia è stato progettato un modello che considera le peculiarità del contesto e tutti gli attori che vi operano: associazioni di volontariato, Aziende Sanitarie, Centri Trasfusionali Regionali, Centro regionale sangue e la visione di Avis Nazionale.",
        "La piattaforma si compone di due web app — una per i donatori, una per la rete associativa con diversi livelli di accesso — e punta sulla cooperazione applicativa: scambio di dati con EmoPuglia, la piattaforma dei Centri Trasfusionali, e autenticazione tramite l’IAM regionale.",
      ],
      actors: [
        { name: "Donatori", role: "Prenotano la donazione, gestiscono il profilo, ricevono notifiche push." },
        { name: "Sedi AVIS", role: "Comunali, provinciali e regionale: agende, chiamata attiva, soci e benemerenze." },
        { name: "Centri Trasfusionali", role: "Scambiano dati con la rete tramite EmoPuglia." },
      ],
      outcome: [
        "Il recupero delle informazioni sulle donazioni dà a ogni sede una situazione chiara dell’idoneità dei donatori.",
        "I dati sono archiviati in un unico server centralizzato, gestito da Avis Puglia di concerto con Edinext.",
      ],
    },
    en: {
      title: "A regional network for blood donors",
      client: "Avis Puglia",
      place: "Puglia",
      summary:
        "A single portal for the association’s entire workflow — municipal, provincial and regional — designed with Avis Puglia and connected to transfusion centres.",
      context: [
        "The association faced difficulties with active donor outreach and with identifying the target group for each donation campaign.",
        "It also needed an up-to-date picture of donations, to avoid errors from manual information handling and unnecessary or inappropriate contact with volunteers.",
      ],
      solution: [
        "Together with Avis Puglia, Edinext designed a model that reflects the specifics of the context and every actor in it: volunteer associations, local health authorities, regional transfusion centres, the regional blood centre and the vision of Avis Nazionale.",
        "The platform consists of two web apps — one for donors, one for the association network with different access levels — and relies on application cooperation: data exchange with EmoPuglia, the transfusion centres’ platform, and authentication through the regional IAM.",
      ],
      actors: [
        { name: "Donors", role: "Book donations, manage their profile, receive push notifications." },
        { name: "AVIS branches", role: "Municipal, provincial and regional: calendars, outreach, members and awards." },
        { name: "Transfusion centres", role: "Exchange data with the network via EmoPuglia." },
      ],
      outcome: [
        "Retrieving donation information gives every branch a clear view of donor eligibility.",
        "Data is stored on a single centralised server, managed by Avis Puglia together with Edinext.",
      ],
    },
  },
  {
    slug: "nol-cantieri-taranto",
    year: 2017,
    solutions: ["nol"],
    news: ["sicurezza-nei-cantieri-con-la-piattaforma-clicnol-di-edinext"],
    image: {
      src: "/media/ponteggio-cantiere.jpg",
      width: 650,
      height: 341,
      alt: { it: "Operai su un ponteggio in controluce", en: "Workers on scaffolding, silhouetted against the sky" },
      credit: "Il Sole 24 Ore",
    },
    it: {
      title: "Cantieri senza carta: le notifiche di avvio lavori a Taranto",
      client: "SPESAL ASL Taranto",
      place: "Taranto",
      summary:
        "Con NOL la notifica preliminare arriva in tempo reale allo SPESAL e all’Ispettorato territoriale del Lavoro. Il caso è stato raccontato da Il Sole 24 Ore il 18 luglio 2017.",
      context: [
        "Ogni cantiere edile deve essere notificato prima dell’avvio dei lavori ad ASL e Ispettorato del Lavoro (art. 99, D.Lgs. 81/08). Su carta, ogni notifica significava una raccomandata da ricevere, protocollare e archiviare.",
      ],
      solution: [
        "NOL guida committenti e imprese nella compilazione della notifica e la trasmette in via telematica. Le informazioni sono condivise tra gli enti di vigilanza e mappate sul territorio tramite web-GIS.",
      ],
      actors: [
        { name: "Committenti e imprese", role: "Compilano la notifica online, con risparmio di tempo e costi." },
        { name: "SPESAL ASL", role: "Riceve la notifica in tempo reale." },
        { name: "Ispettorato territoriale del Lavoro", role: "Condivide le stesse informazioni per coordinare i controlli." },
      ],
      outcome: [
        "Le 1.860 notifiche ricevute nel 2016 — altrettante raccomandate e migliaia di fogli — sono sostituite da una comunicazione telematica in tempo reale.",
      ],
      quote: {
        text: "Adesso la notifica arriva in tempo reale a Spesal Asl e Ispettorato territoriale del Lavoro. È facile intuire i vantaggi di questo cambiamento che fa della dematerializzazione il suo punto di forza.",
        cite: "Cosimo Scarnera, direttore Spesal ASL — Il Sole 24 Ore, 18 luglio 2017",
      },
    },
    en: {
      title: "Paperless construction sites: start-of-work notifications in Taranto",
      client: "SPESAL, ASL Taranto",
      place: "Taranto",
      summary:
        "With NOL, the preliminary notification reaches SPESAL and the Territorial Labour Inspectorate in real time. The case was reported by Il Sole 24 Ore on 18 July 2017.",
      context: [
        "Every construction site must be notified to the health authority and the Labour Inspectorate before work begins (art. 99, Legislative Decree 81/08). On paper, each notification meant a registered letter to receive, log and archive.",
      ],
      solution: [
        "NOL guides clients and contractors through the notification and submits it electronically. The information is shared between supervisory bodies and mapped across the territory through web-GIS.",
      ],
      actors: [
        { name: "Clients and contractors", role: "Complete the notification online, saving time and money." },
        { name: "SPESAL", role: "Receives the notification in real time." },
        { name: "Territorial Labour Inspectorate", role: "Shares the same information to coordinate inspections." },
      ],
      outcome: [
        "The 1,860 notifications received in 2016 — as many registered letters and thousands of sheets of paper — are replaced by real-time electronic communication.",
      ],
      quote: {
        text: "Now the notification reaches SPESAL and the Territorial Labour Inspectorate in real time. The advantages of a change built on going paperless are easy to see.",
        cite: "Cosimo Scarnera, director of SPESAL — Il Sole 24 Ore, 18 July 2017 (translated)",
      },
    },
  },
  {
    slug: "nola-asl-lecce",
    year: 2017,
    solutions: ["nola"],
    news: ["amianto-il-servizio-on-line-clicnola-consente-ad-aziende-e-cittadini-di-dialogare-con-lo-spesal"],
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
      title: "Amianto: lo sportello online tra SPESAL, imprese e cittadini",
      client: "Dipartimento di Prevenzione ASL Lecce",
      place: "Lecce",
      summary:
        "Il servizio ClicNoLa, presentato il 4 luglio 2017, collega imprese di bonifica e cittadini allo SPESAL. La ASL Lecce è stata individuata dalla Regione Puglia come capofila del progetto pilota.",
      context: [
        "Il Piano Regionale Amianto della Regione Puglia prevede comunicazioni strutturate tra imprese di bonifica, cittadini e organi di vigilanza, oltre all’autonotifica da parte dei cittadini dei manufatti contenenti amianto.",
      ],
      solution: [
        "L’integrazione tra la suite ClicPrevenzione e il modulo NOLA gestisce le pratiche e funge da interfaccia attiva con le imprese. Dal portale della ASL, lo Sportello Informativo Amianto offre una sezione per i cittadini e una parte operativa che conduce direttamente all’applicativo.",
      ],
      actors: [
        { name: "Imprese di bonifica", role: "Notificano lavori e piani di lavoro online." },
        { name: "Cittadini", role: "Accedono alle informazioni e alle procedure di autonotifica." },
        { name: "SPESAL ASL Lecce", role: "Gestisce le pratiche e lo Sportello Informativo Amianto." },
        { name: "Regione Puglia", role: "Ha individuato la ASL Lecce come capofila del progetto pilota." },
      ],
      outcome: [
        "Il progetto pilota è pensato per consentire a tutte le ASL pugliesi di adottare l’applicativo NOLA.",
      ],
    },
    en: {
      title: "Asbestos: the online desk connecting SPESAL, businesses and citizens",
      client: "Prevention Department, ASL Lecce",
      place: "Lecce",
      summary:
        "The ClicNoLa service, presented on 4 July 2017, connects removal contractors and citizens with SPESAL. The Puglia Region chose ASL Lecce to lead the pilot project.",
      context: [
        "The Puglia Region’s Asbestos Plan calls for structured communication between removal contractors, citizens and supervisory bodies, as well as self-notification by citizens of asbestos-containing items.",
      ],
      solution: [
        "Integration between the ClicPrevenzione suite and the NOLA module manages cases and acts as an active interface with businesses. From the health authority’s website, the Asbestos Information Desk offers a section for citizens and an operational area leading directly to the application.",
      ],
      actors: [
        { name: "Removal contractors", role: "Notify work and work plans online." },
        { name: "Citizens", role: "Access information and self-notification procedures." },
        { name: "SPESAL, ASL Lecce", role: "Manages cases and the Asbestos Information Desk." },
        { name: "Puglia Region", role: "Chose ASL Lecce to lead the pilot project." },
      ],
      outcome: ["The pilot project is designed to let every health authority in Puglia adopt NOLA."],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

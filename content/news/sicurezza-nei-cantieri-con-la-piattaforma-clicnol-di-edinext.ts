import type { NewsArticle } from "../types";

const article: NewsArticle = {
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
};

export default article;

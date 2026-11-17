import type { Solution } from "../types";

const solution: Solution = {
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
};

export default solution;

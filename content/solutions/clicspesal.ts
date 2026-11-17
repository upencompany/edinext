import type { Solution } from "../types";

const solution: Solution = {
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
};

export default solution;

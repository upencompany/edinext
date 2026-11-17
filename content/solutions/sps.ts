import type { Solution } from "../types";

const solution: Solution = {
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
};

export default solution;

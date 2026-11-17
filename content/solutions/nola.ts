import type { Solution } from "../types";

const solution: Solution = {
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
};

export default solution;

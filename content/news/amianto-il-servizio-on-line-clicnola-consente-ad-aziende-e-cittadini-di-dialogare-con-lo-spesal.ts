import type { NewsArticle } from "../types";

const article: NewsArticle = {
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
};

export default article;

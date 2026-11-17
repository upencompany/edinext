import type { Solution } from "../types";

const solution: Solution = {
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
};

export default solution;

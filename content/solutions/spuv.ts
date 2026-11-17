import type { Solution } from "../types";

const solution: Solution = {
  slug: "spuv",
  name: "SPUV",
  family: "vaccinazioni",
  hasPage: true,
  logo: "/brand/products/spuv.png",
  actors: ["cittadini", "prevenzione"],
  related: ["clicvaccino", "avr"],
  it: {
    expansion: "Sportello Unico Vaccinazioni",
    tagline: "La prenotazione online delle vaccinazioni, con i soli dati anagrafici.",
    summary:
      "Il cittadino si collega al sistema informatico della propria ASL e prenota in autonomia le vaccinazioni necessarie.",
    about: {
      title: "Prenotazione online",
      body: [
        "SPUV consente al cittadino di collegarsi, mediante i propri dati anagrafici, al sistema informatico dell’ASL di riferimento per prenotare in completa autonomia le vaccinazioni necessarie. Dall’altra parte, l’ASL governa agende e disponibilità.",
      ],
    },
    features: [
      {
        title: "Per il cittadino",
        items: [
          "Prenotazione agile e semplificata",
          "Prenotazioni a proprio nome per parenti impossibilitati",
          "Prenotazioni per minori da parte di genitori o affidatari",
        ],
      },
      { title: "Per l’ASL", items: ["Gestione dell’agenda appuntamenti", "Reportistica", "Ricerche, tabelle e grafici sui dati in archivio"] },
    ],
    roles: {
      cittadini: "Prenotano per sé, per i figli o per un familiare, senza recarsi allo sportello.",
      prevenzione: "I servizi vaccinali pubblicano le agende e seguono le prenotazioni.",
    },
  },
  en: {
    expansion: "Single Vaccination Desk",
    tagline: "Online vaccination booking with personal details only.",
    summary: "Citizens connect to their health authority’s system and book the vaccinations they need on their own.",
    about: {
      title: "Online booking",
      body: [
        "SPUV lets citizens log in to their health authority’s system using their personal details and book the vaccinations they need entirely on their own. On the other side, the health authority manages calendars and availability.",
      ],
    },
    features: [
      {
        title: "For citizens",
        items: ["Quick, simple booking", "Bookings on behalf of relatives who cannot do so themselves", "Bookings for minors by parents or guardians"],
      },
      { title: "For the health authority", items: ["Appointment calendar management", "Reporting", "Searches, tables and charts on archived data"] },
    ],
    roles: {
      cittadini: "Book for themselves, their children or a relative, without going to a desk.",
      prevenzione: "Vaccination services publish calendars and follow bookings.",
    },
  },
};

export default solution;

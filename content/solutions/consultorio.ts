import type { Solution } from "../types";

const solution: Solution = {
  slug: "consultorio",
  name: "Consultorio",
  family: "sanita",
  hasPage: true,
  monogram: "CON",
  actors: ["strutture", "cittadini"],
  related: ["luna", "clicvaccino"],
  it: {
    expansion: "Sistema informativo per i consultori",
    tagline: "Le attività e i servizi dei consultori familiari, in un unico strumento di lavoro.",
    summary: "Gestione delle attività di prevenzione dei consultori dislocati sul territorio.",
    about: {
      title: "Servizi di prevenzione",
      body: [
        "I consultori svolgono numerose attività di presidio sanitario e prevenzione. L’applicazione è uno strumento di lavoro che consente di programmare gli appuntamenti, informatizzare i dati sanitari della cartella del paziente, coordinare il lavoro degli operatori coinvolti e restituire il flusso di dati con report e grafici.",
      ],
    },
    features: [
      {
        title: "Aree funzionali integrate",
        items: [
          "Assistenza sociale e psicologica",
          "Ginecologia",
          "Infermieristica",
          "Ostetricia",
          "Pediatria",
          "Vaccinazione",
          "Attività psicoeducazionale",
          "Spazio Giovani",
          "Asilo nido",
          "Gestione delle prenotazioni",
        ],
      },
    ],
    roles: {
      strutture: "Ginecologi, ostetriche, psicologi, assistenti sociali e pediatri condividono cartella e agenda.",
      cittadini: "Donne, coppie, giovani e famiglie trovano un percorso coordinato tra i servizi.",
    },
  },
  en: {
    expansion: "Information system for family health centres",
    tagline: "The activities and services of family health centres in a single working tool.",
    summary: "Management of prevention activities in family health centres across the territory.",
    about: {
      title: "Prevention services",
      body: [
        "Family health centres provide a wide range of healthcare and prevention services. The application is a working tool for scheduling appointments, digitising patient record data, coordinating the professionals involved and reporting the data flow through reports and charts.",
      ],
    },
    features: [
      {
        title: "Integrated functional areas",
        items: [
          "Social and psychological support",
          "Gynaecology",
          "Nursing",
          "Midwifery",
          "Paediatrics",
          "Vaccination",
          "Psycho-educational activity",
          "Youth space",
          "Nursery",
          "Booking management",
        ],
      },
    ],
    roles: {
      strutture: "Gynaecologists, midwives, psychologists, social workers and paediatricians share records and calendars.",
      cittadini: "Women, couples, young people and families find a coordinated pathway across services.",
    },
  },
};

export default solution;

import type { Solution } from "../types";

const solution: Solution = {
  slug: "ca-sa",
  name: "CA.SA",
  family: "sanita",
  hasPage: true,
  monogram: "CA.SA",
  actors: ["strutture", "cittadini"],
  norms: ["dlgs81-2008", "dlgs101-2020"],
  related: ["clicspesal", "consultorio"],
  it: {
    expansion: "Cartella Sanitaria del dipendente",
    tagline: "La sorveglianza sanitaria del personale delle ASL.",
    summary:
      "Informatizzazione completa della sorveglianza sanitaria dei dipendenti delle ASL, con funzionalità dedicate alla segreteria del Medico Competente e del Medico Autorizzato.",
    context: {
      title: "Sorveglianza sanitaria del personale",
      body: ["Il D.Lgs. 81/2008 e il D.Lgs. 101/2020 regolano l’attività di sorveglianza sanitaria del personale delle Aziende Sanitarie."],
    },
    about: {
      title: "CA.SA",
      body: [
        "CA.SA informatizza tutte le attività connesse alla sorveglianza sanitaria dei dipendenti: dalla programmazione delle visite alla cartella clinica, fino alla firma grafometrica del giudizio di idoneità e alla formazione obbligatoria.",
      ],
    },
    features: [
      {
        title: "Per il Medico Competente",
        items: [
          "Anagrafica del personale sottoposto a sorveglianza sanitaria",
          "Agenda di visite mediche e accertamenti diagnostici",
          "Convocazione del lavoratore via e-mail",
          "Cartella sanitaria informatizzata con la storia clinica del lavoratore",
          "Firma del giudizio di idoneità, di lavoratore e medico, tramite tavoletta grafometrica",
          "Invio del giudizio a dipendente, direttore generale e direttore della struttura",
          "Programmazione delle visite in base alla scadenza del giudizio di idoneità",
        ],
      },
      {
        title: "Formazione e accesso del dipendente",
        items: [
          "Gestione dei corsi di formazione obbligatori in materia di sicurezza (D.Lgs. 81/08)",
          "Accesso online del lavoratore ai propri giudizi di idoneità",
          "Programmazione della partecipazione ai corsi",
        ],
      },
    ],
    roles: {
      strutture: "Il Medico Competente e la sua segreteria gestiscono visite, cartelle e giudizi.",
      cittadini: "Il dipendente consulta online i propri giudizi di idoneità e i corsi.",
    },
  },
  en: {
    expansion: "Employee Health Record",
    tagline: "Health surveillance of health authority staff.",
    summary:
      "Full digitisation of health surveillance for health authority employees, with dedicated functions for the office of the occupational and authorised physician.",
    context: {
      title: "Staff health surveillance",
      body: ["Legislative Decrees 81/2008 and 101/2020 govern the health surveillance of health authority staff."],
    },
    about: {
      title: "CA.SA",
      body: [
        "CA.SA digitises every activity related to employee health surveillance: from scheduling visits to the clinical record, through to graphometric signing of fitness assessments and mandatory training.",
      ],
    },
    features: [
      {
        title: "For the occupational physician",
        items: [
          "Registry of staff under health surveillance",
          "Calendar of medical visits and diagnostic tests",
          "Worker notification by e-mail",
          "Digital health record with the worker’s clinical history",
          "Signature of the fitness assessment by worker and physician on a graphometric tablet",
          "Delivery of the assessment to the employee, general manager and head of unit",
          "Visit scheduling based on the expiry of fitness assessments",
        ],
      },
      {
        title: "Training and employee access",
        items: [
          "Management of mandatory safety training (Legislative Decree 81/08)",
          "Online access for workers to their own fitness assessments",
          "Scheduling of course attendance",
        ],
      },
    ],
    roles: {
      strutture: "The occupational physician and their office manage visits, records and assessments.",
      cittadini: "Employees view their fitness assessments and courses online.",
    },
  },
};

export default solution;

import tokens from "@/brand/tokens.json";
import { defineLocalized, type Localized } from "@/lib/i18n";

/**
 * Brand identity content: used by the press-kit page, the printable brand
 * guidelines and the colour palette (app/print). Colour and logo data come
 * from brand/tokens.json — the same file scripts/press-kit.mjs reads.
 */

export interface BrandColor {
  id: string;
  hex: string;
  rgb: number[];
  cmyk: number[];
  name: Localized<string>;
  role: Localized<string>;
  group: "primary" | "neutral" | "support";
}

export const brandColors = tokens.colors as BrandColor[];
export const colorScales = tokens.scales as Record<"blue" | "green" | "neutral", Record<string, string>>;
export const colorProportions = tokens.proportions;
export const brandVersion = tokens.version;
export const brandYear = tokens.version.slice(0, 4);

export const colorById = (id: string) => brandColors.find((c) => c.id === id)!;

export type LogoVariantId = "logo" | "wordmark" | "symbol";
export type ColorwayId = "color" | "reverse" | "black" | "white";

export const logoVariants = tokens.logo.variants as { id: LogoVariantId; name: Localized<string> }[];
export const logoColorways = tokens.logo.colorways as { id: ColorwayId; background: string; name: Localized<string> }[];

/** Public paths of generated logo files (see scripts/press-kit.mjs). */
export const logoFile = (variant: LogoVariantId, colorway: ColorwayId, format: "svg" | "png" = "svg") => {
  const widths = { logo: 3000, wordmark: 2400, symbol: 1024 } as const;
  return format === "svg"
    ? `/press-kit/logos/edinext-${variant}-${colorway}.svg`
    : `/press-kit/logos/png/edinext-${variant}-${colorway}-${widths[variant]}.png`;
};

export const hasColorway = (variant: LogoVariantId, colorway: ColorwayId) => !(variant === "symbol" && colorway === "reverse");

/** Brand documents exist in Italian and English; other site languages get the English edition. */
export const docLocales = ["it", "en"] as const;
export type DocLocale = (typeof docLocales)[number];
export const toDocLocale = (locale: string): DocLocale => (locale === "it" ? "it" : "en");

export const pressDownloads = {
  logoPack: `/press-kit/Edinext_Logo_Pack_${tokens.version.slice(0, 4)}.zip`,
  guidelines: (locale: DocLocale) => `/press-kit/Edinext_Brand_Guidelines_${tokens.version.slice(0, 4)}_${locale.toUpperCase()}.pdf`,
  palette: (locale: DocLocale) => `/press-kit/Edinext_Color_Palette_${tokens.version.slice(0, 4)}_${locale.toUpperCase()}.pdf`,
};

/** Company descriptions for journalists — facts only, from edinext.it. */
export const boilerplate = defineLocalized({
  it: {
    short:
      "Edinext S.r.l. è una società ICT di Lecce che progetta, realizza e gestisce sistemi informativi per i Dipartimenti di Prevenzione delle ASL, le strutture sanitarie, sociosanitarie e sociali e le Regioni.",
    long: [
      "Edinext S.r.l., con sede a Lecce, opera nel settore ICT con un team di professionisti della progettazione e realizzazione di applicativi per la Pubblica Amministrazione e l’impresa.",
      "In vent’anni di attività ha informatizzato oltre 30 Dipartimenti di Prevenzione delle ASL. Le sue piattaforme coprono la sicurezza nei luoghi di lavoro e nei cantieri, l’igiene degli alimenti, la sanità veterinaria, le vaccinazioni, la governance della sanità territoriale, i consultori e le reti di volontariato, come ReteAVIS per Avis Puglia.",
      "Edinext adotta un sistema di gestione per la qualità conforme alla norma ISO 9001:2015, una politica per la parità di genere secondo la UNI/PdR 125:2022 e ha ottenuto il rating di legalità dall’Autorità Garante della Concorrenza e del Mercato.",
    ],
  },
  en: {
    short:
      "Edinext S.r.l. is an ICT company based in Lecce, Italy, that designs, builds and runs information systems for the Prevention Departments of local health authorities, healthcare and social-care facilities and regional governments.",
    long: [
      "Edinext S.r.l., based in Lecce, Italy, works in ICT with a team of professionals who design and build applications for public administrations and businesses.",
      "In twenty years it has digitised more than 30 Prevention Departments of Italian local health authorities. Its platforms cover workplace and construction-site safety, food hygiene, veterinary public health, vaccinations, community healthcare governance, family health centres and volunteer networks such as ReteAVIS for Avis Puglia.",
      "Edinext operates an ISO 9001:2015 quality management system and a UNI/PdR 125:2022 gender equality policy, and holds the legality rating awarded by the Italian Competition Authority (AGCM).",
    ],
  },
});

/** Copy for the printable brand guidelines and colour palette. */
export const brandbook = defineLocalized({
  it: {
    docTitle: "Linee guida del marchio",
    paletteTitle: "Palette colori",
    version: "Versione",
    welcomeTitle: "Benvenuti nell’identità di Edinext",
    welcomeBody:
      "Questo documento raccoglie le regole per usare il marchio Edinext in modo coerente in ogni comunicazione: logo, colori, tipografia, linguaggio visivo e applicazioni. È pensato per il team, i partner, i fornitori e la stampa.",
    contents: "Indice",
    sections: {
      brand: "Il marchio",
      logo: "Logo",
      color: "Colori",
      type: "Tipografia",
      visual: "Linguaggio visivo",
      applications: "Applicazioni",
      contacts: "Contatti",
    },
    brand: {
      aboutTitle: "Chi siamo",
      missionTitle: "Missione",
      mission: "Ricercare per fornire ai clienti soluzioni semplici, integrate e complete, per gestire processi complessi.",
      principlesTitle: "Principi",
      voiceTitle: "Tono di voce",
      voiceIntro: "Edinext parla come un’azienda matura che lavora per la sanità pubblica: con precisione, sobrietà e attenzione alle persone.",
      voice: [
        { title: "Preciso", body: "Nomi, norme e numeri esatti. Ogni affermazione è verificabile." },
        { title: "Istituzionale", body: "Linguaggio chiaro e sobrio, adatto a enti pubblici e professionisti sanitari." },
        { title: "Umano", body: "La tecnologia è sempre raccontata attraverso le persone che la usano." },
      ],
      voiceDo: "Sì: «NOL trasmette la notifica preliminare in tempo reale ad ASL e Ispettorato del Lavoro.»",
      voiceDont: "No: «Rivoluzioniamo il futuro della sanità.»",
      audienceTitle: "A chi parliamo",
    },
    logo: {
      mainTitle: "Il logo",
      mainBody:
        "Il logotipo in carattere arrotondato blu e la X a pennello verde formano un unico segno. Nel payoff «Innovare × Crescere» la X diventa un connettore: è il tratto distintivo del marchio e va sempre riprodotto dal file originale.",
      versionsTitle: "Versioni",
      versionsBody: "Tre versioni per contesti diversi. Il logo con payoff è la versione principale.",
      colorwaysTitle: "Versioni colore",
      colorwaysBody: "Il logo esiste in quattro versioni colore. Scegliere sempre quella con il miglior contrasto sul fondo.",
      clearSpaceTitle: "Area di rispetto",
      clearSpaceBody:
        "Intorno al logo va lasciato uno spazio libero pari a metà dell’altezza della lettera «e» (x). Nessun testo, immagine o bordo deve entrare in quest’area.",
      minSizeTitle: "Dimensioni minime",
      minSizeBody: "Sotto queste dimensioni il logo perde leggibilità. Per spazi piccoli usare il logotipo senza payoff o il simbolo.",
      backgroundsTitle: "Fondi",
      backgroundsBody: "Il logo a colori va su fondi bianchi o molto chiari; su fondi scuri si usa la versione in negativo; sul Blu Edinext la versione bianca.",
      misuseTitle: "Usi scorretti",
      misuse: [
        "Non cambiare i colori del logo.",
        "Non deformare né comprimere.",
        "Non ruotare.",
        "Non aggiungere ombre, contorni o effetti.",
        "Non usare su fondi con contrasto insufficiente.",
        "Non ricomporre il logotipo con un carattere tipografico.",
      ],
      cobrandingTitle: "Co-branding",
      cobrandingBody:
        "Accanto ai loghi di ASL, Regioni e partner, Edinext mantiene la stessa altezza visiva del logo partner, separato da un filetto verticale e da uno spazio pari alla larghezza del simbolo X.",
      partnerLogo: "Logo partner",
      productsTitle: "Marchi di prodotto",
      productsBody:
        "Le applicazioni con un marchio proprio lo usano accanto al nome. Quelle senza marchio ufficiale usano una tessera neutra con la sigla, nel carattere Geist Mono: non va trasformata in un logo.",
    },
    color: {
      primaryTitle: "Colori primari",
      primaryBody: "Il Blu e il Verde Edinext provengono dal logo. Il verde è un colore d’accento: non si usa per i testi.",
      neutralTitle: "Neutri",
      neutralBody: "I neutri costruiscono la maggior parte delle superfici e dei testi, lasciando spazio ai colori del marchio.",
      supportTitle: "Colori di supporto",
      supportBody: "Varianti funzionali per interfacce digitali: testi colorati accessibili, fondi tenui, messaggi di errore.",
      scalesTitle: "Scale tonali",
      scalesBody: "Scale da 50 a 900 per grafici, diagrammi e interfacce. Il 500 corrisponde sempre al colore del marchio.",
      proportionsTitle: "Proporzioni",
      proportionsBody: "Proporzioni indicative in una composizione tipica: molto bianco, testi in inchiostro, il blu come colore del marchio e il verde come punto d’accento.",
      combinationsTitle: "Abbinamenti e contrasto",
      combinationsBody: "Rapporti di contrasto calcolati secondo le WCAG 2.2. Per i testi di corpo serve almeno AA (4,5:1).",
      codes: { hex: "HEX", rgb: "RGB", cmyk: "CMYK" },
      cmykNote: "I valori CMYK sono conversioni di riferimento: verificarli con il profilo colore della tipografia. I riferimenti Pantone non sono ancora definiti.",
      text: "Testo",
      background: "Fondo",
      contrast: "Contrasto",
      level: "Livello",
    },
    type: {
      primaryTitle: "Geist",
      primaryBody:
        "Carattere principale per titoli e testi. Linee pulite e contemporanee, ottima leggibilità a schermo e in stampa. Licenza SIL Open Font License.",
      monoTitle: "Geist Mono",
      monoBody: "Carattere di supporto per etichette, sigle, riferimenti normativi e dati. Sempre in maiuscolo con spaziatura ampia per le etichette.",
      hierarchyTitle: "Gerarchia",
      rulesTitle: "Regole",
      rules: [
        "Titoli in maiuscolo solo all’iniziale, con spaziatura leggermente negativa.",
        "Testi di corpo tra 16 e 18 px, interlinea 1,5–1,6.",
        "Il carattere del logotipo è un disegno originale: non va imitato.",
      ],
      sample: "Sistemi informativi per la prevenzione e la sanità del territorio.",
      levels: ["Display", "Titolo 1", "Titolo 2", "Sottotitolo", "Testo", "Etichetta"],
    },
    visual: {
      diagramsTitle: "Diagrammi",
      diagramsBody:
        "Il linguaggio visivo di Edinext è fatto di relazioni reali: ogni linea collega un’applicazione alle persone che la usano. I diagrammi si disegnano su fondo Notte, con linee sottili blu e punti verdi.",
      photoTitle: "Fotografia",
      photoBody:
        "Persone e luoghi reali: operatori, strutture, cantieri, territorio. Le foto ricevono un trattamento bicromatico nel blu del marchio. Da evitare le immagini stock generiche.",
      iconsTitle: "Icone",
      iconsBody: "Icone lineari, tratto di 1,5 px, terminali squadrati, su griglia di 20 px. Solo dove aiutano a capire, mai decorative.",
      motionTitle: "Movimento",
      motionBody: "Animazioni brevi e funzionali: comparse morbide, linee che si disegnano, dati che scorrono. Sempre disattivate per chi preferisce ridurre il movimento.",
    },
    applications: {
      webTitle: "Sito web",
      webBody: "Il sito applica il sistema: bianco, inchiostro, pannelli scuri per i diagrammi, pulsanti a pillola.",
      cardTitle: "Biglietto da visita",
      cardBody: "Formato 85 × 55 mm. Fronte bianco con logo, retro Notte con il simbolo.",
      letterTitle: "Carta intestata",
      letterBody: "Formato A4. Logo in alto a sinistra, dati societari a piè di pagina.",
      emailTitle: "Firma e-mail",
      emailBody: "Solo testo e logotipo, senza immagini pesanti o citazioni.",
      slidesTitle: "Presentazioni",
      slidesBody: "Formato 16:9. Copertina su fondo Notte, pagine interne su bianco.",
      socialTitle: "Social e anteprime",
      socialBody: "Avatar con il simbolo X; anteprime di condivisione con titolo e logotipo in negativo.",
      namePlaceholder: "Nome Cognome",
      rolePlaceholder: "Ruolo",
    },
    contacts: {
      title: "Contatti",
      body: "Per richieste stampa, materiali aggiuntivi o dubbi sull’uso del marchio:",
      downloads: "Materiali scaricabili",
      thanks: "Grazie",
    },
    palette: {
      intro: "La palette colori di Edinext: codici, ruoli, scale e abbinamenti per comunicazioni stampate e digitali.",
    },
  },
  en: {
    docTitle: "Brand Guidelines",
    paletteTitle: "Colour Palette",
    version: "Version",
    welcomeTitle: "Welcome to the Edinext identity",
    welcomeBody:
      "This document sets out how to use the Edinext brand consistently across every communication: logo, colour, typography, visual language and applications. It is written for the team, partners, suppliers and the press.",
    contents: "Contents",
    sections: {
      brand: "The brand",
      logo: "Logo",
      color: "Colour",
      type: "Typography",
      visual: "Visual language",
      applications: "Applications",
      contacts: "Contacts",
    },
    brand: {
      aboutTitle: "About us",
      missionTitle: "Mission",
      mission: "Research that gives clients simple, integrated and complete solutions for managing complex processes.",
      principlesTitle: "Principles",
      voiceTitle: "Tone of voice",
      voiceIntro: "Edinext speaks like a mature company working for public healthcare: precise, restrained and attentive to people.",
      voice: [
        { title: "Precise", body: "Exact names, regulations and figures. Every statement can be verified." },
        { title: "Institutional", body: "Clear, sober language suited to public bodies and healthcare professionals." },
        { title: "Human", body: "Technology is always described through the people who use it." },
      ],
      voiceDo: "Yes: “NOL sends the preliminary notification to the health authority and the Labour Inspectorate in real time.”",
      voiceDont: "No: “We are revolutionising the future of healthcare.”",
      audienceTitle: "Who we speak to",
    },
    logo: {
      mainTitle: "The logo",
      mainBody:
        "The rounded blue logotype and the green brush-stroke X form a single mark. In the “Innovare × Crescere” tagline the X becomes a connector: it is the brand’s signature and must always be reproduced from the original file.",
      versionsTitle: "Versions",
      versionsBody: "Three versions for different contexts. The logo with tagline is the primary version.",
      colorwaysTitle: "Colour versions",
      colorwaysBody: "The logo comes in four colour versions. Always choose the one with the best contrast on the background.",
      clearSpaceTitle: "Clear space",
      clearSpaceBody:
        "Leave free space around the logo equal to half the height of the letter “e” (x). No text, image or edge may enter this area.",
      minSizeTitle: "Minimum size",
      minSizeBody: "Below these sizes the logo loses legibility. For small spaces use the wordmark without tagline, or the symbol.",
      backgroundsTitle: "Backgrounds",
      backgroundsBody: "The full-colour logo goes on white or very light backgrounds; on dark backgrounds use the reverse version; on Edinext Blue the white version.",
      misuseTitle: "Incorrect use",
      misuse: [
        "Do not change the logo colours.",
        "Do not stretch or squash.",
        "Do not rotate.",
        "Do not add shadows, outlines or effects.",
        "Do not use on low-contrast backgrounds.",
        "Do not rebuild the logotype with a typeface.",
      ],
      cobrandingTitle: "Co-branding",
      cobrandingBody:
        "Next to the logos of health authorities, regions and partners, Edinext keeps the same visual height as the partner logo, separated by a vertical rule and a space equal to the width of the X symbol.",
      partnerLogo: "Partner logo",
      productsTitle: "Product marks",
      productsBody:
        "Applications with their own mark use it next to their name. Those without an official mark use a neutral tile with the acronym in Geist Mono: it must not be turned into a logo.",
    },
    color: {
      primaryTitle: "Primary colours",
      primaryBody: "Edinext Blue and Edinext Green come from the logo. Green is an accent colour: never use it for text.",
      neutralTitle: "Neutrals",
      neutralBody: "Neutrals build most surfaces and text, leaving room for the brand colours.",
      supportTitle: "Support colours",
      supportBody: "Functional variants for digital interfaces: accessible coloured text, soft backgrounds, error messages.",
      scalesTitle: "Tonal scales",
      scalesBody: "Scales from 50 to 900 for charts, diagrams and interfaces. Step 500 is always the brand colour.",
      proportionsTitle: "Proportions",
      proportionsBody: "Indicative proportions in a typical layout: plenty of white, text in ink, blue as the brand colour and green as an accent.",
      combinationsTitle: "Combinations and contrast",
      combinationsBody: "Contrast ratios calculated according to WCAG 2.2. Body text needs at least AA (4.5:1).",
      codes: { hex: "HEX", rgb: "RGB", cmyk: "CMYK" },
      cmykNote: "CMYK values are reference conversions: confirm them with the printer’s colour profile. Pantone references are not defined yet.",
      text: "Text",
      background: "Background",
      contrast: "Contrast",
      level: "Level",
    },
    type: {
      primaryTitle: "Geist",
      primaryBody:
        "Primary typeface for headings and text. Clean, contemporary lines with excellent legibility on screen and in print. SIL Open Font License.",
      monoTitle: "Geist Mono",
      monoBody: "Support typeface for labels, acronyms, regulatory references and data. Labels are always uppercase with generous tracking.",
      hierarchyTitle: "Hierarchy",
      rulesTitle: "Rules",
      rules: [
        "Headings in sentence case, with slightly negative tracking.",
        "Body text between 16 and 18 px, line height 1.5–1.6.",
        "The logotype lettering is an original drawing: do not imitate it.",
      ],
      sample: "Information systems for prevention and community healthcare.",
      levels: ["Display", "Heading 1", "Heading 2", "Lead", "Body", "Label"],
    },
    visual: {
      diagramsTitle: "Diagrams",
      diagramsBody:
        "Edinext’s visual language is made of real relationships: every line connects an application to the people who use it. Diagrams are drawn on Night, with thin blue lines and green dots.",
      photoTitle: "Photography",
      photoBody:
        "Real people and places: staff, facilities, construction sites, the territory. Photos get a two-tone treatment in brand blue. Avoid generic stock imagery.",
      iconsTitle: "Icons",
      iconsBody: "Line icons, 1.5 px stroke, square caps, on a 20 px grid. Only where they aid understanding, never as decoration.",
      motionTitle: "Motion",
      motionBody: "Short, purposeful animation: soft reveals, lines that draw themselves, flowing data. Always disabled for users who prefer reduced motion.",
    },
    applications: {
      webTitle: "Website",
      webBody: "The website applies the system: white, ink, dark panels for diagrams, pill buttons.",
      cardTitle: "Business card",
      cardBody: "85 × 55 mm. White front with the logo, Night back with the symbol.",
      letterTitle: "Letterhead",
      letterBody: "A4. Logo top left, company details in the footer.",
      emailTitle: "E-mail signature",
      emailBody: "Text and wordmark only, no heavy images or quotes.",
      slidesTitle: "Presentations",
      slidesBody: "16:9. Cover on Night, inside pages on white.",
      socialTitle: "Social and previews",
      socialBody: "Avatar with the X symbol; share previews with title and reverse wordmark.",
      namePlaceholder: "First Last",
      rolePlaceholder: "Role",
    },
    contacts: {
      title: "Contacts",
      body: "For press enquiries, additional material or questions about brand use:",
      downloads: "Downloads",
      thanks: "Thank you",
    },
    palette: {
      intro: "The Edinext colour palette: codes, roles, scales and combinations for print and digital communication.",
    },
  },
});

/** Copy for the press-kit page on the website. */
export const pressKitPage = defineLocalized({
  it: {
    metaTitle: "Kit stampa — Logo, colori e linee guida",
    metaDescription:
      "Il kit stampa di Edinext: logo in vettoriale e PNG, palette colori, linee guida del marchio, marchi di prodotto e testi di presentazione dell’azienda.",
    eyebrow: "Kit stampa",
    title: "Il marchio Edinext, pronto da usare.",
    lede: "Logo, colori, tipografia e testi ufficiali per giornalisti, partner, enti e fornitori. Tutti i file sono liberi da scaricare per comunicazioni che riguardano Edinext.",
    quick: {
      logoPack: { title: "Pacchetto logo", body: "SVG e PNG trasparenti, tutte le versioni, marchi di prodotto." },
      guidelines: { title: "Linee guida del marchio", body: "Logo, colori, tipografia, linguaggio visivo, applicazioni." },
      palette: { title: "Palette colori", body: "Codici HEX, RGB e CMYK, scale tonali e abbinamenti." },
      download: "Scarica",
      italian: "Italiano",
      english: "English",
    },
    logo: {
      label: "Logo",
      title: "Tre versioni, quattro colori.",
      lede: "Usare sempre i file originali. Il formato SVG è da preferire per stampa e web.",
    },
    color: { label: "Colori", title: "La palette.", lede: "Clicca su un codice per copiarlo.", copied: "Copiato" },
    type: { label: "Tipografia", title: "Geist e Geist Mono.", lede: "Caratteri open source, disponibili gratuitamente." },
    rules: {
      label: "Uso del marchio",
      title: "Le regole essenziali.",
      clearSpace: "Area di rispetto: metà dell’altezza della «e» su ogni lato.",
      minSize: "Larghezza minima: logotipo 100 px / 25 mm, con payoff 160 px / 40 mm, simbolo 16 px / 5 mm.",
      misuse: "Non modificare colori, proporzioni, orientamento; non aggiungere effetti.",
      more: "Tutte le regole nelle linee guida",
    },
    about: {
      label: "Testi ufficiali",
      title: "Chi è Edinext.",
      short: "Versione breve",
      long: "Versione estesa",
      copy: "Copia testo",
      copied: "Copiato",
      facts: "In sintesi",
    },
    products: { label: "Marchi di prodotto", title: "Le applicazioni." },
    contact: {
      label: "Contatti stampa",
      title: "Per giornalisti e partner.",
      body: "Per interviste, materiali aggiuntivi o domande sull’uso del marchio scrivi a info@edinext.it. I comunicati sono pubblicati nella sezione News.",
    },
  },
  en: {
    metaTitle: "Press kit — Logo, colours and brand guidelines",
    metaDescription:
      "The Edinext press kit: vector and PNG logos, colour palette, brand guidelines, product marks and official company descriptions.",
    eyebrow: "Press kit",
    title: "The Edinext brand, ready to use.",
    lede: "Logo, colours, typography and official copy for journalists, partners, public bodies and suppliers. All files are free to download for communication about Edinext.",
    quick: {
      logoPack: { title: "Logo pack", body: "SVG and transparent PNG, every version, product marks." },
      guidelines: { title: "Brand guidelines", body: "Logo, colour, typography, visual language, applications." },
      palette: { title: "Colour palette", body: "HEX, RGB and CMYK codes, tonal scales and combinations." },
      download: "Download",
      italian: "Italiano",
      english: "English",
    },
    logo: {
      label: "Logo",
      title: "Three versions, four colourways.",
      lede: "Always use the original files. SVG is preferred for print and web.",
    },
    color: { label: "Colour", title: "The palette.", lede: "Click a code to copy it.", copied: "Copied" },
    type: { label: "Typography", title: "Geist and Geist Mono.", lede: "Open-source typefaces, free to use." },
    rules: {
      label: "Brand use",
      title: "The essential rules.",
      clearSpace: "Clear space: half the height of the “e” on every side.",
      minSize: "Minimum width: wordmark 100 px / 25 mm, with tagline 160 px / 40 mm, symbol 16 px / 5 mm.",
      misuse: "Do not change colours, proportions or orientation; do not add effects.",
      more: "All the rules in the brand guidelines",
    },
    about: {
      label: "Official copy",
      title: "About Edinext.",
      short: "Short version",
      long: "Long version",
      copy: "Copy text",
      copied: "Copied",
      facts: "At a glance",
    },
    products: { label: "Product marks", title: "The applications." },
    contact: {
      label: "Press contact",
      title: "For journalists and partners.",
      body: "For interviews, additional material or questions about brand use, write to info@edinext.it. Announcements are published in the News section.",
    },
  },
});

# Edinext — sito istituzionale

Guida per sviluppatori (TR): [docs/GELISTIRME-REHBERI.md](docs/GELISTIRME-REHBERI.md)

Redesign completo di [edinext.it](https://edinext.it): Next.js 16 (App Router), TypeScript, Tailwind CSS 4, italiano (default) e inglese.

```bash
npm install
npm run dev        # http://localhost:3000 → /it
npm run build && npm start
```

## Struttura

```text
app/[locale]/…          pagine (cartelle con i segmenti italiani)
app/api/contact         endpoint del modulo contatti
app/og                  immagini Open Graph generate
app/sitemap.ts, robots.ts, manifest.ts, global-not-found.tsx
components/layout       header (mega-menu), footer, reveal on scroll
components/ecosystem    diagramma radiale, explorer, schemi (hub, gruppi, ciclo), architettura ReteAVIS
components/sections     sezioni riutilizzabili (indice ambiti, timeline normativa, ciclo servizi, form…)
components/ui           primitive editoriali, icone, logo, breadcrumbs, JSON-LD
content/                TUTTI i contenuti (IT + EN), separati dalla presentazione → pronti per un CMS
lib/                    i18n, SEO, dati strutturati, font, utility
styles/globals.css      design system (token, tipografia, tema scuro `.theme-dark`, motion)
public/brand            logo ufficiale (ritagliato, versione in negativo)
public/documents        PDF di compliance scaricati dal vecchio sito
public/media            fotografie usate in news e progetti
```

## Lingue e URL

- `/it/…` segmenti italiani (cartelle fisiche). `/en/…` segmenti inglesi tramite rewrite in `next.config.ts`
  (`/en/solutions`, `/en/company`, `/en/careers`, `/en/contact`…); la variante italiana sotto `/en` fa redirect 308.
- `lib/i18n.ts` → `href(locale, section, slug)` costruisce qualsiasi URL; lo switch lingua traduce il percorso corrente.
- Tutti gli URL del vecchio WordPress (`/chi-siamo`, `/soluzioni/nol`, `/sian`, articoli, PDF…) hanno redirect 308.

## Contenuti: fonti

Ogni contenuto proviene da edinext.it (pagine, articoli, immagini informative e PDF pubblicati). Nulla è inventato.

- **Soluzioni** (`content/solutions.ts`): 17 applicazioni, 15 con scheda (VETC e Strutture Sanitarie non avevano pagina).
- **Informazioni che sul vecchio sito erano solo immagini**, ora testo strutturato e ridisegnato:
  elenco vaccinazioni AVR, rete attorno al paziente (SMART), stakeholder LUNA, modello SPS, architettura ReteAVIS.
- **Progetti** (`content/projects.ts`): casi costruiti solo dagli articoli pubblicati (ReteAVIS, NOL Taranto, NOLA ASL Lecce).
- **Quadro normativo** (`content/ecosystem.ts`): le norme citate nelle schede prodotto, con data completa.
- **Rating di legalità**: punteggio ★★ e data (21/05/2024) dalla comunicazione AGCM pubblicata; PEC dalla stessa comunicazione.

### Da verificare con Edinext prima della messa online

1. **Rating di legalità** — dura 2 anni dal rilascio (maggio 2024): confermare il rinnovo.
2. **PEC `edinext@pec.it`** — presa dalla lettera AGCM; confermare che vada pubblicata.
3. **Privacy policy** — rimossi i paragrafi WordPress (cookie di login/commenti) non più applicabili; testo da far validare al legale.
4. **Foto** — `ponteggio-cantiere.jpg` è accreditata a Il Sole 24 Ore (come sul vecchio sito): verificare i diritti d’uso.
5. **“ANAS”** tra i sistemi nazionali di SMART è riportato come sul vecchio sito (forse “ANA”, Anagrafe Nazionale Assistiti).
6. **Modulo contatti** — impostare `CONTACT_WEBHOOK_URL` (relay e-mail, ticketing, automazione). Senza, l’endpoint risponde 503
   e il modulo indirizza a info@edinext.it: non finge mai un invio riuscito.
7. **Fotografie reali** di persone, sedi e servizi Edinext sostituirebbero bene le poche foto stock rimaste.

## Variabili d’ambiente

| Variabile | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canonico (default `https://edinext.it`) |
| `CONTACT_WEBHOOK_URL` | destinazione POST JSON dei messaggi del modulo contatti |

## Accessibilità, SEO, performance

- HTML semantico, skip link, focus visibile, menu da tastiera (Esc chiude), `aria-pressed`/`aria-live` nell’explorer,
  form con errori collegati ai campi e riepilogo focalizzato, `prefers-reduced-motion` rispettato ovunque.
- Metadata per pagina, canonical, hreflang (`it`, `en`, `x-default`), Open Graph dinamico, sitemap con alternates, robots,
  JSON-LD (Organization, WebSite, BreadcrumbList, SoftwareApplication, NewsArticle, JobPosting).
- 81 pagine statiche (SSG), font self-hosted (Geist), immagini `next/image` AVIF/WebP, JS client solo per header, explorer,
  ciclo servizi, scroller e form.

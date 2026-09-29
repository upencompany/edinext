# Edinext — Development Guide

Rules and recipes for anyone (human or AI) working on this codebase.
Code, comments and docs are in English. Site content is Italian (default) and English.

---

## 1. Core principles

1. **Content ≠ presentation.** No copy, numbers, dates or links inside components. Everything lives in `content/`.
   Components only render data from `content/`. Moving to a CMS (Sanity, Strapi, Payload…) later means replacing
   the `content/` modules, not rewriting pages.
2. **Single source of truth.** Routes live in `lib/i18n.ts → sections`, locales in `lib/i18n.ts → locales`,
   company facts in `content/company.ts`, colours and type in `styles/globals.css → @theme`. Never write a value twice.
3. **No invented facts.** Every business fact comes from edinext.it or from Edinext’s official documents. New
   statistics, clients, references or certifications need a source (note it in a comment).
4. **Server Components by default.** `"use client"` only for small interactive pieces: `SiteHeader`,
   `EcosystemExplorer`, `FlowSignals`, `ServiceCycle`, `ScrollerControls`, `ContactForm`, `RevealObserver`, `error.tsx`.
   Pass only serialisable data (strings, numbers, arrays) to client components — never functions.
5. **Type safety = translation safety.** All multilingual content uses `Localized<T>` or `defineLocalized()`.
   When a locale is added, TypeScript reports every missing translation as an error.
6. **Accessibility is not negotiable.** Semantic HTML, exactly one `h1`, no skipped heading levels, visible focus,
   full keyboard support, `prefers-reduced-motion`, alt text (`alt=""` when decorative).
7. **Small files, single responsibility.** Split components that grow past ~250 lines. Never define components
   inside render (lint rule `react-hooks/static-components`) — hoist helpers to module scope.

## 2. Project structure

```text
app/
  [locale]/                 All pages. Folder names are the ITALIAN segments (azienda, soluzioni…)
    layout.tsx              <html>, header, footer, JSON-LD (root layout)
    template.tsx            Page transition (React ViewTransition)
    page.tsx                Home
    soluzioni/[slug]/       Product pages (nol, smart…) and area pages (clicprevenzione…)
    error.tsx, not-found.tsx
  api/contact/route.ts      Contact form endpoint (security checks live here)
  og/route.tsx              Dynamic Open Graph image
  sitemap.ts, robots.ts, manifest.ts, global-not-found.tsx
components/
  layout/                   Header, footer, navigation data, scroll reveal
  ui/                       Building blocks: Kicker, SectionHead, PageIntro, ButtonLink, ArrowLink, Logo, ProductMark, Icons
  sections/                 Page sections: ContactBand, AreasIndex, NormTimeline, ServiceCycle, NewsList, SolutionDetail…
  ecosystem/                Diagrams: RadialDiagram (+ geometry), EcosystemExplorer, FlowSignals, HubDiagram, SolutionDiagrams, ArchitectureDiagram
content/                    ALL content (it + en)
  types.ts                  Content models (Solution, NewsArticle, Project, Family, Actor, Norm…)
  solutions.ts              The 17 applications
  ecosystem.ts              Actors, areas, regulations
  news.ts, projects.ts      News and project case studies
  pages.ts                  Page copy (home, company, services, compliance, careers, contact, privacy)
  ui.ts                     Interface dictionary (navigation, labels, buttons…) + fill()
  company.ts                Company facts
  architecture.ts           ReteAVIS architecture schema
lib/
  i18n.ts                   Locales, route table, href(), publicPath(), switchLocalePath(), defineLocalized(), toLocale()
  seo.ts                    pageMetadata(): canonical, hreflang, OG, description clamping, indexing switch
  structured-data.ts        JSON-LD builders
  fonts.ts, format.ts       Geist fonts, date formatting, cx()
styles/globals.css          Design system (tokens, typography, .theme-dark, motion)
public/brand, media, documents
```

## 3. Design patterns (and why)

| Pattern | Where | Why |
| --- | --- | --- |
| **Content modules** | `content/*.ts` | Copy in one place, CMS-ready, typed translations |
| **Route table + helper** | `lib/i18n.ts → sections`, `href()` | Never hand-write a URL: `href(locale, "solutions", "nol")` |
| **Composition** | `PageIntro`, `SectionHead`, `ContactBand` | Pages are assembled from the same blocks and stay consistent |
| **Data preparation on the server** | `explorer-data.ts` → `EcosystemExplorer` | Server shapes the data, client only renders it; small bundles |
| **Scoped theming** | `.theme-dark` | Dark sections re-map tokens instead of duplicating components |
| **Discriminated unions** | `SolutionDiagram`, `ArticleBlock` | Safe rendering by `kind`/`type`; a new variant = one union member + one `case` |
| **Progressive enhancement** | reveal animations, form, flow signals | Content is visible without JS; motion only with JS and motion allowed |

**Avoid:** hard-coded copy in components; `locale === "it" ? … : …` (use `ui[locale]…`); hand-written URLs
(`"/it/soluzioni/nol"`); inline colour values (`#0076b9` → use `text-brand`); gradients, glassmorphism, glow effects;
endless rounded card grids; generic smiling stock photography.

## 4. Design system at a glance

- **Colours** (`@theme`): `ink`, `ink-2`, `ink-3` (text), `paper`, `paper-2`, `card` (surfaces), `line`, `line-strong`,
  `brand` (#0076B9 — from the logo), `accent` (#81B736 — the logo’s “X”). Green is for accents, dots and graphics only,
  never for body text.
- **Dark section:** add `theme-dark` to the container; `text-ink`, `bg-paper` etc. flip automatically inside it.
- **Type utilities:** `t-display`, `t-h1`, `t-h2`, `t-h3`, `t-lede`, `t-label` (mono, uppercase), `t-meta` (small mono).
- **Layout:** `wrap` (max width + gutters), `grid-12` (4 → 12 columns), `section-y` (vertical rhythm).
- **Shapes:** pill buttons (`rounded-full`), panels `rounded-2xl` / `rounded-[1.75rem]`.
- **Motion:** add `data-reveal` to fade an element in when it enters the viewport; stagger with `style={{ "--reveal-i": i }}`.
- **Product marks:** `ProductMark` shows the official logo (`public/brand/products/<slug>.png`) or a neutral monogram tile.

## 5. Recipes

### 5.1 Add a page (e.g. “Partners”)

1. Add the route to `lib/i18n.ts → sections`: `partners: { it: "partner", en: "partners" }`.
   (English rewrites and redirects are generated automatically in `next.config.ts`.)
2. Add the copy to `content/pages.ts`:
   ```ts
   export const partnersPage = defineLocalized({
     it: { metaTitle: "Partner", metaDescription: "…", eyebrow: "Partner", title: "…", lede: "…" },
     en: { metaTitle: "Partners", metaDescription: "…", eyebrow: "Partners", title: "…", lede: "…" },
   });
   ```
3. Create `app/[locale]/partner/page.tsx` (folder name = Italian segment). Copy `app/[locale]/servizi/page.tsx` as a
   template: `generateMetadata` → `pageMetadata({ locale, section: "partners", … })`, body → `PageIntro` + sections + `ContactBand`.
4. Add it to the navigation (`components/layout/nav-data.ts → items`) and, if needed, the footer (`SiteFooter.tsx`).
5. Add it to the sitemap (`app/sitemap.ts → entries`).
6. Verify: `npm run check`, then `npm run build`.

### 5.2 Add a language (e.g. German `de`)

1. In `lib/i18n.ts`:
   - `locales = ["it", "en", "de"]`
   - add a `de:` segment to every entry of `sections` (`company: { …, de: "unternehmen" }`)
   - add `de: { short: "DE", long: "Deutsch", htmlLang: "de", og: "de_DE", intl: "de-DE" }` to `localeNames`
2. In `content/ui.ts`: write `const de: UI = { … }` and add it to the `ui` record.
3. Run `npx tsc --noEmit`. **TypeScript lists every missing translation** (products, news, projects, page copy,
   actors, areas, regulations, architecture schema, opening hours, image alt texts). Work through the list.
4. Nothing else: routes, static generation, language switcher, hreflang, sitemap and OG locale follow automatically.
   If the language needs extra characters (Polish, Czech, Turkish…), add `"latin-ext"` to the font subsets in `lib/fonts.ts`.

### 5.3 Add a product (application)

1. Optional logo: `public/brand/products/<slug>.png` (square, 256 px). Otherwise set `monogram`.
2. Add a `Solution` object to `content/solutions.ts`: `slug`, `name`, `family`, `hasPage`, `actors`, `norms?`,
   `related?`, `logo?` / `monogram?`, plus `it` / `en` copy (`expansion`, `tagline`, `summary`, `about`, `features`,
   `roles?`, `integrations?`, `diagrams?`, `metaTitle?` for long names).
3. The product page, menu, catalogue, ecosystem diagram, area page and sitemap update **automatically**.

### 5.4 Add news, a job opening or a project

- News: new object at the top of `content/news.ts` (`kind: "press" | "product" | "job"`). A `job` appears on the
  careers page and emits `JobPosting` structured data automatically.
- Project: `content/projects.ts` — always reference the source article(s) in `news`.

### 5.5 Information that only exists as an image

Don’t publish the image; transcribe it and add it to `SolutionCopy.diagrams` as `hub` (centre + satellites),
`groups` (grouped list) or `cycle`. For a new diagram type, extend the `SolutionDiagram` union in `content/types.ts`
and add a `case` in `components/ecosystem/SolutionDiagrams.tsx`.

## 6. SEO rules

- Every page’s `generateMetadata` uses **only** `pageMetadata()` (canonical, hreflang, OG and Twitter included).
- Aim for titles ≤ 60 characters; give products/news a `metaTitle` when needed. Titles over 52 characters drop the
  “— Edinext” suffix automatically.
- Descriptions 70–160 characters; `pageMetadata` clamps at 158 on a word boundary.
- One `h1` per page; never skip heading levels.
- Structured data via `lib/structured-data.ts` and the `JsonLd` component; page-specific schemas are built in the page.
- Old WordPress URLs are in `next.config.ts → legacyRedirects`. When a URL changes, add the old one there.
- Indexing: only the Vercel production deployment is indexable; previews and local builds send `noindex`
  (`lib/seo.ts → allowIndexing`).

## 7. Security rules

- **No third-party scripts, styles or fonts.** The CSP (`next.config.ts → contentSecurityPolicy`) blocks them.
  If one is ever needed (e.g. analytics), extend the CSP deliberately and update the privacy notice.
- User input only enters through `app/api/contact/route.ts`: origin check, JSON only, body size cap, per-IP rate
  limit, honeypot, minimum fill time, length limits, control-character stripping, HMAC-signed and time-limited
  webhook call. Reuse this pattern for any new endpoint.
- `dangerouslySetInnerHTML` is allowed only for JSON-LD (with `<` escaped) and the static `js` class script in `layout.tsx`.
- Secrets live only in environment variables (`CONTACT_WEBHOOK_URL`, `CONTACT_WEBHOOK_SECRET`), never in the repository.

## 8. Commands

```bash
npm run dev        # development server → http://localhost:3000
npm run check      # TypeScript + ESLint
npm run build      # production build (81+ static pages)
npm start          # production server
```

Before committing: `npm run check && npm run build`.

## 9. Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://edinext.it`). Read at build time. |
| `ALLOW_INDEXING` | `true` when hosting outside Vercel. `false` keeps production `noindex` (e.g. before the domain moves). On Vercel only production is indexable by default. |
| `CONTACT_WEBHOOK_URL` | Endpoint receiving contact form messages (POST JSON). Without it the form points to the e-mail address. |
| `CONTACT_WEBHOOK_SECRET` | Optional HMAC-SHA256 key → `X-Edinext-Signature` header on webhook calls. |

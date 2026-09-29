# Edinext — corporate website

Complete redesign of [edinext.it](https://edinext.it): Next.js 16 (App Router), TypeScript, Tailwind CSS 4.
Italian (default, `/it`) and English (`/en`).

**Developer guide:** [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) — principles, patterns, and how to add a page,
a language, a product or a news item.

```bash
npm install
npm run dev        # http://localhost:3000 → /it
npm run check      # TypeScript + ESLint
npm run build && npm start
```

## Deployment (Vercel)

Import the GitHub repository in Vercel — the framework (Next.js) is detected automatically, no build settings needed.
Set the environment variables below, then attach the `edinext.it` domain. Every push to `main` deploys to production;
every other branch or pull request gets a preview URL (automatically `noindex`).

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, default `https://edinext.it` |
| `CONTACT_WEBHOOK_URL` | Endpoint receiving contact form messages (POST JSON). Without it the form points to info@edinext.it and never pretends a message was sent. |
| `CONTACT_WEBHOOK_SECRET` | Optional HMAC-SHA256 key, sent as `X-Edinext-Signature` |
| `ALLOW_INDEXING` | `true` to allow indexing when hosting outside Vercel |

## Content sources

All business content comes from edinext.it (pages, articles, information-bearing images and published PDFs).
Nothing is invented.

- **Solutions** (`content/solutions.ts`): 17 applications, 15 with a dedicated page (VETC and Strutture Sanitarie had none).
- **Information that was only in images** is now structured text with redrawn diagrams: AVR vaccination list,
  SMART care network, LUNA stakeholders, SPS school-health model, ReteAVIS architecture.
- **Product logos** come from the /soluzioni page of the old site; products that only had generic stock icons get a
  neutral monogram tile.
- **Projects** (`content/projects.ts`): built only from published articles (ReteAVIS, NOL Taranto, NOLA ASL Lecce).
- **Regulatory framework** (`content/ecosystem.ts`): the regulations cited on the product pages.
- **Legality rating**: score ★★ and date (21 May 2024) from the published AGCM letter; the PEC address from the same letter.

### To confirm with Edinext before going live

1. **Legality rating** — valid for 2 years from May 2024: confirm renewal.
2. **PEC `edinext@pec.it`** — taken from the AGCM letter; confirm it may be published.
3. **Privacy notice** — WordPress-only paragraphs (login/comment cookies) were removed; have it reviewed by legal counsel.
4. **Photo** — `ponteggio-cantiere.jpg` is credited to Il Sole 24 Ore (as on the old site): verify usage rights.
5. **“ANAS”** among SMART’s national systems is kept as on the old site (possibly “ANA”, Anagrafe Nazionale Assistiti).
6. **Contact form** — set `CONTACT_WEBHOOK_URL`.
7. **Real photography** of Edinext people, offices and services would replace the few remaining stock photos well.

## Quality

- Accessibility: semantic HTML, skip link, visible focus, keyboard menus (Esc closes), `aria-pressed`/`aria-live`
  in the explorer, linked form errors with a focused summary, `prefers-reduced-motion` everywhere.
- SEO: per-page metadata, canonical, hreflang (`it`, `en`, `x-default`), dynamic Open Graph, sitemap with alternates,
  robots, JSON-LD (Organization, WebSite, BreadcrumbList, SoftwareApplication, NewsArticle, JobPosting),
  308 redirects from every old WordPress URL.
- Security: CSP, HSTS, frame blocking, COOP/CORP, Permissions-Policy; hardened contact endpoint.
- Lighthouse (mobile, simulated slow 4G): Performance 94–97, Accessibility 100, Best Practices 100, SEO 100.

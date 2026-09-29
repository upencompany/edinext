import type { NextConfig } from "next";
import { defaultLocale, locales, sections } from "./lib/i18n";

/**
 * Route folders use the default-locale (Italian) segments. For every other
 * locale, translated segments from `sections` in lib/i18n.ts are rewritten
 * onto them, and the untranslated spelling is redirected, so each page has
 * exactly one public URL. Nothing to edit here when a locale is added.
 */
const translatedSegments = locales
  .filter((locale) => locale !== defaultLocale)
  .flatMap((locale) =>
    Object.values(sections)
      .filter((s) => s[defaultLocale] && s[locale] !== s[defaultLocale])
      .map((s) => ({ locale, from: s[defaultLocale], to: s[locale] })),
  );

/** URLs of the previous WordPress site, kept alive for search engines and bookmarks. */
const legacyRedirects: Array<[from: string, to: string]> = [
  ["/chi-siamo", "/it/azienda"],
  ["/soluzioni", "/it/soluzioni"],
  ["/soluzioni/:slug", "/it/soluzioni/:slug"],
  ["/sian", "/it/soluzioni/sian"],
  ["/consultorio", "/it/soluzioni/consultorio"],
  ["/lavora-con-noi", "/it/lavora-con-noi"],
  ["/contatti", "/it/contatti"],
  ["/compliance", "/it/compliance"],
  ["/rating-di-legalita", "/it/compliance#rating-di-legalita"],
  ["/privacy-policy", "/it/privacy-policy"],
  ["/oracle-dba-senior-lecce", "/it/news/oracle-dba-senior-lecce"],
  [
    "/reteavis-il-portale-per-la-gestione-delle-attivita-dei-volontari-donatori-di-sangue",
    "/it/news/reteavis-il-portale-per-la-gestione-delle-attivita-dei-volontari-donatori-di-sangue",
  ],
  [
    "/sicurezza-nei-cantieri-con-la-piattaforma-clicnol-di-edinext",
    "/it/news/sicurezza-nei-cantieri-con-la-piattaforma-clicnol-di-edinext",
  ],
  [
    "/amianto-il-servizio-on-line-clicnola-consente-ad-aziende-e-cittadini-di-dialogare-con-lo-spesal",
    "/it/news/amianto-il-servizio-on-line-clicnola-consente-ad-aziende-e-cittadini-di-dialogare-con-lo-spesal",
  ],
  ["/wp-content/uploads/2024/07/Politica_qualita.pdf", "/documents/politica-qualita.pdf"],
  [
    "/wp-content/uploads/2024/07/MOD-01-D-POLITICA-PER-LA-PARITA-DI-GENERE.pdf",
    "/documents/politica-parita-di-genere.pdf",
  ],
  [
    "/wp-content/uploads/2024/07/AGCM.REGISTRO-UFFICIALE.2024.0051357.pdf",
    "/documents/rating-di-legalita-agcm-2024.pdf",
  ],
];

const isProd = process.env.NODE_ENV === "production";

/**
 * Everything is served from our own origin: no third-party scripts, fonts
 * (self-hosted by next/font) or trackers. 'unsafe-inline' for scripts is
 * required by statically generated App Router pages (inline RSC payload);
 * it is mitigated by the absence of any external script source.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/", destination: `/${defaultLocale}`, permanent: false },
      ...translatedSegments.map(({ locale, from, to }) => ({
        source: `/${locale}/${from}/:path*`,
        destination: `/${locale}/${to}/:path*`,
        permanent: true,
      })),
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  async rewrites() {
    return {
      beforeFiles: translatedSegments.map(({ locale, from, to }) => ({
        source: `/${locale}/${to}/:path*`,
        destination: `/${locale}/${from}/:path*`,
      })),
    };
  },
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()",
      },
    ];
    // Production only: the dev server needs eval and websockets for hot reload.
    if (isProd) {
      security.push(
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      );
    }
    return [
      { source: "/:path*", headers: security },
      {
        source: "/og",
        headers: [
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
          { key: "Cache-Control", value: "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/(brand|media|documents)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
};

export default nextConfig;

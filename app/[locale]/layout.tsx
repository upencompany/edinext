import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { buildNav } from "@/components/layout/nav-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { ui } from "@/content/ui";
import { fontVariables } from "@/lib/fonts";
import { defaultLocale, isLocale, localeNames, locales } from "@/lib/i18n";
import { allowIndexing, siteUrl } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

export const dynamicParams = false;

const themeScript =
  "var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');" +
  "d.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){}";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = ui[isLocale(locale) ? locale : defaultLocale];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: "Edinext", template: "%s — Edinext" },
    description: t.meta.siteDescription,
    applicationName: "Edinext",
    authors: [{ name: "Edinext S.r.l." }],
    formatDetection: { telephone: false },
    robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1627" },
  ],
  colorScheme: "light dark",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = ui[locale];

  return (
    <html lang={localeNames[locale].htmlLang} className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Enables reveal styles, and applies the saved (or system) theme before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-100 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.skip}
        </a>
        <TopBar />
        <SiteHeader nav={buildNav(locale)} />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <RevealObserver />
        <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
      </body>
    </html>
  );
}

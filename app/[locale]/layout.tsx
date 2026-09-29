import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { buildNav } from "@/components/layout/nav-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { ui } from "@/content/ui";
import { fontVariables } from "@/lib/fonts";
import { defaultLocale, isLocale, localeNames, locales } from "@/lib/i18n";
import { allowIndexing, siteUrl } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

export const dynamicParams = false;

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
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = ui[locale];

  return (
    <html lang={localeNames[locale].htmlLang} className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Enables reveal styles only when JavaScript runs — content stays visible otherwise. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-100 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.skip}
        </a>
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

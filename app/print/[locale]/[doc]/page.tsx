import { notFound } from "next/navigation";
import { BrandGuidelines } from "@/components/brandbook/BrandGuidelines";
import { ColorPalette } from "@/components/brandbook/ColorPalette";
import { brandbook, docLocales, type DocLocale } from "@/content/brand";

export const dynamicParams = false;

const docs = ["brand-guidelines", "color-palette"] as const;

type Doc = (typeof docs)[number];

export function generateStaticParams() {
  return docLocales.flatMap((locale) => docs.map((doc) => ({ locale, doc })));
}

export async function generateMetadata({ params }: PageProps<"/print/[locale]/[doc]">) {
  const { locale, doc } = await params;
  if (!docLocales.includes(locale as DocLocale)) return {};
  const t = brandbook[locale as DocLocale];
  return { title: doc === "color-palette" ? t.paletteTitle : t.docTitle };
}

export default async function PrintPage({ params }: PageProps<"/print/[locale]/[doc]">) {
  const { locale, doc } = await params;
  if (!docLocales.includes(locale as DocLocale) || !docs.includes(doc as Doc)) notFound();
  const l = locale as DocLocale;
  return (
    <main lang={l}>{doc === "brand-guidelines" ? <BrandGuidelines locale={l} /> : <ColorPalette locale={l} />}</main>
  );
}

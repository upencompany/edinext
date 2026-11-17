import { buildSearchIndex } from "@/lib/search";
import { locales, toLocale } from "@/lib/i18n";

/** Static search index per language, fetched by the search dialog on first open. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: RouteContext<"/[locale]/search-index.json">) {
  const { locale } = await params;
  return Response.json(buildSearchIndex(toLocale(locale)), {
    headers: { "X-Robots-Tag": "noindex" },
  });
}

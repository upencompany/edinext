import type { NewsArticle } from "../types";
import oracleDbaSenior from "./oracle-dba-senior-lecce";
import reteAvisPortal from "./reteavis-il-portale-per-la-gestione-delle-attivita-dei-volontari-donatori-di-sangue";
import nolTarantoPress from "./sicurezza-nei-cantieri-con-la-piattaforma-clicnol-di-edinext";
import nolaLeccePress from "./amianto-il-servizio-on-line-clicnola-consente-ad-aziende-e-cittadini-di-dialogare-con-lo-spesal";

/**
 * Articles published on edinext.it. One file per article (file name = URL slug);
 * to publish a new one, add a file and list it here. Sorted newest first.
 */
export const news: NewsArticle[] = [oracleDbaSenior, reteAvisPortal, nolTarantoPress, nolaLeccePress].sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug);
}

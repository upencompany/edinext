import type { MetadataRoute } from "next";
import { absoluteUrl, allowIndexing, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}

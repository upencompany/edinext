import type { MetadataRoute } from "next";
import { defaultLocale } from "@/lib/i18n";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Edinext",
    short_name: "Edinext",
    description: "Sistemi informativi per la prevenzione e la sanità territoriale.",
    start_url: `/${defaultLocale}`,
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0076b9",
    icons: [{ src: "/icon.png", sizes: "270x270", type: "image/png" }],
  };
}

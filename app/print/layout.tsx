import type { Metadata } from "next";
import "@/styles/globals.css";
import "./print.css";
import { fontVariables } from "@/lib/fonts";

/**
 * Separate root layout for printable documents (brand guidelines, colour
 * palette). No site header/footer; never indexed.
 */
export const metadata: Metadata = {
  title: { default: "Edinext", template: "%s — Edinext" },
  robots: { index: false, follow: false },
};

export default function PrintLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}

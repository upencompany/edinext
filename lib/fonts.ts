import { Geist, Geist_Mono } from "next/font/google";

/**
 * Contemporary grotesk for display and text. The "latin" subset already
 * covers Italian and English (à è é ì ò ù …); add "latin-ext" only for a
 * language that needs it (e.g. Polish, Czech, Turkish).
 */
export const grotesk = Geist({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

/**
 * Monospace for labels, references and codes. Not preloaded: it never sets
 * the largest text on screen, so it must not compete with the main font.
 */
export const plexMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const fontVariables = `${grotesk.variable} ${plexMono.variable}`;

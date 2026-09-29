import type { Metadata } from "next";
import "@/styles/globals.css";
import { NotFoundContent } from "@/components/sections/NotFoundContent";
import { Logo } from "@/components/ui/Logo";
import { fontVariables } from "@/lib/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina non trovata — Edinext",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="it" className={fontVariables}>
      <body>
        <header className="border-b border-line">
          <div className="wrap flex h-(--header-h) items-center">
            <Link href="/it" aria-label="Edinext — Home">
              <Logo className="h-7 w-auto" sizes="110px" />
            </Link>
          </div>
        </header>
        <main>
          <NotFoundContent />
        </main>
      </body>
    </html>
  );
}

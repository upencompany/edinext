"use client";

import { flushSync } from "react-dom";
import { Moon, Sun } from "@/components/ui/Icons";

type Theme = "light" | "dark";

/**
 * Light/dark switch. The theme is applied to <html data-theme> by the inline
 * script in the layout before first paint; this button flips it, remembers the
 * choice and, where supported, reveals the new theme in a circle from the button.
 * Both icons are rendered and CSS shows the right one, so markup never depends
 * on the stored theme (no hydration mismatch).
 */
export function ThemeToggle({ labels }: { labels: { dark: string; light: string } }) {
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) return apply();

    root.style.setProperty("--tx", `${e.clientX}px`);
    root.style.setProperty("--ty", `${e.clientY}px`);
    root.classList.add("theme-switching");
    const t = document.startViewTransition(() => flushSync(apply));
    t.finished.finally(() => root.classList.remove("theme-switching"));
  };

  return (
    <button type="button" onClick={toggle} className="rounded-full p-2 text-ink-2 transition-colors hover:text-ink">
      <span className="dark:hidden">
        <Moon size={17} />
        <span className="sr-only">{labels.dark}</span>
      </span>
      <span className="hidden dark:inline">
        <Sun size={17} />
        <span className="sr-only">{labels.light}</span>
      </span>
    </button>
  );
}

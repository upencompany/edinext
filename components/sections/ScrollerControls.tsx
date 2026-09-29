"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

/** Previous/next buttons for a horizontally scrolling region. */
export function ScrollerControls({ targetId, labels }: { targetId: string; labels: [string, string] }) {
  const [state, setState] = useState({ start: true, end: false });

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const update = () =>
      setState({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  const move = (dir: 1 | -1) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  if (state.start && state.end) return null;

  return (
    <div className="flex gap-2">
      {([-1, 1] as const).map((dir, i) => (
        <button
          key={dir}
          type="button"
          onClick={() => move(dir)}
          disabled={dir === -1 ? state.start : state.end}
          aria-controls={targetId}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/70 transition-colors hover:bg-ink hover:text-paper disabled:cursor-default disabled:border-line disabled:text-line-strong disabled:hover:bg-transparent"
        >
          <span className="sr-only">{labels[i]}</span>
          <ArrowRight size={16} className={dir === -1 ? "rotate-180" : undefined} />
        </button>
      ))}
    </div>
  );
}

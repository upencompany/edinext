"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Controls for a horizontally scrolling region (whose native scrollbar is
 * hidden): a progress track, previous/next buttons and, with a mouse,
 * click-and-drag scrolling. Touch keeps native swiping; keyboard users scroll
 * the focusable region with the arrow keys.
 */
export function ScrollerControls({ targetId, labels }: { targetId: string; labels: [string, string] }) {
  const [state, setState] = useState({ start: true, end: false, progress: 0, visible: 1 });

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setState({
        start: el.scrollLeft < 8,
        end: el.scrollLeft >= max - 8,
        progress: max > 0 ? el.scrollLeft / max : 0,
        visible: el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1,
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Drag to scroll (mouse only). Snapping is paused while dragging, and a
    // drag never triggers the link under the pointer.
    let startX = 0;
    let startLeft = 0;
    let dragging = false;
    let moved = false;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        el.dataset.dragging = "";
        el.setPointerCapture(e.pointerId);
      }
      if (moved) el.scrollLeft = startLeft - dx;
    };
    const up = () => {
      if (!dragging) return;
      dragging = false;
      delete el.dataset.dragging;
    };
    const click = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click, true);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click, true);
    };
  }, [targetId]);

  const go = (dir: 1 | -1) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  if (state.start && state.end) return null;

  const thumb = Math.max(state.visible, 0.12);

  return (
    <div className="flex items-center gap-6">
      <div aria-hidden="true" className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-line">
        <span
          className="absolute inset-y-0 rounded-full bg-ink"
          style={{ width: `${thumb * 100}%`, left: `${state.progress * (1 - thumb) * 100}%` }}
        />
      </div>
      <div className="flex gap-2">
        {([-1, 1] as const).map((dir, i) => (
          <button
            key={dir}
            type="button"
            onClick={() => go(dir)}
            disabled={dir === -1 ? state.start : state.end}
            aria-controls={targetId}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/70 transition-colors hover:bg-ink hover:text-paper disabled:cursor-default disabled:border-line disabled:text-line-strong disabled:hover:bg-transparent"
          >
            <span className="sr-only">{labels[i]}</span>
            <ArrowRight size={16} className={dir === -1 ? "rotate-180" : undefined} />
          </button>
        ))}
      </div>
    </div>
  );
}

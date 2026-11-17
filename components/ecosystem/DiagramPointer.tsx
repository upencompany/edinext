"use client";

import { useEffect, useRef, useState } from "react";
import { SIZE, layout } from "./geometry";

type Hot = { kind: "app" | "actor"; id: string; x: number; y: number } | null;

const nodes = [
  ...layout.apps.map((a) => ({ kind: "app" as const, id: a.slug, x: a.x, y: a.y })),
  ...layout.actorNodes.map((n) => ({ kind: "actor" as const, id: n.id as string, x: n.x, y: n.y })),
];

/**
 * Pointer layer for the hero diagram: the node nearest the cursor lights up
 * with its connections, the rest of the network dims, and the figure tilts
 * slightly towards the pointer. Mouse/trackpad only; nothing on touch or with
 * reduced motion. Decorative — the diagram itself stays static SVG.
 */
export function DiagramPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const [hot, setHot] = useState<Hot>(null);

  useEffect(() => {
    const layer = ref.current;
    const stage = layer?.parentElement;
    if (!layer || !stage) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = stage.getBoundingClientRect();
        const px = (e.clientX - box.left) / box.width;
        const py = (e.clientY - box.top) / box.height;
        const sx = px * SIZE;
        const sy = py * SIZE;
        let best: Hot = null;
        let bestD = 46;
        for (const n of nodes) {
          const d = Math.hypot(n.x - sx, n.y - sy);
          if (d < bestD) {
            bestD = d;
            best = n;
          }
        }
        setHot((prev) => (prev?.id === best?.id ? prev : best));
        if (best) stage.dataset.hot = "";
        else delete stage.dataset.hot;
        if (!reduced) {
          stage.style.transform = `perspective(1200px) rotateY(${(px - 0.5) * 6}deg) rotateX(${(0.5 - py) * 6}deg)`;
        }
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      setHot(null);
      delete stage.dataset.hot;
      stage.style.transform = "";
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const links = hot ? layout.links.filter((l) => (hot.kind === "app" ? l.app === hot.id : l.actor === hot.id)) : [];
  const ends = hot
    ? links.map((l) => {
        const other = hot.kind === "app" ? layout.actorNodes.find((n) => n.id === l.actor) : layout.apps.find((a) => a.slug === l.app);
        return other ? { key: l.app + l.actor, x: other.x, y: other.y } : null;
      })
    : [];

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {hot && (
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full">
          <g fill="none" strokeLinecap="round">
            {links.map((l) => (
              <path key={l.app + l.actor} d={l.d} className="pointer-link" stroke="var(--color-accent)" strokeWidth="1.8" />
            ))}
          </g>
          {ends.map((e) => e && <circle key={e.key} cx={e.x} cy={e.y} r="5" fill="var(--color-accent)" className="pointer-end" />)}
          <circle cx={hot.x} cy={hot.y} r="11" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="pointer-ring" />
        </svg>
      )}
    </div>
  );
}

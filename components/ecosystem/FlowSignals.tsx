"use client";

import { useEffect, useRef, useState } from "react";
import { SIZE, layout } from "./geometry";

/**
 * Small dots travelling along a few ecosystem links ("data flowing between
 * people and systems"). Purely decorative and deliberately late: mounted
 * only after the page has loaded and the browser is idle, removed while the
 * figure is off-screen, never rendered with prefers-reduced-motion.
 */
export function FlowSignals() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    let ready = false;
    const update = () => setActive(visible && ready);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (ref.current) io.observe(ref.current);

    const start = () => {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
      idle(() => {
        ready = true;
        update();
      });
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      io.disconnect();
      window.removeEventListener("load", start);
    };
  }, []);

  const paths = layout.links.filter((_, i) => i % 5 === 0);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {active && (
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full">
          {paths.map((l, i) => (
            <circle key={`${l.app}-${l.actor}`} r="2.6" fill="var(--color-accent)">
              <animateMotion
                dur={`${4 + (i % 4) * 1.3}s`}
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
                path={l.d}
                keyPoints={i % 2 ? "0;1" : "1;0"}
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          ))}
        </svg>
      )}
    </div>
  );
}

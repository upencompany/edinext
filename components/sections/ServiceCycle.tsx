"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/format";

interface Step {
  id: string;
  title: string;
  summary: string;
  body: string;
}

/**
 * Services as a continuous cycle. The ring on the left stays in view while
 * the steps scroll past: a marker travels along the ring with the scroll,
 * and the active step is highlighted as it reaches the middle of the viewport.
 */
export function ServiceCycle({ steps, label }: { steps: Step[]; label: string }) {
  const [active, setActive] = useState(0);
  const [travel, setTravel] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const listRef = useRef<HTMLOListElement>(null);

  // Continuous progress (0 → number of steps) for the travelling marker.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const list = listRef.current;
        if (!list) return;
        const box = list.getBoundingClientRect();
        const mid = window.innerHeight / 2;
        const p = (mid - box.top) / box.height;
        setTravel(Math.min(Math.max(p, 0), 1) * steps.length);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const size = 420;
  const c = size / 2;
  const r = 150;
  const nodes = steps.map((_, i) => {
    const a = ((-90 + (360 / steps.length) * i) * Math.PI) / 180;
    return { x: c + r * Math.cos(a), y: c + r * Math.sin(a), a };
  });
  const arcLen = 2 * Math.PI * r;
  // Without motion (or before the first scroll) the ring fills step by step.
  const progress = travel > 0 ? Math.max(travel / steps.length, 0.002) : (active + 1) / steps.length;
  const headAngle = -Math.PI / 2 + progress * 2 * Math.PI;
  const head = { x: c + r * Math.cos(headAngle), y: c + r * Math.sin(headAngle) };

  return (
    <div className="grid-12 gap-y-12">
      <div className="col-span-4 md:col-span-5">
        <div className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
          <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto block w-full max-w-[420px]" aria-hidden="true">
            <circle cx={c} cy={c} r={r} fill="none" stroke="var(--color-line)" strokeWidth="1" />
            <circle
              cx={c}
              cy={c}
              r={r}
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
              strokeDasharray={arcLen}
              strokeDashoffset={arcLen * (1 - progress)}
              transform={`rotate(-90 ${c} ${c})`}
              style={{ transition: travel > 0 ? "stroke-dashoffset 0.12s linear" : "stroke-dashoffset 0.8s var(--ease-out-quart)" }}
            />
            {travel > 0 && (
              <g>
                <circle cx={head.x} cy={head.y} r="14" fill="var(--color-accent)" opacity="0.18" />
                <circle cx={head.x} cy={head.y} r="5" fill="var(--color-accent)" />
              </g>
            )}
            {nodes.map((n, i) => {
              const on = i === active;
              const lx = c + (r + 34) * Math.cos(n.a);
              const ly = c + (r + 34) * Math.sin(n.a);
              return (
                <g key={i}>
                  {on && <circle key={`pulse-${active}`} cx={n.x} cy={n.y} r="10" fill="none" stroke="var(--color-brand)" strokeWidth="1.5" className="cycle-pulse" />}
                  <circle cx={n.x} cy={n.y} r={on ? 10 : 6} fill={i <= active ? "var(--color-brand)" : "var(--color-paper)"} stroke="var(--color-brand)" strokeWidth="1.5" style={{ transition: "r 0.4s, fill 0.4s" }} />
                  <text x={lx} y={ly + 4} textAnchor="middle" className="font-mono" fontSize="13" fill={on ? "var(--color-ink)" : "var(--color-ink-3)"}>
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </g>
              );
            })}
            <text x={c} y={c - 8} textAnchor="middle" className="font-mono" fontSize="12" letterSpacing="1.5" fill="var(--color-ink-3)">
              {label.toUpperCase()}
            </text>
            <text key={active} x={c} y={c + 24} textAnchor="middle" fontSize="24" fontWeight="600" fill="var(--color-ink)" className="cycle-title">
              {steps[active]?.title}
            </text>
          </svg>
        </div>
      </div>

      <ol ref={listRef} className="col-span-4 md:col-span-6 md:col-start-7">
        {steps.map((s, i) => (
          <li
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className={cx(
              "border-t py-10 transition-colors duration-500 md:min-h-[20rem] md:py-14",
              i === active ? "border-ink" : "border-line",
            )}
          >
            <p className="t-label text-brand-ink tabular">{String(i + 1).padStart(2, "0")}</p>
            <h3 className={cx("t-h3 mt-3 transition-colors duration-500", i === active ? "text-ink" : "text-ink-2")}>{s.title}</h3>
            <p className="mt-3 text-lg font-medium leading-snug text-ink">{s.summary}</p>
            <p className="mt-4 max-w-xl text-ink-2">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

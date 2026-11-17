"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated key figure. A leading number ("30+", "20", "24/7") counts up from
 * zero when it scrolls into view; text without a number ("Lecce") rises in
 * letter by letter. The final value is rendered on the server, so the figure
 * is correct without JavaScript and for screen readers (the moving copy is
 * aria-hidden). Nothing moves with reduced motion.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const [shown, setShown] = useState<number | null>(null);
  const [lettersIn, setLettersIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (target === null) {
          setLettersIn(true);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setShown(Math.round(eased * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  if (target === null) {
    return (
      <span ref={ref} className={lettersIn ? "fact-letters is-on" : "fact-letters"}>
        <span className="sr-only">{value}</span>
        <span aria-hidden="true">
          {[...value].map((ch, i) => (
            <span key={i} style={{ ["--i" as string]: i }}>
              {ch}
            </span>
          ))}
        </span>
      </span>
    );
  }

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {shown ?? target}
        {match?.[2]}
      </span>
    </span>
  );
}

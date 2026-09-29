import Image from "next/image";
import type { ReactNode } from "react";
import { hasColorway, logoFile, type ColorwayId, type LogoVariantId } from "@/content/brand";
import { cx } from "@/lib/format";

/**
 * Print primitives for the brand documents. One slide = one 1600×900 page
 * (16:9); page size and breaks are defined in app/print/print.css.
 */

export function Slide({
  children,
  dark,
  section,
  number,
  docTitle,
  className,
  bare,
}: {
  children: ReactNode;
  dark?: boolean;
  section?: string;
  number?: number;
  docTitle?: string;
  className?: string;
  /** No running header/footer (covers). */
  bare?: boolean;
}) {
  return (
    <section className={cx("slide", dark && "theme-dark", className)}>
      {!bare && (
        <header className="absolute inset-x-[80px] top-[48px] flex items-center justify-between">
          <BrandImage variant="wordmark" colorway={dark ? "reverse" : "color"} height={26} />
          <span className="t-label text-ink-3">{docTitle}</span>
        </header>
      )}
      <div className={cx("absolute inset-x-[80px]", bare ? "inset-y-[80px]" : "top-[128px] bottom-[110px]")}>{children}</div>
      {!bare && (
        <footer className="absolute inset-x-[80px] bottom-[44px] flex items-center justify-between border-t border-line pt-4">
          <span className="text-[15px] font-medium">{section}</span>
          <span className="t-meta tabular text-ink-3">{String(number ?? 0).padStart(2, "0")}</span>
        </footer>
      )}
    </section>
  );
}

export function SlideTitle({ kicker, children, lede }: { kicker?: string; children: ReactNode; lede?: ReactNode }) {
  return (
    <div className="max-w-[900px]">
      {kicker && <p className="t-label text-brand-ink">{kicker}</p>}
      <h2 className={cx("text-[52px] font-semibold leading-[1.05] tracking-[-0.04em]", kicker && "mt-3")}>{children}</h2>
      {lede && <p className="mt-5 text-[21px] leading-[1.45] text-ink-2">{lede}</p>}
    </div>
  );
}

/** Section divider page. */
export function SectionSlide({ index, title, docTitle }: { index: string; title: string; docTitle: string }) {
  return (
    <section className="slide theme-dark">
      <div className="absolute inset-[80px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <BrandImage variant="wordmark" colorway="reverse" height={26} />
          <span className="t-label text-ink-3">{docTitle}</span>
        </div>
        <div>
          <p className="font-mono text-[140px] leading-none tracking-[-0.05em] text-brand">{index}</p>
          <h2 className="mt-6 text-[88px] font-semibold leading-none tracking-[-0.045em]">{title}</h2>
        </div>
        <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
          <path
            d="M4.2 3.1c1.6-.6 3 .7 4 1.9l3.9 4.7 3.6-4.8c1-1.3 2.4-2.6 4.1-1.8 1.4.8.9 2.5 0 3.7l-4.6 5.5 4.8 5.8c.9 1.1 1.3 2.8-.1 3.5-1.6.8-3-.6-3.9-1.8l-4-5-4.1 5.1c-.9 1.2-2.5 2.4-4 1.5-1.3-.9-.7-2.5.2-3.6l4.8-5.6-4.6-5.4c-1-1.2-1.5-3.1-.1-3.7Z"
            fill="var(--color-accent)"
          />
        </svg>
      </div>
    </section>
  );
}

/** Aspect ratios of the generated SVG viewBoxes. */
export const logoRatios: Record<LogoVariantId, number> = { logo: 2.4289, wordmark: 3.5085, symbol: 0.7044 };

/** Half the x-height of the letter "e", as a fraction of the wordmark height: the clear-space unit. */
export const CLEAR_SPACE_RATIO = 0.223;

/** A generated logo file (see scripts/press-kit.mjs), sized by height. */
export function BrandImage({
  variant,
  colorway,
  height,
  className,
  style,
}: {
  variant: LogoVariantId;
  colorway: ColorwayId;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (!hasColorway(variant, colorway)) colorway = "color";
  const width = Math.round(height * logoRatios[variant]);
  return (
    <Image
      src={logoFile(variant, colorway)}
      alt=""
      width={width}
      height={height}
      unoptimized
      priority
      className={className}
      style={{ width, height, ...style }}
    />
  );
}

export function Swatch({ hex, className, children }: { hex: string; className?: string; children?: ReactNode }) {
  return (
    <div className={cx("rounded-2xl border border-black/5", className)} style={{ background: hex }}>
      {children}
    </div>
  );
}

export function CrossBadge() {
  return (
    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-[#B42318] text-white" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path d="m2 2 10 10M12 2 2 12" stroke="currentColor" strokeWidth="2" />
      </svg>
    </span>
  );
}

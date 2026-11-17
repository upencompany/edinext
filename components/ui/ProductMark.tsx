import Image from "next/image";
import { ViewTransition } from "react";
import { cx } from "@/lib/format";

interface ProductMarkProps {
  /** Official product logo (square tile in public/brand/products). */
  src?: string;
  /** Fallback short code, drawn as a neutral tile when there is no logo. */
  monogram?: string;
  size?: number;
  className?: string;
  /**
   * Shared-element name: the same mark on two pages (e.g. catalogue → product
   * page) morphs from one position to the other during navigation.
   * Must be unique on the page.
   */
  transitionName?: string;
}

/**
 * Small product mark. Decorative (hidden from assistive technology): the
 * product name is always printed next to it.
 */
export function ProductMark({ transitionName, ...props }: ProductMarkProps) {
  const mark = <Mark {...props} />;
  return transitionName ? (
    <ViewTransition name={transitionName} share="mark-morph" default="none">
      {mark}
    </ViewTransition>
  ) : (
    mark
  );
}

function Mark({ src, monogram, size = 56, className }: Omit<ProductMarkProps, "transitionName">) {
  const base = "shrink-0 rounded-[22%] border border-black/5 shadow-[0_1px_2px_rgba(11,18,32,0.08)]";
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        sizes={`${size}px`}
        className={cx(base, "bg-white", className)}
        style={{ width: size, height: size }}
      />
    );
  }
  if (!monogram) return null;
  return (
    <span
      aria-hidden="true"
      className={cx(base, "grid place-items-center bg-brand-tint font-mono font-medium tracking-tight text-brand-ink", className)}
      style={{ width: size, height: size, fontSize: Math.max(7, Math.round(size * (monogram.length > 3 ? 0.21 : 0.28))) }}
    >
      {monogram}
    </span>
  );
}

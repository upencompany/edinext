import Image from "next/image";
import { cx } from "@/lib/format";

interface ProductMarkProps {
  /** Official product logo (square tile in public/brand/products). */
  src?: string;
  /** Fallback short code, drawn as a neutral tile when there is no logo. */
  monogram?: string;
  size?: number;
  className?: string;
}

/**
 * Small product mark. Decorative (hidden from assistive technology): the
 * product name is always printed next to it.
 */
export function ProductMark({ src, monogram, size = 56, className }: ProductMarkProps) {
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

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function ArrowRight({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M6 14 14 6M7 6h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowDown({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M10 3v13M4.5 11 10 16.5 15.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function Chevron({ size = 12, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true" {...props}>
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Plus({ size = 14, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Download({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M10 3v10M5.5 8.5 10 13l4.5-4.5M4 16.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

/**
 * The "×" connector, drawn after the brush-stroke X of the logo
 * ("Innovare × Crescere"). Used sparingly as a brand punctuation mark.
 */
export function BrandX({ size = 20, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} {...props}>
      <path
        d="M4.2 3.1c1.6-.6 3 .7 4 1.9l3.9 4.7 3.6-4.8c1-1.3 2.4-2.6 4.1-1.8 1.4.8.9 2.5 0 3.7l-4.6 5.5 4.8 5.8c.9 1.1 1.3 2.8-.1 3.5-1.6.8-3-.6-3.9-1.8l-4-5-4.1 5.1c-.9 1.2-2.5 2.4-4 1.5-1.3-.9-.7-2.5.2-3.6l4.8-5.6-4.6-5.4c-1-1.2-1.5-3.1-.1-3.7Z"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

export function Menu({ size = 22, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true" {...props}>
      <path d="M2 7h18M2 15h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Close({ size = 22, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true" {...props}>
      <path d="m4 4 14 14M18 4 4 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

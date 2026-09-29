/** Small colour utilities for the brand pages (no dependencies). */

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number];
}

function channel(v: number) {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG 2.x contrast ratio between two colours. */
export function contrastRatio(a: string, b: string) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/** WCAG level for normal text (AA ≥ 4.5, AAA ≥ 7); large text passes AA at 3. */
export function wcagLevel(ratio: number): "AAA" | "AA" | "AA large" | "—" {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA large";
  return "—";
}

/** Readable text colour (ink or white) on a given background. */
export function textOn(bg: string, ink = "#0B1220") {
  return contrastRatio(bg, "#FFFFFF") >= contrastRatio(bg, ink) ? "#FFFFFF" : ink;
}

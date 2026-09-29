#!/usr/bin/env node
/**
 * Builds the Edinext press kit into public/press-kit/.
 *
 *   npm run press-kit                 logo SVG/PNG variants + logo pack ZIP
 *   npm run press-kit -- --pdf        also renders the brand guidelines and colour
 *                                     palette PDFs (needs the
 *                                     site running — use a production build, see below)
 *   npm run press-kit -- --pdf --no-zip  refresh PDFs without rebuilding the ZIP
 *
 * Sources of truth:
 *   brand/edinext-logo-master.svg     vector logo, grouped (#wordmark, #symbol, #tagline, #tagline-x)
 *   brand/tokens.json                 colours, scales, logo variants and colourways
 *
 * PNG and PDF output uses a local Chrome/Chromium (set CHROME_PATH if it is not found).
 * PDFs are printed from the site's /print routes: start the site first
 * (`npm run build && npm start`, or `npm run dev`) and pass --url if it is not
 * on http://localhost:3000.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { zipSync } from "fflate";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "press-kit");
const args = process.argv.slice(2);
const withPdf = args.includes("--pdf");
const baseUrl = (args.find((a) => a.startsWith("--url="))?.slice(6) ?? "http://localhost:3000").replace(/\/$/, "");

const tokens = JSON.parse(readFileSync(join(root, "brand", "tokens.json"), "utf8"));
const master = readFileSync(join(root, tokens.logo.master), "utf8");
const year = tokens.version.slice(0, 4);
/** Keep in sync with components/brandbook/Mockups.tsx → mockupScenes. */
const mockupScenes = ["card-thermos", "stationery", "devices", "badge", "notebook", "tote", "mug", "rollup", "signage"];

// ── 1. Colour tokens must match the website ─────────────────────────────────
const css = readFileSync(join(root, "styles", "globals.css"), "utf8");
const mismatches = [];
for (const [id, variable] of Object.entries(tokens.cssTokens)) {
  const expected = tokens.colors.find((c) => c.id === id)?.hex.toLowerCase();
  const actual = css.match(new RegExp(`${variable}:\\s*(#[0-9a-fA-F]{6})`))?.[1]?.toLowerCase();
  if (expected !== actual) mismatches.push(`${id}: tokens.json ${expected} ≠ globals.css ${variable} ${actual}`);
}
if (mismatches.length) {
  console.error("Colour tokens out of sync:\n  " + mismatches.join("\n  "));
  process.exit(1);
}

// ── 2. Logo SVG variants ────────────────────────────────────────────────────
const groups = Object.fromEntries(
  [...master.matchAll(/<g id="([^"]+)">([\s\S]*?)<\/g>/g)].map(([, id, body]) => [
    id,
    [...body.matchAll(/<path data-layer="(\w+)" fill="[^"]+" fill-rule="evenodd" d="([^"]+)"\/>/g)].map(([, layer, d]) => ({ layer, d })),
  ]),
);

function bbox(paths) {
  let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
  for (const { d } of paths) {
    const n = d.match(/-?\d+(\.\d+)?/g).map(Number);
    for (let i = 0; i + 1 < n.length; i += 2) {
      x0 = Math.min(x0, n[i]);
      x1 = Math.max(x1, n[i]);
      y0 = Math.min(y0, n[i + 1]);
      y1 = Math.max(y1, n[i + 1]);
    }
  }
  return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
}

function buildSvg(variant, colorway) {
  const paths = variant.groups.flatMap((g) => groups[g] ?? []);
  const b = bbox(paths);
  const pad = Math.round(Math.max(b.w, b.h) * 0.02);
  const vb = [b.x0 - pad, b.y0 - pad, b.w + pad * 2, b.h + pad * 2].map((v) => Math.round(v));
  const byLayer = {};
  for (const p of paths) (byLayer[p.layer] ??= []).push(p.d);
  // Paint order matters: green fill, then the black brush texture, then the blue letters.
  const body = ["green", "black", "blue"]
    .filter((l) => byLayer[l])
    .map((l) => {
      // One-colour versions: a hairline stroke in the same colour closes anti-aliasing seams between layers.
      const mono = new Set(Object.values(colorway.fills)).size === 1;
      const stroke = mono ? ` stroke="${colorway.fills[l]}" stroke-width="1.2" stroke-linejoin="round"` : "";
      return `<path fill="${colorway.fills[l]}"${stroke} fill-rule="evenodd" d="${byLayer[l].join("")}"/>`;
    })
    .join("");
  const title = `Edinext — ${variant.name.en} (${colorway.name.en})`;
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(" ")}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`,
    width: vb[2],
    height: vb[3],
  };
}

rmSync(join(out, "logos"), { recursive: true, force: true });
mkdirSync(join(out, "logos", "png"), { recursive: true });

const files = [];
for (const variant of tokens.logo.variants) {
  for (const colorway of tokens.logo.colorways) {
    // The symbol has no blue: its "reverse" is identical to full colour.
    if (variant.id === "symbol" && colorway.id === "reverse") continue;
    const name = `edinext-${variant.id}-${colorway.id}`;
    const { svg, width, height } = buildSvg(variant, colorway);
    writeFileSync(join(out, "logos", `${name}.svg`), svg);
    files.push({ name, svg, width, height, variant, colorway });
  }
}
console.log(`✓ ${files.length} SVG logo variants`);

// ── 3. PNG exports (transparent) ────────────────────────────────────────────
function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  return candidates.find((c) => existsSync(c));
}
const chrome = findChrome();
const chromeBase = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--force-device-scale-factor=1"];

const pngWidths = { logo: [1000, 3000], wordmark: [800, 2400], symbol: [256, 1024] };
if (!chrome) {
  console.warn("! Chrome not found (set CHROME_PATH): PNG and PDF export skipped");
} else {
  const tmp = join(tmpdir(), "edinext-press-kit");
  mkdirSync(tmp, { recursive: true });
  let count = 0;
  for (const f of files) {
    for (const w of pngWidths[f.variant.id]) {
      const h = Math.round((w * f.height) / f.width);
      const html = join(tmp, `${f.name}-${w}.html`);
      writeFileSync(
        html,
        `<!doctype html><html><head><style>html,body{margin:0;background:transparent}img{display:block;width:${w}px;height:${h}px}</style></head><body><img src="${pathToFileURL(join(out, "logos", `${f.name}.svg`)).href}"></body></html>`,
      );
      execFileSync(chrome, [...chromeBase, "--default-background-color=00000000", `--window-size=${w},${h}`, `--screenshot=${join(out, "logos", "png", `${f.name}-${w}.png`)}`, pathToFileURL(html).href], { stdio: "ignore" });
      count++;
    }
  }
  console.log(`✓ ${count} transparent PNG files`);

  // ── 4. PDFs rendered from the running site ────────────────────────────────
  if (withPdf) {
    for (const scene of mockupScenes) {
      const jpg = join(out, "mockups", `edinext-mockup-${scene}.jpg`);
      if (!existsSync(jpg)) throw new Error(`Missing print-ready mockup: ${jpg}`);
    }
    const docs = [
      { route: "brand-guidelines", file: `Edinext_Brand_Guidelines_${year}` },
      { route: "color-palette", file: `Edinext_Color_Palette_${year}` },
    ];
    for (const locale of ["it", "en"]) {
      for (const doc of docs) {
        const target = join(out, `${doc.file}_${locale.toUpperCase()}.pdf`);
        execFileSync(chrome, [...chromeBase, "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw", "--virtual-time-budget=8000", `--print-to-pdf=${target}`, `${baseUrl}/print/${locale}/${doc.route}`], { stdio: "ignore" });
        console.log(`✓ ${relative(root, target)} (${Math.round(statSync(target).size / 1024)} KB)`);
      }
    }
  }
}

// ── 5. Logo pack ZIP ────────────────────────────────────────────────────────
if (!args.includes("--no-zip")) {
const readme = `EDINEXT — LOGO PACK ${year}
=========================

Contents
  svg/            vector logos (preferred for print and digital)
  png/            transparent PNG exports, width in pixels in the file name
  products/       product marks of Edinext applications
  mockups/        illustrative application concepts (not photographs of produced materials)

Variants
  edinext-logo-*       logo with the "Innovare × Crescere" tagline
  edinext-wordmark-*   logotype only (use when the tagline would be smaller than 3 mm / 12 px)
  edinext-symbol-*     the X alone (avatars, favicons, small spaces)

Colourways
  color     on white or very light backgrounds
  reverse   on dark backgrounds (Night #07101D, photographs)
  black     one-colour printing, fax, engraving
  white     one-colour on Edinext Blue #0076B9 or other dark colours

Rules (full details in the Brand Guidelines PDF)
  - Keep clear space around the logo equal to half the height of the letter "e".
  - Minimum width: wordmark 100 px / 25 mm, logo with tagline 160 px / 40 mm, symbol 16 px / 5 mm.
  - Do not recolour, stretch, rotate, outline or add effects. Do not rebuild the lettering with a font.

Brand colours
${tokens.colors
  .filter((c) => c.group !== "support")
  .map((c) => `  ${c.name.en.padEnd(16)} ${c.hex}   RGB ${c.rgb.join(" ")}   CMYK ${c.cmyk.join(" ")}`)
  .join("\n")}
  CMYK values are reference conversions: confirm them with your printer's colour profile.

Press contact: info@edinext.it — +39 0832 242649
Edinext S.r.l. — Via Marco Biagi 26, 73100 Lecce (LE), Italy — www.edinext.it
`;

const zipFiles = { "README.txt": new TextEncoder().encode(readme) };
for (const f of files) {
  zipFiles[`svg/${f.name}.svg`] = new TextEncoder().encode(f.svg);
  for (const w of pngWidths[f.variant.id]) {
    const png = join(out, "logos", "png", `${f.name}-${w}.png`);
    if (existsSync(png)) zipFiles[`png/${f.name}-${w}.png`] = readFileSync(png);
  }
}
for (const scene of mockupScenes) {
  const png = join(out, "mockups", `edinext-mockup-${scene}.png`);
  if (!existsSync(png)) throw new Error(`Missing press-kit mockup: ${png}`);
  zipFiles[`mockups/edinext-mockup-${scene}.png`] = readFileSync(png);
}
const productsDir = join(root, "public", "brand", "products");
for (const slug of ["clicprevenzione", "nola", "nol", "clicspesal", "sian", "clicvaccino", "spuv", "smart", "luna", "geco"]) {
  const p = join(productsDir, `${slug}.png`);
  if (existsSync(p)) zipFiles[`products/${slug}.png`] = readFileSync(p);
}
const zipPath = join(out, `Edinext_Logo_Pack_${year}.zip`);
writeFileSync(zipPath, zipSync(zipFiles, { level: 9 }));
console.log(`✓ ${relative(root, zipPath)} (${Math.round(statSync(zipPath).size / 1024)} KB, ${Object.keys(zipFiles).length} files)`);
}

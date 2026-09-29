import { brandbook, brandVersion } from "@/content/brand";
import { colorSlides } from "./ColorSlides";
import { numberSlides } from "./numbering";
import { BrandImage } from "./Slide";

type BrandLocale = "it" | "en";

/** The printable colour palette (16:9). Printed to PDF by scripts/press-kit.mjs. */
export function ColorPalette({ locale }: { locale: BrandLocale }) {
  const t = brandbook[locale];
  const doc = t.paletteTitle;

  const slides = [
    <section key="cover" className="slide theme-dark">
      <div className="absolute inset-[80px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="t-label rounded-full border border-line-strong px-3 py-1.5 text-ink-2">
            {t.version} {brandVersion}
          </span>
          <span className="t-label text-ink-3">www.edinext.it</span>
        </div>
        <div>
          <BrandImage variant="wordmark" colorway="reverse" height={120} />
          <p className="mt-10 max-w-[760px] text-[24px] leading-snug text-ink-2">{t.palette.intro}</p>
        </div>
        <div className="flex items-end justify-between">
          <h1 className="text-[76px] font-semibold leading-none tracking-[-0.045em]">{doc}</h1>
          <div className="flex gap-3">
            {["#0076B9", "#81B736", "#FFFFFF", "#0B1220"].map((c) => (
              <span key={c} className="h-14 w-14 rounded-full border border-white/20" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </section>,
    ...colorSlides({ locale, docTitle: doc, section: t.sections.color }),
    <section key="end" className="slide theme-dark">
      <div className="absolute inset-[80px] flex flex-col items-center justify-center text-center">
        <BrandImage variant="symbol" colorway="color" height={180} />
        <p className="mt-12 text-[72px] font-semibold tracking-[-0.045em]">{t.contacts.thanks}</p>
        <p className="t-label mt-6 text-ink-3">www.edinext.it · Innovare × Crescere</p>
      </div>
    </section>,
  ];

  return <>{numberSlides(slides)}</>;
}

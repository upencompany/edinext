import { brandColors, brandbook, colorById, colorProportions, colorScales, type BrandColor } from "@/content/brand";
import { contrastRatio, textOn, wcagLevel } from "@/lib/color";
import { Slide, SlideTitle, Swatch } from "./Slide";

type BrandLocale = "it" | "en";
interface Common {
  locale: BrandLocale;
  docTitle: string;
  section: string;
}

function Codes({ c, locale, light }: { c: BrandColor; locale: BrandLocale; light?: boolean }) {
  const t = brandbook[locale].color.codes;
  return (
    <dl className={`grid grid-cols-[64px_1fr] gap-y-1 font-mono text-[14px] ${light ? "text-white/85" : "text-ink-2"}`}>
      <dt>{t.hex}</dt>
      <dd className={light ? "text-white" : "text-ink"}>{c.hex}</dd>
      <dt>{t.rgb}</dt>
      <dd>{c.rgb.join(" · ")}</dd>
      <dt>{t.cmyk}</dt>
      <dd>{c.cmyk.join(" · ")}</dd>
    </dl>
  );
}

/** The colour slides, shared by the brand guidelines and the colour palette documents. */
export function colorSlides({ locale, docTitle, section }: Common) {
  const t = brandbook[locale].color;
  const primary = brandColors.filter((c) => c.group === "primary");
  const neutral = brandColors.filter((c) => c.group === "neutral");
  const support = brandColors.filter((c) => c.group === "support");
  const combos: [string, string][] = [
    ["ink", "white"],
    ["blue-ink", "white"],
    ["white", "blue"],
    ["white", "night"],
    ["green", "night"],
    ["blue", "mist"],
    ["slate", "white"],
    ["green", "white"],
  ];

  return [
    <Slide key="primary" docTitle={docTitle} section={section}>
      <SlideTitle kicker={section} lede={t.primaryBody}>
        {t.primaryTitle}
      </SlideTitle>
      <div className="mt-10 grid h-[420px] grid-cols-2 gap-6">
        {primary.map((c) => (
          <Swatch key={c.id} hex={c.hex} className="flex flex-col justify-between p-8">
            <div style={{ color: textOn(c.hex) }}>
              <p className="text-[34px] font-semibold tracking-tight">{c.name[locale]}</p>
              <p className="mt-2 max-w-md text-[17px] opacity-90">{c.role[locale]}</p>
            </div>
            <div style={{ color: textOn(c.hex) }}>
              <Codes c={c} locale={locale} light={textOn(c.hex) === "#FFFFFF"} />
            </div>
          </Swatch>
        ))}
      </div>
    </Slide>,

    <Slide key="neutral" docTitle={docTitle} section={section}>
      <SlideTitle kicker={section} lede={t.neutralBody}>
        {t.neutralTitle}
      </SlideTitle>
      <div className="mt-10 grid grid-cols-6 gap-4">
        {neutral.map((c) => (
          <div key={c.id}>
            <Swatch hex={c.hex} className="h-[220px]" />
            <p className="mt-4 text-[19px] font-semibold">{c.name[locale]}</p>
            <p className="mt-1 min-h-[44px] text-[13px] leading-snug text-ink-3">{c.role[locale]}</p>
            <div className="mt-3">
              <Codes c={c} locale={locale} />
            </div>
          </div>
        ))}
      </div>
    </Slide>,

    <Slide key="support" docTitle={docTitle} section={section}>
      <SlideTitle kicker={section} lede={t.supportBody}>
        {t.supportTitle}
      </SlideTitle>
      <div className="mt-10 grid grid-cols-5 gap-4">
        {support.map((c) => (
          <div key={c.id}>
            <Swatch hex={c.hex} className="h-[200px]" />
            <p className="mt-4 text-[19px] font-semibold">{c.name[locale]}</p>
            <p className="mt-1 min-h-[44px] text-[13px] leading-snug text-ink-3">{c.role[locale]}</p>
            <div className="mt-3">
              <Codes c={c} locale={locale} />
            </div>
          </div>
        ))}
      </div>
      <p className="absolute bottom-0 left-0 max-w-[1000px] text-[13px] text-ink-3">{t.cmykNote}</p>
    </Slide>,

    <Slide key="scales" docTitle={docTitle} section={section}>
      <SlideTitle kicker={section} lede={t.scalesBody}>
        {t.scalesTitle}
      </SlideTitle>
      <div className="mt-10 space-y-6">
        {(Object.keys(colorScales) as (keyof typeof colorScales)[]).map((key) => (
          <div key={key}>
            <p className="t-label mb-2 text-ink-3">{key}</p>
            <div className="grid grid-cols-10 gap-2">
              {Object.entries(colorScales[key]).map(([step, hex]) => (
                <div key={step}>
                  <div className="h-[86px] rounded-xl border border-black/5" style={{ background: hex }} />
                  <p className="mt-2 font-mono text-[12px]">
                    <span className="font-medium">{step}</span> <span className="text-ink-3">{hex}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Slide>,

    <Slide key="proportions" docTitle={docTitle} section={section}>
      <SlideTitle kicker={section} lede={t.proportionsBody}>
        {t.proportionsTitle}
      </SlideTitle>
      <div className="mt-14 flex h-[330px] overflow-hidden rounded-3xl border border-line">
        {colorProportions.map((p) => {
          const c = colorById(p.id);
          return (
            <div key={p.id} className="flex flex-col justify-between p-6" style={{ width: `${p.value}%`, minWidth: 64, background: c.hex, color: textOn(c.hex) }}>
              <span className={p.value < 5 ? "text-[20px] font-semibold" : "text-[56px] font-semibold leading-none tracking-tight"}>{p.value}%</span>
              {p.value >= 5 && <span className="text-[15px] font-medium">{c.name[locale]}</span>}
            </div>
          );
        })}
      </div>
    </Slide>,

    <Slide key="combos" docTitle={docTitle} section={section}>
      <SlideTitle kicker={section} lede={t.combinationsBody}>
        {t.combinationsTitle}
      </SlideTitle>
      <div className="mt-10 grid grid-cols-4 gap-4">
        {combos.map(([fg, bg]) => {
          const f = colorById(fg);
          const b = colorById(bg);
          const ratio = contrastRatio(f.hex, b.hex);
          return (
            <div key={`${fg}-${bg}`} className="overflow-hidden rounded-2xl border border-line">
              <div className="flex h-[150px] flex-col justify-between p-5" style={{ background: b.hex, color: f.hex }}>
                <span className="text-[40px] font-semibold leading-none tracking-tight">Aa</span>
                <span className="text-[14px] font-medium">
                  {f.name[locale]} / {b.name[locale]}
                </span>
              </div>
              <div className="flex items-center justify-between bg-paper px-5 py-3 font-mono text-[14px]">
                <span>{ratio.toFixed(2)}:1</span>
                <span className={wcagLevel(ratio) === "—" ? "text-[#B42318]" : "text-accent-ink"}>{wcagLevel(ratio)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Slide>,
  ];
}


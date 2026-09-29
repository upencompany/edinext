import Image from "next/image";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { ArrowRight, ArrowUpRight, BrandX, Chevron, Close, Download, Menu, Plus } from "@/components/ui/Icons";
import { ProductMark } from "@/components/ui/ProductMark";
import { boilerplate, brandbook, brandVersion, colorById, logoColorways, logoVariants, pressDownloads } from "@/content/brand";
import { company } from "@/content/company";
import { actors } from "@/content/ecosystem";
import { companyPage, home } from "@/content/pages";
import { solutions } from "@/content/solutions";
import { colorSlides } from "./ColorSlides";
import { numberSlides } from "./numbering";
import { BrandImage, CLEAR_SPACE_RATIO, CrossBadge, SectionSlide, Slide, SlideTitle } from "./Slide";

type BrandLocale = "it" | "en";

/** The printable brand guidelines (16:9). Printed to PDF by scripts/press-kit.mjs. */
export function BrandGuidelines({ locale }: { locale: BrandLocale }) {
  const t = brandbook[locale];
  const doc = t.docTitle;
  const s = t.sections;

  const sectionList = [
    ["01", s.brand],
    ["02", s.logo],
    ["03", s.color],
    ["04", s.type],
    ["05", s.visual],
    ["06", s.applications],
    ["07", s.contacts],
  ] as const;

  const slides = [
    // ── Cover ──────────────────────────────────────────────────────────────
    <section key="cover" className="slide theme-dark">
      <div className="absolute inset-[80px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="t-label rounded-full border border-line-strong px-3 py-1.5 text-ink-2">
            {t.version} {brandVersion}
          </span>
          <span className="t-label text-ink-3">www.edinext.it</span>
        </div>
        <BrandImage variant="logo" colorway="reverse" height={250} />
        <div className="flex items-end justify-between">
          <h1 className="text-[76px] font-semibold leading-none tracking-[-0.045em]">{doc}</h1>
          <span className="t-label text-accent">Innovare × Crescere</span>
        </div>
      </div>
    </section>,

    // ── Welcome ────────────────────────────────────────────────────────────
    <Slide key="welcome" docTitle={doc} section={doc}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-16">
        <div className="flex flex-col justify-center">
          <SlideTitle>{t.welcomeTitle}</SlideTitle>
          <p className="mt-8 text-[22px] leading-[1.5] text-ink-2">{t.welcomeBody}</p>
        </div>
        <div className="flex flex-col justify-center border-l border-line pl-16">
          <p className="t-label text-ink-3">{t.contents}</p>
          <ol className="mt-6 space-y-4">
            {sectionList.map(([i, label]) => (
              <li key={i} className="flex items-baseline gap-6 border-b border-line pb-4 text-[28px] font-medium tracking-tight">
                <span className="font-mono text-[16px] text-brand-ink">{i}</span>
                {label}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Slide>,

    // ── 01 Brand ───────────────────────────────────────────────────────────
    <SectionSlide key="s1" index="01" title={s.brand} docTitle={doc} />,
    <Slide key="about" docTitle={doc} section={s.brand}>
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-16">
        <div>
          <SlideTitle kicker={s.brand}>{t.brand.aboutTitle}</SlideTitle>
          <div className="mt-8 space-y-4 text-[19px] leading-[1.55] text-ink-2">
            {boilerplate[locale].long.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="grid grid-cols-2 content-center gap-x-8 gap-y-10 border-l border-line pl-16">
          {home[locale].facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-[16px] leading-snug text-ink-2">{f.label}</dt>
              <dd className="text-[72px] font-semibold leading-none tracking-[-0.04em]">{f.value}</dd>
            </div>
          ))}
          <div className="flex flex-col-reverse">
            <dt className="mt-2 text-[16px] leading-snug text-ink-2">{company.address.street}</dt>
            <dd className="text-[72px] font-semibold leading-none tracking-[-0.04em]">{company.address.city}</dd>
          </div>
        </dl>
      </div>
    </Slide>,
    <Slide key="mission" docTitle={doc} section={s.brand}>
      <SlideTitle kicker={t.brand.missionTitle}>{t.brand.mission}</SlideTitle>
      <p className="t-label mt-14 text-ink-3">{t.brand.principlesTitle}</p>
      <ol className="mt-5 grid grid-cols-5 gap-4">
        {companyPage[locale].mission.items.map((m, i) => (
          <li key={m.title} className="rounded-2xl border border-line p-6">
            <span className="font-mono text-[14px] text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-6 text-[21px] font-semibold leading-tight tracking-tight">{m.title}</p>
            <p className="mt-3 text-[15px] leading-snug text-ink-2">{m.body}</p>
          </li>
        ))}
      </ol>
    </Slide>,
    <Slide key="voice" docTitle={doc} section={s.brand}>
      <SlideTitle kicker={s.brand} lede={t.brand.voiceIntro}>
        {t.brand.voiceTitle}
      </SlideTitle>
      <div className="mt-10 grid grid-cols-3 gap-6">
        {t.brand.voice.map((v) => (
          <div key={v.title} className="border-t-2 border-ink pt-5">
            <p className="text-[30px] font-semibold tracking-tight">{v.title}</p>
            <p className="mt-2 text-[17px] leading-snug text-ink-2">{v.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6 text-[18px]">
        <p className="rounded-2xl bg-accent-tint p-6 text-accent-ink">{t.brand.voiceDo}</p>
        <p className="rounded-2xl bg-[#FDF1EF] p-6 text-[#8A1C12]">{t.brand.voiceDont}</p>
      </div>
    </Slide>,
    <Slide key="audience" docTitle={doc} section={s.brand}>
      <SlideTitle kicker={s.brand}>{t.brand.audienceTitle}</SlideTitle>
      <ul className="mt-12 grid grid-cols-3 gap-5">
        {actors.map((a) => (
          <li key={a.id} className="rounded-2xl border border-line p-6">
            <span className="block h-3 w-3 rounded-full bg-accent" />
            <p className="mt-5 text-[24px] font-semibold tracking-tight">{a.name[locale]}</p>
            <p className="mt-2 text-[15px] leading-snug text-ink-2">{a.who[locale]}</p>
          </li>
        ))}
      </ul>
    </Slide>,

    // ── 02 Logo ────────────────────────────────────────────────────────────
    <SectionSlide key="s2" index="02" title={s.logo} docTitle={doc} />,
    <Slide key="logo-main" docTitle={doc} section={s.logo}>
      <div className="grid h-full grid-cols-[1fr_1.3fr] items-center gap-16">
        <SlideTitle kicker={s.logo} lede={t.logo.mainBody}>
          {t.logo.mainTitle}
        </SlideTitle>
        <div className="grid h-full place-items-center rounded-3xl border border-line">
          <BrandImage variant="logo" colorway="color" height={250} />
        </div>
      </div>
    </Slide>,
    <Slide key="logo-versions" docTitle={doc} section={s.logo}>
      <SlideTitle kicker={s.logo} lede={t.logo.versionsBody}>
        {t.logo.versionsTitle}
      </SlideTitle>
      <div className="mt-10 grid h-[440px] grid-cols-[1.4fr_1.2fr_0.6fr] gap-5">
        {logoVariants.map((v) => (
          <div key={v.id} className="flex flex-col rounded-3xl border border-line p-6">
            <div className="grid flex-1 place-items-center">
              <BrandImage variant={v.id} colorway="color" height={v.id === "symbol" ? 170 : v.id === "logo" ? 170 : 110} />
            </div>
            <p className="text-[18px] font-semibold">{v.name[locale]}</p>
          </div>
        ))}
      </div>
    </Slide>,
    <Slide key="logo-colorways" docTitle={doc} section={s.logo}>
      <SlideTitle kicker={s.logo} lede={t.logo.colorwaysBody}>
        {t.logo.colorwaysTitle}
      </SlideTitle>
      <div className="mt-10 grid h-[440px] grid-cols-2 grid-rows-2 gap-5">
        {logoColorways.map((c) => (
          <div key={c.id} className="relative grid place-items-center rounded-3xl border border-black/5" style={{ background: c.background }}>
            <BrandImage variant="wordmark" colorway={c.id} height={96} />
            <span className="absolute bottom-4 left-5 text-[14px] font-medium" style={{ color: c.background === "#FFFFFF" ? "#5A6679" : "#FFFFFFCC" }}>
              {c.name[locale]} · {c.background}
            </span>
          </div>
        ))}
      </div>
    </Slide>,
    <Slide key="clear-space" docTitle={doc} section={s.logo}>
      <div className="grid h-full grid-cols-[1fr_1.4fr] items-center gap-16">
        <SlideTitle kicker={s.logo} lede={t.logo.clearSpaceBody}>
          {t.logo.clearSpaceTitle}
        </SlideTitle>
        <ClearSpace />
      </div>
    </Slide>,
    <Slide key="min-size" docTitle={doc} section={s.logo}>
      <SlideTitle kicker={s.logo} lede={t.logo.minSizeBody}>
        {t.logo.minSizeTitle}
      </SlideTitle>
      <div className="mt-14 grid grid-cols-3 gap-6">
        {(
          [
            ["logo", 160 / 2.4289, "160 px · 40 mm"],
            ["wordmark", 100 / 3.5085, "100 px · 25 mm"],
            ["symbol", 16 / 0.7044, "16 px · 5 mm"],
          ] as const
        ).map(([v, h, label]) => (
          <div key={v} className="flex h-[300px] flex-col justify-between rounded-3xl border border-line p-6">
            <div className="grid flex-1 place-items-center">
              <BrandImage variant={v} colorway="color" height={Math.round(h)} />
            </div>
            <div className="flex items-baseline justify-between border-t border-line pt-4">
              <span className="text-[17px] font-semibold">{logoVariants.find((x) => x.id === v)?.name[locale]}</span>
              <span className="font-mono text-[15px] text-brand-ink">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </Slide>,
    <Slide key="backgrounds" docTitle={doc} section={s.logo}>
      <SlideTitle kicker={s.logo} lede={t.logo.backgroundsBody}>
        {t.logo.backgroundsTitle}
      </SlideTitle>
      <div className="mt-10 grid h-[400px] grid-cols-4 gap-4">
        {(
          [
            ["#FFFFFF", "color"],
            ["#F2F5F9", "color"],
            ["#07101D", "reverse"],
            ["#0076B9", "white"],
          ] as const
        ).map(([bg, cw]) => (
          <div key={bg} className="relative grid place-items-center rounded-3xl border border-black/5" style={{ background: bg }}>
            <BrandImage variant="logo" colorway={cw} height={100} />
            <span className="absolute bottom-4 left-5 font-mono text-[13px]" style={{ color: bg === "#FFFFFF" || bg === "#F2F5F9" ? "#5A6679" : "#FFFFFFCC" }}>
              {bg}
            </span>
          </div>
        ))}
      </div>
    </Slide>,
    <Slide key="misuse" docTitle={doc} section={s.logo}>
      <SlideTitle kicker={s.logo}>{t.logo.misuseTitle}</SlideTitle>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {t.logo.misuse.map((label, i) => (
          <div key={label}>
            <div className="relative grid h-[190px] place-items-center overflow-hidden rounded-2xl border border-line" style={{ background: i === 4 ? "#7AB8DB" : "#FFFFFF" }}>
              <CrossBadge />
              {i === 0 && <BrandImage variant="wordmark" colorway="color" height={62} style={{ filter: "hue-rotate(150deg) saturate(1.4)" }} />}
              {i === 1 && <BrandImage variant="wordmark" colorway="color" height={62} style={{ transform: "scaleX(1.45) scaleY(0.8)" }} />}
              {i === 2 && <BrandImage variant="wordmark" colorway="color" height={62} style={{ transform: "rotate(-14deg)" }} />}
              {i === 3 && (
                <BrandImage variant="wordmark" colorway="color" height={62} style={{ filter: "drop-shadow(0 0 6px #81B736) drop-shadow(6px 6px 0 #0B1220)" }} />
              )}
              {i === 4 && <BrandImage variant="wordmark" colorway="color" height={62} />}
              {i === 5 && <span className="text-[64px] font-bold tracking-tight text-[#0076B9]" style={{ fontFamily: "Arial, sans-serif" }}>edine<span className="text-[#81B736]">X</span>t</span>}
            </div>
            <p className="mt-3 text-[16px] font-medium">{label}</p>
          </div>
        ))}
      </div>
    </Slide>,
    <Slide key="cobranding" docTitle={doc} section={s.logo}>
      <div className="grid h-full grid-cols-[1fr_1.4fr] items-center gap-16">
        <SlideTitle kicker={s.logo} lede={t.logo.cobrandingBody}>
          {t.logo.cobrandingTitle}
        </SlideTitle>
        <div className="flex h-[360px] items-center justify-center gap-12 rounded-3xl border border-line">
          <BrandImage variant="wordmark" colorway="color" height={80} />
          <span className="h-[120px] w-px bg-ink/40" />
          <span className="grid h-[80px] w-[260px] place-items-center rounded-xl border-2 border-dashed border-line-strong font-mono text-[16px] text-ink-3">
            {t.logo.partnerLogo}
          </span>
        </div>
      </div>
    </Slide>,
    <Slide key="products" docTitle={doc} section={s.logo}>
      <SlideTitle kicker={s.logo} lede={t.logo.productsBody}>
        {t.logo.productsTitle}
      </SlideTitle>
      <ul className="mt-10 grid grid-cols-9 gap-x-4 gap-y-8">
        {solutions.map((p) => (
          <li key={p.slug} className="flex flex-col items-center text-center">
            <ProductMark src={p.logo} monogram={p.monogram} size={84} />
            <span className="mt-3 font-mono text-[14px] font-medium">{p.name}</span>
          </li>
        ))}
      </ul>
    </Slide>,

    // ── 03 Colour ──────────────────────────────────────────────────────────
    <SectionSlide key="s3" index="03" title={s.color} docTitle={doc} />,
    ...colorSlides({ locale, docTitle: doc, section: s.color }),

    // ── 04 Typography ──────────────────────────────────────────────────────
    <SectionSlide key="s4" index="04" title={s.type} docTitle={doc} />,
  ];

  slides.push(
    <Slide key="type-geist" docTitle={doc} section={s.type}>
      <div className="grid h-full grid-cols-[1.1fr_1fr] gap-16">
        <div className="flex flex-col justify-between">
          <SlideTitle kicker={s.type} lede={t.type.primaryBody}>
            {t.type.primaryTitle}
          </SlideTitle>
          <p className="text-[34px] leading-[1.35] tracking-tight text-ink-2">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            àèéìòù 0123456789 € % & ×
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-paper-2 p-10">
          <span className="text-[260px] font-semibold leading-[0.8] tracking-[-0.06em]">Aa</span>
          <div className="space-y-2 text-[28px] tracking-tight">
            <p className="font-normal">Regular 400</p>
            <p className="font-medium">Medium 500</p>
            <p className="font-semibold">Semibold 600</p>
          </div>
        </div>
      </div>
    </Slide>,
    <Slide key="type-mono" docTitle={doc} section={s.type}>
      <div className="grid h-full grid-cols-[1.1fr_1fr] gap-16">
        <div className="flex flex-col justify-between">
          <SlideTitle kicker={s.type} lede={t.type.monoBody}>
            {t.type.monoTitle}
          </SlideTitle>
          <p className="font-mono text-[28px] leading-[1.5] text-ink-2">
            D.LGS. 81/2008 · ISO 9001:2015
            <br />
            NOL · NOLA · SMART · AVR
            <br />
            0123456789
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-ink p-10 text-paper">
          <span className="font-mono text-[220px] leading-[0.8] tracking-[-0.06em]">Aa</span>
          <p className="t-label text-[18px] text-accent">{s.contacts} · {s.logo} · {s.color}</p>
        </div>
      </div>
    </Slide>,
    <Slide key="type-hierarchy" docTitle={doc} section={s.type}>
      <div className="grid h-full grid-cols-[1.5fr_1fr] gap-16">
        <div className="space-y-5">
          {[
            ["t-display !text-[88px]", t.type.levels[0], "Geist 600 · 88–112"],
            ["t-h1 !text-[56px]", t.type.levels[1], "Geist 600 · 48–80"],
            ["t-h2 !text-[40px]", t.type.levels[2], "Geist 600 · 30–54"],
            ["text-[24px] text-ink-2", t.type.levels[3], "Geist 400 · 18–23"],
            ["text-[18px] text-ink-2", t.type.levels[4], "Geist 400 · 16–18"],
            ["t-label !text-[14px] text-ink-3", t.type.levels[5], "Geist Mono 500 · 12"],
          ].map(([cls, label, spec]) => (
            <div key={label} className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
              <span className={cls}>{label}</span>
              <span className="shrink-0 font-mono text-[13px] text-ink-3">{spec}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="t-label text-ink-3">{t.type.rulesTitle}</p>
          <ul className="mt-5 space-y-5">
            {t.type.rules.map((r) => (
              <li key={r} className="border-l-2 border-brand pl-5 text-[19px] leading-snug">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>,

    // ── 05 Visual language ─────────────────────────────────────────────────
    <SectionSlide key="s5" index="05" title={s.visual} docTitle={doc} />,
    <Slide key="diagrams" docTitle={doc} section={s.visual} dark>
      <div className="grid h-full grid-cols-[1fr_1fr] items-center gap-16">
        <SlideTitle kicker={s.visual} lede={t.visual.diagramsBody}>
          {t.visual.diagramsTitle}
        </SlideTitle>
        <div className="mx-auto w-[600px]">
          <RadialDiagram locale={locale} activeActor="prevenzione" />
        </div>
      </div>
    </Slide>,
    <Slide key="photo" docTitle={doc} section={s.visual}>
      <div className="grid h-full grid-cols-[1fr_1.3fr] items-center gap-16">
        <SlideTitle kicker={s.visual} lede={t.visual.photoBody}>
          {t.visual.photoTitle}
        </SlideTitle>
        <div className="duotone relative h-full overflow-hidden rounded-3xl">
          <Image src="/media/cantiere-edile.jpg" alt="" fill sizes="800px" className="photo-ed object-cover" unoptimized />
        </div>
      </div>
    </Slide>,
    <Slide key="icons" docTitle={doc} section={s.visual}>
      <div className="grid h-full grid-cols-[1fr_1.3fr] items-center gap-16">
        <div>
          <SlideTitle kicker={s.visual} lede={t.visual.iconsBody}>
            {t.visual.iconsTitle}
          </SlideTitle>
          <div className="mt-12 border-t border-line pt-8">
            <p className="text-[30px] font-semibold tracking-tight">{t.visual.motionTitle}</p>
            <p className="mt-3 text-[18px] leading-snug text-ink-2">{t.visual.motionBody}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[ArrowRight, ArrowUpRight, Download, Plus, Menu, Chevron, BrandX, Close].map((Icon, i) => (
            <div key={i} className="grid aspect-square place-items-center rounded-2xl border border-line bg-paper-2 text-ink">
              <Icon size={i === 5 ? 36 : 48} />
            </div>
          ))}
        </div>
      </div>
    </Slide>,

    // ── 06 Applications ────────────────────────────────────────────────────
    <SectionSlide key="s6" index="06" title={s.applications} docTitle={doc} />,
    <Slide key="web" docTitle={doc} section={s.applications}>
      <div className="grid h-full grid-cols-[1fr_1.6fr] items-center gap-14">
        <SlideTitle kicker={s.applications} lede={t.applications.webBody}>
          {t.applications.webTitle}
        </SlideTitle>
        <div className="overflow-hidden rounded-2xl border border-line shadow-[0_30px_60px_-30px_rgba(11,18,32,0.35)]">
          <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3">
            {["#E3E8EF", "#E3E8EF", "#E3E8EF"].map((c, i) => (
              <span key={i} className="h-3 w-3 rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-4 font-mono text-[13px] text-ink-3">edinext.it</span>
          </div>
          <Image src={`/press-kit/assets/website-home-${locale}.jpg`} alt="" width={1440} height={900} unoptimized className="block h-auto w-full" />
        </div>
      </div>
    </Slide>,
    <Slide key="stationery" docTitle={doc} section={s.applications}>
      <div className="grid h-full grid-cols-[1.25fr_1fr] gap-12">
        <div>
          <p className="text-[26px] font-semibold tracking-tight">{t.applications.cardTitle}</p>
          <p className="mt-1 text-[16px] text-ink-2">{t.applications.cardBody}</p>
          <div className="mt-8 flex gap-6">
            <BusinessCardFront locale={locale} />
            <BusinessCardBack />
          </div>
        </div>
        <div>
          <p className="text-[26px] font-semibold tracking-tight">{t.applications.letterTitle}</p>
          <p className="mt-1 text-[16px] text-ink-2">{t.applications.letterBody}</p>
          <Letterhead />
        </div>
      </div>
    </Slide>,
    <Slide key="digital" docTitle={doc} section={s.applications}>
      <div className="grid h-full grid-cols-3 gap-8">
        <div>
          <p className="text-[24px] font-semibold tracking-tight">{t.applications.emailTitle}</p>
          <p className="mt-1 text-[15px] text-ink-2">{t.applications.emailBody}</p>
          <div className="mt-6 rounded-2xl border border-line p-6 text-[14px] leading-relaxed">
            <p className="font-semibold">{t.applications.namePlaceholder}</p>
            <p className="text-ink-3">{t.applications.rolePlaceholder} · Edinext S.r.l.</p>
            <div className="my-4 h-px bg-line" />
            <BrandImage variant="wordmark" colorway="color" height={24} />
            <p className="mt-3 text-ink-2">
              {company.phone.display} · {company.email}
              <br />
              {company.address.street}, {company.address.postalCode} {company.address.city}
              <br />
              <span className="text-brand-ink">www.edinext.it</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[24px] font-semibold tracking-tight">{t.applications.slidesTitle}</p>
          <p className="mt-1 text-[15px] text-ink-2">{t.applications.slidesBody}</p>
          <div className="theme-dark mt-6 flex aspect-video flex-col justify-between rounded-2xl p-6">
            <BrandImage variant="wordmark" colorway="reverse" height={20} />
            <p className="text-[24px] font-semibold leading-tight tracking-tight">{home[locale].titleLines.join(" ")}</p>
            <span className="t-label text-accent">Innovare × Crescere</span>
          </div>
          <div className="mt-4 flex aspect-video flex-col justify-between rounded-2xl border border-line p-6">
            <span className="t-label text-brand-ink">01 · {s.brand}</span>
            <div className="space-y-2">
              <span className="block h-3 w-3/4 rounded bg-ink" />
              <span className="block h-2 w-full rounded bg-line" />
              <span className="block h-2 w-5/6 rounded bg-line" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[24px] font-semibold tracking-tight">{t.applications.socialTitle}</p>
          <p className="mt-1 text-[15px] text-ink-2">{t.applications.socialBody}</p>
          <div className="mt-6 flex items-center gap-5">
            <span className="grid h-[120px] w-[120px] place-items-center rounded-full bg-white shadow-[0_0_0_1px_#E3E8EF]">
              <BrandImage variant="symbol" colorway="color" height={78} />
            </span>
            <span className="grid h-[120px] w-[120px] place-items-center rounded-full" style={{ background: colorById("night").hex }}>
              <BrandImage variant="symbol" colorway="color" height={78} />
            </span>
          </div>
          <Image src={`/og?title=${encodeURIComponent(home[locale].titleLines.join(" "))}&kicker=Edinext`} alt="" width={1200} height={630} unoptimized className="mt-6 block h-auto w-full rounded-2xl" />
        </div>
      </div>
    </Slide>,

    // ── 07 Contacts ────────────────────────────────────────────────────────
    <Slide key="contacts" docTitle={doc} section={s.contacts}>
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-16">
        <div className="flex flex-col justify-center">
          <SlideTitle kicker={s.contacts} lede={t.contacts.body}>
            {t.contacts.title}
          </SlideTitle>
          <dl className="mt-10 space-y-3 text-[26px] font-medium tracking-tight">
            <dd>{company.email}</dd>
            <dd>{company.phone.display}</dd>
            <dd className="text-[20px] text-ink-2">
              {company.legalName} — {company.address.street}, {company.address.postalCode} {company.address.city} ({company.address.province})
            </dd>
          </dl>
        </div>
        <div className="flex flex-col justify-center border-l border-line pl-16">
          <p className="t-label text-ink-3">{t.contacts.downloads}</p>
          <ul className="mt-6 space-y-4 font-mono text-[17px]">
            {[pressDownloads.logoPack, pressDownloads.guidelines(locale), pressDownloads.palette(locale)].map((f) => (
              <li key={f} className="border-b border-line pb-4">
                edinext.it{f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>,
    <section key="end" className="slide theme-dark">
      <div className="absolute inset-[80px] flex flex-col items-center justify-center text-center">
        <BrandImage variant="symbol" colorway="color" height={180} />
        <p className="mt-12 text-[72px] font-semibold tracking-[-0.045em]">{t.contacts.thanks}</p>
        <p className="t-label mt-6 text-ink-3">www.edinext.it · Innovare × Crescere</p>
      </div>
    </section>,
  );

  return <>{numberSlides(slides)}</>;
}

/** Clear-space diagram: wordmark with the x/2 margin drawn around it. */
function ClearSpace() {
  const h = 170;
  const pad = Math.round(h * CLEAR_SPACE_RATIO);
  return (
    <div className="grid h-full place-items-center rounded-3xl border border-line bg-paper-2">
      <div className="relative" style={{ padding: pad }}>
        <div className="absolute inset-0 border-2 border-dashed border-brand/60" />
        <div className="relative outline outline-1 outline-ink/20">
          <BrandImage variant="wordmark" colorway="color" height={h} />
        </div>
        {(["top", "bottom", "left", "right"] as const).map((side) => (
          <span
            key={side}
            className="absolute grid place-items-center font-mono text-[18px] font-medium text-brand-ink"
            style={{
              ...(side === "top" && { top: 0, left: "50%", height: pad, transform: "translateX(-50%)" }),
              ...(side === "bottom" && { bottom: 0, left: "50%", height: pad, transform: "translateX(-50%)" }),
              ...(side === "left" && { left: 0, top: "50%", width: pad, transform: "translateY(-50%)" }),
              ...(side === "right" && { right: 0, top: "50%", width: pad, transform: "translateY(-50%)" }),
            }}
          >
            x/2
          </span>
        ))}
      </div>
    </div>
  );
}

function BusinessCardFront({ locale }: { locale: BrandLocale }) {
  const t = brandbook[locale].applications;
  return (
    <div className="flex h-[240px] w-[400px] flex-col justify-between rounded-xl border border-line bg-white p-7 shadow-[0_20px_40px_-24px_rgba(11,18,32,0.35)]">
      <BrandImage variant="wordmark" colorway="color" height={34} />
      <div className="text-[13px] leading-relaxed">
        <p className="text-[17px] font-semibold">{t.namePlaceholder}</p>
        <p className="text-ink-3">{t.rolePlaceholder}</p>
        <p className="mt-3 text-ink-2">
          {company.phone.display} · {company.email}
          <br />
          {company.address.street}, {company.address.postalCode} {company.address.city}
        </p>
      </div>
    </div>
  );
}

function BusinessCardBack() {
  return (
    <div className="theme-dark flex h-[240px] w-[400px] flex-col items-center justify-center rounded-xl shadow-[0_20px_40px_-24px_rgba(11,18,32,0.35)]">
      <BrandImage variant="symbol" colorway="color" height={96} />
      <span className="t-label mt-5 text-ink-3">www.edinext.it</span>
    </div>
  );
}

function Letterhead() {
  return (
    <div className="mx-auto mt-8 flex h-[520px] w-[368px] flex-col justify-between rounded-md border border-line bg-white p-8 shadow-[0_20px_40px_-24px_rgba(11,18,32,0.35)]">
      <BrandImage variant="logo" colorway="color" height={44} />
      <div className="space-y-2">
        {[92, 100, 88, 96, 70].map((w, i) => (
          <span key={i} className="block h-1.5 rounded bg-line" style={{ width: `${w}%` }} />
        ))}
      </div>
      <p className="border-t border-line pt-3 text-[8.5px] leading-snug text-ink-3">
        {company.legalName} · {company.address.street}, {company.address.postalCode} {company.address.city} ({company.address.province}) · P. IVA {company.vat}
        <br />
        {company.phone.display} · {company.email} · www.edinext.it
      </p>
    </div>
  );
}

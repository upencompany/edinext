import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/sections/ContactBand";
import { CopyButton } from "@/components/sections/CopyButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowLink, Kicker, PageIntro, SectionHead } from "@/components/ui/Editorial";
import { ArrowUpRight, Download } from "@/components/ui/Icons";
import { ProductMark } from "@/components/ui/ProductMark";
import { mockupScenes } from "@/components/brandbook/Mockups";
import {
  boilerplate,
  brandbook,
  brandColors,
  brandVersion,
  hasColorway,
  logoColorways,
  logoFile,
  logoVariants,
  pressDownloads,
  pressKitPage,
  toDocLocale,
} from "@/content/brand";
import { company } from "@/content/company";
import { home } from "@/content/pages";
import { solutions } from "@/content/solutions";
import { ui } from "@/content/ui";
import { cx } from "@/lib/format";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/kit-stampa">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = pressKitPage[pressLocale(locale)];
  return pageMetadata({ locale, section: "pressKit", title: t.metaTitle, description: t.metaDescription, ogKicker: t.eyebrow });
}

/** Press-kit copy exists in the document languages; other locales use English. */
function pressLocale(locale: Locale) {
  return toDocLocale(locale);
}

/** Human-readable size of a file in public/, resolved at build time. */
function fileSize(publicPath: string) {
  const file = join(process.cwd(), "public", publicPath);
  if (!existsSync(file)) return null;
  const bytes = statSync(file).size;
  return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

function FileLink({ href: url, label, size, primary }: { href: string; label: string; size?: string | null; primary?: boolean }) {
  return (
    <a
      href={url}
      download
      className={cx(
        "group inline-flex items-center gap-3 rounded-full px-5 py-3 text-[0.9375rem] font-medium transition-colors",
        primary ? "bg-ink text-paper hover:bg-brand" : "border border-line-strong hover:border-ink",
      )}
    >
      <Download size={16} />
      {label}
      {size && <span className={cx("t-meta", primary ? "text-paper/70" : "text-ink-3")}>{size}</span>}
    </a>
  );
}

export default async function PressKitPage({ params }: PageProps<"/[locale]/kit-stampa">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dl = pressLocale(locale);
  const t = pressKitPage[dl];
  const u = ui[locale];
  const packSize = fileSize(pressDownloads.logoPack);

  const docs = [
    { key: "guidelines", title: t.quick.guidelines.title, body: t.quick.guidelines.body, file: pressDownloads.guidelines },
    { key: "palette", title: t.quick.palette.title, body: t.quick.palette.body, file: pressDownloads.palette },
  ] as const;

  return (
    <>
      <PageIntro
        label={t.eyebrow}
        title={t.title}
        lede={t.lede}
        breadcrumbs={
          <Breadcrumbs
            label={u.common.breadcrumb}
            items={[
              { name: u.common.home, path: href(locale, "home") },
              { name: u.nav.company, path: href(locale, "company") },
              { name: u.nav.pressKit, path: href(locale, "pressKit") },
            ]}
          />
        }
        meta={<p className="t-meta text-ink-3">v{brandVersion}</p>}
      />

      {/* Quick downloads */}
      <section aria-label={t.quick.download} className="wrap">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="theme-dark flex flex-col justify-between gap-10 rounded-[1.75rem] p-7 md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{t.quick.logoPack.title}</h2>
                <p className="mt-2 text-ink-2">{t.quick.logoPack.body}</p>
              </div>
              <Image src={logoFile("symbol", "color")} alt="" width={56} height={80} unoptimized className="h-20 w-auto shrink-0" />
            </div>
            <div>
              <FileLink href={pressDownloads.logoPack} label={`${t.quick.download} ZIP`} size={packSize} primary />
            </div>
          </div>
          {docs.map((d) => (
            <div key={d.key} className="flex flex-col justify-between gap-10 rounded-[1.75rem] border border-line p-7 md:p-9">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{d.title}</h2>
                <p className="mt-2 text-ink-2">{d.body}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["it", "en"] as const).map((l) => (
                  <FileLink key={l} href={d.file(l)} label={`PDF · ${l === "it" ? t.quick.italian : t.quick.english}`} size={fileSize(d.file(l))} primary={l === dl} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logos */}
      <section aria-labelledby="pk-logo" className="section-y">
        <div className="wrap">
          <SectionHead index="01" label={t.logo.label} title={t.logo.title} lede={t.logo.lede} id="pk-logo" />
          <div className="mt-14 space-y-10">
            {logoVariants.map((v) => (
              <div key={v.id}>
                <h3 className="t-label mb-4 text-ink-3">{v.name[dl]}</h3>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {logoColorways
                    .filter((c) => hasColorway(v.id, c.id))
                    .map((c) => (
                      <li key={c.id} className="overflow-hidden rounded-2xl border border-line">
                        <div className="grid h-44 place-items-center p-6" style={{ background: c.background }}>
                          <Image
                            src={logoFile(v.id, c.id)}
                            alt={`Edinext — ${v.name[dl]}, ${c.name[dl]}`}
                            width={v.id === "symbol" ? 70 : 240}
                            height={v.id === "symbol" ? 100 : v.id === "logo" ? 99 : 68}
                            unoptimized
                            className={v.id === "symbol" ? "h-24 w-auto" : "h-auto max-h-24 w-full max-w-[240px]"}
                          />
                        </div>
                        <div className="flex items-center justify-between gap-3 px-4 py-3">
                          <span className="text-[0.9375rem] font-medium">{c.name[dl]}</span>
                          <span className="flex gap-3 font-mono text-[0.8125rem]">
                            <a href={logoFile(v.id, c.id, "svg")} download className="link-inline">
                              SVG
                            </a>
                            <a href={logoFile(v.id, c.id, "png")} download className="link-inline">
                              PNG
                            </a>
                          </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colours */}
      <section aria-labelledby="pk-color" className="section-y border-t border-line bg-card">
        <div className="wrap">
          <SectionHead index="02" label={t.color.label} title={t.color.title} lede={t.color.lede} id="pk-color" />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandColors
              .filter((c) => c.group !== "support")
              .map((c) => (
                <li key={c.id} className="overflow-hidden rounded-2xl border border-line bg-paper">
                  <div className={cx("border-b border-line", c.group === "primary" ? "h-36" : "h-24")} style={{ background: c.hex }} />
                  <div className="p-5">
                    <p className="text-lg font-semibold tracking-tight">{c.name[dl]}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-3">{c.role[dl]}</p>
                    <dl className="mt-4 space-y-1 font-mono text-[0.8125rem]">
                      {(
                        [
                          ["HEX", c.hex],
                          ["RGB", c.rgb.join(", ")],
                          ["CMYK", c.cmyk.join(", ")],
                        ] as const
                      ).map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between gap-3">
                          <dt className="text-ink-3">{k}</dt>
                          <dd>
                            <CopyButton value={v} label={k} copiedLabel={t.color.copied} className="hover:text-brand-ink" />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Typography + rules */}
      <section aria-labelledby="pk-type" className="section-y">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker index="03">{t.type.label}</Kicker>
            <h2 id="pk-type" className="t-h2 mt-5">
              {t.type.title}
            </h2>
            <p className="t-lede mt-4">{t.type.lede}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-line p-6">
                <p className="text-7xl font-semibold tracking-[-0.05em]">Aa</p>
                <p className="mt-6 font-semibold">Geist</p>
                <p className="t-meta text-ink-3">400 · 500 · 600</p>
              </div>
              <div className="rounded-2xl bg-ink p-6 text-paper">
                <p className="font-mono text-7xl tracking-[-0.05em]">Aa</p>
                <p className="mt-6 font-semibold">Geist Mono</p>
                <p className="t-meta text-paper/70">400 · 500</p>
              </div>
            </div>
            <ArrowLink href="https://vercel.com/font" external className="mt-6">
              vercel.com/font
            </ArrowLink>
          </div>
          <div>
            <Kicker index="04">{t.rules.label}</Kicker>
            <h2 className="t-h2 mt-5">{t.rules.title}</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {[t.rules.clearSpace, t.rules.minSize, t.rules.misuse].map((r) => (
                <li key={r} className="py-5 text-lg leading-snug">
                  {r}
                </li>
              ))}
            </ul>
            <a href={pressDownloads.guidelines(dl)} download className="group mt-6 inline-flex items-center gap-2.5 font-medium text-brand-ink">
              <span className="link-u">{t.rules.more}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Official copy */}
      <section aria-labelledby="pk-about" className="section-y border-t border-line bg-card">
        <div className="wrap">
          <SectionHead index="05" label={t.about.label} title={t.about.title} id="pk-about" />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-7">
              <div>
                <p className="t-label text-ink-3">{t.about.short}</p>
                <p className="mt-4 text-lg leading-relaxed">{boilerplate[dl].short}</p>
              </div>
              <CopyButton
                value={boilerplate[dl].short}
                label={t.about.copy}
                copiedLabel={t.about.copied}
                className="mt-6 self-start rounded-full border border-line-strong px-4 py-2 text-sm font-medium hover:border-ink"
              >
                {t.about.copy}
              </CopyButton>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-7">
              <div>
                <p className="t-label text-ink-3">{t.about.long}</p>
                <div className="mt-4 space-y-3 leading-relaxed text-ink-2">
                  {boilerplate[dl].long.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
              <CopyButton
                value={boilerplate[dl].long.join("\n\n")}
                label={t.about.copy}
                copiedLabel={t.about.copied}
                className="mt-6 self-start rounded-full border border-line-strong px-4 py-2 text-sm font-medium hover:border-ink"
              >
                {t.about.copy}
              </CopyButton>
            </div>
          </div>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {home[locale].facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse bg-paper p-6">
                <dt className="mt-2 text-sm text-ink-2">{f.label}</dt>
                <dd className="text-4xl font-semibold tracking-tight">{f.value}</dd>
              </div>
            ))}
            <div className="flex flex-col-reverse bg-paper p-6">
              <dt className="mt-2 text-sm text-ink-2">
                {company.legalName} · P. IVA {company.vat}
              </dt>
              <dd className="text-4xl font-semibold tracking-tight">{company.address.city}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mockups */}
      <section aria-labelledby="pk-mockups" className="section-y">
        <div className="wrap">
          <SectionHead index="06" label={t.mockups.label} title={t.mockups.title} lede={t.mockups.lede} id="pk-mockups" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockupScenes.map((scene, i) => (
              <li key={scene} className={cx("group overflow-hidden rounded-2xl border border-line", i === 0 && "sm:col-span-2 lg:col-span-2 lg:row-span-2")}>
                <a href={`/press-kit/mockups/edinext-mockup-${scene}.png`} download className="block">
                  <Image
                    src={`/press-kit/mockups/edinext-mockup-${scene}.webp`}
                    alt={brandbook[dl].applications.mockups[scene]}
                    width={1672}
                    height={941}
                    sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 text-[0.9375rem] font-medium">
                    {brandbook[dl].applications.mockups[scene]}
                    <Download size={15} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product marks */}
      <section aria-labelledby="pk-products" className="section-y border-t border-line">
        <div className="wrap">
          <SectionHead index="07" label={t.products.label} title={t.products.title} id="pk-products" />
          <ul className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {solutions.map((p) => (
              <li key={p.slug} className="flex flex-col items-center gap-3 rounded-2xl border border-line p-5 text-center">
                <ProductMark src={p.logo} monogram={p.monogram} size={64} />
                <span className="font-mono text-sm font-medium">{p.name}</span>
                {p.logo ? (
                  <a href={p.logo} download className="t-meta link-inline">
                    PNG
                  </a>
                ) : (
                  <span className="t-meta text-ink-3">—</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand locale={locale} title={t.contact.title} body={t.contact.body} />
    </>
  );
}

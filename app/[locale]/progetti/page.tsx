import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RadialDiagram } from "@/components/ecosystem/RadialDiagram";
import { ContactBand } from "@/components/sections/ContactBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/Editorial";
import { ArrowRight } from "@/components/ui/Icons";
import { projects } from "@/content/projects";
import { getSolution } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/progetti">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = ui[locale].projects;
  return pageMetadata({ locale, section: "projects", title: t.label, description: t.lede, ogKicker: t.label });
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/progetti">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const u = ui[locale];
  const t = u.projects;

  return (
    <>
      <PageIntro
        label={t.label}
        title={t.title}
        lede={t.lede}
        breadcrumbs={
          <Breadcrumbs
            label={u.common.breadcrumb}
            items={[
              { name: u.common.home, path: href(locale, "home") },
              { name: t.label, path: href(locale, "projects") },
            ]}
          />
        }
      />

      <section className="wrap pb-24 md:pb-32" aria-label={t.label}>
        <ol className="border-t border-ink">
          {projects.map((p, i) => {
            const c = p[locale];
            return (
              <li key={p.slug} className="group relative border-b border-line" data-reveal>
                <div className="grid-12 gap-y-6 py-12 md:py-16">
                  <div className="col-span-4 md:col-span-5">
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${p.image ? "duotone" : "theme-dark"}`}>
                      {p.image ? (
                        <Image src={p.image.src} alt={p.image.alt[locale]} fill sizes="(min-width: 768px) 40vw, 100vw" className="photo-ed object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center p-6" aria-hidden="true">
                          <RadialDiagram locale={locale} activeApp={p.solutions[0]} showLabels={false} className="w-[80%] max-w-[360px]" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col md:col-span-6 md:col-start-7">
                    <p className="t-meta flex flex-wrap gap-x-3 text-ink-3 tabular">
                      <span className="text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{c.place}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.solutions.map((s) => getSolution(s)?.name).join(", ")}</span>
                    </p>
                    <h2 className="t-h2 mt-5">
                      <Link href={href(locale, "projects", p.slug)} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-ink">
                        {c.title}
                      </Link>
                    </h2>
                    <p className="t-lede mt-5">{c.summary}</p>
                    <p className="mt-auto flex items-center gap-2 pt-8 font-medium text-brand-ink">
                      <span>{t.client}: {c.client}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <ContactBand locale={locale} />
    </>
  );
}

import { actors, families } from "@/content/ecosystem";
import { solutions } from "@/content/solutions";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import type { ExplorerActor, ExplorerApp } from "./EcosystemExplorer";

/** Serialisable props for the client explorer — only what it renders. */
export function explorerProps(locale: Locale) {
  const t = ui[locale];
  const familyName = Object.fromEntries(families.map((f) => [f.id, f.short[locale]]));
  const explorerActors: ExplorerActor[] = actors.map((a) => ({ id: a.id, name: a.name[locale], who: a.who[locale] }));
  const apps: ExplorerApp[] = solutions.map((s) => ({
    slug: s.slug,
    name: s.name,
    expansion: s[locale].expansion,
    family: familyName[s.family],
    href: s.hasPage ? href(locale, "solutions", s.slug) : null,
    actors: s.actors,
    roles: s[locale].roles ?? {},
    summary: s[locale].summary,
  }));
  return {
    locale,
    actors: explorerActors,
    apps,
    labels: {
      actors: t.ecosystem.actors,
      platforms: t.ecosystem.usesPlural,
      all: t.ecosystem.all,
      one: t.common.application,
      many: t.common.applications,
    },
  };
}

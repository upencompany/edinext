import type { Locale, Localized } from "@/lib/i18n";

export type { Locale, Localized };

/** People and organisations that interact with Edinext platforms. */
export type ActorId = "cittadini" | "imprese" | "prevenzione" | "strutture" | "istituzioni" | "comunita";

export type FamilyId = "clicprevenzione" | "vaccinazioni" | "governance" | "sanita" | "volontariato";

export interface Actor {
  id: ActorId;
  name: Localized<string>;
  /** Who, concretely, belongs to this group. */
  who: Localized<string>;
}

export interface Family {
  id: FamilyId;
  /** URL slug; `null` means the family has no dedicated page. */
  slug: string | null;
  index: string;
  logo?: string;
  name: Localized<string>;
  short: Localized<string>;
  summary: Localized<string>;
  intro: Localized<string[]>;
}

export interface FeatureGroup {
  title: string;
  lede?: string;
  items: string[];
}

/** Information that was published as images on the old site, now structured. */
export type SolutionDiagram =
  | { kind: "hub"; title: string; lede?: string; center: string; items: { label: string; detail?: string }[] }
  | { kind: "groups"; title: string; lede?: string; groups: { name: string; items: string[] }[] }
  | { kind: "cycle"; title: string; lede?: string; center: string; items: string[] };

export interface SolutionCopy {
  /** Short title for search results, when name + expansion is too long. */
  metaTitle?: string;
  /** What the acronym stands for, or the product's descriptive name. */
  expansion: string;
  tagline: string;
  summary: string;
  /** Context: the problem or regulatory duty the product addresses. */
  context?: { title: string; body: string[] };
  /** What the product is. */
  about: { title: string; body: string[] };
  features: FeatureGroup[];
  /** Concrete statements about how each actor uses the platform. */
  roles?: Partial<Record<ActorId, string>>;
  integrations?: { title: string; items: { label: string; detail?: string }[] };
  diagrams?: SolutionDiagram[];
}

export interface Solution extends Localized<SolutionCopy> {
  slug: string;
  name: string;
  family: FamilyId;
  /** Has a dedicated page on the site. */
  hasPage: boolean;
  /** Product mark from the previous site, normalised to a square tile (public/brand/products). */
  logo?: string;
  /** Short code shown in a neutral tile when the product has no official logo. */
  monogram?: string;
  actors: ActorId[];
  /** Keys into `normative` references. */
  norms?: string[];
  related?: string[];
  image?: { src: string; width: number; height: number; alt: Localized<string>; credit?: string };
}

export interface Norm {
  id: string;
  year: number;
  ref: Localized<string>;
  subject: Localized<string>;
  /** What the norm requires, in plain language. */
  duty: Localized<string>;
  solutions: string[];
}

export interface NewsArticleCopy {
  title: string;
  /** Short title for search results. */
  metaTitle?: string;
  excerpt: string;
  category: string;
  body: ArticleBlock[];
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite: string }
  | { type: "facts"; items: { label: string; value: string }[] };

export interface NewsArticle extends Localized<NewsArticleCopy> {
  slug: string;
  date: string;
  kind: "press" | "product" | "job";
  solutions?: string[];
  source?: { name: string; date: Localized<string> };
  image?: { src: string; width: number; height: number; alt: Localized<string>; credit?: string };
}

export interface ProjectCopy {
  title: string;
  client: string;
  place: string;
  summary: string;
  context: string[];
  solution: string[];
  actors: { name: string; role: string }[];
  outcome: string[];
  quote?: { text: string; cite: string };
}

export interface Project extends Localized<ProjectCopy> {
  slug: string;
  year: number;
  solutions: string[];
  news: string[];
  image?: { src: string; width: number; height: number; alt: Localized<string>; credit?: string };
}

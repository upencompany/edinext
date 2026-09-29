import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <>
      <nav aria-label={label}>
        <ol className="t-meta flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-3">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="link-u hover:text-ink">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}

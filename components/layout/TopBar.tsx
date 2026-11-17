import { company } from "@/content/company";
import type { Locale } from "@/lib/i18n";

/** Thin contact strip above the header (as on the previous site): phone, e-mail, opening hours. Scrolls away. */
export function TopBar({ locale }: { locale: Locale }) {
  return (
    <div className="theme-dark border-b border-line">
      <div className="wrap flex h-9 items-center gap-5 text-[0.8125rem] text-ink-2">
        <a href={`tel:${company.phone.e164}`} className="tabular transition-colors hover:text-ink">
          <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
          {company.phone.display}
        </a>
        <a href={`mailto:${company.email}`} className="transition-colors hover:text-ink">
          {company.email}
        </a>
        <p className="ml-auto hidden text-ink-3 md:block">
          {company.hours[locale]}
        </p>
      </div>
    </div>
  );
}

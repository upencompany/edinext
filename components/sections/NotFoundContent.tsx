import Link from "next/link";
import { ui } from "@/content/ui";
import { defaultLocale, href, localeNames, locales } from "@/lib/i18n";
import { cx } from "@/lib/format";

/**
 * 404 body in every configured language — for unmatched URLs the visitor's
 * locale is not reliably known. The default locale is shown first.
 */
export function NotFoundContent() {
  const ordered = [defaultLocale, ...locales.filter((l) => l !== defaultLocale)];
  return (
    <section className="wrap grid-12 gap-y-10 py-24 md:py-40">
      <p className="t-label col-span-4 text-brand-ink md:col-span-3">404</p>
      <div className="col-span-4 md:col-span-9">
        {ordered.map((locale, i) => {
          const t = ui[locale];
          const primary = i === 0;
          return (
            <div key={locale} lang={localeNames[locale].htmlLang} className={cx(!primary && "mt-16 border-t border-line pt-8")}>
              {primary ? <h1 className="t-h1">{t.notFound.title}</h1> : <p className="text-xl font-semibold">{t.notFound.title}</p>}
              <p className={cx(primary ? "t-lede mt-6" : "mt-2 text-ink-2", "max-w-2xl")}>{t.notFound.body}</p>
              <p className={cx(primary ? "mt-10" : "mt-4", "flex flex-wrap gap-x-8 gap-y-3 font-medium")}>
                <Link className="link-inline" href={href(locale, "home")}>
                  {t.notFound.home}
                </Link>
                <Link className="link-inline" href={href(locale, "solutions")}>
                  {t.nav.allSolutions}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

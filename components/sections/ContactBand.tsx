import { company } from "@/content/company";
import { ui } from "@/content/ui";
import { href, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Editorial";
import { BrandX } from "@/components/ui/Icons";

/** Closing call to action used at the end of most pages. */
export function ContactBand({ locale, title, body }: { locale: Locale; title?: string; body?: string }) {
  const t = ui[locale];
  return (
    <section aria-labelledby="contact-band-title" className="border-t border-line bg-paper-2">
      <div className="wrap grid-12 gap-y-10 py-20 md:py-28">
        <div className="col-span-4 md:col-span-7" data-reveal>
          <h2 id="contact-band-title" className="t-h2 flex items-start gap-4">
            <BrandX size={30} className="mt-2 shrink-0" />
            <span>{title ?? t.common.wantToKnowMore}</span>
          </h2>
          <p className="t-lede mt-6 max-w-xl md:ml-[46px]">{body ?? t.common.wantToKnowMoreBody}</p>
        </div>
        <div className="col-span-4 flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9" data-reveal style={{ ["--reveal-i" as string]: 1 }}>
          <ButtonLink href={href(locale, "contact")}>{t.common.contactUs}</ButtonLink>
          <dl className="grid grid-cols-2 gap-4 border-t border-line-strong pt-5 text-sm">
            <div>
              <dt className="t-label text-ink-3">E-mail</dt>
              <dd className="mt-1">
                <a className="link-inline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="t-label text-ink-3">{t.labels.phone}</dt>
              <dd className="mt-1">
                <a className="link-inline tabular" href={`tel:${company.phone.e164}`}>
                  {company.phone.display}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

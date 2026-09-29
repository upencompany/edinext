import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";
import { cx } from "@/lib/format";

/** Section label: a numbered mono index, a rule, and the label text. */
export function Kicker({ index, children, className, tone = "default" }: { index?: string; children: ReactNode; className?: string; tone?: "default" | "dark" }) {
  return (
    <p className={cx("t-label flex items-center gap-3", "text-ink-3", className)}>
      {index && <span className={cx("tabular", tone === "dark" ? "text-accent" : "text-brand-ink")}>{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" />}
      <span>{children}</span>
    </p>
  );
}

interface SectionHeadProps {
  index?: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  tone?: "default" | "dark";
  aside?: ReactNode;
  as?: "h2" | "h3";
}

/** Asymmetric section heading: label column on the left, title and lede on the right. */
export function SectionHead({ index, label, title, lede, id, tone = "default", aside, as: H = "h2" }: SectionHeadProps) {
  return (
    <div className="grid-12 gap-y-6" data-reveal>
      <div className="col-span-4 md:col-span-3">
        <Kicker index={index} tone={tone}>
          {label}
        </Kicker>
      </div>
      <div className="col-span-4 md:col-span-9 lg:col-span-8">
        <H id={id} className="t-h2">
          {title}
        </H>
        {lede && <p className={cx("t-lede mt-6 max-w-3xl", false)}>{lede}</p>}
        {aside && <div className="mt-8">{aside}</div>}
      </div>
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className,
  tone = "default",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "dark";
  external?: boolean;
}) {
  const cls = cx(
    "group inline-flex items-center gap-2.5 font-medium",
    tone === "dark" ? "text-ink" : "text-brand-ink",
    className,
  );
  const inner = (
    <>
      <span className="link-u">{children}</span>
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center justify-between gap-5 rounded-full py-3.5 pl-6 pr-5 text-base font-medium transition-colors duration-300",
        variant === "solid" && "bg-ink text-paper hover:bg-brand-ink",
        variant === "outline" && "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
        variant === "light" && "bg-paper text-ink hover:bg-accent",
        className,
      )}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/** Hero for inner pages: breadcrumbs, index label, title with a masked line reveal, lede. */
export function PageIntro({
  label,
  title,
  lede,
  breadcrumbs,
  meta,
  children,
}: {
  label: string;
  title: string;
  lede?: ReactNode;
  breadcrumbs?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="wrap pt-8 pb-14 md:pt-12 md:pb-20">
      {breadcrumbs}
      <div className="grid-12 mt-12 gap-y-8 md:mt-20">
        <div className="col-span-4 md:col-span-3">
          <Kicker>{label}</Kicker>
          {meta && <div className="mt-6 hidden md:block">{meta}</div>}
        </div>
        <div className="col-span-4 md:col-span-9">
          <h1 className="t-h1 max-w-[18ch]">
            <span className="line-mask">
              <span>{title}</span>
            </span>
          </h1>
          {lede && <div className="t-lede mt-8 max-w-3xl">{lede}</div>}
          {meta && <div className="mt-8 md:hidden">{meta}</div>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div data-reveal="line" className={cx("relative h-px text-line-strong", className)} aria-hidden="true" />;
}

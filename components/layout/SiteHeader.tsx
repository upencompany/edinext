"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ProductMark } from "@/components/ui/ProductMark";
import { ArrowRight, Chevron, Close, Menu } from "@/components/ui/Icons";
import { cx } from "@/lib/format";
import { localeNames, locales, publicPath, switchLocalePath } from "@/lib/i18n";
import type { NavData, NavItem } from "./nav-data";

export function SiteHeader({ nav }: { nav: NavData }) {
  const pathname = publicPath(usePathname() ?? nav.homeHref);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const baseId = useId();

  const close = useCallback(() => setOpen(null), []);

  // Close menus on navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset UI state when the route changes
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Scroll behaviour: border after the first pixels, hide while scrolling down.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape and outside click close desktop menus.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = document.getElementById(`${baseId}-${open}-btn`);
        setOpen(null);
        trigger?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, baseId]);

  // Mobile panel: lock scroll, close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const isCurrent = (item: NavItem) =>
    pathname === item.match ||
    pathname.startsWith(item.match + "/") ||
    (item.id === "company" && item.children?.some((c) => pathname.startsWith(c.href)));

  const onEnter = (id: string) => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(id), 90);
  };
  const onLeave = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(null), 180);
  };

  const other = locales.filter((l) => l !== nav.locale);
  const megaItem = nav.items.find((i) => i.mega);

  return (
    <header
      ref={headerRef}
      style={{ viewTransitionName: "site-header" }}
      className={cx(
        "sticky top-0 z-50 transition-transform duration-500 ease-(--ease-out-quart)",
        hidden && !open && !mobileOpen && "-translate-y-full",
      )}
    >
      <div
        className={cx(
          "relative bg-paper transition-[box-shadow,border-color] duration-300 border-b",
          scrolled || open ? "border-line" : "border-transparent",
        )}
      >
        <div className="wrap flex h-(--header-h) items-center gap-6">
          <Link href={nav.homeHref} className="relative -m-2 block p-2 shrink-0" aria-label="Edinext — Home">
            <Logo priority className="h-6 w-auto sm:h-7" sizes="(min-width: 640px) 110px, 92px" />
          </Link>

          <nav aria-label={nav.labels.nav} className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.items.map((item) => {
                const current = isCurrent(item);
                const hasMenu = Boolean(item.children || item.mega);
                const panelId = `${baseId}-${item.id}-panel`;
                if (!hasMenu) {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        className={cx(
                          "relative block px-3 py-2 text-[0.9375rem] font-medium transition-colors hover:text-brand-ink",
                          current && "text-brand-ink",
                        )}
                      >
                        {item.label}
                        {current && <span className="absolute inset-x-3 -bottom-px h-px bg-brand" aria-hidden="true" />}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li
                    key={item.id}
                    className={cx(!item.mega && "relative")}
                    onPointerEnter={(e) => e.pointerType === "mouse" && onEnter(item.id)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && onLeave()}
                  >
                    <button
                      id={`${baseId}-${item.id}-btn`}
                      type="button"
                      aria-expanded={open === item.id}
                      aria-controls={panelId}
                      onClick={() => setOpen((o) => (o === item.id ? null : item.id))}
                      className={cx(
                        "relative flex items-center gap-1.5 px-3 py-2 text-[0.9375rem] font-medium transition-colors hover:text-brand-ink",
                        (current || open === item.id) && "text-brand-ink",
                      )}
                    >
                      {item.label}
                      <Chevron className={cx("transition-transform duration-300", open === item.id && "rotate-180")} />
                      {current && <span className="absolute inset-x-3 -bottom-px h-px bg-brand" aria-hidden="true" />}
                    </button>

                    {item.children && (
                      <div
                        id={panelId}
                        hidden={open !== item.id}
                        className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-line bg-paper p-2 shadow-[0_24px_48px_-24px_rgba(11,18,32,0.3)]"
                      >
                        <ul>
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                onClick={close}
                                className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-[0.9375rem] hover:bg-card"
                              >
                                {c.label}
                                <ArrowRight size={14} className="opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <ul className="flex items-center" aria-label={nav.labels.language}>
              {other.map((l) => (
                <li key={l}>
                  <Link
                    href={switchLocalePath(pathname, l)}
                    hrefLang={localeNames[l].htmlLang}
                    lang={localeNames[l].htmlLang}
                    className="t-label block px-2.5 py-2 text-ink-2 transition-colors hover:text-brand-ink"
                  >
                    <span className="sr-only">{localeNames[l].long}</span>
                    <span aria-hidden="true">{localeNames[l].short}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={nav.contact.href}
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-brand sm:inline-flex"
            >
              {nav.contact.label}
            </Link>
            <button
              type="button"
              className="-mr-2 flex items-center gap-2 p-2 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={`${baseId}-mobile`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="t-label">{mobileOpen ? nav.labels.close : nav.labels.menu}</span>
              {mobileOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Solutions mega panel */}
        {megaItem && (
          <div
            id={`${baseId}-${megaItem.id}-panel`}
            hidden={open !== megaItem.id}
            onPointerEnter={(e) => e.pointerType === "mouse" && onEnter(megaItem.id)}
            onPointerLeave={(e) => e.pointerType === "mouse" && onLeave()}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_40px_60px_-40px_rgba(11,18,32,0.35)] lg:block"
          >
            <div className="wrap grid-12 py-10">
              <div className="col-span-3 pr-6">
                <p className="t-label text-ink-3">{megaItem.label}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{nav.labels.solutionsIntro}</p>
                <Link
                  href={nav.overview.href}
                  onClick={close}
                  className="group mt-6 inline-flex items-center gap-2 font-medium text-brand-ink"
                >
                  <span className="link-u">{nav.overview.label}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-5 gap-x-6 border-l border-line pl-8">
                {nav.families.map((f) => (
                  <div key={f.index}>
                    <p className="t-label text-ink-3 tabular">{f.index}</p>
                    {f.href ? (
                      <Link href={f.href} onClick={close} className="mt-2 block font-semibold leading-snug hover:text-brand-ink">
                        {f.name}
                      </Link>
                    ) : (
                      <p className="mt-2 font-semibold leading-snug">{f.name}</p>
                    )}
                    <ul className="mt-4 space-y-1 border-t border-line pt-3">
                      {f.products.map((p) => (
                        <li key={p.label}>
                          {p.href ? (
                            <Link
                              href={p.href}
                              onClick={close}
                              className="group -mx-2 block rounded-lg px-2 py-1.5 hover:bg-card"
                            >
                              <span className="flex items-center gap-2 font-medium group-hover:text-brand-ink">
                                <ProductMark src={p.logo} monogram={p.monogram} size={20} className="rounded-md" />
                                {p.label}
                              </span>
                              <span className="block text-[0.78rem] leading-snug text-ink-3">{p.note}</span>
                            </Link>
                          ) : (
                            <span className="-mx-2 block px-2 py-1.5 text-ink-3">
                              <span className="font-medium">{p.label}</span>
                              <span className="block text-[0.78rem] leading-snug">{p.note}</span>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile panel */}
      <div
        id={`${baseId}-mobile`}
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-(--header-h) overflow-y-auto bg-paper lg:hidden"
      >
        <nav aria-label={nav.labels.nav} className="wrap pb-16 pt-4">
          <ul className="divide-y divide-line border-b border-line">
            {nav.items.map((item) => (
              <MobileItem key={item.id} item={item} nav={nav} current={Boolean(isCurrent(item))} />
            ))}
          </ul>
          <Link
            href={nav.contact.href}
            className="mt-8 flex items-center justify-between rounded-full bg-ink px-6 py-4 text-lg font-medium text-paper"
          >
            {nav.contact.label}
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MobileItem({ item, nav, current }: { item: NavItem; nav: NavData; current: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const hasMenu = Boolean(item.children || item.mega);

  if (!hasMenu) {
    return (
      <li>
        <Link
          href={item.href}
          aria-current={current ? "page" : undefined}
          className={cx("flex items-center justify-between py-4 text-2xl font-medium tracking-tight", current && "text-brand-ink")}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded((v) => !v)}
        className={cx("flex w-full items-center justify-between py-4 text-left text-2xl font-medium tracking-tight", current && "text-brand-ink")}
      >
        {item.label}
        <Chevron size={16} className={cx("transition-transform", expanded && "rotate-180")} />
      </button>
      <div id={id} hidden={!expanded} className="pb-5">
        {item.mega ? (
          <div className="space-y-5">
            <Link href={nav.overview.href} className="flex items-center gap-2 font-medium text-brand-ink">
              {nav.overview.label} <ArrowRight size={16} />
            </Link>
            {nav.families.map((f) => (
              <div key={f.index}>
                <p className="t-label text-ink-3">
                  {f.index} · {f.name}
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {f.products
                    .filter((p) => p.href)
                    .map((p) => (
                      <li key={p.label}>
                        <Link href={p.href} className="inline-block py-1 font-medium">
                          {p.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-1">
            {item.children!.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="block py-2 text-lg text-ink-2">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

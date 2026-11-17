"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Close, Search } from "@/components/ui/Icons";
import { ProductMark } from "@/components/ui/ProductMark";
import type { UI } from "@/content/ui";
import { cx } from "@/lib/format";
import type { SearchItem, SearchKind } from "@/lib/search";

export interface SearchLabels {
  labels: UI["search"];
  /** URL of the static JSON index for the current language. */
  indexUrl: string;
}

const kindOrder: SearchKind[] = ["solution", "area", "norm", "news", "project", "page"];
const kindWeight: Record<SearchKind, number> = { solution: 6, area: 5, page: 4, norm: 3, project: 2, news: 1 };
const PER_GROUP = 6;

/** Lowercase, accents removed: "attività" matches "attivita". */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

interface Indexed extends SearchItem {
  t: string;
  s: string;
  k: string;
}

function score(item: Indexed, tokens: string[]) {
  let total = 0;
  for (const tok of tokens) {
    if (item.t.startsWith(tok) || item.t.includes(` ${tok}`)) total += 12;
    else if (item.t.includes(tok)) total += 7;
    else if (item.s.includes(tok)) total += 3;
    else if (item.k.includes(tok)) total += 1;
    else return 0;
  }
  return total + kindWeight[item.kind] / 10;
}

/** Wraps the parts of `text` that match the query in <mark>. */
function Highlight({ text, tokens }: { text: string; tokens: string[] }) {
  if (!tokens.length) return text;
  const folded = fold(text);
  const marks = new Array<boolean>(text.length).fill(false);
  for (const tok of tokens) {
    let i = folded.indexOf(tok);
    while (i !== -1) {
      for (let j = i; j < i + tok.length; j++) marks[j] = true;
      i = folded.indexOf(tok, i + tok.length);
    }
  }
  const parts: { text: string; on: boolean }[] = [];
  for (let i = 0; i < text.length; i++) {
    const last = parts[parts.length - 1];
    if (last && last.on === marks[i]) last.text += text[i];
    else parts.push({ text: text[i], on: marks[i] });
  }
  return parts.map((p, i) =>
    p.on ? (
      <mark key={i} className="rounded-sm bg-accent/25 text-inherit">
        {p.text}
      </mark>
    ) : (
      p.text
    ),
  );
}

/**
 * Site search: a header trigger plus a modal command palette (Ctrl/⌘ K or "/").
 * The index is a small static JSON file, fetched once on first open; matching
 * runs in the browser, so results appear on every keystroke.
 */
export function SiteSearch({ labels: t, indexUrl }: SearchLabels) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<Indexed[] | null>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const id = useId();

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    inputRef.current?.select();
    if (!index) {
      fetch(indexUrl)
        .then((r) => r.json() as Promise<SearchItem[]>)
        .then((items) => setIndex(items.map((i) => ({ ...i, t: fold(i.title), s: fold(i.subtitle), k: fold(i.keywords) }))))
        .catch(() => setIndex([]));
    }
  };
  const close = () => dialogRef.current?.close();

  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  });

  // Global shortcuts: Ctrl/⌘ K anywhere, "/" outside text fields.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- platform hint only known in the browser
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (dialogRef.current?.open) dialogRef.current.close();
        else openRef.current();
      } else if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        openRef.current();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const tokens = useMemo(() => fold(query).split(/\s+/).filter(Boolean), [query]);

  const groups = useMemo(() => {
    if (!index) return [];
    const ranked = tokens.length
      ? index
          .map((item) => ({ item, s: score(item, tokens) }))
          .filter((r) => r.s > 0)
          .sort((a, b) => b.s - a.s)
          .map((r) => r.item)
      : index.filter((i) => i.kind === "solution" || i.kind === "area");
    return kindOrder
      .map((kind) => ({ kind, items: ranked.filter((i) => i.kind === kind).slice(0, tokens.length ? PER_GROUP : 9) }))
      .filter((g) => g.items.length);
  }, [index, tokens]);

  const flat = groups.flatMap((g) => g.items);
  const current = Math.min(active, Math.max(flat.length - 1, 0));

  const go = (item: SearchItem) => {
    close();
    router.push(item.href);
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!flat.length) return;
      const next = (current + (e.key === "ArrowDown" ? 1 : -1) + flat.length) % flat.length;
      setActive(next);
      listRef.current?.querySelector(`[data-i="${next}"]`)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && flat[current]) {
      e.preventDefault();
      go(flat[current]);
    }
  };

  let n = -1;
  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={t.label}
        aria-haspopup="dialog"
        className="flex items-center gap-2 rounded-full p-2 text-ink-2 transition-colors hover:text-ink xl:border xl:border-line xl:py-2 xl:pl-3 xl:pr-2 xl:hover:border-line-strong"
      >
        <Search size={17} />
        <span className="hidden text-[0.9375rem] xl:inline">{t.open}</span>
        <kbd className="hidden rounded-md border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[0.6875rem] text-ink-3 xl:inline">
          {isMac ? "⌘" : "Ctrl"} K
        </kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={t.label}
        onClose={() => {
          setQuery("");
          setActive(0);
        }}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="search-dialog m-0 mx-auto mt-[min(12vh,7rem)] w-[min(44rem,calc(100vw-1.5rem))] max-w-none overflow-hidden rounded-[1.5rem] border border-line bg-paper p-0 text-ink shadow-[0_30px_80px_-20px_rgba(11,18,32,0.45)] backdrop:bg-[#0b1220]/55 backdrop:backdrop-blur-[3px]"
      >
        <div className="flex items-center gap-3 border-b border-line px-5">
          <Search size={20} className="shrink-0 text-brand-ink" />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={flat.length > 0}
            aria-controls={`${id}-list`}
            aria-activedescendant={flat.length ? `${id}-o${current}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            placeholder={t.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
              listRef.current?.scrollTo({ top: 0 });
            }}
            onKeyDown={onInputKey}
            className="h-16 min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-ink-3 [&::-webkit-search-cancel-button]:hidden"
          />
          <button type="button" onClick={close} className="-mr-2 shrink-0 rounded-full p-2 text-ink-3 hover:text-ink" aria-label={t.close}>
            <Close size={18} />
          </button>
        </div>

        <div ref={listRef} id={`${id}-list`} role="listbox" aria-label={t.label} className="max-h-[min(60vh,32rem)] overflow-y-auto overscroll-contain p-2">
          {!index ? (
            <p className="px-4 py-10 text-center text-ink-3">{t.loading}</p>
          ) : flat.length === 0 ? (
            <p className="px-4 py-10 text-center text-ink-2">{t.empty.replace("{q}", query.trim())}</p>
          ) : (
            groups.map((g) => (
              <div key={g.kind} role="group" aria-labelledby={`${id}-g-${g.kind}`} className="pb-2">
                <p id={`${id}-g-${g.kind}`} className="t-label px-3 pb-1.5 pt-3 text-ink-3">
                  {tokens.length ? t.groups[g.kind] : g.kind === "solution" ? t.suggestions : t.groups[g.kind]}
                </p>
                {g.kind === "solution" && !tokens.length ? (
                  <div className="grid grid-cols-3 gap-1 sm:grid-cols-3">
                    {g.items.map((item) => {
                      n += 1;
                      const i = n;
                      return (
                        <Link
                          key={item.href + item.title}
                          id={`${id}-o${i}`}
                          data-i={i}
                          role="option"
                          aria-selected={i === current}
                          href={item.href}
                          tabIndex={-1}
                          onClick={close}
                          onMouseMove={() => setActive(i)}
                          className={cx("flex items-center gap-2.5 rounded-xl p-2.5 transition-colors", i === current && "bg-paper-2")}
                        >
                          <ProductMark src={item.logo} monogram={item.monogram} size={30} />
                          <span className="min-w-0 truncate font-mono text-[0.9375rem] font-medium">{item.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  g.items.map((item) => {
                    n += 1;
                    const i = n;
                    return (
                      <Link
                        key={item.href + item.title}
                        id={`${id}-o${i}`}
                        data-i={i}
                        role="option"
                        aria-selected={i === current}
                        href={item.href}
                        tabIndex={-1}
                        onClick={close}
                        onMouseMove={() => setActive(i)}
                        className={cx(
                          "group flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors",
                          i === current && "bg-paper-2",
                        )}
                      >
                        {item.kind === "solution" ? (
                          <ProductMark src={item.logo} monogram={item.monogram} size={36} />
                        ) : (
                          <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-[22%] border border-line font-mono text-[0.6875rem] text-ink-3">
                            {kindGlyph[item.kind]}
                          </span>
                        )}
                        <span className="min-w-0 flex-1">
                          <span className={cx("block truncate font-medium", item.kind === "solution" && "font-mono")}>
                            <Highlight text={item.title} tokens={tokens} />
                          </span>
                          <span className="block truncate text-[0.875rem] text-ink-3">
                            <Highlight text={item.subtitle} tokens={tokens} />
                          </span>
                        </span>
                        <ArrowRight
                          size={15}
                          className={cx("shrink-0 text-brand-ink transition-all", i === current ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0")}
                        />
                      </Link>
                    );
                  })
                )}
              </div>
            ))
          )}
        </div>

        <p className="t-meta hidden border-t border-line bg-paper-2 px-5 py-3 text-ink-3 sm:block">{t.hint}</p>
      </dialog>
    </>
  );
}

const kindGlyph: Record<SearchKind, string> = { solution: "", area: "◎", norm: "§", news: "N", project: "P", page: "↗" };

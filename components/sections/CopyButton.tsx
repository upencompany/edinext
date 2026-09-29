"use client";

import { useState } from "react";
import { cx } from "@/lib/format";

/** Copies a value to the clipboard and confirms it for 1.5 s (announced to screen readers). */
export function CopyButton({
  value,
  label,
  copiedLabel,
  className,
  children,
}: {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable (insecure context): leave the value selectable */
    }
  }

  return (
    <button type="button" onClick={copy} aria-label={`${label}: ${value}`} className={cx("transition-colors", className)}>
      {children ?? value}
      <span aria-live="polite" className={cx("ml-2 text-accent-ink", !copied && "sr-only")}>
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}

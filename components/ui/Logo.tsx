import Image from "next/image";
import wordmark from "@/public/brand/edinext-wordmark.png";
import wordmarkReverse from "@/public/brand/edinext-wordmark-reverse.png";
import lockup from "@/public/brand/edinext-logo.png";
import lockupReverse from "@/public/brand/edinext-logo-reverse.png";

interface LogoProps {
  variant?: "wordmark" | "lockup";
  tone?: "default" | "reverse";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** The official Edinext logo, used as supplied (only cropped and, on dark, reversed). */
export function Logo({ variant = "wordmark", tone = "default", className, priority, sizes = "160px" }: LogoProps) {
  const src =
    variant === "wordmark" ? (tone === "reverse" ? wordmarkReverse : wordmark) : tone === "reverse" ? lockupReverse : lockup;
  return (
    <Image
      src={src}
      alt={variant === "lockup" ? "Edinext — Innovare × Crescere" : "Edinext"}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}

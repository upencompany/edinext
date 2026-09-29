import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Branded Open Graph image: /og?title=…&kicker=…
 * Uses the real logo file and the brand palette; no photography.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "Edinext").slice(0, 140);
  const kicker = (searchParams.get("kicker") ?? "").slice(0, 80);
  const logo = await readFile(join(process.cwd(), "public/brand/edinext-wordmark-reverse.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#061a2b",
          color: "#f6f4ef",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={230} height={60} alt="" />
          <div style={{ fontSize: 22, letterSpacing: 3, color: "#81b736", textTransform: "uppercase" }}>{kicker}</div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 70 ? 54 : 68, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 22, color: "rgba(246,244,239,0.7)" }}>
          <div style={{ width: 48, height: 2, background: "#0076b9" }} />
          edinext.it — Lecce
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

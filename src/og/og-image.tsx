import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { PortfolioData } from "@/data/types";
import { OgCard } from "@/og/og-card";

/**
 * Shared Open Graph / Twitter image generator that mirrors the Hero section:
 * availability badge, mono role line, gradient last name, tagline, CTAs,
 * social chips, portrait with the floating stat badge, and the skills
 * marquee strip — all rendered with the same palette as `src/app/globals.css`.
 *
 * Fonts: `next/font` compiles Geist / Geist Mono / Space Grotesk to woff2,
 * which Satori can't consume, so we read the static TTFs from disk (see the
 * Next.js 16 `ImageResponse` docs: ttf/otf/woff only).
 */

const geistRegular = readFile(
  join(process.cwd(), "src/og/fonts/Geist-Regular.ttf"),
);
const geistMedium = readFile(
  join(process.cwd(), "src/og/fonts/Geist-Medium.ttf"),
);
const geistSemiBold = readFile(
  join(process.cwd(), "src/og/fonts/Geist-SemiBold.ttf"),
);
const geistMonoMedium = readFile(
  join(process.cwd(), "src/og/fonts/GeistMono-Medium.ttf"),
);
const spaceGroteskBold = readFile(
  join(process.cwd(), "src/og/fonts/SpaceGrotesk-Bold.ttf"),
);

// Optimized square portrait for embedding — the source photo in `public/` can
// be several MB, far over ImageResponse's 500KB asset limit. Read at module
// scope with a statically-scoped path so the build only traces this file.
const portraitData = readFile(
  join(process.cwd(), "public/portrait-og.jpg"),
  "base64",
);
const portraitSrc = `data:image/jpeg;base64,${await portraitData}`;

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

/**
 * Builds the alt text for a portfolio's Open Graph / Twitter image,
 * e.g. "Yousif Abdulkarim — Lead Developer & Open-Source Founder".
 */
export function ogAlt(data: PortfolioData): string {
  return `${data.profile.firstName} ${data.profile.lastName} — ${data.profile.role}`;
}

/** Renders the full OG image for a portfolio, mirroring the Hero section. */
export async function renderPortfolioOgImage(data: PortfolioData) {
  const [geist400, geist500, geist600, geistMono500, space700] =
    await Promise.all([
      geistRegular,
      geistMedium,
      geistSemiBold,
      geistMonoMedium,
      spaceGroteskBold,
    ]);

  return new ImageResponse(<OgCard data={data} portraitSrc={portraitSrc} />, {
    ...ogSize,
    fonts: [
      { name: "Geist", data: geist400, weight: 400, style: "normal" },
      { name: "Geist", data: geist500, weight: 500, style: "normal" },
      { name: "Geist", data: geist600, weight: 600, style: "normal" },
      { name: "Geist Mono", data: geistMono500, weight: 500, style: "normal" },
      { name: "Space Grotesk", data: space700, weight: 700, style: "normal" },
    ],
  });
}

import { Fragment } from "react";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { PortfolioData } from "@/data/types";

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
  join(process.cwd(), "src/og/fonts/Geist-Regular.ttf")
);
const geistMedium = readFile(
  join(process.cwd(), "src/og/fonts/Geist-Medium.ttf")
);
const geistSemiBold = readFile(
  join(process.cwd(), "src/og/fonts/Geist-SemiBold.ttf")
);
const geistMonoMedium = readFile(
  join(process.cwd(), "src/og/fonts/GeistMono-Medium.ttf")
);
const spaceGroteskBold = readFile(
  join(process.cwd(), "src/og/fonts/SpaceGrotesk-Bold.ttf")
);

// Optimized square portrait for embedding — the source photo in `public/` can
// be several MB, far over ImageResponse's 500KB asset limit. Read at module
// scope with a statically-scoped path so the build only traces this file.
const portraitData = readFile(
  join(process.cwd(), "public/portrait-og.jpg"),
  "base64"
);
const portraitSrc = `data:image/jpeg;base64,${await portraitData}`;

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

// Brand glyphs (24x24, simple-icons paths) for the social chips.
const GITHUB_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
const X_PATH =
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
const YOUTUBE_PATH =
  "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z";

type SocialChipProps = {
  path: string;
  label: string;
};

function SocialChip({ path, label }: SocialChipProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: "1px solid #d4d4d8",
        backgroundColor: "rgba(255,255,255,0.6)",
        marginRight: 14,
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#52525b"
        aria-label={label}
      >
        <path d={path} />
      </svg>
    </div>
  );
}

/** Renders the Hero-inspired social / contact chips row (mirrors hero.tsx). */
function SocialRow({ data }: { data: PortfolioData }) {
  const { profile } = data;
  const socials = [
    { href: profile.github, label: "GitHub", path: GITHUB_PATH },
    { href: profile.linkedin, label: "LinkedIn", path: LINKEDIN_PATH },
    { href: profile.twitter, label: "X", path: X_PATH },
    { href: profile.youtube, label: "YouTube", path: YOUTUBE_PATH },
  ].filter((s) => Boolean(s.href));

  if (socials.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      {socials.map((s) => (
        <SocialChip key={s.label} path={s.path} label={s.label} />
      ))}
    </div>
  );
}

/** Renders the full OG image for a portfolio, mirroring the Hero section. */
export async function renderPortfolioOgImage(data: PortfolioData) {
  const { profile, skills, uiSettings } = data;
  const showMarquee = uiSettings.showMarquee;
  const showPortrait = uiSettings.showPortfolioImage && Boolean(profile.image);

  // Same derivation as the Hero marquee, capped so the strip fits on a card.
  const marqueeItems = Object.values(skills)
    .flat()
    .map((skill) => skill.name)
    .slice(0, 8);

  const [geist400, geist500, geist600, geistMono500, space700] =
    await Promise.all([
      geistRegular,
      geistMedium,
      geistSemiBold,
      geistMonoMedium,
      spaceGroteskBold,
    ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fafafa",
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        {/* ---- background decorations (mirrors hero.tsx) ---- */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -90,
            left: "16%",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.34) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 140,
            right: -140,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.30) 0%, rgba(14,165,233,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -90,
            left: -140,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(251,191,36,0) 70%)",
          }}
        />

        {/* ---- main content row ---- */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "44px 64px",
            position: "relative",
          }}
        >
          {/* Left: text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flex: showPortrait ? "1.25" : "1",
              maxWidth: 760,
              marginRight: showPortrait ? 56 : 0,
            }}
          >
            {/* availability badge */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: 999,
                padding: "9px 18px",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 0 5px rgba(16,185,129,0.16)",
                  marginRight: 12,
                }}
              />
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#047857",
                  whiteSpace: "nowrap",
                }}
              >
                {profile.availableForWork
                  ? "Available for new opportunities"
                  : "Not currently available"}
              </div>
            </div>

            {/* role */}
            <div
              style={{
                marginTop: 30,
                fontFamily: "Geist Mono",
                fontSize: 19,
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#0ea5e9",
              }}
            >
              {profile.role}
            </div>

            {/* name */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <div
                style={{
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  fontSize: 58,
                  lineHeight: 1.05,
                  letterSpacing: -1,
                  color: "#18181b",
                  marginRight: 14,
                }}
              >
                {profile.firstName}
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  fontSize: 58,
                  lineHeight: 1.05,
                  letterSpacing: -1,
                  backgroundImage:
                    "linear-gradient(90deg, #3b82f6, #0ea5e9, #f59e0b)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {profile.lastName}
              </div>
            </div>

            {/* tagline */}
            <div
              style={{
                marginTop: 22,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                fontSize: 21,
                lineHeight: 1.45,
                color: "#52525b",
              }}
            >
              {profile.tagline.map((run, i) => (
                <Fragment key={i}>
                  <span
                    style={
                      run.emphasis
                        ? {
                            color: "#18181b",
                            fontWeight: 600,
                          }
                        : undefined
                    }
                  >
                    {run.text}
                  </span>
                </Fragment>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                marginTop: 34,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#18181b",
                  color: "#ffffff",
                  borderRadius: 999,
                  padding: "15px 26px",
                  fontSize: 20,
                  fontWeight: 600,
                  marginRight: 16,
                  boxShadow: "0 10px 24px -8px rgba(24,24,27,0.35)",
                }}
              >
                View my work
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginLeft: 10 }}
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #d4d4d8",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  color: "#27272a",
                  borderRadius: 999,
                  padding: "15px 26px",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                Get in touch
              </div>
            </div>

            {/* socials */}
            <SocialRow data={data} />
          </div>

          {/* Right: portrait */}
          {showPortrait && (
            <div
              style={{
                position: "relative",
                width: 280,
                height: 280,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* gradient ring (mirrors the hero portrait frame) */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                  padding: 8,
                  background:
                    "linear-gradient(135deg, #3b82f6, #0ea5e9, #f59e0b)",
                  boxShadow: "0 30px 60px -18px rgba(14,165,233,0.45)",
                }}
              >
                {/* next/image can't be used inside ImageResponse — raw <img> is required. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={portraitSrc}
                  width={264}
                  height={264}
                  alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                  style={{
                    borderRadius: 26,
                    objectFit: "cover",
                    display: "flex",
                  }}
                />
              </div>

              {/* floating stat badge (mirrors heroBadge) */}
              {profile.heroBadge && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -22,
                    left: -24,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(255,255,255,0.92)",
                    border: "1px solid #e4e4e7",
                    borderRadius: 18,
                    padding: "14px 20px",
                    boxShadow: "0 20px 40px -14px rgba(0,0,0,0.22)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Grotesk",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#18181b",
                    }}
                  >
                    {profile.heroBadge.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#71717a",
                      marginTop: 2,
                    }}
                  >
                    {profile.heroBadge.label}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ---- skills marquee strip (mirrors hero.tsx Marquee) ---- */}
        {showMarquee && marqueeItems.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              backgroundColor: "rgba(255,255,255,0.6)",
              borderTop: "1px solid #e4e4e7",
              borderBottom: "1px solid #e4e4e7",
              position: "relative",
              padding: "0 24px",
            }}
          >
            {marqueeItems.map((item, i) => (
              <Fragment key={item}>
                <span
                  style={{
                    fontFamily: "Geist Mono",
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#71717a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
                {i < marqueeItems.length - 1 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#0ea5e9"
                    style={{ margin: "0 22px" }}
                  >
                    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
                  </svg>
                )}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: geist400, weight: 400, style: "normal" },
        { name: "Geist", data: geist500, weight: 500, style: "normal" },
        { name: "Geist", data: geist600, weight: 600, style: "normal" },
        { name: "Geist Mono", data: geistMono500, weight: 500, style: "normal" },
        { name: "Space Grotesk", data: space700, weight: 700, style: "normal" },
      ],
    }
  );
}

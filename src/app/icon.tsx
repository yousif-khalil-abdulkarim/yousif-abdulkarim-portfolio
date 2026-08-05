import { ImageResponse } from "next/og";
import { mainPortfolio } from "@/data/portfolios/main-portfolio";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Browser favicon matching the navbar logo — a rounded blue→sky→amber
 * gradient square with the profile initials in bold white. Served via the
 * `icon` file convention (adds `<link rel="icon">` automatically).
 */
export default function Icon() {
  const { profile } = mainPortfolio;
  const initials = `${profile.firstName[0]}${profile.lastName[0] ?? ""}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Mirrors the navbar: bg-linear-to-br from-blue-500 via-sky-500 to-amber-400
          background:
            "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #f59e0b 100%)",
          borderRadius: "16px",
          color: "#ffffff",
          fontSize: "38px",
          fontWeight: 900,
          // Mirrors the navbar: shadow-md shadow-sky-500/30
          boxShadow: "0 4px 8px 0 rgba(14, 165, 233, 0.3)",
        }}
      >
        {initials}
      </div>
    ),
    { ...size }
  );
}

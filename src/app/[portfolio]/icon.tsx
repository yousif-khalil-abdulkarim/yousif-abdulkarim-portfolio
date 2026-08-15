import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/logo-mark";
import { allPortfolios } from "@/data/portfolios";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Browser favicon matching the navbar logo — a rounded blue→sky→amber
 * gradient square with the profile initials in bold white. Served via the
 * `icon` file convention (adds `<link rel="icon">` automatically).
 */
export async function Icon({
  params,
}: {
  params: Promise<{ portfolio: string }>;
}) {
  const { portfolio } = await params;
  const data = allPortfolios[portfolio];
  if (!data) return new Response("Not found", { status: 404 });
  
  const { profile } = data;
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return new ImageResponse(<LogoMark initials={initials} />, { ...size });
}

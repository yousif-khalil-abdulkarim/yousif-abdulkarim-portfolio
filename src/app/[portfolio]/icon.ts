import { renderLogoMark, iconSize, iconContentType } from "@/og/logo-mark";
import { allPortfolios } from "@/data/portfolios";

export const size = iconSize;
export const contentType = iconContentType;

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

  return renderLogoMark(initials);
}

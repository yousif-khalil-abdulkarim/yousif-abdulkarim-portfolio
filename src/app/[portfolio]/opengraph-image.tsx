import { allPortfolios } from "@/data/portfolios";
import { mainPortfolio } from "@/data/portfolios/main-portfolio";
import {
  renderPortfolioOgImage,
  ogSize,
  ogContentType,
} from "@/og/og-image";

export const runtime = "nodejs";

export const alt = `${mainPortfolio.profile.firstName} ${mainPortfolio.profile.lastName} — ${mainPortfolio.profile.role}`;
export const size = { ...ogSize };
export const contentType = ogContentType;

/**
 * Open Graph image for each portfolio route (e.g. /main/opengraph-image),
 * generated from the same data that powers the Hero section.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ portfolio: string }>;
}) {
  const { portfolio } = await params;
  const data = allPortfolios[portfolio as keyof typeof allPortfolios];
  if (!data) return new Response("Not found", { status: 404 });

  return renderPortfolioOgImage(data);
}

import { allPortfolios } from "@/data/portfolios";
import { mainPortfolio } from "@/data/portfolios/main-portfolio";
import {
  renderPortfolioOgImage,
  ogAlt,
  ogSize,
  ogContentType,
} from "@/og/og-image";

export const runtime = "nodejs";

export const alt = ogAlt(mainPortfolio);
export const size = { ...ogSize };
export const contentType = ogContentType;

/**
 * Twitter card image for each portfolio route, sharing the Hero-inspired
 * artwork from the Open Graph image.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ portfolio: string }>;
}) {
  const { portfolio } = await params;
  const data = allPortfolios[portfolio];
  if (!data) return new Response("Not found", { status: 404 });

  return renderPortfolioOgImage(data);
}

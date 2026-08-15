import { mainPortfolio } from "@/data/portfolios/main-portfolio";
import {
  renderPortfolioOgImage,
  ogSize,
  ogContentType,
} from "@/og/og-image";

export const runtime = "nodejs";

export const alt = `${mainPortfolio.profile.firstName} ${mainPortfolio.profile.lastName} — ${mainPortfolio.profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

/**
 * Open Graph image for each portfolio route (e.g. /main/opengraph-image),
 * generated from the same data that powers the Hero section.
 */
export default async function Image() {
  return renderPortfolioOgImage(mainPortfolio);
}

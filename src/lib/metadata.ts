import type { Metadata } from "next";
import { bioToPlainText } from "@/lib/bio";
import type { PortfolioData } from "@/data/types";

/**
 * Base URL used to resolve relative metadata URLs (e.g. the file-convention
 * opengraph/twitter images). Set `NEXT_PUBLIC_SITE_URL` to the deployed
 * domain so social previews point at the production image.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Builds page metadata (title + description + social previews) from a portfolio's profile. */
export function portfolioMetadata(data: PortfolioData): Metadata {
  const { profile } = data;
  const title = `${profile.firstName} ${profile.lastName} | ${profile.role}`;
  const description = `${profile.firstName} ${profile.lastName} — ${bioToPlainText(profile.tagline)}`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

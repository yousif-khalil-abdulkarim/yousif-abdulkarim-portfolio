import type { Metadata } from "next";
import { bioToPlainText } from "@/lib/bio";
import type { PortfolioData } from "@/data/types";

/** Builds page metadata (title + description) from a portfolio's profile. */
export function portfolioMetadata(data: PortfolioData): Metadata {
  const { profile } = data;
  return {
    title: `${profile.firstName} ${profile.lastName} | ${profile.role}`,
    description: `${profile.firstName} ${profile.lastName} — ${bioToPlainText(profile.tagline)}`,
  };
}

import type { Metadata } from "next";
import type { PortfolioData } from "@/data/types";

/** Builds page metadata (title + description) from a portfolio's profile. */
export function portfolioMetadata(data: PortfolioData): Metadata {
  const { profile } = data;
  return {
    title: `${profile.name} | ${profile.role}`,
    description: `${profile.name} — ${profile.tagline}`,
  };
}

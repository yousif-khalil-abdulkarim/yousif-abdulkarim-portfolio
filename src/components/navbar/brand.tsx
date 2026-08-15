"use client";

import { scrollToSection } from "@/components/navbar/nav-utils";
import type { PortfolioData } from "@/data/types";

type BrandProps = {
  data: PortfolioData;
};

/**
 * The navbar brand: a gradient logo mark with the profile initials followed
 * by the first name. Clicking it smooth-scrolls back to the top (#home).
 */
export function Brand({ data }: BrandProps) {
  const { profile } = data;
  const initials = `${profile.firstName[0]}${profile.lastName[0] ?? ""}`;

  return (
    <a
      href="#home"
      onClick={(e) => scrollToSection(e, "#home")}
      className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 via-sky-500 to-amber-400 text-sm font-bold text-white shadow-md shadow-sky-500/30 transition-transform group-hover:rotate-6">
        {initials}
      </span>
      {profile.firstName}
    </a>
  );
}

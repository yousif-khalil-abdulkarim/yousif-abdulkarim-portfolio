"use client";

import { SkillCategoryCard } from "@/components/skill-category-card";
import type { PortfolioData } from "@/data/types";

type SkillsSectionProps = {
  data: PortfolioData;
};

export function SkillsSection({ data }: SkillsSectionProps) {
  const { skills, uiSettings } = data;
  const limit = uiSettings.sectionLimits.skills;

  const hasSkills = Object.values(skills).some((items) => items.length > 0);
  if (!hasSkills) return null;

  return (
    <div className="pt-2">
      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Skills
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills)
          .filter(([, items]) => items.length > 0)
          .map(([category, items]) => (
            <SkillCategoryCard
              key={category}
              category={category}
              items={items}
              limit={limit}
            />
          ))}
      </div>
    </div>
  );
}

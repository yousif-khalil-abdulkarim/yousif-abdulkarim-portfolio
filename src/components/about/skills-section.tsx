"use client";

import { SkillCategoryCard } from "@/components/about/skill-category-card";
import type { Skill } from "@/data/all-skills";

type SkillsSectionProps = {
  /** Skills grouped by category (e.g. Backend, Frontend). */
  skills: Record<string, Skill[]>;
  /** Max skills shown per category before a "Show more" control appears. */
  limit: number;
};

export function SkillsSection({ skills, limit }: SkillsSectionProps) {
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

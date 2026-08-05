"use client";

import { useCallback, useState } from "react";
import SkillCategoryModal from "./skill-category-modal";
import SkillCategoryCard from "./skill-category-card";
import type { PortfolioData } from "@/data/types";
import type { Skill } from "@/data/all-skills";

type SkillsSectionProps = {
  data: PortfolioData;
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  const { skills, uiSettings } = data;
  const [activeCategory, setActiveCategory] = useState<{
    category: string;
    skills: Skill[];
  } | null>(null);
  const closeCategoryModal = useCallback(() => setActiveCategory(null), []);
  const limit = uiSettings.sectionLimits.skills;

  const hasSkills = Object.values(skills).some((items) => items.length > 0);
  if (!hasSkills) return null;

  return (
    <div className="pt-2">
      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Skills
      </h3>
      <div className="mt-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {Object.entries(skills)
          .filter(([, items]) => items.length > 0)
          .map(([category, items]) => (
            <SkillCategoryCard
              key={category}
              category={category}
              items={items}
              limit={limit}
              onShowMore={() => setActiveCategory({ category, skills: items })}
            />
          ))}
      </div>
      {activeCategory && (
        <SkillCategoryModal
          category={activeCategory.category}
          skills={activeCategory.skills}
          onClose={closeCategoryModal}
        />
      )}
    </div>
  );
}

"use client";

import { useCallback, useState } from "react";
import SkillBadge from "./skill-badge";
import SkillCategoryModal from "./skill-category-modal";
import ShowMoreButton from "./show-more-button";
import { skills, uiSettings } from "@/data/projects";
import type { Skill } from "@/data/all-skills";

export default function SkillsSection() {
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
      <div className="mt-4 space-y-4">
        {Object.entries(skills)
          .filter(([, items]) => items.length > 0)
          .map(([category, items]) => {
            const hasMore = items.length > limit;
          const visible = hasMore ? items.slice(0, limit) : items;
          return (
            <div key={category}>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {category}
              </h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {visible.map((skill) => (
                  <li key={skill.name}>
                    <SkillBadge skill={skill} />
                  </li>
                ))}
              </ul>
              {hasMore && (
                <ShowMoreButton
                  expanded={false}
                  hiddenCount={items.length - limit}
                  onClick={() => setActiveCategory({ category, skills: items })}
                  className="mt-2"
                />
              )}
            </div>
          );
        })}
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

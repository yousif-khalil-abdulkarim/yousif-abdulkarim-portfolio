"use client";

import { SkillBadge } from "@/components/utilities/skill/skill-badge";
import { MoreButton } from "@/components/utilities/more-button";
import { SkillCategoryModal } from "@/components/utilities/skill/skill-category-modal";
import type { Skill } from "@/data/all-skills";

type SkillCategoryCardProps = {
  category: string;
  items: Skill[];
  limit: number;
};

export function SkillCategoryCard({
  category,
  items,
  limit,
}: SkillCategoryCardProps) {
  const hasMore = items.length > limit;
  const visible = hasMore ? items.slice(0, limit) : items;
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 dark:bg-card/30">
      <h4 className="text-sm font-medium text-title-foreground">
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
        <SkillCategoryModal
          category={category}
          skills={items.slice(limit)}
          trigger={
            <MoreButton
              expanded={false}
              hiddenCount={items.length - limit}
              className="mt-2"
            />
          }
        />
      )}
    </div>
  );
}

"use client";

import SkillBadge from "./skill-badge";
import ShowMoreButton from "./show-more-button";
import SkillCategoryModal from "./skill-category-modal";
import type { Skill } from "@/data/all-skills";

type SkillCategoryCardProps = {
  category: string;
  items: Skill[];
  limit: number;
};

export default function SkillCategoryCard({
  category,
  items,
  limit,
}: SkillCategoryCardProps) {
  const hasMore = items.length > limit;
  const visible = hasMore ? items.slice(0, limit) : items;
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/60 p-5 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-900/30">
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
        <SkillCategoryModal
          category={category}
          skills={items}
          trigger={
            <ShowMoreButton
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

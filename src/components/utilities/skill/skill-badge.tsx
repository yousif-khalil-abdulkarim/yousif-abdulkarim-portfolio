"use client";

import { SkillModal } from "@/components/utilities/skill/skill-modal";
import type { Skill } from "@/data/all-skills";

type SkillBadgeProps = {
  skill: Skill;
};

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <SkillModal
      skill={skill}
      trigger={
        <button
          type="button"
          aria-label={`View more about ${skill.name}`}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {skill.name}
          <svg
            aria-hidden
            className="h-3 w-3 shrink-0 text-zinc-400 dark:text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      }
    />
  );
}

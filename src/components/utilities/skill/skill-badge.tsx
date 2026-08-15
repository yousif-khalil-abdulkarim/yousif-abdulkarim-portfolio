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
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs font-medium text-title-foreground hover:bg-muted-hover"
        >
          {skill.name}
          <svg
            aria-hidden
            className="h-3 w-3 shrink-0 text-faint-foreground"
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

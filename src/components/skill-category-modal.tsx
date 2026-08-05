"use client";

import type { ReactElement } from "react";
import StyledModal from "./styled-modal";
import type { Skill } from "@/data/all-skills";

type SkillCategoryModalProps = {
  category: string;
  skills: Skill[];
  trigger?: ReactElement;
};

export default function SkillCategoryModal({
  category,
  skills,
  trigger,
}: SkillCategoryModalProps) {
  return (
    <StyledModal title={category} trigger={trigger}>
      <ul className="mt-5 space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="border-b border-dashed border-zinc-200 pb-4 last:border-0 last:pb-0 dark:border-zinc-800"
          >
            <p className="text-sm font-semibold">{skill.name}</p>
            <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
    </StyledModal>
  );
}

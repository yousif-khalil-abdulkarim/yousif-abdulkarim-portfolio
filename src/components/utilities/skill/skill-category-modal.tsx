"use client";

import type { ReactElement } from "react";
import { StyledModal } from "@/components/utilities/styled-modal";
import { SkillListItem } from "@/components/utilities/skill/skill-list-item";
import type { Skill } from "@/data/all-skills";

type SkillCategoryModalProps = {
  category: string;
  skills: Skill[];
  trigger?: ReactElement;
};

export function SkillCategoryModal({
  category,
  skills,
  trigger,
}: SkillCategoryModalProps) {
  return (
    <StyledModal title={category} trigger={trigger}>
      <ul className="mt-5 space-y-4">
        {skills.map((skill) => (
          <SkillListItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </StyledModal>
  );
}

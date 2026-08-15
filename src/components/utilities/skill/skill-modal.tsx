"use client";

import type { ReactElement } from "react";
import { StyledModal } from "@/components/utilities/styled-modal";
import type { Skill } from "@/data/all-skills";

type SkillModalProps = {
  skill: Skill;
  trigger?: ReactElement;
};

export function SkillModal({ skill, trigger }: SkillModalProps) {
  return (
    <StyledModal title={skill.name} maxWidthClass="max-w-7xl" trigger={trigger}>
      <p className="mt-4 text-sm leading-7 text-body-foreground">
        {skill.description}
      </p>
    </StyledModal>
  );
}

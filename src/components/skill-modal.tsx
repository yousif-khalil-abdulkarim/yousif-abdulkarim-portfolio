"use client";

import type { ReactElement } from "react";
import StyledModal from "@/components/styled-modal";
import type { Skill } from "@/data/all-skills";

type SkillModalProps = {
  skill: Skill;
  trigger?: ReactElement;
};

export default function SkillModal({ skill, trigger }: SkillModalProps) {
  return (
    <StyledModal title={skill.name} maxWidthClass="max-w-md" trigger={trigger}>
      <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {skill.description}
      </p>
    </StyledModal>
  );
}

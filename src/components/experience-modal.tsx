"use client";

import type { ReactElement } from "react";
import StyledModal from "./styled-modal";
import SkillBadge from "./skill-badge";
import type { Experience } from "@/data/types";

type ExperienceModalProps = {
  job: Experience;
  trigger?: ReactElement;
};

export default function ExperienceModal({ job, trigger }: ExperienceModalProps) {
  return (
    <StyledModal
      title={job.role}
      subtitle={`${job.company} · ${job.period}`}
      trigger={trigger}
    >
      {job.summary && (
        <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {job.summary}
        </p>
      )}

      <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        What I did
      </h4>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 marker:text-sky-400 dark:text-zinc-400">
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {job.stack && (
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Tech stack
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {job.stack.map((tech) => (
              <li key={tech.name}>
                <SkillBadge skill={tech} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledModal>
  );
}

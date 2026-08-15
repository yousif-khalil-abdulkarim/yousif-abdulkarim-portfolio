"use client";

import type { ReactElement } from "react";
import { StyledModal } from "@/components/utilities/styled-modal";
import { SkillBadge } from "@/components/utilities/skill/skill-badge";
import { ProofBadge } from "@/components/utilities/proof-badge/proof-badge";
import type { Experience } from "@/data/types";

type ExperienceModalProps = {
  job: Experience;
  trigger?: ReactElement;
};

export function ExperienceModal({
  job,
  trigger,
}: ExperienceModalProps) {
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

      {job.liveUrl && (
        <a
          href={job.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 transition-colors hover:text-sky-600 dark:text-zinc-100 dark:hover:text-sky-400"
        >
          Live site <span aria-hidden>↗</span>
        </a>
      )}

      <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        What I did
      </h4>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 marker:text-sky-400 dark:text-zinc-400">
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {job.proof.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Proof
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {job.proof.map((item) => (
              <li key={item}>
                <ProofBadge label={item} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {job.stack.length > 0 && (
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

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

export function ExperienceModal({ job, trigger }: ExperienceModalProps) {
  return (
    <StyledModal
      title={job.role}
      subtitle={`${job.company} · ${job.period}`}
      trigger={trigger}
    >
      {job.summary && (
        <p className="mt-4 text-sm leading-7 text-body-foreground">
          {job.summary}
        </p>
      )}

      {job.liveUrl && (
        <a
          href={job.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-strong-foreground transition-colors hover:text-accent-strong"
        >
          Live site <span aria-hidden>↗</span>
        </a>
      )}

      <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        What I did
      </h4>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-body-foreground marker:text-accent">
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {job.proof.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
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

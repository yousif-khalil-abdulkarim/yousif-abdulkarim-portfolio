"use client";

import { SkillBadge } from "@/components/utilities/skill/skill-badge";
import { ProofBadges } from "@/components/utilities/proof-badge/proof-badges";
import { PointsList } from "@/components/experience/points-list";
import { MoreButton } from "@/components/utilities/more-button";
import { ExperienceModal } from "@/components/experience/experience-modal";
import type { Experience } from "@/data/types";

type ExperienceCardProps = {
  job: Experience;
  proofLimit: number;
  pointsLimit: number;
};

export function ExperienceCard({
  job,
  proofLimit,
  pointsLimit,
}: ExperienceCardProps) {
  return (
    <div className="group relative">
      <span
        aria-hidden
        className="absolute left-[-2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-card"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-semibold">
          {job.role}{" "}
          <span className="text-muted-foreground">· {job.company}</span>
        </h3>
        <span className="font-mono text-xs text-faint-foreground">
          {job.period}
        </span>
      </div>
      {job.summary && (
        <p className="mt-3 text-sm leading-7 text-body-foreground">
          {job.summary}
        </p>
      )}
      <PointsList items={job.points} limit={pointsLimit} />
      {job.stack.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <li key={tech.name}>
              <SkillBadge skill={tech} />
            </li>
          ))}
        </ul>
      )}
      {job.proof.length > 0 && (
        <ProofBadges items={job.proof} limit={proofLimit} />
      )}
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <ExperienceModal job={job} trigger={<MoreButton />} />
        {job.liveUrl && (
          <a
            href={job.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-strong-foreground transition-colors hover:text-accent-strong"
          >
            Live site{" "}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

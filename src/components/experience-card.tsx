"use client";

import SkillBadge from "@/components/skill-badge";
import ProofBadges from "@/components/proof-badges";
import PointsList from "@/components/points-list";
import ViewMoreButton from "@/components/view-more-button";
import ExperienceModal from "@/components/experience-modal";
import type { Experience } from "@/data/types";

type ExperienceCardProps = {
  job: Experience;
  proofLimit: number;
  pointsLimit: number;
};

export default function ExperienceCard({
  job,
  proofLimit,
  pointsLimit,
}: ExperienceCardProps) {
  return (
    <div className="group relative">
      <span
        aria-hidden
        className="absolute left-[-2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-sky-500 bg-white dark:bg-zinc-950"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-semibold">
          {job.role}{" "}
          <span className="text-zinc-500 dark:text-zinc-400">
            · {job.company}
          </span>
        </h3>
        <span className="font-mono text-xs text-zinc-400">{job.period}</span>
      </div>
      {job.summary && (
        <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
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
      {job.proof.length > 0 && <ProofBadges items={job.proof} limit={proofLimit} />}
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <ExperienceModal job={job} trigger={<ViewMoreButton />} />
        {job.liveUrl && (
          <a
            href={job.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 transition-colors hover:text-sky-600 dark:text-zinc-100 dark:hover:text-sky-400"
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

"use client";

import SkillBadge from "./skill-badge";
import ViewMoreButton from "./view-more-button";
import type { Experience } from "@/data/types";

type ExperienceCardProps = {
  job: Experience;
  onViewMore: () => void;
};

export default function ExperienceCard({
  job,
  onViewMore,
}: ExperienceCardProps) {
  return (
    <div className="relative">
      <span
        aria-hidden
        className="absolute -left-[2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-fuchsia-500 bg-white dark:bg-zinc-950"
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
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-600 marker:text-fuchsia-400 dark:text-zinc-400">
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {job.stack && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <li key={tech.name}>
              <SkillBadge skill={tech} />
            </li>
          ))}
        </ul>
      )}
      <ViewMoreButton onClick={onViewMore} className="mt-4" />
    </div>
  );
}

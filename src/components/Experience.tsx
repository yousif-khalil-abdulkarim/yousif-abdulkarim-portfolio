"use client";

import { useCallback, useState } from "react";
import SectionHeading from "./SectionHeading";
import ExperienceModal from "./ExperienceModal";
import SkillBadge from "./SkillBadge";
import ViewMoreButton from "./ViewMoreButton";
import ShowMoreButton from "./ShowMoreButton";
import { experience, uiSettings } from "@/data/projects";
import type { Experience } from "@/data/projects";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const [activeJob, setActiveJob] = useState<Experience | null>(null);
  const closeJobModal = useCallback(() => setActiveJob(null), []);
  const hasMore = experience.length > uiSettings.sectionLimits.experience;
  const visible = hasMore && !expanded
    ? experience.slice(0, uiSettings.sectionLimits.experience)
    : experience;

  if (experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="02"
        title="Experience"
        subtitle="Where I've worked and what I've built along the way."
      />
      <div className="relative mt-12 space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {visible.map((job) => (
          <div key={`${job.role}-${job.company}`} className="relative">
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
              <span className="font-mono text-xs text-zinc-400">
                {job.period}
              </span>
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
            <ViewMoreButton onClick={() => setActiveJob(job)} className="mt-4" />
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <ShowMoreButton
            expanded={expanded}
            hiddenCount={experience.length - uiSettings.sectionLimits.experience}
            onClick={() => setExpanded((value) => !value)}
          />
        </div>
      )}
      {activeJob && (
        <ExperienceModal job={activeJob} onClose={closeJobModal} />
      )}
    </section>
  );
}

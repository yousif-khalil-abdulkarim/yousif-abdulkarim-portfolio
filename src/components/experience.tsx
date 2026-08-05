"use client";

import { useCallback, useState } from "react";
import SectionHeading from "./section-heading";
import ExperienceModal from "./experience-modal";
import ExperienceCard from "./experience-card";
import ShowMoreButton from "./show-more-button";
import type { Experience, PortfolioData } from "@/data/types";

type ExperienceProps = {
  data: PortfolioData;
};

export default function Experience({ data }: ExperienceProps) {
  const { experience, uiSettings } = data;
  const [expanded, setExpanded] = useState(false);
  const [activeJob, setActiveJob] = useState<Experience | null>(null);
  const closeJobModal = useCallback(() => setActiveJob(null), []);
  const visibleJobs = experience.filter((job) => !job.hide);
  const hasMore = visibleJobs.length > uiSettings.sectionLimits.experience;
  const visible = hasMore && !expanded
    ? visibleJobs.slice(0, uiSettings.sectionLimits.experience)
    : visibleJobs;

  if (visibleJobs.length === 0) return null;

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
          <ExperienceCard
            key={`${job.role}-${job.company}`}
            job={job}
            onViewMore={() => setActiveJob(job)}
          />
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <ShowMoreButton
            expanded={expanded}
            hiddenCount={visibleJobs.length - uiSettings.sectionLimits.experience}
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

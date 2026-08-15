"use client";

import { Collapsible } from "@ark-ui/react/collapsible";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SectionHeading } from "@/components/utilities/section-heading";
import { ExperienceCard } from "@/components/experience/experience-card";
import { MoreButton } from "@/components/utilities/more-button";
import { useCollapsibleState } from "@/hooks/use-collapsible-state";
import type { PortfolioData } from "@/data/types";

type ExperienceProps = {
  data: PortfolioData;
};

export function Experience({ data }: ExperienceProps) {
  const { experience, uiSettings } = data;
  const [extraRef] = useAutoAnimate();
  const { open, handleOpenChange } = useCollapsibleState();
  const visibleJobs = experience.filter((job) => !job.hide);
  const limit = uiSettings.sectionLimits.experience;
  const shownJobs = visibleJobs.slice(0, limit);
  const extraJobs = visibleJobs.slice(limit);

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
      <Collapsible.Root open={open} onOpenChange={handleOpenChange}>
        <div className="relative mt-12 space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
          {shownJobs.map((job) => (
            <ExperienceCard
              key={`${job.role}-${job.company}`}
              job={job}
              proofLimit={uiSettings.sectionLimits.proofLimit}
              pointsLimit={uiSettings.sectionLimits.pointsLimit}
            />
          ))}
          <div ref={extraRef} className="space-y-10">
            {open &&
              extraJobs.map((job) => (
                <ExperienceCard
                  key={`${job.role}-${job.company}`}
                  job={job}
                  proofLimit={uiSettings.sectionLimits.proofLimit}
                  pointsLimit={uiSettings.sectionLimits.pointsLimit}
                />
              ))}
          </div>
        </div>
        {extraJobs.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Collapsible.Trigger asChild>
              <MoreButton hiddenCount={extraJobs.length} />
            </Collapsible.Trigger>
          </div>
        )}
      </Collapsible.Root>
    </section>
  );
}

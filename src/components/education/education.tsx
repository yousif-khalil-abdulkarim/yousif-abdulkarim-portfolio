"use client";

import { Collapsible } from "@ark-ui/react/collapsible";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SectionHeading } from "@/components/utilities/section-heading";
import { EducationCard } from "@/components/education/education-card";
import { MoreButton } from "@/components/utilities/more-button";
import { useCollapsibleState } from "@/hooks/use-collapsible-state";
import type { PortfolioData } from "@/data/types";

type EducationProps = {
  data: PortfolioData;
};

export function Education({ data }: EducationProps) {
  const { education, uiSettings } = data;
  const [extraRef] = useAutoAnimate();
  const { open, handleOpenChange } = useCollapsibleState();
  const visibleEntries = education.filter((entry) => entry.include);
  const limit = uiSettings.sectionLimits.education;
  const shownEntries = visibleEntries.slice(0, limit);
  const extraEntries = visibleEntries.slice(limit);

  if (visibleEntries.length === 0) return null;

  return (
    <section
      id="education"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="02"
        title="Education"
        subtitle="Where I studied and what I focused on."
      />
      <Collapsible.Root open={open} onOpenChange={handleOpenChange}>
        <div className="relative mt-12 space-y-10 border-l border-border pl-8">
          {shownEntries.map((entry) => (
            <EducationCard
              key={`${entry.degree}-${entry.school}`}
              education={entry}
            />
          ))}
          <div ref={extraRef} className="space-y-10">
            {open &&
              extraEntries.map((entry) => (
                <EducationCard
                  key={`${entry.degree}-${entry.school}`}
                  education={entry}
                />
              ))}
          </div>
        </div>
        {extraEntries.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Collapsible.Trigger asChild>
              <MoreButton hiddenCount={extraEntries.length} />
            </Collapsible.Trigger>
          </div>
        )}
      </Collapsible.Root>
    </section>
  );
}

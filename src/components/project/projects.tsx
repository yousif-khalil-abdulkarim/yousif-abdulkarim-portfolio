"use client";

import { Collapsible } from "@ark-ui/react/collapsible";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SectionHeading } from "@/components/utilities/section-heading";
import { ProjectCard } from "@/components/project/project-card";
import { MoreButton } from "@/components/utilities/more-button";
import { useCollapsibleState } from "@/hooks/use-collapsible-state";
import type { PortfolioData } from "@/data/types";

type ProjectsProps = {
  data: PortfolioData;
};

export function Projects({ data }: ProjectsProps) {
  const { projects, uiSettings } = data;
  const [extraRef] = useAutoAnimate();
  const { open, handleOpenChange } = useCollapsibleState();
  const visibleProjects = projects.filter((project) => project.include);
  const limit = uiSettings.sectionLimits.projects;
  const shownProjects = visibleProjects.slice(0, limit);
  const extraProjects = visibleProjects.slice(limit);

  if (visibleProjects.length === 0) return null;

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="03"
        title="Projects"
        subtitle="A selection of products and open-source work I've built. Click View more to dive deeper."
      />
      <Collapsible.Root open={open} onOpenChange={handleOpenChange}>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {shownProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              proofLimit={uiSettings.sectionLimits.proofLimit}
            />
          ))}
          {extraProjects.length > 0 && (
            <div
              ref={extraRef}
              className="col-span-full grid gap-6 md:grid-cols-2"
            >
              {open &&
                extraProjects.map((project, j) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={shownProjects.length + j}
                    proofLimit={uiSettings.sectionLimits.proofLimit}
                  />
                ))}
            </div>
          )}
        </div>
        {extraProjects.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Collapsible.Trigger asChild>
              <MoreButton hiddenCount={extraProjects.length} />
            </Collapsible.Trigger>
          </div>
        )}
      </Collapsible.Root>
    </section>
  );
}

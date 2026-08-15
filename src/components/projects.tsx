"use client";

import { Collapsible } from "@ark-ui/react/collapsible";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import MoreButton from "@/components/more-button";
import type { PortfolioData } from "@/data/types";

type ProjectsProps = {
  data: PortfolioData;
};

export default function Projects({ data }: ProjectsProps) {
  const { projects, uiSettings } = data;
  const visibleProjects = projects.filter((project) => !project.hide);
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
      <Collapsible.Root>
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
            <Collapsible.Content className="col-span-full">
              <div className="grid gap-6 md:grid-cols-2">
                {extraProjects.map((project, j) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={shownProjects.length + j}
                    proofLimit={uiSettings.sectionLimits.proofLimit}
                  />
                ))}
              </div>
            </Collapsible.Content>
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

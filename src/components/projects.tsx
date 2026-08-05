"use client";

import { useCallback, useState } from "react";
import SectionHeading from "./section-heading";
import ProjectModal from "./project-modal";
import ProjectCard from "./project-card";
import ShowMoreButton from "./show-more-button";
import type { Project, PortfolioData } from "@/data/types";

type ProjectsProps = {
  data: PortfolioData;
};

export default function Projects({ data }: ProjectsProps) {
  const { projects, uiSettings } = data;
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  const closeModal = useCallback(() => setActiveProject(null), []);
  const visibleProjects = projects.filter((project) => !project.hide);
  const hasMore = visibleProjects.length > uiSettings.sectionLimits.projects;
  const visible = hasMore && !expanded
    ? visibleProjects.slice(0, uiSettings.sectionLimits.projects)
    : visibleProjects;

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
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onViewMore={() => setActiveProject(project)}
          />
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <ShowMoreButton
            expanded={expanded}
            hiddenCount={visibleProjects.length - uiSettings.sectionLimits.projects}
            onClick={() => setExpanded((value) => !value)}
          />
        </div>
      )}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </section>
  );
}

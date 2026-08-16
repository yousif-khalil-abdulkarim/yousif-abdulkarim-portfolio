"use client";

import { SkillBadge } from "@/components/utilities/skill/skill-badge";
import { ProofBadges } from "@/components/utilities/proof-badge/proof-badges";
import { MoreButton } from "@/components/utilities/more-button";
import { ProjectModal } from "@/components/project/project-modal";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
  index: number;
  proofLimit: number;
};

export function ProjectCard({ project, index, proofLimit }: ProjectCardProps) {
  return (
    <article className="group relative">
      <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-faint-foreground">
            0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-strong">
                ★ Featured
              </span>
            )}
            <span className="font-mono text-xs text-faint-foreground">
              {project.year}
            </span>
          </div>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-7 text-body-foreground">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech.name}>
              <SkillBadge skill={tech} />
            </li>
          ))}
        </ul>
        {project.proof.length > 0 && (
          <ProofBadges items={project.proof} limit={proofLimit} />
        )}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ProjectModal project={project} trigger={<MoreButton />} />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-strong-foreground transition-colors hover:text-accent-strong"
            >
              Live demo{" "}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-strong-foreground"
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

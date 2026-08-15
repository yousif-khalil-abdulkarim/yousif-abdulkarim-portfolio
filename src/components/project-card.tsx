"use client";

import SkillBadge from "@/components/skill-badge";
import ProofBadges from "@/components/proof-badges";
import MoreButton from "@/components/more-button";
import ProjectModal from "@/components/project-modal";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
  index: number;
  proofLimit: number;
};

export default function ProjectCard({
  project,
  index,
  proofLimit,
}: ProjectCardProps) {
  return (
    <article className="group relative">
      <div className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-400">
            0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
                ★ Featured
              </span>
            )}
            <span className="font-mono text-xs text-zinc-400">
              {project.year}
            </span>
          </div>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech.name}>
              <SkillBadge skill={tech} />
            </li>
          ))}
        </ul>
        {project.proof.length > 0 && <ProofBadges items={project.proof} limit={proofLimit} />}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ProjectModal project={project} trigger={<MoreButton />} />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 transition-colors hover:text-sky-600 dark:text-zinc-100 dark:hover:text-sky-400"
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
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

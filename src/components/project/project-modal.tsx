"use client";

import type { ReactElement } from "react";
import { StyledModal } from "@/components/utilities/styled-modal";
import { SkillBadge } from "@/components/utilities/skill/skill-badge";
import { ProofBadge } from "@/components/utilities/proof-badge/proof-badge";
import type { Project } from "@/data/types";

type ProjectModalProps = {
  project: Project;
  trigger?: ReactElement;
};

export function ProjectModal({
  project,
  trigger,
}: ProjectModalProps) {
  return (
    <StyledModal title={project.title} subtitle={project.year} trigger={trigger}>
      <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {project.highlights.length > 0 && (
        <>
          <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Highlights
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 marker:text-sky-400 dark:text-zinc-400">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.proof.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Proof
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.proof.map((item) => (
              <li key={item}>
                <ProofBadge label={item} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Tech stack
        </h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech.name}>
              <SkillBadge skill={tech} />
            </li>
          ))}
        </ul>
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-sky-600 dark:text-zinc-100 dark:hover:text-sky-400"
            >
              Live demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Source code ↗
            </a>
          )}
        </div>
      )}
    </StyledModal>
  );
}

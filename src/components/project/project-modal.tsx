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

export function ProjectModal({ project, trigger }: ProjectModalProps) {
  return (
    <StyledModal
      title={project.title}
      subtitle={project.year}
      trigger={trigger}
    >
      <p className="mt-4 text-sm leading-7 text-body-foreground">
        {project.description}
      </p>

      {project.highlights.length > 0 && (
        <>
          <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Highlights
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-body-foreground marker:text-accent">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.proof.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
        <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-strong-foreground hover:text-accent-strong"
            >
              Live demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-strong-foreground"
            >
              Source code ↗
            </a>
          )}
        </div>
      )}
    </StyledModal>
  );
}

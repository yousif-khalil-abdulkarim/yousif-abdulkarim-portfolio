"use client";

import { useEffect, useRef } from "react";
import SkillBadge from "./skill-badge";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
      />
      {/* panel */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-950">
        <div
          aria-hidden
          className="h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400"
        />
        <div className="max-h-[75vh] overflow-y-auto p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="project-modal-title"
                className="font-display text-2xl font-bold tracking-tight"
              >
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-zinc-400">
                {project.year}
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-full border border-zinc-300 p-1.5 text-zinc-500 transition-colors hover:border-fuchsia-500 hover:text-fuchsia-500 dark:border-zinc-700 dark:text-zinc-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {project.highlights && (
            <>
              <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Highlights
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 marker:text-fuchsia-400 dark:text-zinc-400">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
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
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-fuchsia-600 dark:text-zinc-100 dark:hover:text-fuchsia-400"
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
        </div>
      </div>
    </div>
  );
}

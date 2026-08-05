"use client";

import { useEffect, useRef } from "react";
import type { Skill } from "@/data/projects";

type SkillModalProps = {
  skill: Skill;
  onClose: () => void;
};

export default function SkillModal({ skill, onClose }: SkillModalProps) {
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
      aria-labelledby="skill-modal-title"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
      />
      {/* panel */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-950">
        <div
          aria-hidden
          className="h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400"
        />
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3
              id="skill-modal-title"
              className="font-display text-2xl font-bold tracking-tight"
            >
              {skill.name}
            </h3>
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
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
}

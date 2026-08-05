"use client";

import { useEffect, useRef } from "react";
import type { Skill } from "@/data/all-skills";

type SkillCategoryModalProps = {
  category: string;
  skills: Skill[];
  onClose: () => void;
};

export default function SkillCategoryModal({
  category,
  skills,
  onClose,
}: SkillCategoryModalProps) {
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
      aria-labelledby="skill-category-modal-title"
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
          className="h-1.5 bg-gradient-to-r from-blue-500 via-sky-500 to-amber-400"
        />
        <div className="max-h-[75vh] overflow-y-auto p-6">
          <div className="flex items-start justify-between gap-4">
            <h3
              id="skill-category-modal-title"
              className="font-display text-2xl font-bold tracking-tight"
            >
              {category}
            </h3>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-full border border-zinc-300 p-1.5 text-zinc-500 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-400"
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
          <ul className="mt-5 space-y-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="border-b border-dashed border-zinc-200 pb-4 last:border-0 last:pb-0 dark:border-zinc-800"
              >
                <p className="text-sm font-semibold">{skill.name}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {skill.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

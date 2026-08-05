"use client";

import { useEffect, useRef } from "react";
import SkillBadge from "./skill-badge";
import type { Certificate } from "@/data/types";

type CertificateModalProps = {
  certificate: Certificate;
  onClose: () => void;
};

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
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
      aria-labelledby="certificate-modal-title"
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
                id="certificate-modal-title"
                className="font-display text-2xl font-bold tracking-tight"
              >
                {certificate.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-zinc-400">
                {certificate.issuer} · {certificate.year}
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
            {certificate.description}
          </p>

          {certificate.skills && certificate.skills.length > 0 && (
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Skills
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <li key={skill.name}>
                    <SkillBadge skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(certificate.credentialId || certificate.credentialUrl) && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
              {certificate.credentialId && (
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  Credential ID: {certificate.credentialId}
                </p>
              )}
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-fuchsia-600 dark:text-zinc-100 dark:hover:text-fuchsia-400"
                >
                  Verify credential ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import type { ReactElement } from "react";
import StyledModal from "./styled-modal";
import SkillBadge from "./skill-badge";
import type { Certificate } from "@/data/types";

type CertificateModalProps = {
  certificate: Certificate;
  trigger?: ReactElement;
};

export default function CertificateModal({
  certificate,
  trigger,
}: CertificateModalProps) {
  return (
    <StyledModal
      title={certificate.title}
      subtitle={`${certificate.issuer} · ${certificate.year}`}
      trigger={trigger}
    >
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
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-sky-600 dark:text-zinc-100 dark:hover:text-sky-400"
            >
              Verify credential ↗
            </a>
          )}
        </div>
      )}
    </StyledModal>
  );
}

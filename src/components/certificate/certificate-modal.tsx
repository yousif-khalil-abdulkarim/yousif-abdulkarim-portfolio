"use client";

import type { ReactElement } from "react";
import { StyledModal } from "@/components/utilities/styled-modal";
import { SkillBadge } from "@/components/utilities/skill/skill-badge";
import type { Certificate } from "@/data/types";

type CertificateModalProps = {
  certificate: Certificate;
  trigger?: ReactElement;
};

export function CertificateModal({
  certificate,
  trigger,
}: CertificateModalProps) {
  return (
    <StyledModal
      title={certificate.title}
      subtitle={`${certificate.issuer} · ${certificate.year}`}
      trigger={trigger}
    >
      <p className="mt-4 text-sm leading-7 text-body-foreground">
        {certificate.description}
      </p>

      {certificate.skills.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          {certificate.credentialId && (
            <p className="font-mono text-xs text-muted-foreground">
              Credential ID: {certificate.credentialId}
            </p>
          )}
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-strong-foreground hover:text-accent-strong"
            >
              Verify credential ↗
            </a>
          )}
        </div>
      )}
    </StyledModal>
  );
}

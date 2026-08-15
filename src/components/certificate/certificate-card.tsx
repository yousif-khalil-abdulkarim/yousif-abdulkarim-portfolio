"use client";

import { MoreButton } from "@/components/utilities/more-button";
import { CertificateModal } from "@/components/certificate/certificate-modal";
import type { Certificate } from "@/data/types";

type CertificateCardProps = {
  certificate: Certificate;
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { title, issuer, year, credentialUrl } = certificate;
  return (
    <li className="group flex flex-col rounded-xl border border-border bg-card/60 p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 dark:bg-card/30">
      <h3 className="font-display text-sm font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-0.5 text-xs text-muted-foreground">
        {issuer} · <span className="font-mono">{year}</span>
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-strong-foreground transition-colors hover:text-accent-strong"
          >
            Verify credential ↗
          </a>
        )}
        <CertificateModal certificate={certificate} trigger={<MoreButton />} />
      </div>
    </li>
  );
}

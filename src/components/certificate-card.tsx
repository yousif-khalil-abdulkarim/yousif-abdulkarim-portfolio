"use client";

import ViewMoreButton from "./view-more-button";
import type { Certificate } from "@/data/types";

type CertificateCardProps = {
  certificate: Certificate;
  onViewMore: () => void;
};

export default function CertificateCard({
  certificate,
  onViewMore,
}: CertificateCardProps) {
  const { title, issuer, year, credentialUrl } = certificate;
  return (
    <li className="group flex flex-col rounded-xl border border-zinc-200 bg-white/60 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700">
      <h3 className="font-display text-sm font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
        {issuer} · <span className="font-mono">{year}</span>
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 transition-colors hover:text-fuchsia-600 dark:text-zinc-100 dark:hover:text-fuchsia-400"
          >
            Verify credential ↗
          </a>
        )}
        <ViewMoreButton onClick={onViewMore} />
      </div>
    </li>
  );
}

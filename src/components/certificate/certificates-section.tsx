"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/utilities/section-heading";
import { CertificateCard } from "@/components/certificate/certificate-card";
import { MoreButton } from "@/components/utilities/more-button";
import type { PortfolioData } from "@/data/types";

type CertificatesSectionProps = {
  data: PortfolioData;
};

export function CertificatesSection({ data }: CertificatesSectionProps) {
  const { certificates, uiSettings } = data;
  const [expanded, setExpanded] = useState(false);
  const visibleCertificates = certificates.filter((cert) => cert.include);
  const hasMore =
    visibleCertificates.length > uiSettings.sectionLimits.certificates;
  const visible =
    hasMore && !expanded
      ? visibleCertificates.slice(0, uiSettings.sectionLimits.certificates)
      : visibleCertificates;

  if (visibleCertificates.length === 0) return null;

  return (
    <section
      id="certificates"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="05"
        title="Certificates"
        subtitle="Certifications and credentials that back my skills. Click View more to see the details."
      />
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((cert) => (
          <CertificateCard
            key={`${cert.title}-${cert.issuer}`}
            certificate={cert}
          />
        ))}
      </ul>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <MoreButton
            expanded={expanded}
            hiddenCount={
              visibleCertificates.length - uiSettings.sectionLimits.certificates
            }
            onClick={() => setExpanded((value) => !value)}
          />
        </div>
      )}
    </section>
  );
}

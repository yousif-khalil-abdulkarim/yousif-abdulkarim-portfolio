"use client";

import ProofBadge from "@/components/proof-badge";

type ProofBadgesProps = {
  items: string[];
  limit: number;
};

/**
 * Renders proof/evidence badges, showing at most `limit` badges with an
 * inline "Show more / Show less" control when the list exceeds the limit.
 */
export default function ProofBadges({ items, limit }: ProofBadgesProps) {
  const visible = items.slice(0, limit) 
  return (

      <ul className="mt-3 flex flex-wrap gap-2">
        {visible.map((item) => (
          <li key={item}>
            <ProofBadge label={item} />
          </li>
        ))}
      </ul>

  );
}

"use client";

import { useState } from "react";
import ProofBadge from "@/components/proof-badge";
import ShowMoreButton from "@/components/show-more-button";

type ProofBadgesProps = {
  items: string[];
  limit: number;
};

/**
 * Renders proof/evidence badges, showing at most `limit` badges with an
 * inline "Show more / Show less" control when the list exceeds the limit.
 */
export default function ProofBadges({ items, limit }: ProofBadgesProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > limit;
  const visible = hasMore && !expanded ? items.slice(0, limit) : items;

  return (
    <>
      <ul className="mt-3 flex flex-wrap gap-2">
        {visible.map((item) => (
          <li key={item}>
            <ProofBadge label={item} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <ShowMoreButton
          expanded={expanded}
          hiddenCount={items.length - limit}
          onClick={() => setExpanded((value) => !value)}
          className="mt-2"
        />
      )}
    </>
  );
}

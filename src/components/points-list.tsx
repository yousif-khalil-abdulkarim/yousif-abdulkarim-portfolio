"use client";

import { useState } from "react";
import ShowMoreButton from "@/components/show-more-button";

type PointsListProps = {
  items: string[];
  limit: number;
};

/**
 * Renders a bullet list of points, showing at most `limit` items with an
 * inline "Show more / Show less" control when the list exceeds the limit.
 */
export default function PointsList({ items, limit }: PointsListProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > limit;
  const visible = hasMore && !expanded ? items.slice(0, limit) : items;

  return (
    <>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-600 marker:text-sky-400 dark:text-zinc-400">
        {visible.map((point) => (
          <li key={point}>{point}</li>
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

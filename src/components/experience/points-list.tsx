type PointsListProps = {
  items: string[];
  limit: number;
};

/**
 * Renders a bullet list of points, showing at most `limit` items.
 */
export function PointsList({ items, limit }: PointsListProps) {
  const visible = items.slice(0, limit);
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-body-foreground marker:text-accent">
      {visible.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

type ProofBadgeProps = {
  label: string;
};

/**
 * A small accent badge for a single piece of proof / evidence
 * (e.g. a metric, achievement, or link) shown on cards and in modals.
 */
export function ProofBadge({ label }: ProofBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent-deep dark:bg-accent/10">
      <span
        aria-hidden
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-sky"
      />
      {label}
    </span>
  );
}

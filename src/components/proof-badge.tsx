type ProofBadgeProps = {
  label: string;
};

/**
 * A small accent badge for a single piece of proof / evidence
 * (e.g. a metric, achievement, or link) shown on cards and in modals.
 */
export default function ProofBadge({ label }: ProofBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-500/25 bg-sky-500/5 px-2.5 py-1 text-xs font-medium text-sky-700 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-300">
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
      {label}
    </span>
  );
}

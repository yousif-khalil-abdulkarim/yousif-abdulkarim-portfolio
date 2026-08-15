type AvailabilityBadgeProps = {
  /** Whether the person is open to new opportunities. Hides the badge when false. */
  available: boolean;
};

/** Green "Available for new opportunities" pill shown in the Hero. */
export function AvailabilityBadge({ available }: AvailabilityBadgeProps) {
  if (!available) return null;
  return (
    <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/70 px-4 py-1.5 text-sm font-medium text-emerald-700 backdrop-blur dark:border-emerald-500/40 dark:bg-zinc-900/60 dark:text-emerald-400">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
      Available for new opportunities
    </span>
  );
}

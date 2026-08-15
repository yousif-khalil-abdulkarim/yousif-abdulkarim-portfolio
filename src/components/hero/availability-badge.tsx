type AvailabilityBadgeProps = {
  /** Whether the person is open to new opportunities. Hides the badge when false. */
  available: boolean;
};

/** Green "Available for new opportunities" pill shown in the Hero. */
export function AvailabilityBadge({ available }: AvailabilityBadgeProps) {
  if (!available) return null;
  return (
    <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-success/40 bg-card/70 px-4 py-1.5 text-sm font-medium text-success-foreground backdrop-blur dark:bg-card/60">
      <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
      Available for new opportunities
    </span>
  );
}

type HeroBadgeProps = {
  /** Big stat value, e.g. "4+". */
  value: string;
  /** Small caption under the value, e.g. "Years of experience". */
  label: string;
};

/**
 * Floating stat badge overlapping the hero portrait (mirrors the OG image's
 * heroBadge card). Rendered with Tailwind classes; positioning is `absolute`,
 * so it expects an `relative` parent.
 */
export function HeroBadge({ value, label }: HeroBadgeProps) {
  return (
    <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-border bg-card/90 px-4 py-3 text-left shadow-xl backdrop-blur [animation-delay:2s] dark:border-border-strong">
      <p className="font-display text-lg font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

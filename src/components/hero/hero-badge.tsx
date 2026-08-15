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
    <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 text-left shadow-xl backdrop-blur [animation-delay:2s] dark:border-zinc-700 dark:bg-zinc-900/90">
      <p className="font-display text-lg font-bold">{value}</p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}

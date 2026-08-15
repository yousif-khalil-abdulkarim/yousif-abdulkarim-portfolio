import type { AboutStat } from "@/data/types";

type QuickFactProps = {
  stat: AboutStat;
};

/** A single label/value row inside the Quick facts card. */
export function QuickFact({ stat }: QuickFactProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-dashed border-zinc-200 pb-4 last:border-0 last:pb-0 dark:border-zinc-800">
      <dt className="text-sm text-zinc-600 dark:text-zinc-400">
        {stat.label}
      </dt>
      <dd className="font-display text-2xl font-bold text-gradient animate-gradient-x">
        {stat.value}
      </dd>
    </div>
  );
}

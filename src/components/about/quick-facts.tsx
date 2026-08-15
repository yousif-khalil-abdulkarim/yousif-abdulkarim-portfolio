import type { AboutStat } from "@/data/types";
import { QuickFact } from "@/components/about/quick-fact";

type QuickFactsProps = {
  /** Stats to display (already filtered). */
  stats: AboutStat[];
  /** Location shown at the bottom of the card. */
  location: string;
};

/** The "Quick facts" card: gradient border, stats list, and location. */
export function QuickFacts({ stats, location }: QuickFactsProps) {
  return (
    <div className="rounded-2xl bg-linear-to-br from-blue-500 via-sky-500 to-amber-400 p-px shadow-lg shadow-sky-500/10">
      <div className="rounded-2xl bg-white p-6 dark:bg-zinc-950">
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Quick facts
        </h3>
        <dl className="mt-5 space-y-5">
          {stats.map((stat) => (
            <QuickFact key={stat.label} stat={stat} />
          ))}
        </dl>
        <div className="mt-5 border-t border-zinc-200 pt-5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p>
            <span className="mr-1">📍</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
}

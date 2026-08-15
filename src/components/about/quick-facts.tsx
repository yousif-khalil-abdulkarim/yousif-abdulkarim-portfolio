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
    <div className="rounded-2xl bg-linear-to-br from-secondary via-accent to-tertiary p-px shadow-lg shadow-accent/10">
      <div className="rounded-2xl bg-card p-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Quick facts
        </h3>
        <dl className="mt-5 space-y-5">
          {stats.map((stat) => (
            <QuickFact key={stat.label} stat={stat} />
          ))}
        </dl>
        <div className="mt-5 border-t border-border pt-5 text-sm text-body-foreground">
          <p>
            <span className="mr-1">📍</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
}

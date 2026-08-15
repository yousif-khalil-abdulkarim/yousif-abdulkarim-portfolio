type LanguageCardProps = {
  name: string;
  /** Proficiency level, e.g. "Native", "Fluent", "Intermediate". */
  level: string;
};

/** A card showing a spoken language and its proficiency level. */
export function LanguageCard({ name, level }: LanguageCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 dark:bg-card/30">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-medium text-title-foreground">
          {name}
        </h4>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {level}
        </span>
      </div>
    </div>
  );
}

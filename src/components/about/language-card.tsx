type LanguageCardProps = {
  name: string;
  /** Proficiency level, e.g. "Native", "Fluent", "Intermediate". */
  level: string;
};

/** A card showing a spoken language and its proficiency level. */
export function LanguageCard({ name, level }: LanguageCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/60 p-5 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {name}
        </h4>
        <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {level}
        </span>
      </div>
    </div>
  );
}

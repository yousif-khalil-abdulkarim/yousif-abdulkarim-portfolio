import type { PortfolioData } from "@/data/types";

type LanguagesSectionProps = {
  data: PortfolioData;
};

export function LanguagesSection({ data }: LanguagesSectionProps) {
  const { languages } = data;
  const visibleLanguages = languages.filter((language) => !language.hide);
  if (visibleLanguages.length === 0) return null;

  return (
    <div className="pt-2">
      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Languages
      </h3>
      <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(13.75rem,1fr))]">
        {visibleLanguages.map((language) => (
          <div
            key={language.name}
            className="rounded-2xl border border-zinc-200 bg-white/60 p-5 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {language.name}
              </h4>
              <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {language.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { LanguageCard } from "@/components/about/language-card";
import type { Language } from "@/data/types";

type LanguagesSectionProps = {
  /** Spoken languages to display. */
  languages: Language[];
};

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  const visibleLanguages = languages.filter((language) => !language.hide);
  if (visibleLanguages.length === 0) return null;

  return (
    <div className="pt-2">
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Languages
      </h3>
      <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(13.75rem,1fr))]">
        {visibleLanguages.map((language) => (
          <LanguageCard
            key={language.name}
            name={language.name}
            level={language.level}
          />
        ))}
      </div>
    </div>
  );
}

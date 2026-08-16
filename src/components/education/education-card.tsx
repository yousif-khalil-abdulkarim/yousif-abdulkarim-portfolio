import type { Education } from "@/data/types";

type EducationCardProps = {
  education: Education;
};

/** A single education entry shown in the Education timeline. */
export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="group relative">
      <span
        aria-hidden
        className="absolute left-[-2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-card"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-semibold">
          {education.degree}{" "}
          <span className="text-muted-foreground">· {education.major}</span>
        </h3>
        <span className="font-mono text-xs text-faint-foreground">
          {education.period}
        </span>
      </div>
      <p className="mt-1 text-sm font-semibold text-accent-strong">
        {education.school}
      </p>
      <p className="mt-3 text-sm leading-7 text-body-foreground">
        {education.description}
      </p>
    </div>
  );
}

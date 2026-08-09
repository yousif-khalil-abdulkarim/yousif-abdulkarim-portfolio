import { Fragment } from "react";
import SectionHeading from "@/components/section-heading";
import LanguagesSection from "@/components/languages-section";
import SkillsSection from "@/components/skills-section";
import type { PortfolioData } from "@/data/types";

type AboutProps = {
  data: PortfolioData;
};

export default function About({ data }: AboutProps) {
  const { profile, aboutStats } = data;
  const visibleStats = aboutStats.filter((stat) => !stat.hide);
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="01"
        title="About me"
        subtitle={profile.aboutSubtitle}
      />
      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <div
          className={`space-y-4 text-zinc-600 dark:text-zinc-400 ${
            visibleStats.length > 0 ? "md:col-span-3" : "md:col-span-5"
          }`}
        >
          {profile.bio.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className={pIndex === 0 ? "text-lg leading-8" : "leading-8"}
            >
              {paragraph.map((run, rIndex) =>
                run.emphasis ? (
                  <span
                    key={rIndex}
                    className="font-medium text-zinc-900 dark:text-zinc-100"
                  >
                    {run.text}
                  </span>
                ) : (
                  <Fragment key={rIndex}>{run.text}</Fragment>
                )
              )}
            </p>
          ))}
        </div>
        {visibleStats.length > 0 && (
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-linear-to-br from-blue-500 via-sky-500 to-amber-400 p-px shadow-lg shadow-sky-500/10">
              <div className="rounded-2xl bg-white p-6 dark:bg-zinc-950">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Quick facts
                </h3>
                <dl className="mt-5 space-y-5">
                  {visibleStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline justify-between border-b border-dashed border-zinc-200 pb-4 last:border-0 last:pb-0 dark:border-zinc-800"
                    >
                      <dt className="text-sm text-zinc-600 dark:text-zinc-400">
                        {stat.label}
                      </dt>
                      <dd className="font-display text-2xl font-bold text-gradient animate-gradient-x">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 border-t border-zinc-200 pt-5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  <p>
                    <span className="mr-1">📍</span> {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10">
        <LanguagesSection data={data} />
      </div>
      <div className="mt-10">
        <SkillsSection data={data} />
      </div>
    </section>
  );
}

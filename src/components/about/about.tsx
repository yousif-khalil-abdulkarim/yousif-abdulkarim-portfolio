import { SectionHeading } from "@/components/utilities/section-heading";
import { LanguagesSection } from "@/components/about/languages-section";
import { SkillsSection } from "@/components/about/skills-section";
import { AboutBio } from "@/components/about/about-bio";
import { QuickFacts } from "@/components/about/quick-facts";
import type { PortfolioData } from "@/data/types";

type AboutProps = {
  data: PortfolioData;
};

export function About({ data }: AboutProps) {
  const { profile, quickFacts, uiSettings } = data;
  const visibleStats = quickFacts.filter((stat) => stat.include);
  const showQuickFacts = uiSettings.showQuickFacts && visibleStats.length > 0;
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="01" title="About me" />
      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <div
          className={`${showQuickFacts ? "md:col-span-3" : "md:col-span-5"}`}
        >
          <AboutBio paragraphs={profile.bio} />
        </div>
        {showQuickFacts && (
          <div className="md:col-span-2">
            <QuickFacts stats={visibleStats} location={profile.location} />
          </div>
        )}
      </div>

      <div className="mt-10">
        <LanguagesSection languages={data.languages} />
      </div>
      <div className="mt-10">
        <SkillsSection
          skills={data.skills}
          limit={data.uiSettings.sectionLimits.skills}
        />
      </div>
    </section>
  );
}

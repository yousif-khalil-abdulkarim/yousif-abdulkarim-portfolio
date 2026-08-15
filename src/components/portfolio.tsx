import type { ComponentType } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/project";
import { CertificatesSection } from "@/components/certificate";
import { TechnicalWritings } from "@/components/technical-writings";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import type { PortfolioData, Section } from "@/data/types";

const sectionComponents: Record<
  Section,
  ComponentType<{ data: PortfolioData }>
> = {
  experience: Experience,
  projects: Projects,
  certificates: CertificatesSection,
  writings: TechnicalWritings,
};

type PortfolioProps = {
  data: PortfolioData;
  /** Optional link to a downloadable resume PDF, forwarded to the Hero. */
  resumeHref?: string;
};

export function Portfolio({ data, resumeHref }: PortfolioProps) {
  return (
    <>
      <Navbar data={data} />
      <main className="flex flex-1 flex-col">
        <Hero data={data} resumeHref={resumeHref} />
        <About data={data} />
        {data.sectionOrder.map((section) => {
          const SectionComponent = sectionComponents[section];
          return <SectionComponent key={section} data={data} />;
        })}
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}

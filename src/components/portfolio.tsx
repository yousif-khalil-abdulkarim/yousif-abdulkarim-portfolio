import type { ComponentType } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import CertificatesSection from "./certificates-section";
import Contact from "./contact";
import Footer from "./footer";
import type { PortfolioData, Section } from "@/data/types";

const sectionComponents: Record<
  Section,
  ComponentType<{ data: PortfolioData }>
> = {
  experience: Experience,
  projects: Projects,
  certificates: CertificatesSection,
};

type PortfolioProps = {
  data: PortfolioData;
};

export default function Portfolio({ data }: PortfolioProps) {
  return (
    <>
      <Navbar data={data} />
      <main className="flex flex-1 flex-col">
        <Hero data={data} />
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

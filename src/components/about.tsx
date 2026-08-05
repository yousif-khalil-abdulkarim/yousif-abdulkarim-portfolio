import SectionHeading from "./section-heading";
import SkillsSection from "./skills-section";
import { portfolio } from "@/data/projects";

const { profile, aboutStats } = portfolio;
const visibleStats = aboutStats.filter((stat) => !stat.hide);

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="01"
        title="About me"
        subtitle="Fullstack software engineer focused on building scalable, sustainable systems."
      />
      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <div
          className={`space-y-4 text-zinc-600 dark:text-zinc-400 ${
            visibleStats.length > 0 ? "md:col-span-3" : "md:col-span-5"
          }`}
        >
          <p className="text-lg leading-8">
            I&apos;m a fullstack software engineer with 4 years of professional
            experience, specializing in{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Node.js, TypeScript, and React
            </span>
            . I focus on building modular monoliths and scalable web
            applications — passionate about{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              domain decoupling
            </span>{" "}
            and extendable, adaptable architecture.
          </p>
          <p className="leading-8">
            From leading engineering at eridu-tech and FillerDepot to shipping
            e-commerce platforms and SDKs, I enjoy owning problems end to end
            — architecture, implementation, testing, and documentation.
          </p>
        </div>
        {visibleStats.length > 0 && (
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 p-px shadow-lg shadow-fuchsia-500/10">
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
        <SkillsSection />
      </div>
    </section>
  );
}

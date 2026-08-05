import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Marquee from "@/components/marquee";
import type { PortfolioData } from "@/data/types";

type HeroProps = {
  data: PortfolioData;
  /** Optional link to a downloadable resume PDF. Renders a "Resume" button when set. */
  resumeHref?: string;
};

export default function Hero({ data, resumeHref }: HeroProps) {
  const { profile, skills, uiSettings, experience } = data;
  const showPortfolioImage = uiSettings.showPortfolioImage;
  const image = profile.image;
  // "View my work" scrolls to the Experience timeline when it has entries,
  // otherwise it falls back to the Projects section.
  const hasExperience = experience.some((job) => !job.hide);
  const workHref = hasExperience ? "#experience" : "#projects";
  // Portrait renders only when both the UI toggle is on AND an image is provided.
  const showPortrait = showPortfolioImage && Boolean(image);
  // Derived from the skills so the marquee stays in sync with them.
  const marqueeItems = Object.values(skills)
    .flat()
    .map((skill) => skill.name);
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl animate-blob dark:bg-blue-500/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-48 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-blob [animation-delay:3s] dark:bg-sky-500/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl animate-blob [animation-delay:6s] dark:bg-amber-400/10"
      />

      <div
        className={`relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 ${
          showPortrait ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-1"
        }`}
      >
        {/* Left: text */}
        <div
          className={`text-center ${showPortrait ? "lg:text-left" : ""}`}
        >
          <span
            className={`animate-fade-up inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1.5 text-sm font-medium backdrop-blur dark:bg-zinc-900/60 ${
              profile.availableForWork
                ? "border-emerald-500/40 text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-400"
                : "border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                profile.availableForWork
                  ? "bg-emerald-500 animate-pulse-dot"
                  : "bg-zinc-400"
              }`}
            />
            {profile.availableForWork
              ? "Available for new opportunities"
              : "Not currently available"}
          </span>

          <p className="animate-fade-up [animation-delay:100ms] mt-7 font-mono text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400">
            {profile.role}
          </p>
          <h1 className="animate-fade-up [animation-delay:150ms] mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.firstName}{" "}
            <span className="text-gradient animate-gradient-x">
              {profile.lastName}
            </span>
          </h1>
          <p
            className={`animate-fade-up [animation-delay:200ms] mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 ${
              showPortrait ? "lg:mx-0" : ""
            }`}
          >
            {profile.tagline} I specialize in{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              modular monoliths
            </span>{" "}
            and{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              domain-decoupled architecture
            </span>
            .
          </p>

          <div
            className={`animate-fade-up [animation-delay:300ms] mt-9 flex flex-wrap items-center justify-center gap-4 ${
              showPortrait ? "lg:justify-start" : ""
            }`}
          >
            <a
              href={workHref}
              className="group inline-flex select-none items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-zinc-50 dark:text-zinc-950 dark:shadow-black/20"
            >
              View my work{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex select-none items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Get in touch
            </a>
            {resumeHref && (
              <a
                href={resumeHref}
                download
                className="inline-flex select-none items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                Resume
              </a>
            )}
          </div>

          <div
            className={`animate-fade-up [animation-delay:400ms] mt-10 flex items-center justify-center gap-3 text-zinc-500 dark:text-zinc-400 ${
              showPortrait ? "lg:justify-start" : ""
            }`}
          >
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            )}
            {profile.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="transition-all hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
            )}
            {profile.youtube && (
              <a
                href={profile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-all hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        {/* Right: portrait image */}
        {showPortrait && image && (
          <div className="animate-fade-up [animation-delay:250ms] relative mx-auto w-64 sm:w-80">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-4xl bg-linear-to-br from-blue-500 via-sky-500 to-amber-400 opacity-70 blur-2xl animate-float"
            />
            <div className="relative rounded-4xl bg-linear-to-br from-blue-500 via-sky-500 to-amber-400 p-1.5 shadow-2xl shadow-sky-500/20">
              <Image
                src={image}
                alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                width={320}
                height={320}
                priority
                className="aspect-square w-full rounded-[1.7rem] object-cover"
              />
            </div>
            {profile.heroBadge && (
              <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 text-left shadow-xl backdrop-blur [animation-delay:2s] dark:border-zinc-700 dark:bg-zinc-900/90">
                <p className="font-display text-lg font-bold">
                  {profile.heroBadge.value}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {profile.heroBadge.label}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {uiSettings.showMarquee && <Marquee items={marqueeItems} />}
    </section>
  );
}

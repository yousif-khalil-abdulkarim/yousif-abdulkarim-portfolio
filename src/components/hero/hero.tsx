import { Fragment } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";
import { Marquee } from "@/components/hero/marquee";
import { AvailabilityBadge } from "@/components/hero/availability-badge";
import { HeroBadge } from "@/components/hero/hero-badge";
import { HeroTitle } from "@/components/hero/hero-title";
import { OutlineButton } from "@/components/hero/outline-button";
import { SocialLink } from "@/components/hero/social-link";
import { ViewWorkButton } from "@/components/hero/view-work-button";
import type { PortfolioData } from "@/data/types";

type HeroProps = {
  data: PortfolioData;
  /** Optional link to a downloadable resume PDF. Renders a "Resume" button when set. */
  resumeHref?: string;
};

export function Hero({ data, resumeHref }: HeroProps) {
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
        <div className={`text-center ${showPortrait ? "lg:text-left" : ""}`}>
          <AvailabilityBadge available={profile.availableForWork} />

          <HeroTitle
            role={profile.role}
            firstName={profile.firstName}
            lastName={profile.lastName}
          />
          <p
            className={`animate-fade-up [animation-delay:200ms] mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 ${
              showPortrait ? "lg:mx-0" : ""
            }`}
          >
            {profile.tagline.map((tagLineItem, index) =>
              tagLineItem.emphasis ? (
                <span
                  key={index}
                  className="font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {tagLineItem.text}
                </span>
              ) : (
                <Fragment key={index}>{tagLineItem.text}</Fragment>
              ),
            )}
          </p>

          <div
            className={`animate-fade-up [animation-delay:300ms] mt-9 flex flex-wrap items-center justify-center gap-4 ${
              showPortrait ? "lg:justify-start" : ""
            }`}
          >
            <ViewWorkButton href={workHref} />
            <OutlineButton href="#contact">Get in touch</OutlineButton>
            {resumeHref && uiSettings.showResume && (
              <OutlineButton href={resumeHref} download>
                Resume
              </OutlineButton>
            )}
          </div>

          <div
            className={`animate-fade-up [animation-delay:400ms] mt-10 flex items-center justify-center gap-3 text-zinc-500 dark:text-zinc-400 ${
              showPortrait ? "lg:justify-start" : ""
            }`}
          >
            {profile.githubUrl && (
              <SocialLink href={profile.githubUrl} label="GitHub">
                <FaGithub className="h-6 w-6" />
              </SocialLink>
            )}
            {profile.linkedin && (
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <FaLinkedin className="h-6 w-6" />
              </SocialLink>
            )}
            {profile.twitter && (
              <SocialLink href={profile.twitter} label="X (Twitter)">
                <FaXTwitter className="h-5 w-5" />
              </SocialLink>
            )}
            {profile.youtube && (
              <SocialLink href={profile.youtube} label="YouTube">
                <FaYoutube className="h-6 w-6" />
              </SocialLink>
            )}
            {profile.blog && (
              <SocialLink href={profile.blog} label="Blog">
                <FaBlog className="h-5 w-5" />
              </SocialLink>
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
              <HeroBadge
                value={profile.heroBadge.value}
                label={profile.heroBadge.label}
              />
            )}
          </div>
        )}
      </div>

      {uiSettings.showMarquee && <Marquee items={marqueeItems} />}
    </section>
  );
}

import Image from "next/image";
import { profile, marqueeItems, uiSettings } from "@/data/projects";

export default function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl animate-blob dark:bg-violet-500/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-48 -right-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob [animation-delay:3s] dark:bg-fuchsia-500/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl animate-blob [animation-delay:6s] dark:bg-amber-400/10"
      />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: text */}
        <div className="text-center lg:text-left">
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

          <p className="animate-fade-up [animation-delay:100ms] mt-7 font-mono text-sm font-medium uppercase tracking-widest text-fuchsia-500 dark:text-fuchsia-400">
            {profile.role}
          </p>
          <h1 className="animate-fade-up [animation-delay:150ms] mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {firstName}{" "}
            <span className="text-gradient animate-gradient-x">
              {rest.join(" ")}
            </span>
          </h1>
          <p className="animate-fade-up [animation-delay:200ms] mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 lg:mx-0">
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

          <div className="animate-fade-up [animation-delay:300ms] mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-zinc-50 dark:text-zinc-950 dark:shadow-black/20"
            >
              View my work{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Get in touch
            </a>
          </div>

          <div className="animate-fade-up [animation-delay:400ms] mt-10 flex items-center justify-center gap-3 text-zinc-500 dark:text-zinc-400 lg:justify-start">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
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
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.36-2 2.76V21H10V9z" />
                </svg>
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
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
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
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Right: portrait image */}
        <div className="animate-fade-up [animation-delay:250ms] relative mx-auto w-64 sm:w-80">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 opacity-70 blur-2xl animate-float"
          />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 p-1.5 shadow-2xl shadow-fuchsia-500/20">
            <Image
              src="/avatar.svg"
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={320}
              priority
              className="aspect-square w-full rounded-[1.7rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 text-left shadow-xl backdrop-blur [animation-delay:2s] dark:border-zinc-700 dark:bg-zinc-900/90">
            <p className="font-display text-lg font-bold">4+ years</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              full-stack experience
            </p>
          </div>
        </div>
      </div>

      {uiSettings.showMarquee && (
        <div className="relative border-y border-zinc-200 bg-white/60 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-8 pr-8">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
                >
                  {item} <span className="text-fuchsia-500">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

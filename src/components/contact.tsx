import SectionHeading from "./section-heading";
import { portfolio } from "@/data/projects";

const { profile } = portfolio;

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="05"
        title="Get in touch"
        subtitle="Have a project in mind, an opportunity to discuss, or just want to say hi? Reach out through any channel below."
      />
      <p className="mt-12 max-w-xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
        Got an idea? Let&apos;s make something{" "}
        <span className="text-gradient animate-gradient-x">great</span>{" "}
        together.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-fuchsia-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-semibold">GitHub</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                Code &amp; open source
              </span>
            </span>
          </a>
        )}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-fuchsia-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.36-2 2.76V21H10V9z" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-semibold">LinkedIn</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                Connect professionally
              </span>
            </span>
          </a>
        )}
        {profile.twitter && (
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-fuchsia-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-semibold">X (Twitter)</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                Follow along
              </span>
            </span>
          </a>
        )}
        {profile.youtube && (
          <a
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-fuchsia-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12z" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-semibold">YouTube</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                Watch my content
              </span>
            </span>
          </a>
        )}
        <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            📍
          </span>
          <span>
            <span className="block text-sm font-semibold">
              {profile.location}
            </span>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block text-xs text-zinc-500 transition-colors hover:text-fuchsia-500 dark:text-zinc-400"
            >
              {profile.phone}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

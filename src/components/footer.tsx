import { visibleNavLinks } from "@/lib/nav-links";
import type { PortfolioData } from "@/data/types";

type FooterProps = {
  data: PortfolioData;
};

export default function Footer({ data }: FooterProps) {
  const { profile } = data;
  const navLinks = visibleNavLinks(data);
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Designed &amp; built with <span className="text-sky-500">♥</span>{" "}
          by {profile.firstName} {profile.lastName}. © {new Date().getFullYear()}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-zinc-200 px-6 py-6 sm:flex-row dark:border-zinc-800">
        <div className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              LinkedIn
            </a>
          )}
          {profile.twitter && (
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              X
            </a>
          )}
          {profile.youtube && (
            <a
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              YouTube
            </a>
          )}
        </div>
        <a
          href="#home"
          className="inline-flex items-center gap-1 font-medium text-zinc-700 transition-colors hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

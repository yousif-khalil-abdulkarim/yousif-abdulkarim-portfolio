import { visibleNavLinks } from "@/components/navbar/nav-utils";
import type { PortfolioData } from "@/data/types";

type FooterCreditProps = {
  data: PortfolioData;
};

/** The footer's credit line ("Designed & built with ♥ …") plus the nav links. */
export function FooterCredit({ data }: FooterCreditProps) {
  const { profile } = data;
  const navLinks = visibleNavLinks(data);
  return (
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
  );
}

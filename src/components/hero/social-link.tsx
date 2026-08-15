import type { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  /** Accessible name for the icon link, e.g. "GitHub". */
  label: string;
  /** The brand icon, e.g. `<FaGithub className="h-6 w-6" />`. */
  children: ReactNode;
};

/** An external social profile link rendered as a hoverable icon button. */
export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-all hover:-translate-y-0.5 hover:text-zinc-950 dark:hover:text-zinc-50"
    >
      {children}
    </a>
  );
}

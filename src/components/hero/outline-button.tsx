import type { ReactNode } from "react";

type OutlineButtonProps = {
  href: string;
  /** Adds the `download` attribute (e.g. for a resume PDF). */
  download?: boolean;
  children: ReactNode;
};

/**
 * Secondary outline pill button (anchor) — used for "Get in touch" and the
 * downloadable "Resume" button. Contrasts with the primary `ViewWorkButton`.
 */
export function OutlineButton({
  href,
  download,
  children,
}: OutlineButtonProps) {
  return (
    <a
      href={href}
      download={download}
      className="inline-flex select-none items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
    >
      {children}
    </a>
  );
}

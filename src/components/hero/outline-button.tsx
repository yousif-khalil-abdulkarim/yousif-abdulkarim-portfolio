import type { ReactNode } from "react";

type OutlineButtonProps = {
  href: string;
  /** Opens the link in a new browser tab (e.g. the resume PDF). */
  newTab?: boolean;
  children: ReactNode;
};

/**
 * Secondary outline pill button (anchor) — used for "Get in touch" and the
 * "Resume" button (which opens the resume PDF in a new tab via the browser's
 * built-in viewer). Contrasts with the primary `ViewWorkButton`.
 */
export function OutlineButton({ href, newTab, children }: OutlineButtonProps) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="inline-flex select-none items-center gap-2 rounded-full border border-border-strong bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-card"
    >
      {children}
    </a>
  );
}

type ViewWorkButtonProps = {
  /** Anchor to scroll to, e.g. "#experience". */
  href: string;
};

/**
 * Primary dark pill CTA ("View my work") with an arrow that slides on hover.
 * Rendered as an anchor to an in-page section.
 */
export function ViewWorkButton({ href }: ViewWorkButtonProps) {
  return (
    <a
      href={href}
      className="group inline-flex select-none items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-zinc-50 dark:text-zinc-950 dark:shadow-black/20"
    >
      View my work{" "}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

import type { ReactNode } from "react";

type ContactCardProps = {
  /** External URL. When provided the card renders as a link, otherwise as a div. */
  href?: string;
  /** The icon (or emoji) shown in the leading badge. */
  icon: ReactNode;
  /** The primary label. */
  label: string;
  /** Secondary text or element below the label. */
  subtitle: ReactNode;
};

export function ContactCard({ href, icon, label, subtitle }: ContactCardProps) {
  const cardClasses =
    "group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-950";

  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-sky-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-200">
        {icon}
      </span>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block text-xs text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {content}
      </a>
    );
  }
  return <div className={cardClasses}>{content}</div>;
}

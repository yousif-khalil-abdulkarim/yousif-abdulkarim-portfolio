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
    "group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10";

  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </span>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block text-xs text-muted-foreground">
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

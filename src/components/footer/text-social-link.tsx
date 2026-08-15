type TextSocialLinkProps = {
  href: string;
  /** Display label, e.g. "GitHub". */
  label: string;
};

/** A text-only external social link (used in the footer). */
export function TextSocialLink({ href, label }: TextSocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-foreground"
    >
      {label}
    </a>
  );
}

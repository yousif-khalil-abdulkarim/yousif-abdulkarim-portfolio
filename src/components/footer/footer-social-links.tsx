import { TextSocialLink } from "@/components/footer/text-social-link";
import type { PortfolioData } from "@/data/types";

type FooterSocialLinksProps = {
  data: PortfolioData;
};

/** The footer's social text links (GitHub, LinkedIn, X, YouTube). */
export function FooterSocialLinks({ data }: FooterSocialLinksProps) {
  const { profile } = data;
  const socials = [
    { href: profile.githubUrl, label: "GitHub" },
    { href: profile.linkedin, label: "LinkedIn" },
    { href: profile.twitter, label: "X" },
    { href: profile.youtube, label: "YouTube" },
  ].filter((s): s is { href: string; label: string } => Boolean(s.href));

  return (
    <div className="flex items-center gap-5 text-sm text-muted-foreground">
      {socials.map((s) => (
        <TextSocialLink key={s.label} href={s.href} label={s.label} />
      ))}
    </div>
  );
}

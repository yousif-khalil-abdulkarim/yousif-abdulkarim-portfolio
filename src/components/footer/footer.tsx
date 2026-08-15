import { BackToTop } from "@/components/footer/back-to-top";
import { FooterCredit } from "@/components/footer/footer-credit";
import { FooterSocialLinks } from "@/components/footer/footer-social-links";
import type { PortfolioData } from "@/data/types";

type FooterProps = {
  data: PortfolioData;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <FooterCredit data={data} />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-zinc-200 px-6 py-6 sm:flex-row dark:border-zinc-800">
        <FooterSocialLinks data={data} />
        <BackToTop />
      </div>
    </footer>
  );
}

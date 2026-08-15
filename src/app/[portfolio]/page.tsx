import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/portfolio";
import { allPortfolios } from "@/data/portfolios";
import { portfolioMetadata } from "@/lib/metadata";
import { resumeFileName } from "@/lib/pdf-resume";

type PortfolioPageProps = {
  params: Promise<{ portfolio: string }>;
};

export function generateStaticParams() {
  return Object.keys(allPortfolios).map((portfolio) => ({ portfolio }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { portfolio } = await params;
  return portfolioMetadata(allPortfolios[portfolio]);
}

export async function PortfolioPage({
  params,
}: PortfolioPageProps) {
  const { portfolio } = await params;
  const data = allPortfolios[portfolio as keyof typeof allPortfolios];
  if (!data) notFound();

  return (
    <Portfolio
      data={data}
      resumeHref={`/resumes/${resumeFileName(data, portfolio)}`}
    />
  );
}

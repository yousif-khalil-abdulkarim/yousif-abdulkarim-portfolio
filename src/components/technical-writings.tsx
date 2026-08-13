import SectionHeading from "@/components/section-heading";
import type { PortfolioData } from "@/data/types";

type TechnicalWritingsProps = {
  data: PortfolioData;
};

export default function TechnicalWritings({ data }: TechnicalWritingsProps) {
  const visiblePosts = data.technicalWritings.filter((post) => !post.hide);

  if (visiblePosts.length === 0) return null;

  return (
    <section
      id="writings"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="05"
        title="Technical Writings"
        subtitle="Write-ups on the problems I solve and the tools I build."
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {visiblePosts.map((post) => (
          <li key={post.title}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400">
                Read post
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

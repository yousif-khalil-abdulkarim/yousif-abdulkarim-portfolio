"use client";

import { Collapsible } from "@ark-ui/react/collapsible";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SectionHeading } from "@/components/section-heading";
import { MoreButton } from "@/components/more-button";
import { useCollapsibleState } from "@/hooks/use-collapsible-state";
import type { PortfolioData, TechnicalWriting } from "@/data/types";

type TechnicalWritingsProps = {
  data: PortfolioData;
};

export function TechnicalWritings({ data }: TechnicalWritingsProps) {
  const { technicalWritings, uiSettings } = data;
  const [extraRef] = useAutoAnimate();
  const { open, handleOpenChange } = useCollapsibleState();
  const visiblePosts = technicalWritings.filter((post) => !post.hide);
  const limit = uiSettings.sectionLimits.technicalWritings;
  const shownPosts = visiblePosts.slice(0, limit);
  const extraPosts = visiblePosts.slice(limit);

  if (visiblePosts.length === 0) return null;

  const renderPost = (post: TechnicalWriting) => (
    <li key={post.title}>
      <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400"
        >
          Read post
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      </article>
    </li>
  );

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
      <Collapsible.Root open={open} onOpenChange={handleOpenChange}>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {shownPosts.map(renderPost)}
          {extraPosts.length > 0 && (
            <li className="col-span-full">
              <ul ref={extraRef} className="grid gap-6 md:grid-cols-2">
                {open && extraPosts.map(renderPost)}
              </ul>
            </li>
          )}
        </ul>
        {extraPosts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Collapsible.Trigger asChild>
              <MoreButton hiddenCount={extraPosts.length} />
            </Collapsible.Trigger>
          </div>
        )}
      </Collapsible.Root>
    </section>
  );
}

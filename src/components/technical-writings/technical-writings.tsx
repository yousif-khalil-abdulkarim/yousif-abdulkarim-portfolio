"use client";

import { Collapsible } from "@ark-ui/react/collapsible";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SectionHeading } from "@/components/utilities/section-heading";
import { MoreButton } from "@/components/utilities/more-button";
import { PostCard } from "@/components/technical-writings/post-card";
import { useCollapsibleState } from "@/hooks/use-collapsible-state";
import type { PortfolioData } from "@/data/types";

type TechnicalWritingsProps = {
  data: PortfolioData;
};

export function TechnicalWritings({ data }: TechnicalWritingsProps) {
  const { technicalWritings, uiSettings } = data;
  const [extraRef] = useAutoAnimate();
  const { open, handleOpenChange } = useCollapsibleState();
  const visiblePosts = technicalWritings.filter((post) => post.include);
  const limit = uiSettings.sectionLimits.technicalWritings;
  const shownPosts = visiblePosts.slice(0, limit);
  const extraPosts = visiblePosts.slice(limit);

  if (visiblePosts.length === 0) return null;

  return (
    <section
      id="writings"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="06"
        title="Technical Writings"
        subtitle="Write-ups on the problems I solve and the tools I build."
      />
      <Collapsible.Root open={open} onOpenChange={handleOpenChange}>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {shownPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
          {extraPosts.length > 0 && (
            <li className="col-span-full">
              <ul ref={extraRef} className="grid gap-6 md:grid-cols-2">
                {open &&
                  extraPosts.map((post) => (
                    <PostCard key={post.title} post={post} />
                  ))}
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

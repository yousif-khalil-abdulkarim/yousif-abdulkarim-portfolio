import type { TechnicalWriting } from "@/data/types";

type PostCardProps = {
  post: TechnicalWriting;
};

/** A single technical writing card shown in the writings grid. */
export function PostCard({ post }: PostCardProps) {
  return (
    <li>
      <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
        <h3 className="font-display text-lg font-semibold tracking-tight text-strong-foreground">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-7 text-body-foreground">
          {post.description}
        </p>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong transition-colors group-hover:text-accent"
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
}

import type { TechnicalWriting } from "@/data/types";

type PostCardProps = {
  post: TechnicalWriting;
};

/** A single technical writing card shown in the writings grid. */
export function PostCard({ post }: PostCardProps) {
  return (
    <li>
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
}

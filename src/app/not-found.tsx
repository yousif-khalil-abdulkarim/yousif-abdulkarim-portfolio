import Link from "next/link";

export function NotFound() {
  return (
    <section className="relative flex min-h-[35rem] flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl animate-blob dark:bg-blue-500/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-48 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-blob [animation-delay:3s] dark:bg-sky-500/15"
      />

      <div className="relative text-center">
        <p className="font-mono text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          This page could not be{" "}
          <span className="text-gradient animate-gradient-x">found</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for does not exist or may have moved.
          Head back to the portfolio to keep exploring.
        </p>
        <Link
          href="/main"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-zinc-50 dark:text-zinc-950 dark:shadow-black/20"
        >
          Back to portfolio{" "}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[35rem] flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-secondary/30 blur-3xl animate-blob dark:bg-secondary/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-48 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:3s] dark:bg-accent/15"
      />

      <div className="relative text-center">
        <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          This page could not be{" "}
          <span className="text-gradient animate-gradient-x">found</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-body-foreground">
          The page you&apos;re looking for does not exist or may have moved.
          Head back to the portfolio to keep exploring.
        </p>
        <Link
          href="/main"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:shadow-black/20"
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

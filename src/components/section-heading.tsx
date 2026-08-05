type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  index,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-sky-500 dark:text-sky-400">
          {index}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-700" />
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

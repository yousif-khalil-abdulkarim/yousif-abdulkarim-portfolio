type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  index,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-accent">
          {index}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-linear-to-r from-border-strong to-transparent" />
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-body-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

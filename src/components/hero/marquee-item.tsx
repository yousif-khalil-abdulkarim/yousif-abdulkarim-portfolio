type MarqueeItemProps = {
  item: string;
};

/** A single label + sparkle in the scrolling skills marquee. */
export function MarqueeItem({ item }: MarqueeItemProps) {
  return (
    <span className="flex items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-muted-foreground">
      {item} <span className="text-accent">✦</span>
    </span>
  );
}

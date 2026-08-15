import { MarqueeItem } from "@/components/hero/marquee-item";

type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  if (items.length === 0) return null;

  return (
    <div className="relative select-none border-y border-border bg-card/60 py-4 backdrop-blur">
      <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {[...items, ...items].map((item, i) => (
            <MarqueeItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

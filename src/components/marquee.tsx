type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  if (items.length === 0) return null;

  return (
    <div className="relative select-none border-y border-zinc-200 bg-white/60 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
            >
              {item} <span className="text-sky-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

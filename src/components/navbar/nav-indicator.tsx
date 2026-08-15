"use client";

type NavIndicatorProps = {
  /** Horizontal offset (px) from the start of the nav list. */
  left: number;
  /** Width (px) of the active link. */
  width: number;
};

/** The sliding underline beneath the active desktop nav link. */
export function NavIndicator({ left, width }: NavIndicatorProps) {
  return (
    <span
      aria-hidden
      className="absolute -bottom-px h-0.5 rounded-full bg-accent transition-all duration-300 ease-out"
      style={{ left, width }}
    />
  );
}

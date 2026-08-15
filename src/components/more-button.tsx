import { forwardRef, type ButtonHTMLAttributes } from "react";

type MoreButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  /** Number of hidden items. When provided, the label toggles between "Show more (N more)" and "Show less". */
  hiddenCount?: number;
  /** Whether the extra content is currently expanded (only used when `hiddenCount` is set). */
  expanded?: boolean;
};

/**
 * A pill button with a chevron. Acts as a static "View more" trigger, or as a
 * "Show more / Show less" toggle when `hiddenCount` is provided.
 */
const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  function MoreButton(
    { expanded = false, hiddenCount, className = "", ...props },
    ref,
  ) {
    const label =
      hiddenCount !== undefined
        ? expanded
          ? "Show less"
          : `Show more (${hiddenCount} more)`
        : "View more";

    return (
      <button
        ref={ref}
        type="button"
        className={`inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-semibold text-zinc-800 hover:border-sky-500 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-sky-500 dark:hover:text-sky-400 ${className}`}
        {...props}
      >
        {label}
        <svg
          aria-hidden
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  },
);

export default MoreButton;

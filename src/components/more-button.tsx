import { forwardRef, type ButtonHTMLAttributes } from "react";

type MoreButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  /** Number of hidden items. When provided, the label toggles between "Show more (N more)" and "Show less". */
  hiddenCount?: number;
  /** Explicit expanded state. Falls back to the `data-state` injected by `Collapsible.Trigger asChild`. */
  expanded?: boolean;
  /** Set automatically by Ark UI's `Collapsible.Trigger asChild` — do not pass manually. */
  "data-state"?: string;
};

/**
 * A pill button with a chevron. Acts as a static "View more" trigger, or as a
 * "Show more / Show less" toggle when `hiddenCount` is provided. When composed
 * with `Collapsible.Trigger asChild`, Ark UI injects `data-state` to drive the label.
 */
const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  function MoreButton(
    { hiddenCount, expanded, className = "", ...props },
    ref,
  ) {
    const isOpen = expanded ?? props["data-state"] === "open";
    const label =
      hiddenCount !== undefined
        ? isOpen
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
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
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

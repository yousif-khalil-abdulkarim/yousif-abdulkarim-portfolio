import { forwardRef, type ButtonHTMLAttributes } from "react";

type ViewMoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ViewMoreButton = forwardRef<HTMLButtonElement, ViewMoreButtonProps>(
  function ViewMoreButton({ className = "", ...props }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={`inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-semibold text-zinc-800 hover:border-sky-500 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-sky-500 dark:hover:text-sky-400 ${className}`}
        {...props}
      >
        View more
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

export default ViewMoreButton;

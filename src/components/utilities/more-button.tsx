import {
  forwardRef,
  useLayoutEffect,
  useRef,
  type ButtonHTMLAttributes,
} from "react";

const LABEL_STYLE =
  "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;";

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

    let label: string;
    if (hiddenCount === undefined) {
      label = "View more";
    } else if (isOpen) {
      label = "Show less";
    } else {
      label = `Show more (${hiddenCount} more)`;
    }

    // The label spans are managed imperatively (React renders the wrapper with
    // no children) so the outgoing text can fade out while the new one fades
    // in. `prevLabelRef` tracks the previously rendered label. The fades use
    // the Web Animations API so cleanup is tied to the animation itself.
    const labelRef = useRef<HTMLSpanElement>(null);
    const prevLabelRef = useRef(label);

    useLayoutEffect(() => {
      const wrapper = labelRef.current;
      if (!wrapper) return;

      const prev = prevLabelRef.current;
      prevLabelRef.current = label;

      // First render / unchanged label: just show the text, no animation.
      if (prev === label) {
        if (wrapper.childElementCount === 0) {
          const span = document.createElement("span");
          span.style.cssText = LABEL_STYLE;
          span.textContent = label;
          wrapper.appendChild(span);
        }
        return;
      }

      // Label changed: fade the current text out, fade the new one in.
      const current = wrapper.lastElementChild as HTMLElement | null;
      if (current) {
        current
          .animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 200,
            easing: "ease-in",
          })
          .addEventListener("finish", () => current.remove(), { once: true });
      }

      const next = document.createElement("span");
      next.style.cssText = LABEL_STYLE;
      next.textContent = label;
      wrapper.appendChild(next);
      next.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        easing: "ease-out",
      });
    }, [label]);

    const sizerText =
      hiddenCount !== undefined ? `Show more (${hiddenCount} more)` : label;

    return (
      <button
        ref={ref}
        type="button"
        className={`inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-semibold text-zinc-800 hover:border-sky-500 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-sky-500 dark:hover:text-sky-400 ${className}`}
        {...props}
      >
        <span className="relative inline-flex items-center justify-center whitespace-nowrap">
          {/* Invisible sizer keeps the button width constant across toggles. */}
          <span aria-hidden className="invisible">
            {sizerText}
          </span>
          {/* No React children here — label spans are managed in the layout
              effect so the crossfade can hold both texts at once. */}
          <span ref={labelRef} className="absolute inset-0" />
        </span>
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  },
);

export { MoreButton };

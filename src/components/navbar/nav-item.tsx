"use client";

import { scrollToSection } from "@/components/navbar/nav-utils";

type NavItemProps = {
  href: string;
  label: string;
  /** Whether this link matches the currently active section. */
  active: boolean;
  /** Called with the anchor node so the parent can position the indicator. */
  onRegisterRef: (node: HTMLAnchorElement | null) => void;
};

/** A single desktop navigation link with active-state styling. */
export function NavItem({
  href,
  label,
  active,
  onRegisterRef,
}: NavItemProps) {
  return (
    <li>
      <a
        ref={onRegisterRef}
        href={href}
        onClick={(e) => scrollToSection(e, href)}
        aria-current={active ? "true" : undefined}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          active
            ? "text-sky-600 dark:text-sky-400"
            : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        }`}
      >
        {label}
      </a>
    </li>
  );
}

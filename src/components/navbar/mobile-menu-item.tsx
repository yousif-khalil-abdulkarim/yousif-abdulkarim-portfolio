"use client";

import { useDialogContext } from "@ark-ui/react/dialog";
import { scrollToSection } from "@/components/navbar/nav-utils";

type MobileMenuItemProps = {
  href: string;
  label: string;
  active: boolean;
};

/**
 * A single mobile menu link. Rendered inside the dialog tree so it can close
 * the dialog via context, then smooth-scroll to the target section.
 */
export function MobileMenuItem({ href, label, active }: MobileMenuItemProps) {
  const dialog = useDialogContext();
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          dialog.setOpen(false);
          scrollToSection(e, href);
        }}
        aria-current={active ? "true" : undefined}
        className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
          active
            ? "bg-accent/10 text-accent-strong"
            : "text-body-foreground hover:bg-muted hover:text-foreground dark:hover:bg-muted/60"
        }`}
      >
        {label}
      </a>
    </li>
  );
}

"use client";

import { useState } from "react";
import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { MobileMenuItem } from "@/components/navbar/mobile-menu-item";
import { visibleNavLinks } from "@/components/navbar/nav-utils";
import type { PortfolioData } from "@/data/types";

function MobileMenuItems({
  data,
  activeSection,
}: {
  data: PortfolioData;
  activeSection: string;
}) {
  return (
    <ul className="flex flex-col gap-1 p-4">
      {visibleNavLinks(data).map((link) => {
        const isActive = activeSection === link.href.slice(1);
        return (
          <MobileMenuItem
            key={link.href}
            href={link.href}
            label={link.label}
            active={isActive}
          />
        );
      })}
    </ul>
  );
}

type MobileNavbarProps = {
  data: PortfolioData;
  activeSection: string;
};

/**
 * Mobile-only navigation: the hamburger trigger and the slide-down menu
 * portal, both hidden on `sm:` and up. Owns its own dialog state so the
 * desktop `Navbar` stays framework-free.
 */
export function MobileNavbar({ data, activeSection }: MobileNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Dialog.Root
      open={mobileOpen}
      onOpenChange={(details) => setMobileOpen(details.open)}
      lazyMount
      unmountOnExit
    >
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:hidden"
        >
          {mobileOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm sm:hidden"
        />
        <Dialog.Positioner className="fixed inset-x-0 top-16 z-50 flex justify-center sm:hidden">
          <Dialog.Content className="mobile-menu-panel w-full rounded-b-2xl border border-t-0 border-zinc-200 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <Dialog.CloseTrigger className="sr-only" aria-label="Close menu">
              Close
            </Dialog.CloseTrigger>
            <MobileMenuItems data={data} activeSection={activeSection} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

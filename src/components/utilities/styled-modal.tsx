"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { Dialog, useDialogContext } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";

type StyledModalProps = {
  title: string;
  subtitle?: string;
  maxWidthClass?: string;
  trigger?: ReactElement;
  onClose?: () => void;
  children: ReactNode;
};

type ModalContentProps = {
  title: string;
  subtitle?: string;
  maxWidthClass: string;
  children: ReactNode;
};

function ModalContent({
  title,
  subtitle,
  maxWidthClass,
  children,
}: ModalContentProps) {
  const dialog = useDialogContext();
  const contentRef = useRef<HTMLDivElement>(null);

  // Escape closes the top-most open dialog. (Ark's native dismissal handler can fail to
  // register with lazyMount in production, so we close explicitly and let each
  // mounted dialog decide whether it is the one on top.)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const openDialogs = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[role=dialog][data-state=open]",
        ),
      );
      if (
        openDialogs.length === 0 ||
        openDialogs[openDialogs.length - 1] !== contentRef.current
      ) {
        return;
      }
      dialog.setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dialog]);

  return (
    <Portal>
      <Dialog.Backdrop
        onClick={() => dialog.setOpen(false)}
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md"
      />
      <Dialog.Positioner className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Content
          ref={contentRef}
          className={`pointer-events-auto relative flex max-h-[calc(100dvh-2rem)] w-full flex-col ${maxWidthClass} overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-2xl dark:border-zinc-800/70 dark:bg-zinc-950`}
        >
          <div
            aria-hidden
            className="h-1.5 bg-linear-to-r from-blue-500 via-sky-500 to-amber-400"
          />
          <div className="flex min-h-0 flex-1 flex-col p-6">
            <div className="flex shrink-0 items-start justify-between gap-4">
              <div className="pb-3">
                <Dialog.Title className="font-display text-2xl font-bold tracking-tight">
                  {title}
                </Dialog.Title>
                {subtitle && (
                  <Dialog.Description className="mt-1 font-mono text-xs text-zinc-400">
                    {subtitle}
                  </Dialog.Description>
                )}
              </div>
              <Dialog.CloseTrigger
                aria-label="Close"
                className="hidden cursor-pointer rounded-full border border-zinc-300 p-1.5 text-zinc-500 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-400 sm:flex"
              >
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
              </Dialog.CloseTrigger>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
            <Dialog.CloseTrigger
              aria-label="Close"
              className="mt-6 flex w-full shrink-0 cursor-pointer items-center justify-center rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-600 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-400 sm:hidden"
            >
              Close
            </Dialog.CloseTrigger>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
}

export function StyledModal({
  title,
  subtitle,
  maxWidthClass = "max-w-7xl",
  trigger,
  onClose,
  children,
}: StyledModalProps) {
  // The dialog is uncontrolled: with a trigger it starts closed and is opened
  // by clicking it; without one it opens on mount (kept for parent-controlled use).
  const handleOpenChange = useCallback(
    (details: { open: boolean }) => {
      if (!details.open) onClose?.();
    },
    [onClose],
  );

  return (
    <Dialog.Root
      defaultOpen={!trigger}
      lazyMount
      unmountOnExit
      onOpenChange={handleOpenChange}
    >
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <ModalContent
        title={title}
        subtitle={subtitle}
        maxWidthClass={maxWidthClass}
      >
        {children}
      </ModalContent>
    </Dialog.Root>
  );
}

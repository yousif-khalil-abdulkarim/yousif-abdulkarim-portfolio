"use client";

import { useCallback, useState, type ReactElement, type ReactNode } from "react";
import { Dialog } from "@base-ui/react/dialog";

type StyledModalProps = {
  title: string;
  subtitle?: string;
  maxWidthClass?: string;
  trigger?: ReactElement;
  onClose?: () => void;
  children: ReactNode;
};

export default function StyledModal({
  title,
  subtitle,
  maxWidthClass = "max-w-lg",
  trigger,
  onClose,
  children,
}: StyledModalProps) {
  // With a trigger the dialog starts closed and is opened by clicking it.
  // Without one it is mounted already open (kept for parent-controlled use).
  const [open, setOpen] = useState(!trigger);

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      setOpen(nextOpen);
      if (!nextOpen) onClose?.();
    },
    [onClose],
  );

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {trigger && <Dialog.Trigger render={trigger} />}
      <Dialog.Portal>
        <Dialog.Backdrop className="animate-backdrop-in fixed inset-0 z-50 bg-black/60 backdrop-blur-md" />
        <Dialog.Popup className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className={`animate-modal-in pointer-events-auto relative w-full ${maxWidthClass} overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-2xl dark:border-zinc-800/70 dark:bg-zinc-950`}
          >
            <div
              aria-hidden
              className="h-1.5 bg-gradient-to-r from-blue-500 via-sky-500 to-amber-400"
            />
            <div className="max-h-[75vh] overflow-y-auto p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Dialog.Title className="font-display text-2xl font-bold tracking-tight">
                    {title}
                  </Dialog.Title>
                  {subtitle && (
                    <Dialog.Description className="mt-1 font-mono text-xs text-zinc-400">
                      {subtitle}
                    </Dialog.Description>
                  )}
                </div>
                <Dialog.Close
                  aria-label="Close"
                  className="rounded-full border border-zinc-300 p-1.5 text-zinc-500 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-400"
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
                </Dialog.Close>
              </div>
              {children}
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

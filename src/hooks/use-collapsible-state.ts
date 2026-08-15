"use client";

import { useState } from "react";
import { flushSync } from "react-dom";

type OpenChangeDetails = { open: boolean };

/**
 * Manages a controlled collapsible's open state. The update is flushed
 * synchronously so the DOM (and any exit animation) starts right away.
 */
export function useCollapsibleState() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (details: OpenChangeDetails) => {
    flushSync(() => setOpen(details.open));
  };

  return { open, handleOpenChange };
}

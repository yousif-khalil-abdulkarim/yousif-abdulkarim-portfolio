"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { visibleNavLinks } from "@/lib/nav-links";
import type { PortfolioData } from "@/data/types";

type NavbarProps = {
  data: PortfolioData;
};

export default function Navbar({ data }: NavbarProps) {
  const { profile } = data;
  const initials = `${profile.firstName[0]}${profile.lastName[0] ?? ""}`;
  const [activeSection, setActiveSection] = useState("");
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const links = visibleNavLinks(data);
    const handleScroll = () => {
      // A section is "active" once its top passes the upper third of the viewport.
      const marker = window.scrollY + window.innerHeight / 3;
      let current = "";
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.offsetTop <= marker) current = link.href.slice(1);
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  // Slide the underline indicator to the active link.
  useLayoutEffect(() => {
    const list = listRef.current;
    const el = linkRefs.current[activeSection];
    if (!list || !el) {
      setIndicator(null);
      return;
    }
    const listRect = list.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicator({ left: elRect.left - listRect.left, width: elRect.width });
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 via-sky-500 to-amber-400 text-sm font-bold text-white shadow-md shadow-sky-500/30 transition-transform group-hover:rotate-6">
            {initials}
          </span>
          {profile.firstName}
        </a>
        <div className="flex items-center gap-2">
          <ul
            ref={listRef}
            className="relative hidden items-center gap-1 sm:flex"
          >
            {indicator && (
              <span
                aria-hidden
                className="absolute -bottom-px h-0.5 rounded-full bg-sky-500 transition-all duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
            {visibleNavLinks(data).map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    ref={(node) => {
                      linkRefs.current[link.href.slice(1)] = node;
                    }}
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-sky-600 dark:text-sky-400"
                        : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mx-1 hidden h-6 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

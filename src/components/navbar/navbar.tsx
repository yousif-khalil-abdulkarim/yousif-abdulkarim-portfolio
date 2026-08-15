"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Brand } from "@/components/navbar/brand";
import { NavIndicator } from "@/components/navbar/nav-indicator";
import { NavItem } from "@/components/navbar/nav-item";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { MobileNavbar } from "@/components/navbar/mobile-navbar";
import { visibleNavLinks } from "@/components/navbar/nav-utils";
import type { PortfolioData } from "@/data/types";

type NavbarProps = {
  data: PortfolioData;
};

export function Navbar({ data }: NavbarProps) {
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
    <header className="sticky top-0 z-60 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Brand data={data} />
        <div className="flex items-center gap-2">
          <ul
            ref={listRef}
            className="relative hidden items-center gap-1 sm:flex"
          >
            {indicator && (
              <NavIndicator left={indicator.left} width={indicator.width} />
            )}
            {visibleNavLinks(data).map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                active={activeSection === link.href.slice(1)}
                onRegisterRef={(node) => {
                  linkRefs.current[link.href.slice(1)] = node;
                }}
              />
            ))}
          </ul>
          <div className="mx-1 hidden h-6 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
          <MobileNavbar data={data} activeSection={activeSection} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

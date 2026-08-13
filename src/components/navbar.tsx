import ThemeToggle from "@/components/theme-toggle";
import type { PortfolioData } from "@/data/types";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Writings", href: "#writings" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  data: PortfolioData;
};

export default function Navbar({ data }: NavbarProps) {
  const { profile } = data;
  const initials = `${profile.firstName[0]}${profile.lastName[0] ?? ""}`;

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
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-1 hidden h-6 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

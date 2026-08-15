import type { PortfolioData, Section } from "@/data/types";

export type NavLink = {
  label: string;
  href: string;
};

const sectionLinks: Record<Section, NavLink> = {
  experience: { label: "Experience", href: "#experience" },
  projects: { label: "Projects", href: "#projects" },
  certificates: { label: "Certificates", href: "#certificates" },
  writings: { label: "Writings", href: "#writings" },
};

const aboutLink: NavLink = { label: "About", href: "#about" };
const contactLink: NavLink = { label: "Contact", href: "#contact" };

/**
 * Shared navigation links used by the header (navbar) and footer so both
 * navigations stay synchronized and in the same order.
 *
 * Order matches the page: About first, then the Experience / Projects /
 * Certificates / Writings sections in `sectionOrder`, then Contact. Empty
 * sections (which render nothing) are omitted.
 */
export function visibleNavLinks(data: PortfolioData): NavLink[] {
  const sectionsInOrder = data.sectionOrder.filter((id) =>
    sectionHasContent(data, id),
  );
  return [
    aboutLink,
    ...sectionsInOrder.map((id) => sectionLinks[id]),
    contactLink,
  ];
}

// Mirrors each section's empty-render check (they return null when empty).
function sectionHasContent(data: PortfolioData, id: string): boolean {
  switch (id) {
    case "about":
    case "contact":
      return true;
    case "experience":
      return data.experience.some((job) => !job.hide);
    case "projects":
      return data.projects.some((project) => !project.hide);
    case "certificates":
      return data.certificates.some((cert) => !cert.hide);
    case "writings":
      return data.technicalWritings.some((post) => !post.hide);
    default:
      return true;
  }
}

/**
 * Smoothly scrolls to the section referenced by a nav link and keeps the URL
 * hash in sync without triggering a jump. Using scrollIntoView (rather than a
 * plain hash link) guarantees the animation runs even on repeated clicks.
 * Client-only — call from event handlers, never during render/SSR.
 */
export function scrollToSection(
  e: { preventDefault: () => void },
  href: string,
) {
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  history.pushState(null, "", href);
}

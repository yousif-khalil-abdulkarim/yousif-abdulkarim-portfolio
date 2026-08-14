import type { PortfolioData } from "@/data/types";

/**
 * Shared navigation links used by the header (navbar) and footer so both
 * navigations stay synchronized and in the same order.
 */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Writings", href: "#writings" },
  { label: "Contact", href: "#contact" },
];

/** The visible (non-empty) navigation links for a given portfolio. */
export function visibleNavLinks(data: PortfolioData) {
  return navLinks.filter((link) => sectionHasContent(data, link.href.slice(1)));
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

import { StaticImageData } from "next/image";
import type { Skill } from "@/data/all-skills";

/**
 * A single styled run of text within a bio paragraph. `emphasis` renders the
 * run with bold/accent styling (e.g. key technologies).
 */
export type BioText = {
  text: string;
  /** Whether to render this run with emphasis styling. */
  emphasis: boolean;
};

/** One paragraph of the About bio, composed of styled text runs. */
export type BioParagraph = BioText[];

/**
 * Personal and professional information shown across the site (Hero, Navbar,
 * About, Contact, Footer).
 */
export type Profile = {
  /** First name only, used for the greeting in the Hero heading and the navbar logo text. */
  firstName: string;
  /** Last / family name, e.g. "Abdulkarim". Used in the Hero heading, footer, and portrait alt text. */
  lastName: string;
  /** Professional title / headline, e.g. "Fullstack Software Engineer — Node & TypeScript & React". */
  role: string;
  /** One-line pitch shown under the Hero heading, as styled runs (emphasis renders bold/accent). */
  tagline: BioParagraph;
  /** Bio paragraphs rendered in the About section, each a sequence of styled runs. */
  bio: BioParagraph[];
  /** Whether the person is currently open to new opportunities. Controls the green "Available" badge in the Hero. */
  availableForWork: boolean;
  /** Location shown in the About quick facts and Contact sections, e.g. "Malmö, Sweden". */
  location: string;
  /** Public contact email address. */
  email: string;
  /** Public contact phone number (shown as a tel: link in Contact). */
  phone: string;
  /** Optional floating stat badge shown over the portrait in the Hero, e.g. { value: "4+ years", label: "full-stack experience" }. Hidden when unset. */
  heroBadge: { value: string; label: string } | null;
  /** Optional portrait image (Next.js static import) shown in the Hero. The portrait column is hidden when unset. */
  image: StaticImageData | null;
  /** Optional GitHub profile URL. Social icon is hidden when absent. */
  githubUrl: string | null;
  /** Optional LinkedIn profile URL. Social icon is hidden when absent. */
  linkedin: string | null;
  /** Optional X (Twitter) profile URL. Social icon is hidden when absent. */
  twitter: string | null;
  /** Optional YouTube channel URL. Social icon is hidden when absent. */
  youtube: string | null;
  /** Optional blog URL. */
  blog: string | null;
};

/**
 * UI toggles for quickly enabling/disabling page features and content limits.
 */
export type UiSettings = {
  /** Whether the scrolling skills marquee at the bottom of the Hero is rendered. */
  showMarquee: boolean;
  /** Whether the portrait image column in the Hero is rendered. */
  showPortfolioImage: boolean;
  /** Whether the "Quick facts" card in the About section is rendered. */
  showQuickFacts: boolean;
  /** Default number of items shown per section before a "Show more" control appears. */
  sectionLimits: {
    /** Max Experience entries shown before "Show more". */
    experience: number;
    /** Max Projects shown before "Show more". */
    projects: number;
    /** Max Technical Writings shown before "Show more". */
    technicalWritings: number;
    /** Max skills shown per category before "Show more". */
    skills: number;
    /** Max Certificates shown before "Show more". */
    certificates: number;
    /** Max proof badges shown per entry before "Show more". */
    proofLimit: number;
    /** Max bullet points shown per experience entry. */
    pointsLimit: number;
  };
};

/**
 * A showcased project (side project / open-source work) shown as a card in the
 * Projects section, with a "View more" modal for details.
 */
export type Project = {
  /** When true, the project is filtered out and never rendered. */
  hide: boolean;
  /** Project name, e.g. "eridu-tech". */
  title: string;
  /** One-to-two sentence summary shown on the card and in the modal. */
  description: string;
  /** Technologies used, referencing entries from the shared `allSkills` map. Rendered as clickable SkillBadges. */
  tech: Skill[];
  /** Timeframe or year, e.g. "2024 — Present". */
  year: string;
  /** Marks the project as a highlight with a "★ Featured" badge. */
  featured: boolean;
  /** Bullet points of notable achievements, shown in the "View more" modal. */
  highlights: string[];
  /** Optional link to a live deployment. Renders a "Live demo ↗" link. */
  liveUrl: string | null;
  /** Optional link to the source repository. Renders a "Source ↗" link. */
  repoUrl: string | null;
  /** Optional proof / evidence of the work (e.g. metrics), rendered as accent badges. */
  proof: string[];
};

/**
 * A work experience entry shown as an item in the Experience timeline, with a
 * "View more" modal for the full summary.
 */
export type Experience = {
  /** When true, the entry is filtered out and never rendered. */
  hide: boolean;
  /** Job title, e.g. "Founding Backend Platform Engineer". */
  role: string;
  /** Employer / company name. */
  company: string;
  /** Employment period, e.g. "Aug 2024 — Present". */
  period: string;
  /** Bullet points of responsibilities and achievements shown on the timeline. */
  points: string[];
  /** Technologies used, referencing entries from the shared `allSkills` map. Rendered as SkillBadges. */
  stack: Skill[];
  /** Optional longer paragraph shown in the "View more" modal. */
  summary: string | null;
  /** Optional link to a live deployment / site. Renders a "Live site ↗" link. */
  liveUrl: string | null;
  /** Optional link to the source repository. Renders a "Source ↗" link. */
  repoUrl: string | null;
  /** Optional proof / evidence of the work (e.g. metrics), rendered as accent badges. */
  proof: string[];
};

/**
 * A certification / credential shown in the Certificates section, with a
 * "View more" modal and optional verification link.
 */
export type Certificate = {
  /** When true, the certificate is filtered out and never rendered. */
  hide: boolean;
  /** Certificate name, e.g. "AWS Certified Developer – Associate". */
  title: string;
  /** Issuing organization, e.g. "Amazon Web Services". */
  issuer: string;
  /** Year (or year range) the certificate was earned. */
  year: string;
  /** Description of what the certificate covers, shown in the modal. */
  description: string;
  /** Optional URL to verify the credential. Renders a "Verify credential ↗" link. */
  credentialUrl: string | null;
  /** Optional credential / verification ID shown in the modal. */
  credentialId: string | null;
  /** Related skills, referencing the shared `allSkills` map. Rendered as SkillBadges in the modal. */
  skills: Skill[];
};

/**
 * A single stat shown in the About "Quick facts" card (e.g. "4+ Years of experience").
 */
export type AboutStat = {
  /** When true, the stat is filtered out and never rendered. */
  hide: boolean;
  /** The displayed number/amount, e.g. "4+". */
  value: string;
  /** Short label describing what the value represents, e.g. "Years of experience". */
  label: string;
};

/**
 * A technical writing / write-up shown in the Technical Writings section,
 * with a short description of what it covers and a link to the full article.
 */
export type TechnicalWriting = {
  /** When true, the post is filtered out and never rendered. */
  hide: boolean;
  /** Writing title, e.g. "Why I Built Eridu Tech". */
  title: string;
  /** Short summary of what the writing is about. */
  description: string;
  /** Link to the full writing. */
  url: string;
};

/**
 * Proficiency levels for spoken languages.
 */
export type LanguageLevel =
  | "Native"
  | "Fluent"
  | "Advanced"
  | "Proficient"
  | "Intermediate"
  | "Conversational"
  | "Basic"
  | "Beginner";

/**
 * A spoken language shown in the Languages section (e.g. "Arabic"), rendered
 * before the Skills section in the About area.
 */
export type Language = {
  /** When true, the language is filtered out and never rendered. */
  hide: boolean;
  /** Language name, e.g. "Arabic". */
  name: string;
  /** Proficiency level, e.g. "Native", "Fluent", "Intermediate". */
  level: LanguageLevel;
};

/**
 * The sections whose order can be customized via `PortfolioData.sectionOrder`.
 */
export type Section = "experience" | "projects" | "certificates" | "writings";

/**
 * Single source of truth for all portfolio data — one type, one object.
 * The `portfolio` constant in `projects.ts` is typed with this.
 */
export type PortfolioData = {
  /** Personal / professional info used across Navbar, Hero, About, Contact, and Footer. */
  profile: Profile;
  /** Feature toggles and section limits. */
  uiSettings: UiSettings;
  /** Projects shown in the Projects section. */
  projects: Project[];
  /** Work history shown in the Experience section. */
  experience: Experience[];
  /** Certifications shown in the Certificates section. */
  certificates: Certificate[];
  /** Technical writings shown in the Technical Writings section. */
  technicalWritings: TechnicalWriting[];
  /** Quick facts shown in the About section. */
  quickFacts: AboutStat[];
  /** Order in which the Experience, Projects, and Certificates sections render on the page. */
  sectionOrder: Section[];
  /** Spoken languages shown in the Languages section, rendered before Skills. */
  languages: Language[];
  /** Skills grouped by category (e.g. Backend, Frontend), referencing the shared `allSkills` map. */
  skills: Record<string, Skill[]>;
};


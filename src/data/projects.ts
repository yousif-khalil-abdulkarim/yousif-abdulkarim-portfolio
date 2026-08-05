export type Profile = {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  availableForWork: boolean;
  location: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
};
export const profile: Profile = {
  name: "Yousif Abdulkarim",
  firstName: "Yousif",
  role: "Fullstack Software Engineer — Node & TypeScript & React",
  tagline:
    "I build scalable, modular web applications with Node, TypeScript, and React.",
  availableForWork: true,
  location: "Malmö, Sweden",
  email: "yousefkhalil125@gmail.com",
  phone: "+46 72 913 68 33",
  github: "https://github.com/yousif-khalil-abdulkarim",
  linkedin: "https://www.linkedin.com/in/yousef-abdulkarim/",
  twitter: "https://x.com/yousif-khalil-abdulkarim",
  youtube: "https://youtube.com/@yousif-khalil-abdulkarim",
};

// UI toggles for quickly enabling/disabling page features.
export const uiSettings = {
  showMarquee: true,
  // Number of items shown by default before the "Show more" button appears.
  sectionLimits: {
    experience: 6,
    projects: 6,
    skills: 4,
  },
};

export type Skill = {
  name: string;
  description: string;
};

// Single source of truth for every skill used across the site (skills section,
// projects, and experience), keyed by name so it can be referenced anywhere.
export const allSkills = {
  // Backend
  "Node.js": {
    name: "Node.js",
    description:
      "JavaScript runtime for building fast, scalable server-side applications — my primary backend platform.",
  },
  TypeScript: {
    name: "TypeScript",
    description:
      "Typed superset of JavaScript I use to write maintainable, production-grade code across all my projects.",
  },
  Express: {
    name: "Express",
    description:
      "Minimal and flexible Node.js web framework for building REST APIs and server-side logic.",
  },
  NestJS: {
    name: "NestJS",
    description:
      "Progressive Node.js framework for structured, scalable server applications with dependency injection.",
  },
  "REST APIs": {
    name: "REST APIs",
    description:
      "Designing and building clean, versioned REST APIs that are simple to consume and evolve.",
  },
  GraphQL: {
    name: "GraphQL",
    description:
      "Query language for APIs that enables precise, efficient data fetching from the client.",
  },
  "Event Sourcing": {
    name: "Event Sourcing",
    description:
      "Architecture pattern that captures state changes as a sequence of events — core to the eridu-tech toolkit.",
  },
  // Frontend
  React: {
    name: "React",
    description:
      "Component-based UI library for building interactive, stateful web interfaces.",
  },
  "Next.js": {
    name: "Next.js",
    description:
      "React framework with SSR, static generation, and file-based routing — it powers this portfolio.",
  },
  Redux: {
    name: "Redux",
    description:
      "Predictable state container for managing complex client-side application state.",
  },
  PWA: {
    name: "PWA",
    description:
      "Building installable, offline-capable web apps with service workers and web manifests.",
  },
  "Webpack 5": {
    name: "Webpack 5",
    description:
      "Module bundler for optimizing and transforming frontend assets.",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapidly building custom, responsive designs.",
  },
  "TanStack Query": {
    name: "TanStack Query",
    description:
      "Server-state management for React — caching, synchronization, and background updates.",
  },
  "TanStack Start": {
    name: "TanStack Start",
    description:
      "Full-stack React framework with type-safe routing and server functions.",
  },
  // Databases
  PostgreSQL: {
    name: "PostgreSQL",
    description:
      "Relational database I use for robust, ACID-compliant data storage.",
  },
  MongoDB: {
    name: "MongoDB",
    description: "Document database for flexible, schema-less data models.",
  },
  SQLite: {
    name: "SQLite",
    description:
      "Embedded, zero-config database ideal for local and lightweight storage.",
  },
  // Testing & DevOps
  Jest: {
    name: "Jest",
    description: "JavaScript testing framework for unit and integration tests.",
  },
  Vitest: {
    name: "Vitest",
    description:
      "Fast, Vite-native testing framework for modern TypeScript projects.",
  },
  Mocha: {
    name: "Mocha",
    description: "Flexible JavaScript test framework with rich reporting.",
  },
  Chai: {
    name: "Chai",
    description:
      "Assertion library that pairs with Mocha for expressive test expectations.",
  },
  Playwright: {
    name: "Playwright",
    description:
      "End-to-end browser testing across Chromium, Firefox, and WebKit.",
  },
  Docker: {
    name: "Docker",
    description:
      "Containerization for reproducible environments and CI/CD pipelines.",
  },
  AWS: {
    name: "AWS",
    description:
      "Cloud platform for scalable hosting, storage, and infrastructure.",
  },
  "GitHub Actions": {
    name: "GitHub Actions",
    description: "CI/CD automation for build, test, and deploy pipelines.",
  },
  SSH: {
    name: "SSH",
    description: "Secure remote access and server management.",
  },
  VPS: {
    name: "VPS",
    description:
      "Deploying and operating applications on virtual private servers.",
  },
  Nginx: {
    name: "Nginx",
    description:
      "Web server and reverse proxy for routing and serving production apps.",
  },
  // From projects
  Redis: {
    name: "Redis",
    description:
      "In-memory data store used for caching, distributed locking, and real-time pub/sub.",
  },
  tRPC: {
    name: "tRPC",
    description:
      "End-to-end typesafe APIs for full-stack TypeScript applications.",
  },
  "React Query": {
    name: "React Query",
    description:
      "Server-state library for React — caching and synchronizing async data.",
  },
  "Mantine UI": {
    name: "Mantine UI",
    description:
      "Accessible React component library with production-ready UI primitives.",
  },
  Compilers: {
    name: "Compilers",
    description:
      "Building interpreters, parsers, and language tooling from scratch.",
  },
  Parsing: {
    name: "Parsing",
    description:
      "Recursive descent parsing and grammar design for custom languages.",
  },
  // From experience
  "Payload CMS": {
    name: "Payload CMS",
    description: "Headless CMS for building content-driven applications.",
  },
  Liquid: {
    name: "Liquid",
    description: "Shopify's template language for dynamic storefront themes.",
  },
  Remix: {
    name: "Remix",
    description:
      "Full-stack React framework with nested routing and server rendering.",
  },
  Shopify: {
    name: "Shopify",
    description: "E-commerce platform for theme and app development.",
  },
  Vendure: {
    name: "Vendure",
    description: "Headless commerce framework for custom e-commerce solutions.",
  },
  C: {
    name: "C",
    description:
      "Low-level systems language for performance-critical, compiled code.",
  },
  AssemblyScript: {
    name: "AssemblyScript",
    description: "TypeScript-like language that compiles to WebAssembly.",
  },
  Emscripten: {
    name: "Emscripten",
    description: "Toolchain that compiles C/C++ to WebAssembly.",
  },
  WebAssembly: {
    name: "WebAssembly",
    description:
      "Binary instruction format for high-performance in-browser execution.",
  },
  Python: {
    name: "Python",
    description:
      "Versatile scripting language for tooling, data, and automation.",
  },
  Matplotlib: {
    name: "Matplotlib",
    description: "Python plotting library for data visualization.",
  },
  Pandas: {
    name: "Pandas",
    description: "Python library for data manipulation and analysis.",
  },
  "SDK Development": {
    name: "SDK Development",
    description: "Building client libraries and SDKs for platform APIs.",
  },
  JavaScript: {
    name: "JavaScript",
    description:
      "Core language of the web — the foundation for all frontend work.",
  },
} satisfies Record<string, Skill>;

export type Project = {
  title: string;
  description: string;
  tech: Skill[];
  year: string;
  featured?: boolean;
  highlights?: string[];
  liveUrl?: string;
  repoUrl?: string;
};
export const projects: Project[] = [
  {
    title: "eridu-tech",
    description:
      "Adapter-first backend toolkit for TypeScript — a framework-agnostic ecosystem of composable components covering caching, distributed locking, rate limiting, circuit breakers, and an event bus. 30K+ lines of shipped, production TypeScript code.",
    highlights: [
      "Adapter-pattern architecture that integrates across Node.js, Bun, and Deno.",
      "Composable distributed-systems components: caching, distributed locking, rate limiting, circuit breakers, and an event bus.",
      "Runtime and database integrations across PostgreSQL, MongoDB, MySQL, SQLite, and Redis.",
      "4,640+ integration and behavior tests with Docker-based CI/CD.",
      "Serves roughly 600 monthly users across production deployments.",
    ],
    tech: [
      allSkills["TypeScript"],
      allSkills["Node.js"],
      allSkills["PostgreSQL"],
      allSkills["MongoDB"],
      allSkills["Redis"],
      allSkills["Docker"],
    ],
    year: "2024 — Present",
    featured: true,
    liveUrl: "https://eridu-tech.io",
    repoUrl: "https://github.com/eridu-tech/eridu-tech-core",
  },
  {
    title: "Outstanding Resumes",
    description:
      "A modular resume-building platform engineered for 'majestic monoliths' — adapter & service patterns, Google OAuth, and optimistic UI updates with tRPC and React Query.",
    highlights: [
      "Modular 'majestic monolith' architecture using adapter and service patterns.",
      "Seamless registration via Google OAuth.",
      "Optimistic UI updates powered by tRPC and React Query.",
      "Designed for long-lived, sustainable codebases over distributed complexity.",
    ],
    tech: [
      allSkills["Next.js"],
      allSkills["tRPC"],
      allSkills["React Query"],
      allSkills["MongoDB"],
      allSkills["Mantine UI"],
    ],
    year: "2022 — Present",
  },
  {
    title: "The Primitive Language",
    description:
      "A custom programming language built from scratch with a TypeScript-based interpreter and a recursive descent parser.",
    highlights: [
      "Custom programming language with a TypeScript-based interpreter.",
      "Recursive descent parser built from scratch.",
      "Hands-on exploration of compiler and parsing fundamentals.",
    ],
    tech: [
      allSkills["TypeScript"],
      allSkills["Compilers"],
      allSkills["Parsing"],
    ],
    year: "2023",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
  stack?: Skill[];
  summary?: string;
};
export const experience: Experience[] = [
  {
    role: "Founding Backend Platform Engineer",
    company: "eridu-tech (Open Source)",
    period: "Aug 2024 — Present",
    summary:
      "Open-source, framework-agnostic backend toolkit. Designed a modular, composable architecture based on the adapter pattern, enabling seamless integration across Node.js, Bun, and Deno runtimes while serving a community of roughly 600 monthly users.",
    points: [
      "Architect and maintain a framework-agnostic backend library ecosystem — 30K+ lines of shipped TypeScript and 100K+ total source lines.",
      "Built a suite of distributed-systems components: caching, distributed locking, rate limiting, circuit breakers, and an event bus.",
      "Engineered runtime and database integrations across PostgreSQL, MongoDB, MySQL, SQLite, and Redis.",
      "Delivered comprehensive unit, integration, and database tests with Docker-based CI/CD, serving ~600 monthly users.",
    ],
    stack: [
      allSkills["TypeScript"],
      allSkills["Node.js"],
      allSkills["PostgreSQL"],
      allSkills["MongoDB"],
      allSkills["Redis"],
      allSkills["Docker"],
      allSkills["GitHub Actions"],
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "FillerDepot",
    period: "Oct 2025 — Present",
    summary:
      "Led the end-to-end full-stack development of the AMS Portal — a centralized modular monolith automating event registration for aesthetic medicine companies, replacing a high-risk manual email workflow.",
    points: [
      "Spearhead end-to-end full-stack development of the AMS Portal — a modular monolith automating event registration for aesthetic medicine companies.",
      "Digitized booth reservations, marketing assets, and stage appointments, eliminating data loss and booking conflicts.",
      "Integrated automated invoicing, order tracking, and real-time inventory management for clients and internal teams.",
    ],
    stack: [
      allSkills["TypeScript"],
      allSkills["React"],
      allSkills["Next.js"],
      allSkills["Payload CMS"],
      allSkills["TanStack Start"],
      allSkills["PostgreSQL"],
      allSkills["Docker"],
      allSkills["Nginx"],
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Stride — Shopify Select Partner",
    period: "Aug 2025 — Oct 2025",
    summary:
      "Worked within a three-person team at a Shopify Select Partner agency, owning independent features and projects end to end — from Liquid templating to React-based chat widget integrations for client CRMs.",
    points: [
      "Worked within a three-person team, taking full ownership of independent tasks and features.",
      "Developed pagination and contact filtering using the Liquid templating language.",
      "Engineered a React-based chat widget and integrated it into a customer's CRM.",
    ],
    stack: [
      allSkills["Liquid"],
      allSkills["TypeScript"],
      allSkills["React"],
      allSkills["Remix"],
      allSkills["Shopify"],
    ],
  },
  {
    role: "Fullstack Software Engineer",
    company: "Greentake",
    period: "Mar 2024 — Aug 2025",
    summary:
      "Built a custom e-commerce platform tailored to client requirements, featuring a fully integrated CMS, secure authentication, automated email invoicing, and SEO-optimized, mobile-first design.",
    points: [
      "Built a custom e-commerce platform tailored to client requirements, with a fully integrated CMS.",
      "Implemented secure user authentication and an automated email invoicing system for checkout and payments.",
      "Drove organic traffic and engagement through responsive, mobile-first design and robust SEO.",
    ],
    stack: [
      allSkills["TypeScript"],
      allSkills["React"],
      allSkills["Next.js"],
      allSkills["Vendure"],
      allSkills["NestJS"],
      allSkills["GraphQL"],
      allSkills["PostgreSQL"],
      allSkills["Docker"],
    ],
  },
  {
    role: "Bachelor Thesis",
    company: "Bionamic AB",
    period: "Jan 2024 — Dec 2024",
    summary:
      "Performed a comprehensive performance analysis of WebAssembly versus JavaScript for the Bionamic SaaS platform, benchmarking algorithmic execution to guide optimization strategy.",
    points: [
      "Conducted a comprehensive performance analysis comparing WebAssembly and JavaScript to evaluate optimization strategies for the Bionamic SaaS platform.",
      "Benchmarked algorithmic performance, proving C-compiled WebAssembly ran common algorithms 5–91% faster than JavaScript.",
      "Demonstrated that AssemblyScript provided conditional performance gains depending on the use case.",
    ],
    stack: [
      allSkills["C"],
      allSkills["AssemblyScript"],
      allSkills["Emscripten"],
      allSkills["WebAssembly"],
      allSkills["Python"],
      allSkills["Matplotlib"],
      allSkills["Pandas"],
    ],
  },
  {
    role: "Degree Project",
    company: "Bionamic AB",
    period: "Sep 2023 — Jan 2024",
    summary:
      "Led a five-person team in building a REST API client and SDK for Bionamic's antibody research SaaS platform, guiding technical strategy and mentoring on event-sourcing architecture.",
    points: [
      "Directed a five-person team building a REST API client and SDK for Bionamic, a SaaS platform driving antibody research.",
      "Guided technical strategy and stack selection, bridging the team's Java background with JavaScript/TypeScript expertise.",
      "Mentored the team on event-sourcing architecture to ensure successful implementation.",
    ],
    stack: [
      allSkills["REST APIs"],
      allSkills["SDK Development"],
      allSkills["TypeScript"],
      allSkills["JavaScript"],
      allSkills["Node.js"],
      allSkills["Express"],
      allSkills["Event Sourcing"],
    ],
  },
];

export type AboutStat = {
  value: string;
  label: string;
};
export const aboutStats: AboutStat[] = [
  { value: "4+", label: "Years of experience" },
  { value: "30K+", label: "Lines of code shipped" },
  { value: "600+", label: "Monthly community users" },
];

// Skills grouped by category, referencing the shared skill map.
export const skills = {
  Backend: [
    allSkills["Node.js"],
    allSkills["TypeScript"],
    allSkills["Express"],
    allSkills["NestJS"],
    allSkills["REST APIs"],
    allSkills["GraphQL"],
    allSkills["Event Sourcing"],
  ],
  Frontend: [
    allSkills["React"],
    allSkills["Next.js"],
    allSkills["Redux"],
    allSkills["PWA"],
    allSkills["Webpack 5"],
    allSkills["Tailwind CSS"],
    allSkills["TanStack Query"],
    allSkills["TanStack Start"],
  ],
  Databases: [
    allSkills["PostgreSQL"],
    allSkills["MongoDB"],
    allSkills["SQLite"],
  ],
  "Testing & DevOps": [
    allSkills["Jest"],
    allSkills["Vitest"],
    allSkills["Mocha"],
    allSkills["Chai"],
    allSkills["Playwright"],
    allSkills["Docker"],
    allSkills["AWS"],
    allSkills["GitHub Actions"],
    allSkills["SSH"],
    allSkills["VPS"],
    allSkills["Nginx"],
  ],
} satisfies Record<string, Skill[]>;

// Derived from the skills above so the hero marquee stays in sync.
export const marqueeItems = Object.values(skills)
  .flat()
  .map((skill) => skill.name);

export type Skill = {
  name: string;
  description: string;
  /** Whether to include this skill in the generated resume. */
  includeInResume: boolean;
};

// Single source of truth for every skill used across the site (skills section,
// projects, and experience), keyed by name so it can be referenced anywhere.
export const allSkills = {
  // Backend
  "Node.js": {
    name: "Node.js",
    description:
      "JavaScript runtime for building fast, scalable server-side applications — my primary backend platform.",
    includeInResume: true,
  },
  TypeScript: {
    name: "TypeScript",
    description:
      "Typed superset of JavaScript I use to write maintainable, production-grade code across all my projects.",
    includeInResume: true,
  },
  Express: {
    name: "Express",
    description:
      "Minimal and flexible Node.js web framework for building REST APIs and server-side logic.",
    includeInResume: true,
  },
  NestJS: {
    name: "NestJS",
    description:
      "Progressive Node.js framework for structured, scalable server applications with dependency injection.",
    includeInResume: true,
  },
  "REST APIs": {
    name: "REST APIs",
    description:
      "Designing and building clean, versioned REST APIs that are simple to consume and evolve.",
    includeInResume: true,
  },
  GraphQL: {
    name: "GraphQL",
    description:
      "Query language for APIs that enables precise, efficient data fetching from the client.",
    includeInResume: true,
  },
  "Back-End Web Development": {
    name: "Back-End Web Development",
    description:
      "Designing and building the server-side logic, databases, and APIs that power web applications.",
    includeInResume: true,
  },
  PHP: {
    name: "PHP",
    description:
      "Server-side scripting language for building dynamic websites and web applications.",
    includeInResume: true,
  },
  Laravel: {
    name: "Laravel",
    description:
      "Elegant PHP framework for building modern, expressive web applications.",
    includeInResume: true,
  },
  "Event Sourcing": {
    name: "Event Sourcing",
    description:
      "Architecture pattern that captures state changes as a sequence of events — core to the eridu-tech toolkit.",
    includeInResume: true,
  },
  // Frontend
  React: {
    name: "React",
    description:
      "Component-based UI library for building interactive, stateful web interfaces.",
    includeInResume: true,
  },
  "Next.js": {
    name: "Next.js",
    description:
      "React framework with SSR, static generation, and file-based routing — it powers this portfolio.",
    includeInResume: true,
  },
  Redux: {
    name: "Redux",
    description:
      "Predictable state container for managing complex client-side application state.",
    includeInResume: true,
  },
  PWA: {
    name: "PWA",
    description:
      "Building installable, offline-capable web apps with service workers and web manifests.",
    includeInResume: true,
  },
  "Webpack 5": {
    name: "Webpack 5",
    description:
      "Module bundler for optimizing and transforming frontend assets.",
    includeInResume: true,
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapidly building custom, responsive designs.",
    includeInResume: true,
  },
  CSS: {
    name: "CSS",
    description:
      "Core styling language for laying out and designing responsive web pages.",
    includeInResume: true,
  },
  "TanStack Query": {
    name: "TanStack Query",
    description:
      "Server-state management for React — caching, synchronization, and background updates.",
    includeInResume: true,
  },
  "TanStack Start": {
    name: "TanStack Start",
    description:
      "Full-stack React framework with type-safe routing and server functions.",
    includeInResume: true,
  },
  "Front-End Development": {
    name: "Front-End Development",
    description:
      "Building responsive, accessible user interfaces and client-side experiences.",
    includeInResume: true,
  },
  "Full-Stack Development": {
    name: "Full-Stack Development",
    description:
      "Working across the entire stack — from databases and APIs to user interfaces.",
    includeInResume: true,
  },
  "React Native": {
    name: "React Native",
    description:
      "Framework for building native mobile apps using React and JavaScript.",
    includeInResume: true,
  },
  Svelte: {
    name: "Svelte",
    description:
      "Compiler-driven UI framework that turns declarative components into highly efficient vanilla JavaScript.",
    includeInResume: true,
  },
  Bootstrap: {
    name: "Bootstrap",
    description:
      "Popular CSS framework for quickly building responsive, mobile-first layouts.",
    includeInResume: true,
  },
  "Materialize CSS": {
    name: "Materialize CSS",
    description:
      "CSS framework implementing Google's Material Design for modern, responsive UIs.",
    includeInResume: true,
  },
  HTML5: {
    name: "HTML5",
    description:
      "Semantic markup and modern web APIs for structuring accessible web content.",
    includeInResume: true,
  },
  WordPress: {
    name: "WordPress",
    description:
      "Open-source CMS and blogging platform for building content-driven websites.",
    includeInResume: true,
  },
  SEO: {
    name: "SEO",
    description:
      "Optimizing sites to improve visibility and ranking in search engine results.",
    includeInResume: true,
  },
  "Content Management Systems (CMS)": {
    name: "Content Management Systems (CMS)",
    description:
      "Building and managing content-driven sites with tools like WordPress and Payload.",
    includeInResume: true,
  },
  npm: {
    name: "npm",
    description:
      "Node.js package manager for installing, publishing, and managing JavaScript dependencies.",
    includeInResume: true,
  },
  // Databases
  PostgreSQL: {
    name: "PostgreSQL",
    description:
      "Relational database I use for robust, ACID-compliant data storage.",
    includeInResume: true,
  },
  MongoDB: {
    name: "MongoDB",
    description: "Document database for flexible, schema-less data models.",
    includeInResume: true,
  },
  SQLite: {
    name: "SQLite",
    description:
      "Embedded, zero-config database ideal for local and lightweight storage.",
    includeInResume: true,
  },
  MySQL: {
    name: "MySQL",
    description:
      "Relational database I use for structured, SQL-based data storage at scale.",
    includeInResume: true,
  },
  // Testing & DevOps
  Jest: {
    name: "Jest",
    description: "JavaScript testing framework for unit and integration tests.",
    includeInResume: true,
  },
  Vitest: {
    name: "Vitest",
    description:
      "Fast, Vite-native testing framework for modern TypeScript projects.",
    includeInResume: true,
  },
  Mocha: {
    name: "Mocha",
    description: "Flexible JavaScript test framework with rich reporting.",
    includeInResume: true,
  },
  Chai: {
    name: "Chai",
    description:
      "Assertion library that pairs with Mocha for expressive test expectations.",
    includeInResume: true,
  },
  Playwright: {
    name: "Playwright",
    description:
      "End-to-end browser testing across Chromium, Firefox, and WebKit.",
    includeInResume: true,
  },
  "Test Automation": {
    name: "Test Automation",
    description:
      "Designing and maintaining automated test suites for reliable, regression-safe code.",
    includeInResume: true,
  },
  Docker: {
    name: "Docker",
    description:
      "Containerization for reproducible environments and CI/CD pipelines.",
    includeInResume: true,
  },
  AWS: {
    name: "AWS",
    description:
      "Cloud platform for scalable hosting, storage, and infrastructure.",
    includeInResume: true,
  },
  "GitHub Actions": {
    name: "GitHub Actions",
    description: "CI/CD automation for build, test, and deploy pipelines.",
    includeInResume: true,
  },
  DevOps: {
    name: "DevOps",
    description:
      "Automating and streamlining the build, test, and deployment lifecycle.",
    includeInResume: true,
  },
  GitHub: {
    name: "GitHub",
    description:
      "Collaborative development platform for hosting, reviewing, and shipping code.",
    includeInResume: true,
  },
  Git: {
    name: "Git",
    description:
      "Version control for tracking changes, branching, and collaborating on code.",
    includeInResume: true,
  },
  "Unit Tests": {
    name: "Unit Tests",
    description:
      "Testing individual functions and modules in isolation for correctness.",
    includeInResume: true,
  },
  "Integration Tests": {
    name: "Integration Tests",
    description:
      "Verifying that multiple modules and services work together correctly.",
    includeInResume: true,
  },
  "Software Testing": {
    name: "Software Testing",
    description:
      "Designing and executing test strategies to ensure software quality and reliability.",
    includeInResume: true,
  },
  E2E: {
    name: "E2E",
    description:
      "End-to-end testing of complete user flows across the full application stack.",
    includeInResume: true,
  },
  SSH: {
    name: "SSH",
    description: "Secure remote access and server management.",
    includeInResume: true,
  },
  VPS: {
    name: "VPS",
    description:
      "Deploying and operating applications on virtual private servers.",
    includeInResume: true,
  },
  Nginx: {
    name: "Nginx",
    description:
      "Web server and reverse proxy for routing and serving production apps.",
    includeInResume: true,
  },
  // Architecture
  "Adapter Pattern": {
    name: "Adapter Pattern",
    description:
      "Design pattern that unifies multiple backends behind one common interface — the foundation of the eridu-tech architecture.",
    includeInResume: true,
  },
  "Modular Monoliths": {
    name: "Modular Monoliths",
    description:
      "Monolith architecture organized into clear modules for maintainability without distributed complexity.",
    includeInResume: true,
  },
  "Majestic Monoliths": {
    name: "Majestic Monoliths",
    description:
      "A modular monolith designed to stay simple and deployable as it grows.",
    includeInResume: true,
  },
  "Service Pattern": {
    name: "Service Pattern",
    description:
      "Structuring business logic into focused, reusable service layers.",
    includeInResume: true,
  },
  "Clean Architecture": {
    name: "Clean Architecture",
    description:
      "Layering business logic to keep systems maintainable, testable, and framework-independent.",
    includeInResume: true,
  },
  "Event Bus": {
    name: "Event Bus",
    description:
      "Publish/subscribe backbone for decoupling components and driving async workflows.",
    includeInResume: true,
  },
  "Software Architecture": {
    name: "Software Architecture",
    description:
      "Designing high-level system structure, trade-offs, and scalability from the ground up.",
    includeInResume: true,
  },
  "Event Bus System": {
    name: "Event Bus System",
    description:
      "A publish/subscribe event backbone for decoupling components — core to the eridu-tech toolkit.",
    includeInResume: true,
  },
  "Redis Pub/Sub": {
    name: "Redis Pub/Sub",
    description:
      "Real-time publish/subscribe messaging via Redis for decoupled service communication.",
    includeInResume: true,
  },
  "Cache System": {
    name: "Cache System",
    description:
      "Designing layered caching strategies to speed up reads and reduce load.",
    includeInResume: true,
  },
  "Lock System": {
    name: "Lock System",
    description:
      "Implementing distributed locking to safely coordinate access to shared resources.",
    includeInResume: true,
  },
  Caching: {
    name: "Caching",
    description:
      "Storing frequently accessed data in memory to speed up reads and reduce load.",
    includeInResume: true,
  },
  "Distributed Locking": {
    name: "Distributed Locking",
    description:
      "Coordinating access to shared resources across processes and instances.",
    includeInResume: true,
  },
  "Rate Limiting": {
    name: "Rate Limiting",
    description:
      "Controlling request throughput to protect APIs from abuse and overload.",
    includeInResume: true,
  },
  "Circuit Breakers": {
    name: "Circuit Breakers",
    description:
      "Failure-handling pattern that prevents cascading failures on repeated errors.",
    includeInResume: true,
  },
  // From projects
  Redis: {
    name: "Redis",
    description:
      "In-memory data store used for caching, distributed locking, and real-time pub/sub.",
    includeInResume: true,
  },
  tRPC: {
    name: "tRPC",
    description:
      "End-to-end typesafe APIs for full-stack TypeScript applications.",
    includeInResume: true,
  },
  "React Query": {
    name: "React Query",
    description:
      "Server-state library for React — caching and synchronizing async data.",
    includeInResume: true,
  },
  "Mantine UI": {
    name: "Mantine UI",
    description:
      "Accessible React component library with production-ready UI primitives.",
    includeInResume: true,
  },
  "Google OAuth": {
    name: "Google OAuth",
    description:
      "Third-party authentication via Google's OAuth 2.0 for seamless sign-in.",
    includeInResume: true,
  },
  Compilers: {
    name: "Compilers",
    description:
      "Building interpreters, parsers, and language tooling from scratch.",
    includeInResume: true,
  },
  Parsing: {
    name: "Parsing",
    description:
      "Recursive descent parsing and grammar design for custom languages.",
    includeInResume: true,
  },
  // From experience
  "Payload CMS": {
    name: "Payload CMS",
    description: "Headless CMS for building content-driven applications.",
    includeInResume: true,
  },
  Liquid: {
    name: "Liquid",
    description: "Shopify's template language for dynamic storefront themes.",
    includeInResume: true,
  },
  Remix: {
    name: "Remix",
    description:
      "Full-stack React framework with nested routing and server rendering.",
    includeInResume: true,
  },
  Shopify: {
    name: "Shopify",
    description: "E-commerce platform for theme and app development.",
    includeInResume: true,
  },
  Vendure: {
    name: "Vendure",
    description: "Headless commerce framework for custom e-commerce solutions.",
    includeInResume: true,
  },
  C: {
    name: "C",
    description:
      "Low-level systems language for performance-critical, compiled code.",
    includeInResume: true,
  },
  AssemblyScript: {
    name: "AssemblyScript",
    description: "TypeScript-like language that compiles to WebAssembly.",
    includeInResume: true,
  },
  Emscripten: {
    name: "Emscripten",
    description: "Toolchain that compiles C/C++ to WebAssembly.",
    includeInResume: true,
  },
  WebAssembly: {
    name: "WebAssembly",
    description:
      "Binary instruction format for high-performance in-browser execution.",
    includeInResume: true,
  },
  Python: {
    name: "Python",
    description:
      "Versatile scripting language for tooling, data, and automation.",
    includeInResume: true,
  },
  Matplotlib: {
    name: "Matplotlib",
    description: "Python plotting library for data visualization.",
    includeInResume: true,
  },
  Pandas: {
    name: "Pandas",
    description: "Python library for data manipulation and analysis.",
    includeInResume: true,
  },
  "SDK Development": {
    name: "SDK Development",
    description: "Building client libraries and SDKs for platform APIs.",
    includeInResume: true,
  },
  JavaScript: {
    name: "JavaScript",
    description:
      "Core language of the web — the foundation for all frontend work.",
    includeInResume: true,
  },
  // Languages
  Lua: {
    name: "Lua",
    description:
      "Lightweight, embeddable scripting language for game logic and extensible applications.",
    includeInResume: true,
  },
  "C#": {
    name: "C#",
    description:
      "Object-oriented language for building applications on .NET and game development with Unity.",
    includeInResume: true,
  },
  ".NET Framework": {
    name: ".NET Framework",
    description:
      "Microsoft's framework for building robust, enterprise-grade applications.",
    includeInResume: true,
  },
  Java: {
    name: "Java",
    description:
      "Mature, object-oriented language for cross-platform and enterprise applications.",
    includeInResume: true,
  },
  "C++": {
    name: "C++",
    description:
      "Systems language with manual memory control for performance-critical software.",
    includeInResume: true,
  },
  // Documentation
  "Technical Documentation": {
    name: "Technical Documentation",
    description:
      "Writing clear, accurate guides and references that help teams ship and maintain software.",
    includeInResume: true,
  },
  "Software Documentation": {
    name: "Software Documentation",
    description:
      "Creating and maintaining docs that make codebases, APIs, and tools easy to understand.",
    includeInResume: true,
  },
  "Project Documentation": {
    name: "Project Documentation",
    description:
      "Documenting project plans, architecture, and processes for effective collaboration.",
    includeInResume: true,
  },
  // Computer science & soft skills
  "Computer Science": {
    name: "Computer Science",
    description:
      "Strong foundation in algorithms, data structures, and core CS principles.",
    includeInResume: true,
  },
  "Data Structures": {
    name: "Data Structures",
    description:
      "Designing and applying efficient data structures to solve real problems.",
    includeInResume: true,
  },
  "Analytical Skills": {
    name: "Analytical Skills",
    description:
      "Breaking down complex problems and making data-informed decisions.",
    includeInResume: true,
  },
  "Problem Solving": {
    name: "Problem Solving",
    description:
      "Approaching challenges methodically to find robust, effective solutions.",
    includeInResume: true,
  },
  Communication: {
    name: "Communication",
    description:
      "Explaining technical concepts clearly to technical and non-technical audiences.",
    includeInResume: true,
  },
  Teamwork: {
    name: "Teamwork",
    description:
      "Collaborating effectively with cross-functional teams to deliver shared goals.",
    includeInResume: true,
  },
  "Stress Management": {
    name: "Stress Management",
    description:
      "Staying focused and productive under pressure in fast-paced environments.",
    includeInResume: true,
  },
} satisfies Record<string, Skill>;

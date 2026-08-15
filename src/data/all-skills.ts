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
  Bun: {
    name: "Bun",
    description:
      "Fast all-in-one JavaScript runtime with a built-in bundler, test runner, and package manager.",
  },
  Deno: {
    name: "Deno",
    description:
      "Secure, modern JavaScript/TypeScript runtime with built-in tooling and web-standard APIs.",
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
  CSS: {
    name: "CSS",
    description:
      "Core styling language for laying out and designing responsive web pages.",
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
  MySQL: {
    name: "MySQL",
    description:
      "Relational database I use for structured, SQL-based data storage at scale.",
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
  "Test Automation": {
    name: "Test Automation",
    description:
      "Designing and maintaining automated test suites for reliable, regression-safe code.",
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
  // Architecture
  "Adapter Pattern": {
    name: "Adapter Pattern",
    description:
      "Design pattern that unifies multiple backends behind one common interface — the foundation of the eridu-tech architecture.",
  },
  "Modular Monoliths": {
    name: "Modular Monoliths",
    description:
      "Monolith architecture organized into clear modules for maintainability without distributed complexity.",
  },
  "Majestic Monoliths": {
    name: "Majestic Monoliths",
    description:
      "A modular monolith designed to stay simple and deployable as it grows.",
  },
  "Service Pattern": {
    name: "Service Pattern",
    description:
      "Structuring business logic into focused, reusable service layers.",
  },
  "Clean Architecture": {
    name: "Clean Architecture",
    description:
      "Layering business logic to keep systems maintainable, testable, and framework-independent.",
  },
  "Event Bus": {
    name: "Event Bus",
    description:
      "Publish/subscribe backbone for decoupling components and driving async workflows.",
  },
  Caching: {
    name: "Caching",
    description:
      "Storing frequently accessed data in memory to speed up reads and reduce load.",
  },
  "Distributed Locking": {
    name: "Distributed Locking",
    description:
      "Coordinating access to shared resources across processes and instances.",
  },
  "Rate Limiting": {
    name: "Rate Limiting",
    description:
      "Controlling request throughput to protect APIs from abuse and overload.",
  },
  "Circuit Breakers": {
    name: "Circuit Breakers",
    description:
      "Failure-handling pattern that prevents cascading failures on repeated errors.",
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
  "Google OAuth": {
    name: "Google OAuth",
    description:
      "Third-party authentication via Google's OAuth 2.0 for seamless sign-in.",
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

# Portfolio

A modern portfolio website built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS. It features a landing page, about section, projects showcase, and contact form with responsive design and dark mode support.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create an optimized production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable React components (Navbar, Hero, About, Projects, Contact, Footer)
- `src/data/projects.ts` — Project, skill, and social link data
- `public/` — Static assets

## Customization

- **Personal details**: Update your name, bio, and links in `src/components/` and `src/data/projects.ts`.
- **Profile image**: Replace `public/avatar.svg` with your own photo (keep the same filename or update the `src` in `src/components/Hero.tsx`).
- **Projects**: Edit the `projects` array in `src/data/projects.ts`.
- **Skills**: Edit the `skills` and `marqueeItems` arrays in `src/data/projects.ts`.
- **Email**: Replace `hello@example.com` in `src/data/projects.ts` and `src/components/Contact.tsx`.
- **Theme**: Custom colors/animations live in `src/app/globals.css` (gradient accents, keyframes, grid background).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

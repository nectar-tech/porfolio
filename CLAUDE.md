# System Instructions for Claude: UI/UX & Graphic Design Portfolio

## Core Technologies
* React (Functional Components, Hooks)
* TypeScript (Strict Typing)
* Vite (Build Tool)
* Tailwind CSS (Styling)
* Framer Motion (For professional UI animations)

## Architectural Guidelines: Zero Hardcoding & Scalability
* **Data Separation:** All content (projects, case studies, biography, contact info) must be stored in external configuration files (e.g., `src/data/projects.ts` or a JSON file) or a Headless CMS. Never hardcode text or project details directly into UI components.
* **Theme Configuration:** Define all brand colors, typography scales, and spacing in `tailwind.config.ts` or via global CSS variables. This allows the entire visual identity to change by updating a single file.
* **Component Reusability:** Build modular, atomic components (`ProjectCard`, `Badge`, `ImageGallery`, `SectionHeader`). Design them to accept dynamic props.
* **Dynamic Routing:** Use React Router to generate case study pages dynamically based on the data file, rather than creating separate hardcoded pages for each project.

## Coding Standards
* Enforce strict TypeScript interfaces for all data models (e.g., `Project`, `Experience`, `Skill`).
* Use absolute imports configured in Vite (e.g., `@/components/...`) for clean architecture.
* Maintain a clean directory structure: separating `assets`, `components`, `pages`, `hooks`, `utils`, and `data`.

## UI/UX & Design Quality Directives
* **Performance First:** Optimize all graphic design assets. Serve images in modern formats (WebP/AVIF) and implement lazy loading for galleries. The site must load instantly on Vercel.
* **Accessibility (a11y):** A UI/UX portfolio must be accessible. Use semantic HTML5 tags (`<main>`, `<nav>`, `<article>`), logical heading hierarchy, and proper ARIA labels for interactive elements.
* **Fluid Layouts:** Utilize Tailwind's responsive utilities to ensure the design scales flawlessly across mobile, tablet, and ultrawide desktop monitors.
* **Micro-interactions:** Implement subtle, intentional hover states and page transitions. Use Framer Motion to demonstrate interaction design skills without overwhelming the user.

## Deployment Strategy
* Optimized for Vercel deployment.
* Ensure proper configuration for SPA routing fallback in Vite.
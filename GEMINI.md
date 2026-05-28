# Project Overview: my-profile

This is a modern web application built with [Next.js](https://nextjs.org), designed for a personal profile or portfolio. It leverages the latest features of the Next.js App Router for efficient routing and server-side rendering.

## Tech Stack

- **Framework:** [Next.js 16.2.3](https://nextjs.org) (App Router - *Note: This version may have significant differences from earlier versions.*)
- **Library:** [React 19](https://react.dev)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Linting:** [ESLint](https://eslint.org)

> [!IMPORTANT]
> This project uses Next.js 16.2.3, which may contain breaking changes and new conventions compared to previous versions. Refer to `AGENTS.md` and the project's internal documentation if available for specific guidance.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

### Linting

Run ESLint to check for code quality:

```bash
npm run lint
```

## Project Structure

- `app/`: Contains the routes, layouts, and components for the application (App Router).
  - `layout.tsx`: The root layout shared across all pages.
  - `page.tsx`: The main landing page.
  - `globals.css`: Global CSS styles, including Tailwind directives.
- `public/`: Static assets like images and fonts.
- `next.config.ts`: Configuration for Next.js.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Project dependencies and scripts.

## Development Conventions

- **Component Patterns:** Use Functional Components with TypeScript interfaces for props.
- **Styling:** Prefer Tailwind CSS utility classes for styling components.
- **File Naming:** Use `kebab-case` for file and directory names where possible, or follow Next.js conventions (e.g., `page.tsx`, `layout.tsx`).
- **Type Safety:** Always define types for props, state, and API responses to maintain high code quality.

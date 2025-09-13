enfinity-2025

Project summary

This repository contains a Next.js frontend application written in TypeScript. It provides a collection of reusable UI components, layout, and application pages suitable for building a modern website.

Key features

- Next.js app directory with server and client components
- TypeScript configuration and lint-ready structure
- Reusable component library under `components/ui`
- Top-level components in `components/` (site header, footer, sponsors, orbit-scene, etc.)
- Custom hooks in `hooks/` and small utilities in `lib/`
- Static assets in `public/`

Quickstart

1. Install dependencies (using pnpm):

   pnpm install

2. Start development server:

   pnpm dev

3. Build and run production locally:

   pnpm build
   pnpm start

Repository layout

- `app/` — Next.js app entry points and global styles
- `components/` — High-level and shared UI components
- `components/ui/` — UI primitives and design system building blocks
- `hooks/` — Reusable React hooks
- `lib/` — Utility functions
- `public/` — Static assets
- `styles/` — Global CSS

Notes

- The `pnpm-lock.yaml` file is included to ensure reproducible installs.
- Sensitive files such as `.env` and private keys should not be committed.

License

Add a license file or update this README with license details as needed.

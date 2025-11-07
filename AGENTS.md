# Repository Guidelines

## Project Structure & Module Organization
App Router pages live in `app/`, with subfolders such as `about/`, `skills/`, `projects/`, `experience/`, and `contact/` each exporting `page.tsx` while inheriting shared chrome from `app/layout.tsx`. Reusable TSX primitives belong in `components/`; add new UI there instead of duplicating JSX inside route files. Global theming stays in `styles/globals.css` and `tailwind.config.ts`, static assets sit in `public/`, and resume source files (PDFs plus `_extracted.txt`) remain in `resume/` for scripts such as `scripts/extract-resume.js`. Treat `.next/` as disposable build output.

## Build, Test, and Development Commands
Run `npm install` after pulling dependencies to keep lockfile parity. Use `npm run dev` for hot reload, `npm run build` for optimized output, and `npm run start` to preview the production build. Gate every change with `npm run lint` (ESLint + Next rules) and `npm run typecheck` (strict `tsc --noEmit`).

## Coding Style & Naming Conventions
All UI is TypeScript/TSX with ES modules. Prettier enforces 2-space indentation, 100-character width, single quotes, ES5-safe trailing commas, and semicolons; run `npx prettier --write "<path>"` on touched files when needed. Name components and files in PascalCase (`ProfileImage.tsx`), utilities in camelCase, and static assets in kebab-case. Group Tailwind classes by layout -> spacing -> color and keep any ESLint overrides inside `.eslintrc.json`.

## Testing Guidelines
No unit-test harness exists yet, so `npm run lint` and `npm run typecheck` are mandatory before committing. When adding automated coverage, colocate specs in `__tests__/` next to the subject (for example `components/__tests__/Card.test.tsx`) and favor descriptive names like `rendersFeaturedProjects`. Document manual regression steps (pages touched, breakpoints checked) inside the PR description until automated checks ship.

## Commit & Pull Request Guidelines
Initialize Git (if absent) and follow Conventional Commits summaries such as `feat: add timeline animation`. Expand in the body with affected routes or components plus any linked issue. PRs must include a concise overview, verification steps (`npm run dev`, `npm run lint`, etc.), screenshots or GIFs for visual work, and a note if files under `resume/` changed. Rebase onto `main` before requesting review to avoid churn.

## Security & Configuration Notes
Resume PDFs carry personal data; keep them inside `resume/` and never move them to `public/` or plain-text logs. Secrets live in `.env.local`; do not commit them. Any new scripts should accept resume paths via CLI arguments instead of hardcoding absolute directories.
# Codex Notes

## Project Layout
- App Router: route folders under `app/` each export `page.tsx`; chrome lives in `app/layout.tsx`.
- Shared UI/components belong in `components/`; keep duplication out of route files.
- Global styling lives in `styles/globals.css` and `tailwind.config.ts`; assets go in `public/`.
- Resume data (PDF plus `_extracted.txt`) must remain in `resume/` for scripts like `scripts/extract-resume.js`.

## Tooling & Commands
- Install deps with `npm install`; run `npm run dev` for local dev, `npm run build` for prod build, `npm run start` to preview.
- Required checks before commits: `npm run lint` (Next + ESLint rules) and `npm run typecheck` (`tsc --noEmit`).
- Prettier standard: 2 spaces, 100-char width, single quotes, trailing commas, semicolons. Use `npx prettier --write "<path>"` on touched files.

## Coding Conventions
- TypeScript/TSX only, ES modules everywhere.
- Components/files in PascalCase (e.g., `ProfileImage.tsx`); utilities camelCase; assets kebab-case.
- Tailwind classes grouped layout → spacing → color; keep ESLint overrides in `.eslintrc.json`.
- Add concise comments only when logic is non obvious.

## Testing & Verification
- No automated unit tests yet; document manual regression steps in PR descriptions.
- Future specs should live in `__tests__/` beside the subject (e.g., `components/__tests__/Card.test.tsx`).

## Git & PR Hygiene
- Conventional Commits (e.g., `feat: add timeline animation`).
- PR body: overview, verification steps (`npm run dev`, `npm run lint`, `npm run typecheck`), screenshots for UI, call out any `resume/` changes. Rebase onto `main` before review.

## Security/Sensitive Data
- Resume PDFs contain personal data; never move them outside `resume/` or log contents.
- Secrets go in `.env.local`; never commit. New scripts should accept resume paths via CLI args, not hard-coded absolute paths.

## Known Pitfalls
- If Next.js warns about outdated version or you hit `Cannot read properties of undefined (reading 'call')`, delete `.next`, `node_modules`, and `package-lock.json`, then reinstall (`npm install`) before running `npm run dev` again. This prevents stale chunks compiled against older Next versions.
- Current key versions: `next@14.2.33`, `react@18.2.0`, `react-dom@18.2.0`, `framer-motion@11.0.0`. Keep them aligned unless there is a coordinated upgrade.

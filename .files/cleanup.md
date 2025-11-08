## 🧹 Codebase Cleanup, Spacing & Structure Audit (Industry Standard)

> **Objective:** Deliver a lean, consistent, and accessible codebase with clean structure, standardized spacing, unified tokens (colors/typography), and zero dead code. Final build must be tree-shakable with minimized bundles.

---

### 0) Pre-Flight (Automated Gates)

* [ ] Enforce **zero warnings**:

  * `npm run lint && npm run typecheck` (alias to `eslint --max-warnings=0` and `tsc --noEmit`)
  * `npm run format:check` (Prettier)
  * If using CSS/Tailwind: `npm run stylelint` (Stylelint)
* [ ] Configure CI to fail on any lint/type/style warnings.

---

### 1) Remove Unused Code, Assets, and Dependencies

* [ ] Delete orphaned files (components, hooks, utils, test stubs, assets) **not imported** anywhere.
* [ ] Remove commented code, dead variables, redundant imports/exports.
* [ ] Audit dependencies:

  * `npx depcheck` (unused deps)
  * `npx knip` or `npx ts-prune` (unused exports)
  * Fix and remove unused packages; pin versions.
* [ ] Verify no circular imports (`madge --circular src` if available).

---

### 2) Modernize Syntax & Patterns

* [ ] Prefer **functional components + hooks**; remove legacy lifecycles.
* [ ] Standardize on **ES202x** (const/let, arrow fns, destructuring, optional chaining, nullish coalescing).
* [ ] Remove `console.*` (except guarded debug), experimental flags, and obsolete polyfills.
* [ ] Centralize shared logic into **reusable utilities** and **custom hooks**.

---

### 3) Design Tokens: Colors, Typography, Spacing

* [ ] Maintain a single **tokens file** (e.g., `src/styles/tokens.(ts|css)` or Tailwind theme):

  * Colors: define **semantic tokens** (`--color-bg`, `--color-surface`, `--color-text-muted`, `--brand-primary`, `--accent-positive`, `--accent-warning`), avoiding raw hex usage across the app.
  * Typography scale: `xs, sm, base, lg, xl, 2xl, 3xl...` mapped to rems with documented usage for headings, body, and captions.
  * Spacing scale (industry standard 4-pt): `0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64` (Tailwind example: `gap-6` ≈ 24px).
* [ ] **Remove Unused Colors**:

  * Replace all hardcoded hex values with semantic tokens.
  * Eliminate duplicate or near-duplicate colors.
  * Clean Tailwind config to include only used palette entries.
* [ ] **Color Audit:** Run search for non-token hex (`#[0-9a-fA-F]{3,8}`) and replace them with tokens.

---

### 4) Spacing & Layout (Whitespace / Vertical Rhythm)

* [ ] Establish a **content container**: `max-w-[72ch–80ch]` for long-form text, centered with `px-4 md:px-6`.
* [ ] Use **consistent section spacing**:

  * Section padding: `py-12 md:py-16`.
  * Internal stacks: `space-y-4/6/8` (use one standard scale).
* [ ] **Grid & Layout Standards:**

  * Default grid gaps: `gap-6` (24px) for cards; `gap-8` (32px) for major sections.
  * Avoid negative margins; rely on `gap-*`, `space-*`, and `mt-*` utilities.
* [ ] **Paragraph Rhythm:**

  * Apply `mt-6` between paragraphs (as in About page).
  * Never use `<br/>` for spacing.
  * Restrict readable width with `prose` or `max-w-prose`.
* [ ] **Card & Component Padding:**

  * Use consistent `p-4 md:p-6` padding.
  * Uniform shadow elevation (`shadow-md`) and border radius (`rounded-xl`).
* [ ] Align hero and section headers with consistent baselines (`mb-6`).

---

### 5) Typography & Hierarchy

* [ ] Maintain a **semantic heading ladder** (single `h1` per page, `h2` for major sections, `h3` for subsections).
* [ ] Apply consistent **line-height** (`leading-relaxed` for body, `leading-tight` for headers).
* [ ] Guarantee **contrast ratios** meeting WCAG AA+ standards.
* [ ] Keep readable measure (~65–75ch) for long-form text.

---

### 6) Component Architecture & Folder Structure

* [ ] Align with standard modular structure:

  ```
  src/
    components/   # Presentational UI components
    features/     # Feature slices: logic + UI
    hooks/
    utils/
    styles/       # Global styles, tokens, tailwind config
    pages/        # Route-level views
    assets/       # Images, fonts, static content
    types/        # Global type declarations
  ```
* [ ] Co-locate tests and stories with components (`*.test.tsx`, `*.stories.tsx`).
* [ ] Use **barrel files** (`index.ts`) judiciously—avoid dependency masking.
* [ ] Keep UI components stateless; shift data/state logic to containers or hooks.
* [ ] **If structure or hierarchy changes:**

  * Refactor related imports, file paths, and component references accordingly.
  * Update routing, context providers, and store references to match new hierarchy.
  * Validate that **no build or runtime errors occur** after restructuring.
  * Perform `npm run build` and verify successful compilation and proper app functionality.

---

### 7) CSS / Tailwind Hygiene

* [ ] Remove unused classes and ensure Tailwind **content** paths are accurate for purging.
* [ ] Replace inline styles with tokens or reusable utility classes.
* [ ] Standardize shadows (`shadow-sm|md|lg`) and border radii (`rounded-lg|xl`).
* [ ] Avoid ad-hoc `box-shadow` or `margin` hacks.
* [ ] Run: `npx stylelint "src/**/*.{css,scss}" --fix` and `stylelint --report-needless-disables`.

---

### 8) Structural Consistency & Layout Standards

* [ ] Ensure **consistent vertical rhythm** across all pages and sections.
* [ ] Balance visual spacing between content blocks (no cramped or oversized gaps).
* [ ] Align margins and padding to grid and token system.
* [ ] Verify responsive breakpoints (`sm`, `md`, `lg`, `xl`) are applied uniformly.
* [ ] Normalize card widths, grid gaps, and hero heights across templates.
* [ ] When structure or hierarchy updates are required, ensure all related code references are updated (imports, routes, props, and state logic) to prevent breaking changes.

---

### 9) Accessibility (A11y) & Semantics

* [ ] Proper semantic tags: `<header>`, `<main>`, `<nav>`, `<footer>`.
* [ ] Ensure keyboard navigation and visible focus states.
* [ ] Provide `alt` text for all images and descriptive `aria-labels` where needed.

---

### ✅ Final Deliverable

A **refactored, tokenized, and visually consistent codebase**:

* No unused syntax, expressions, or color tokens.
* Proper and balanced spacing across all sections.
* Modular folder structure meeting industry standards.
* Tree-shakable, optimized build with clean and maintainable code.
* Safe restructuring process with verified dependency updates and zero runtime breakages.

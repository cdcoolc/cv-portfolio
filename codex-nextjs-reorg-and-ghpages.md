# Codex Playbook: Reorganize a Next.js Project & Deploy to GitHub Pages

> **Objective:** Reorganize a messy Next.js codebase into a clean, production‑ready structure and safely update code/routing so nothing breaks. Then configure static export and deploy to **GitHub Pages**.

> **Assumptions:** Next.js 13/14 with the **App Router** (`/app`). If your project still uses the legacy **Pages Router** (`/pages`), see the adapter notes in **Step 7**.

---

## 0) Read Me First — Safety & Backups

1. **Create a clean branch** before any moves:
   ```bash
   git checkout -b chore/next-reorg
   ```
2. **Snapshot current state** (optional tag):
   ```bash
   git add -A && git commit -m "pre-reorg snapshot"
   git tag pre-reorg
   ```
3. **Rule:** Move files **incrementally** and run `npm run build` after each major section.

---

## 1) Target Folder Structure (App Router)

```
.
├─ app/
│  ├─ (marketing)/                # optional route group for public pages
│  │  ├─ page.tsx                 # “/” homepage (or move to app/page.tsx)
│  │  └─ layout.tsx
│  ├─ (site)/                     # optional route group for app pages
│  │  └─ layout.tsx
│  ├─ favicon.ico
│  ├─ globals.css                 # imports from /styles if preferred
│  ├─ layout.tsx                  # root layout (HTML, <body> providers)
│  └─ page.tsx                    # if using a simple root route
├─ components/
│  ├─ ui/                         # low-level presentational
│  ├─ common/                     # shared building blocks
│  └─ layout/                     # nav, footer, shells
├─ public/
│  ├─ images/                     # static assets
│  └─ icons/
├─ styles/
│  ├─ globals.css
│  └─ variables.css
├─ lib/                           # framework-agnostic utilities
│  ├─ api/                        # API clients/fetchers
│  ├─ data/                       # loaders, parsers
│  └─ utils/                      # formatters, helpers
├─ hooks/
├─ types/
├─ app.d.ts                       # ambient types (optional)
├─ next.config.mjs
├─ tsconfig.json
├─ package.json
├─ postcss.config.js              # if using Tailwind/PostCSS
├─ tailwind.config.ts             # optional
└─ .github/workflows/gh-pages.yml # CI deploy to GitHub Pages
```

> **Tip:** The `(marketing)` / `(site)` folders are **route groups** (they **don’t** affect the URL). Use them to cluster routes logically.

---

## 2) Move Files into the New Structure

> Perform these moves in your editor/IDE or via CLI. After each block, run `npm run build` to catch issues early.

### A. Pages/Routes → `/app`
- If your entry page is `src/pages/index.tsx` or `src/app/page.tsx`, decide your home:
  - **App Router default:** `app/page.tsx`
  - If you have a marketing folder, place landing page at `app/(marketing)/page.tsx`.

- For each former page (legacy or scattered files), convert to **App Router**:
  - `about.tsx` → `app/about/page.tsx`
  - `blog/index.tsx` → `app/blog/page.tsx`
  - `blog/[slug].tsx` → `app/blog/[slug]/page.tsx`
  - Nesting rules:
    - `pages/docs/guide.tsx` → `app/docs/guide/page.tsx`
    - `pages/docs/[id].tsx` → `app/docs/[id]/page.tsx`

- **Layouts:**
  - Create or move a root layout to `app/layout.tsx`.
  - If a section has its own chrome, add `app/(section)/layout.tsx`.

### B. Components → `/components`
- Presentational/UI pieces → `components/ui/`
- Composite blocks (cards, feature sections) → `components/common/`
- Site chrome (Header, Footer, Sidebar, Shells) → `components/layout/`

### C. Static Assets → `/public`
- Move all images, logos, favicons from ad-hoc folders into `public/images/` or `public/icons/`.
- **Update imports/refs** (see Step 4). Example:
  - Old: `<img src="/assets/logo.svg" />`
  - New: `<img src="/images/logo.svg" />`

### D. Styles → `/styles` (or keep in `app/globals.css`)
- Centralize global CSS in `app/globals.css` (imported by `app/layout.tsx`) or keep a thin `globals.css` in `app/` that imports `styles/globals.css`.
- Component-scoped styles remain as CSS Modules next to components.

### E. Utilities/Logic → `/lib`
- Move fetchers, formatters, validators, constants to `lib/`.
- Group: `lib/api/`, `lib/data/`, `lib/utils/`.

### F. Types & Hooks
- Custom hooks → `/hooks`
- Type definitions & interfaces → `/types` (+ `app.d.ts` if needed).

---

## 3) Update Next.js Configuration for Static Export (GitHub Pages)

GitHub Pages serves **static** files only. We must **export** the site.

Create or update **`next.config.mjs`**:

```js
/** @type {import('next').NextConfig} */
const isCI = process.env.CI === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] // e.g., "my-repo"

const basePath = process.env.NEXT_BASE_PATH || (isCI && repo ? `/${repo}` : '')
const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig = {
  output: 'export',            // enables `next export` (static)
  images: {
    unoptimized: true          // required for static export
  },
  basePath,                    // needed for GitHub Pages
  assetPrefix,                 // ensures assets load under /<repo>/
  trailingSlash: true,         // optional: friendlier static paths
}

export default nextConfig
```

> In GitHub Actions we’ll set `NEXT_BASE_PATH` automatically. Locally, paths resolve to root (no basePath).

---

## 4) Fix Imports, Asset Paths, and Routing

### A. Update Import Aliases
**`tsconfig.json`** (or `jsconfig.json`) — add path aliases to match the new structure:

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/app/*": ["app/*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/styles/*": ["styles/*"],
      "@/hooks/*": ["hooks/*"],
      "@/types/*": ["types/*"]
    }
  }
}
```

Then refactor imports:
- Old: `import Button from "../components/Button"`
- New: `import Button from "@/components/ui/Button"`

> **Codex mass replace:** Search for common patterns and replace using the new aliases.

### B. Update Static Asset Refs
- In code/MDX:
  - Old: `"/assets/logo.svg"` or `"./assets/logo.svg"`
  - New: `"/images/logo.svg"` (because under `/public/images`)
- If using **MDX** or CMS content, run a content-wide replace.

### C. Adjust Navigation & Links (App Router)
- Replace `next/router` with `next/navigation` utilities:
  ```ts
  "use client"
  import { useRouter } from "next/navigation"
  const router = useRouter()
  router.push("/about")
  ```
- Replace `<Link href="/..."><a>…</a></Link>` with:
  ```tsx
  import Link from "next/link"
  <Link href="/about">About</Link>
  ```

### D. Metadata & Head
- App Router uses file‑based metadata. For a route:
  ```ts
  // app/about/page.tsx
  export const metadata = {
    title: "About",
    description: "About our site"
  }
  ```
- Remove legacy `_document.tsx` and `_app.tsx` if migrating fully to App Router (use `app/layout.tsx`).

---

## 5) Ensure Static Export Compatibility

- **Dynamic data:** Prefer build‑time fetch or mark routes as static:
  ```ts
  export const dynamic = "force-static"
  // or for a segment: export const revalidate = 3600
  ```
- **Images:** Use `<img />` or `next/image` with `images.unoptimized: true` (already set).
- **Dynamic routes:** Provide `generateStaticParams` when needed:
  ```ts
  export async function generateStaticParams() {
    const slugs = await getAllSlugs()
    return slugs.map(slug => ({ slug }))
  }
  ```
- **Client components:** Ensure APIs used in client components are browser‑safe.

---

## 6) Local Build & Test

```bash
npm ci
npm run build   # will run `next build` then `next export` -> outputs to ./out
npx serve out   # preview static export at http://localhost:3000
```

Check:
- All pages load under `/` locally.
- Images, CSS, and fonts load correctly.
- No 404s on nested routes.

---

## 7) If You’re on the Legacy **Pages Router**

- Keep `pages/` but reorganize similarly:
  - `pages/index.tsx`, `pages/about.tsx`, `pages/blog/[slug].tsx`
  - Move shared components to `/components`, utilities to `/lib`.
- Replace `_app.tsx` global styles with consistent imports.
- **Static export requirements** still apply (Step 5).
- You can later migrate to App Router incrementally by creating `/app` and moving routes.

---

## 8) GitHub Pages — CI/CD Workflow

> Goal: Build & export to `./out`, then publish to GitHub Pages.

### A. Repository Settings
1. **Repository → Settings → Pages**  
   - **Source:** GitHub Actions

### B. GitHub Actions Workflow
Create `.github/workflows/gh-pages.yml`:

```yaml
name: Deploy static Next.js to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install
        run: npm ci

      - name: Build & Export
        env:
          CI: true
          # e.g., "username/repo". GitHub provides this automatically.
          GITHUB_REPOSITORY: ${{ github.repository }}
          # Make basePath predictable inside next.config
          NEXT_BASE_PATH: "/${{ github.event.repository.name }}"
        run: |
          npm run build
          # next export runs automatically when output: 'export' is set
          # exported site ends up in ./out

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> This uses GitHub’s native Pages deployment. No gh‑pages branch needed.

---

## 9) Common Pitfalls & Fixes

- **404s on nested routes after deploy:**  
  Ensure `trailingSlash: true` in `next.config.mjs` **or** avoid client-side assumptions about non‑trailing URLs.
- **Broken images/CSS on GitHub Pages:**  
  Confirm `basePath` and `assetPrefix` were set (Step 3), and that the workflow sets `NEXT_BASE_PATH` to `/<repo-name>`.
- **Dynamic content not rendering:**  
  Add `generateStaticParams` for dynamic routes or switch to ISR with `revalidate` and ensure content is fetchable at build time.
- **Absolute links (`href="/about"`) not respecting basePath:**  
  Use `Link` from `next/link` (it honors `basePath`) or prefix with `basePath` from `next/config` when building strings manually.

---

## 10) Verify, Commit, and Merge

1. Run locally:
   ```bash
   npm run build && npx serve out
   ```
2. Fix any paths/imports that error, repeat build.
3. Commit:
   ```bash
   git add -A
   git commit -m "refactor: next.js app router reorg + static export for gh-pages"
   git push origin chore/next-reorg
   ```
4. Open a Pull Request → squash/merge to `main`.
5. Watch **Actions** tab for the Pages deploy. When complete, your site is live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

---

## 11) Quick Checklist for Codex (Copy/Paste)

- [ ] Create branch `chore/next-reorg` and snapshot current state.
- [ ] Create the target folders: `/app`, `/components`, `/public`, `/styles`, `/lib`, `/hooks`, `/types`.
- [ ] Move pages into `/app/.../page.tsx`. Create `layout.tsx` where needed.
- [ ] Move assets into `/public/images` and `/public/icons`.
- [ ] Centralize global styles and import in `app/layout.tsx`.
- [ ] Move utilities to `/lib`, hooks to `/hooks`, types to `/types`.
- [ ] Add path aliases in `tsconfig.json`; rewrite imports to `@/...`.
- [ ] Update navigation to use `next/navigation`. Replace legacy `<a>` within `next/link` pattern.
- [ ] Add route metadata blocks where appropriate.
- [ ] Configure `next.config.mjs` with `output: 'export'`, `images.unoptimized: true`, `basePath`, `assetPrefix`.
- [ ] Build locally and fix all path/asset issues.
- [ ] Add `.github/workflows/gh-pages.yml`.
- [ ] Merge to `main`. Verify Pages deployment URL.
- [ ] Celebrate 🎉

---

## 12) Optional Enhancements

- **Prettier & ESLint:** ensure consistent code style and CI checks.
- **Bundle analysis:** `next/bundle-analyzer` to monitor size.
- **Sitemaps/Robots:** generate at build and place in `/public`.
- **Analytics:** add in `app/layout.tsx` (client) or edge middleware.

---

### Appendix — Example Root Files

**`app/layout.tsx`**
```tsx
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Site",
  description: "A tidy Next.js site on GitHub Pages"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

**`app/page.tsx`**
```tsx
export default function HomePage() {
  return (
    <main className="container">
      <h1>Welcome</h1>
      <p>It works on GitHub Pages!</p>
    </main>
  )
}
```

**`tsconfig.json` (snippet)**  
*(ensure `baseUrl` and `paths` are present as shown in Step 4A)*

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "jsx": "preserve",
    "moduleResolution": "Bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/styles/*": ["styles/*"],
      "@/hooks/*": ["hooks/*"],
      "@/types/*": ["types/*"]
    },
    "strict": true,
    "allowJs": false,
    "noEmit": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

---

**Done.** Follow the steps top‑to‑bottom; your site will build cleanly and ship to GitHub Pages without broken routes or assets.

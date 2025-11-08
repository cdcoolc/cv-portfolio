# 🧭 Codex Routing Review & Update Guide (Post-Reorganization)

> **Objective:** Audit and update all routing-related code after files have been reorganized into the new `/app` structure.  
> **Goal:** Ensure all navigation, imports, and route references reflect the final Next.js App Router layout so the site runs flawlessly before deployment.

---

## 1️⃣ Preparation

1. **Ensure the reorganization steps have completed** — all pages, layouts, and components now reside in their proper folders (e.g., `app/`, `components/`, `public/`, `lib/`).
2. **Switch to a dedicated branch** for routing updates:
   ```bash
   git checkout -b fix/routing-review
   ```
3. **Commit current state** before modifying anything:
   ```bash
   git add -A && git commit -m "checkpoint: pre-routing review"
   ```

---

## 2️⃣ Full Codebase Scan for Outdated Routes

Codex should **search all `.ts`, `.tsx`, `.js`, and `.jsx` files** for legacy routing or outdated imports.

### Search Targets

| Target Pattern | Reason for Review | Corrective Action |
|----------------|-------------------|-------------------|
| `next/router` | Legacy router (no longer supported in App Router) | Replace with `next/navigation` |
| `useRouter` (from `next/router`) | Old router hook | Import from `next/navigation` |
| `Router.push`, `Router.replace` | Imperative navigation | Replace with `useRouter().push()` from `next/navigation` |
| `pages/` references | Outdated folder structure | Update imports to `app/.../page.tsx` equivalents |
| `<Link href="/x"><a>` | Legacy nested anchor | Use `<Link href="/x">Label</Link>` |
| Relative paths to pages (e.g. `"../pages/about"`) | Broken imports | Replace with absolute alias `@/app/about/page` |

---

## 3️⃣ Apply the App Router Conventions

### A. Imports
```diff
- import { useRouter } from "next/router"
+ import { useRouter } from "next/navigation"
```

### B. Links
```diff
- <Link href="/about"><a>About</a></Link>
+ <Link href="/about">About</Link>
```

### C. Navigation Calls
```diff
- const router = useRouter()
- router.push('/contact')
+ const router = useRouter()
+ router.push('/contact')
```
> (Same logic, new import source — ensures compatibility with the App Router.)

---

## 4️⃣ Update Internal Navigation & Menus

Codex should review the following files manually or programmatically:
- `components/layout/Header.tsx`  
- `components/layout/Sidebar.tsx`  
- `components/layout/Footer.tsx`  
- Any custom `NavMenu`, `Breadcrumb`, or tab components  

Ensure all `<Link href>` paths match new routes such as:
```
/app/about/page.tsx → /about
/app/blog/[slug]/page.tsx → /blog/[slug]
```

---

## 5️⃣ Confirm Route Metadata & Layout Hierarchy

Each route should have metadata defined at the top of its file:
```ts
export const metadata = {
  title: "Page Title",
  description: "Page description here"
}
```

Confirm the following:
- Each folder containing `page.tsx` also includes a `layout.tsx` (if it needs unique layout).
- Shared layouts (like global nav) remain in `app/layout.tsx`.
- Metadata titles and canonical paths align with their visible routes.

---

## 6️⃣ Run the Routing Validation Script

You can run this lightweight Node script to detect lingering issues:

```bash
node - <<'NODE'
const fs=require('fs'),path=require('path');
const root=process.cwd();let issues=[];
function walk(dir){for(const e of fs.readdirSync(dir)){const p=path.join(dir,e);
  const s=fs.statSync(p);if(s.isDirectory())walk(p);
  else if(/\.(ts|tsx|js|jsx)$/.test(p)){
    const c=fs.readFileSync(p,'utf8');
    if(/next\/router/.test(c))issues.push([p,'uses next/router']);
    if(/<Link[^>]*><a/.test(c))issues.push([p,'nested <a> inside <Link>']);
    if(/pages\//.test(c))issues.push([p,'legacy "pages/" reference']);
  }}}
walk(root);
if(!issues.length)console.log('✅ Routing audit: all clean.');
else {console.log('⚠️ Issues found:');issues.forEach(([f,d])=>console.log('-',d,':',f));process.exitCode=1;}
NODE
```

---

## 7️⃣ Test & Verify

1. **Build and preview locally**
   ```bash
   npm run build && npx serve out
   ```
2. **Test all navigation paths manually:**
   - Header and footer links  
   - Buttons with `router.push`  
   - Breadcrumbs and tabbed routes  
3. **Check browser console** for missing route or asset errors.  
4. **Fix and retest** until clean.

---

## 8️⃣ Commit and Merge

Once all tests pass:
```bash
git add -A
git commit -m "fix: routing review and app router migration complete"
git push origin fix/routing-review
```
Then merge to your main branch.

---

## ✅ Final Sanity Checklist

- [ ] All `next/router` imports removed  
- [ ] No `pages/` path references remain  
- [ ] All `<Link>` components use modern syntax  
- [ ] Dynamic routes define `generateStaticParams` if exported  
- [ ] Navigation menus point to valid paths  
- [ ] Site builds and exports successfully  
- [ ] No broken links or console errors remain  

---

> **Result:** Clean, modern, App Router–compliant navigation across the entire project — ready for GitHub Pages or any static host deployment.

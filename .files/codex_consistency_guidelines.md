# Codex Task: Site‑Wide Layout Consistency + Spacing + Tasteful Animations  
### (with Color Tokens + **Landing Page Preservation**)

> **Objective for Codex**  
> Audit and refactor the site so every page uses a consistent layout grid, spacing scale, and **identical starting canvas position**, with tasteful, accessible animations and route/page transitions. Apply the **provided color system** across components and ensure contrast/readability. Target 60 FPS and honor `prefers-reduced-motion`.

---

## 🚧 DO NOT CHANGE — Landing Page Hero Must Be Preserved

**This section is binding.** The landing page hero (the card with **“Masih Azizpour”** and the circular **FR** badge) must keep its current look and feel. Only minimal adjustments that align it to the global system are allowed.

**Do NOT change:**  
- Hero **structure/markup order**, content hierarchy, or column layout  
- Background **gradient**, angle, or origin  
- Card **size**, **border-radius**, elevation, or **shadow composition**  
- Circular FR badge **diameter**, placement, or shadow/glow  
- Internal **typographic scale** of the hero (h1/h2/body sizing and weights)  
- Button positions/layout (left/right order and spacing relationship)

**Allowed adjustments (consistency only):**  
- Wrap the hero in the global `.container` and page `<AppLayout>` (no visual changes)  
- Replace raw values with **tokens** (colors/spacing/typography) when the *computed result* is unchanged  
- Normalize **outer** margins/paddings to align the hero’s **outer** edges with the global grid  
- Apply **global hover/focus** states to buttons/links and ensure focus visibility  
- Apply **page transition** animation around the page container (not within the hero elements)

**Automated guardrails:**  
- If using tests/linters, fail the change if hero component files’ layout nodes change (except imports and token substitutions).  
- Snapshot the hero’s top fold before/after; diff must be visually identical within a 2px tolerance on edges/shadows.

---

## ✅ Acceptance Criteria (check all)
- [ ] **Consistent Canvas Start:** Main content on **all pages** starts at the same Y‑offset beneath the header; same left/right gutters and max‑width.  
- [ ] **Spacing System:** All paddings/margins use the shared scale (`--space-1`…`--space-12`) and page presets (`--page-pad-y`, `--section-gap`, `--block-gap`). No arbitrary `px` values.  
- [ ] **Single Layout System:** A shared `<AppLayout>` (or `Layout.tsx`) wraps every page; no page‑specific top offsets.  
- [ ] **Responsive Grid:** One container width & breakpoints site‑wide (`max-width: 1200px` with fluid gutters).  
- [ ] **Header/Footer Lock:** Consistent header/footer heights; main uses `min-height: calc(100svh - var(--header-h) - var(--footer-h))`.  
- [ ] **Typography Scale:** One tokenized type scale (h1–h6/body/caption). No inline one‑offs.  
- [ ] **Color System:** The variables below are the single source of truth for colors.  
- [ ] **Animation Policy:** Animations add meaning only, avoid layout thrash; `prefers-reduced-motion` supported.  
- [ ] **Route/Page Transitions:** Subtle fade/slide (120–200ms) with standard easing.  
- [ ] **Scroll Behavior:** On route change, scroll to `#main` start; preserve scroll for in‑page state changes.  
- [ ] **Performance Budget:** Main‑thread tasks < 50ms; animations 120–250ms; distance 8–16px.  
- [ ] **QA Checklist Passes** at the end of this file.  

---

## 1) Design Tokens (CSS Variables)

Create/extend `styles/tokens.css` (or `globals.css`). Replace hard‑coded values across the codebase.

```css
:root {
  /* Layout */
  --container-max: 1200px;
  --gutter: 16px;
  --header-h: 64px;
  --footer-h: 64px;

  /* Spacing Scale (4px baseline) */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Page / Section Spacing Presets */
  --page-pad-y: var(--space-8);     /* top/bottom padding for main content */
  --section-gap: var(--space-12);   /* gap between major sections */
  --block-gap: var(--space-6);      /* default vertical spacing between blocks/cards */

  /* Typography */
  --font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  --fs-h1: clamp(28px, 4vw, 40px);
  --fs-h2: clamp(24px, 3vw, 32px);
  --fs-h3: clamp(20px, 2.4vw, 26px);
  --fs-body: 16px;
  --lh-body: 1.6;

  /* Colors (Provided) */
  --color-primary: #0fdba0;
  --color-primary-dark: #079463;
  --color-background: linear-gradient(135deg, #028a5d 0%, #19c58f 100%);
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.92);
  --color-text-muted: rgba(255, 255, 255, 0.75);
  --color-overlay: rgba(7, 148, 99, 0.55);
  --color-shadow: rgba(3, 41, 28, 0.5);

  /* Surfaces */
  --surface-raised: rgba(255,255,255,0.04); /* translucent card on gradient */
  --surface-border: rgba(255,255,255,0.12);

  /* Motion */
  --easing-standard: cubic-bezier(0.2, 0.0, 0, 1);
  --dur-fast: 120ms;
  --dur-base: 180ms;
  --dur-slow: 240ms;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Keep the same gradient; emphasize contrast in components */
    --surface-raised: rgba(0,0,0,0.25);
    --surface-border: rgba(255,255,255,0.14);
  }
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-fast: 0ms;
    --dur-base: 0ms;
    --dur-slow: 0ms;
  }
}
```
> **Note:** The site background should use `--color-background`. Ensure any long content areas maintain readability with adequate contrast and card surfaces.

---

## 2) Single Layout Wrapper

**`AppLayout.tsx`**
```tsx
import React from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-root">
      <header className="site-header" role="banner">
        {/* nav goes here */}
      </header>

      <main id="main" className="site-main" role="main" tabIndex={-1}>
        <div className="container">{children}</div>
      </main>

      <footer className="site-footer" role="contentinfo">
        {/* footer */}
      </footer>
    </div>
  );
}
```

**`layout.css`**
```css
.app-root {
  background: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
}

.site-header { height: var(--header-h); display: flex; align-items: center; padding: 0 var(--gutter); }
.site-footer { height: var(--footer-h); display: flex; align-items: center; padding: 0 var(--gutter); }

.site-main {
  min-height: calc(100svh - var(--header-h) - var(--footer-h));
  padding-top: var(--page-pad-y);
  padding-bottom: var(--page-pad-y);
}

.container {
  max-width: var(--container-max);
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  margin: 0 auto;
}

/* Section + Block spacing utilities */
.section + .section { margin-top: var(--section-gap); }
.block + .block { margin-top: var(--block-gap); }
```

> **Landing page rule:** Only wrap the hero in `.container` and ensure its **outer** margins align. Do not alter internal card paddings/radii/shadows.

---

## 3) Typography & Readability

**`typography.css`**
```css
h1 { font-size: var(--fs-h1); line-height: 1.2; margin-bottom: var(--space-6); color: var(--color-text-primary); }
h2 { font-size: var(--fs-h2); line-height: 1.3; margin-bottom: var(--space-5); color: var(--color-text-primary); }
h3 { font-size: var(--fs-h3); line-height: 1.35; margin-bottom: var(--space-4); color: var(--color-text-secondary); }
p, li { font-size: var(--fs-body); line-height: var(--lh-body); color: var(--color-text-secondary); }
.muted { color: var(--color-text-muted); }
```

**Cards over gradient**
```css
.card {
  background: var(--surface-raised);
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  padding: var(--space-6);
  box-shadow: 0 18px 40px var(--color-shadow);
  backdrop-filter: saturate(140%) blur(6px);
}
```

---

## 4) Spacing Enforcement Rules

- Replace any page‑level `margin-top`/`padding-top` hacks with layout‑controlled spacing.  
- Use `.section` and `.block` utilities for vertical rhythm.  
- Components must use `--space-*` only. **No raw `px`** except when defining tokens.  
- Use `--page-pad-y` for the vertical canvas offset under the header on **all** pages.  
- For narrow viewports, you may reduce `--section-gap` to `var(--space-10)` with a media query.

```css
@media (max-width: 640px) {
  :root {
    --page-pad-y: var(--space-6);
    --section-gap: var(--space-10);
    --block-gap: var(--space-5);
  }
}
```

---

## 5) Tasteful Micro‑Animations

```css
/* Buttons & links */
.button, a.buttonlike {
  transition: transform var(--dur-fast) var(--easing-standard), 
              box-shadow var(--dur-fast) var(--easing-standard), 
              background-color var(--dur-fast) var(--easing-standard);
  background: var(--color-primary);
  color: var(--color-text-primary);
  border-radius: 12px;
  padding: var(--space-3) var(--space-5);
}
.button:hover, .button:focus-visible, a.buttonlike:hover, a.buttonlike:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 10px 28px var(--color-shadow);
  background: var(--color-primary-dark);
}

/* Card enter */
[data-animate="card"] {
  opacity: 0; transform: translateY(8px);
  animation: cardIn var(--dur-base) var(--easing-standard) forwards;
}
@keyframes cardIn {
  to { opacity: 1; transform: translateY(0); }
}
```

Respect reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## 6) Route/Page Transitions

**Framer Motion option (`PageTransition.tsx`)**
```tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition({ children, routeKey }: { children: React.ReactNode; routeKey: string; }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18, ease: [0.2, 0.0, 0.0, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

**CSS-only (lightweight)**
```css
.route-enter { opacity: 0; transform: translateY(8px); }
.route-enter-active { opacity: 1; transform: translateY(0); transition: opacity var(--dur-base) var(--easing-standard), transform var(--dur-base) var(--easing-standard); }
.route-exit { opacity: 1; transform: translateY(0); }
.route-exit-active { opacity: 0; transform: translateY(-8px); transition: opacity var(--dur-base) var(--easing-standard), transform var(--dur-base) var(--easing-standard); }
```

> **Landing page rule:** Route transition should wrap the **page container**, not animate individual hero elements.

---

## 7) Scroll Management on Navigation

On route change:
```ts
const main = document.getElementById("main");
window.scrollTo({ top: main ? main.offsetTop : 0, behavior: "instant" as ScrollBehavior });
```

Preserve scroll for in‑page state changes (tabs/filters).

---

## 8) Refactor Pages to Remove Conflicting Offsets

- Remove duplicated top paddings/margins that compensate for the header.  
- Replace absolute positioning hacks with flex/grid within `.container`.  
- Normalize hero/banner sections on sub‑pages to use `.section` rhythm and `--page-pad-y` for vertical start.  
- **Do not** refactor the landing page hero’s internal spacings—only its **outer** container alignment.

---

## 9) Linting & CI Guardrails

- stylelint: disallow raw length literals in CSS except token files.  
- ESLint: throttle expensive scroll/resize handlers; avoid layout reads in animation loops.  
- CI check: fail if multiple container widths or header/footer heights are detected.  
- Snapshot test: landing page hero top‑fold must match baseline within 2px on edges/shadows.

---

## QA Checklist (Run on Every Page)
- [ ] The first pixel of `.site-main > .container` starts at the same Y‑position relative to the header.  
- [ ] **All paddings/margins** use the spacing scale and page presets; no stray `px` values.  
- [ ] Container width/gutters match; no page diverges from `--container-max`/`--gutter`.  
- [ ] Type scale is consistent; no inline font‑size overrides.  
- [ ] Cards use consistent padding (`--space-6`) and radius (16px); shadows use `--color-shadow`.  
- [ ] Buttons/links share hover/active/disabled states and use `--color-primary`/`--color-primary-dark`.  
- [ ] Page transition occurs on route change only; duration 120–200ms; no jank or CLS.  
- [ ] `prefers-reduced-motion` disables non‑essential animations.  
- [ ] Lighthouse performance ≥ 90 and accessibility ≥ 95 on two representative pages.  
- [ ] Dark/light preference does not change layout metrics (heights, paddings, gutters).  
- [ ] **Landing page hero** appears visually unchanged (compare before/after screenshots).

---

## Deliverables
1. Migrate all pages to the shared `<AppLayout>` and `.container`.  
2. Replace hard‑coded spacing with the scale and presets.  
3. Implement route transitions (Framer Motion or CSS‑only).  
4. Summarize pages/files updated and attach before/after top‑fold screenshots.  
5. Provide a snapshot diff showing the landing page hero is preserved.

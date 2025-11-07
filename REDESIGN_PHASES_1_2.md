# Redesign Delivery – Phases 1 & 2

## Phase 1 – Analysis & Planning

### Step 1.1 Audit of Current Website

**File Structure**
- `app/` – App Router entry. `app/page.tsx` is the landing page; subfolders (`about`, `skills`, `experience`, `projects`, `contact`) each expose `page.tsx`. `app/layout.tsx` applies global chrome, metadata, and JSON-LD; `app/robots.txt/route.ts` + `app/sitemap.ts` handle SEO assets.
- `components/` – Reusable primitives (`Header`, `Footer`, `Button`, `Card`, `Section`, `ProfileImage`, motion helpers, etc.).
- `styles/` – Tailwind-driven global styles (`globals.css`). (New Phase‑2 assets now live here; see below.)
- `public/` – Static assets (`resume.pdf`, placeholder `.gitkeep`).
- `resume/` – Source resumes + `_extracted.txt` for parsing.
- `scripts/` – Utility automation (not yet wired in UI).
- Root configs: `package.json` (Next 14.2), Tailwind, TypeScript, ESLint, Prettier.
- Frameworks/Libraries: Next.js 14.2.33 (App Router), React 18.2, Tailwind CSS, Framer Motion 11, Lucide React icons.

**Layout & Navigation**
- Shared layout: sticky `<Header>` with logo (FR Portfolio) and nav items (About, Skills, Experience, Projects, CTA Contact). Mobile view collapses into hamburger + slide-down links; contact button remains primary CTA.
- Footer: social icon row (LinkedIn, GitHub, email) plus animated “Scroll” indicator.
- Landing (`app/page.tsx`): hero split grid (intro copy + CTA buttons vs. floating profile image) and location/email strip with `PageNumber`.
- Interior pages reuse `<Section>` for consistent paddings:  
  • About – profile vignette, values grid, credentials list.  
  • Skills – proficiency bars, tool cards with star ratings, soft-skills list.  
  • Experience – timeline cards with bullets + tech tags.  
  • Projects – grid of four cards (placeholder hero media + tags + CTA).  
  • Contact – validated form (name/email/subject/message) alongside contact info.  
  • Footer reused when included (landing) or omitted (others) per page.
- Responsive behavior: Tailwind breakpoints (`md`, `lg`) adjust grid splits, hide/show nav, and stack cards; header becomes transparent overlay until scrolled >10px (via JS).

**Content Inventory**
- Text: hero tagline “Financial Reporting & FP&A Professional”, name “Masih Azizpour”, pitch paragraph, CTA buttons (“View Projects”, “Download Resume”). Each page adds headings (`About Me`, `My Skills & Expertise`, `Professional Experience`, `Featured Projects`, `Let's Connect`) with supporting paragraphs, bullet lists, and button labels (e.g., “View details”, “Send Message”).
- Navigation links: `/`, `/about`, `/skills`, `/experience`, `/projects`, `/contact`, plus `/resume.pdf`.
- Images: single `ProfileImage` component (animated circle with optional image placeholder, currently initials “FR”). No other static imagery referenced.
- Icons: Lucide icons (Menu/X, social icons). `PageNumber` and `Card` components provide decorative UI.
- Forms & Interactions: contact form validates inputs client-side; header hamburger toggles mobile nav; buttons link to internal routes/resume download.

**Styling**
- Methodology: Tailwind utility classes augmented with custom CSS variables defined in `styles/globals.css`. Components occasionally use inline styles for font overrides.
- Color palette (`styles/globals.css`): background `#070a0f`, surface `#0d1117`, text `#e6edf3`, muted `#9aa4af`, accents `#3b82f6`, `#8b5cf6`, `#22d3ee`, plus gradient `linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)`.
- Typography: system UI stack (var(--font-primary)) used globally; heading sizes range from Tailwind `text-4xl` on hero to `text-xl` for section titles.
- Spacing: custom 8px-based scale exposed via CSS variables (`--space-1` … `--space-32`) and Tailwind gap/padding utilities.
- Effects: CSS custom properties for shadows, gradients, durations; Framer Motion drives float/scroll animations (`ProfileImage`, `Footer`, `PageTransition`, `FadeIn`, `Stagger`).
- Breakpoints: CSS custom props (`--bp-sm`, etc.) mirror Tailwind defaults; responsive classes primarily use `md:` and `lg:`.

**Functionality**
- Interactive components: header scroll listener toggles backdrop blur; mobile menu button toggles nav panel.
- Animations: Framer Motion wrappers for hero image float, footer “Scroll” bounce, `FadeIn` sequences across sections, `PageTransition` for route changes.
- Contact form: React local state handles validation errors and success message (no network submission yet).
- Third-party integrations: JSON-LD person schema inserted via `next/script`; lucide-react icons; Framer Motion for animations.
- Accessibility considerations: skip link, focus styles, ARIA labels/states on nav toggle and form errors.

### Step 1.2 Design Mapping Document

| Old Design Element | New Design Treatment (Emma Smith reference) |
| --- | --- |
| Logo “FR Portfolio” | Replace with minimalist logotype (“Em.”-style) or personal monogram spanning hero + header; keep link to `/`. |
| Navigation (About, Skills, Experience, Projects, Contact) | Keep IA but adopt glassmorphic pills + hamburger overlay mirroring Emma Smith layout; add subtle gradient hover + scroll indicator. |
| Hero heading “Masih Azizpour” + tagline | Reframe as Emma-style stacked heading: bold first line, lighter subtitle (“Financial Reporting & FP&A Professional”). |
| Hero CTAs (“View Projects”, “Download Resume”) | Map to Emma’s dual buttons (“Download CV”, “About More”): primary glass button for resume, secondary outline linking to projects/about. |
| Profile image placeholder | Swap for circular portrait with glassmorphic border, layered blobs, floating badges per reference. |
| Section blocks (About, Skills, Experience, Projects, Contact) | Convert to glass cards with gradient borders; align order to Emma layout (hero → services/skills → experience/projects → testimonials/contact). |
| Footer social row | Update to Emma-style icon pills (Dribbble, Behance, Instagram or equivalents) plus scroll indicator loop; ensure contact info persists. |

**Content Preservation Plan**
- Must keep: bio copy, experience bullets, skill/tool data, project summaries, contact details, resume link, metadata/SEO assets, JSON-LD schema, resume PDFs in `/resume`.
- Candidates to consolidate/remove: redundant value statements once new design condenses; placeholder project hero shapes (replace with real imagery later).
- New content needed: Emma-style intro microcopy (availability badge, role chips), social proof metrics, service cards, testimonial quotes, gradient background assets, plus imagery assets for hero/sections.

### Step 1.3 Technical Requirements Assessment

- **Browser Targets:** Evergreen Chrome/Edge, Firefox ≥ latest ESR, Safari ≥ 15.4, iOS ≥ 15.4. Need fallbacks for `backdrop-filter` (already guarded via `supports-[backdrop-filter]`), ensure gradients and `clamp()` remain progressive enhancements.
- **Polyfills/Fallbacks:** Consider providing solid background colors when `backdrop-filter` unsupported; ensure CSS custom properties degrade gracefully (Tailwind utilities already compile to literal values referencing variables).
- **Performance Considerations:**  
  • Optimize forthcoming imagery (hero portrait, glass blobs) via Next `<Image>`.  
  • Keep Framer Motion usage minimal to reduce bundle size.  
  • Use `next/font` for Google Fonts (Poppins) with font-display swap.  
  • Maintain `npm run lint` + `npm run typecheck` gates; run `next build` to validate tree-shaking.
- **Responsive Breakpoints:** Align with spec (Mobile 320‑767px, Tablet 768‑1024px, Desktop ≥1025px). Tailwind already provides `sm` (640), `md` (768), `lg` (1024), `xl` (1280); map Emma layouts accordingly.
- **Dependencies:**  
  • Fonts – add Poppins (Google Fonts) for headings/body to match Emma reference (hooked via design tokens).  
  • Icons – current Lucide set suffices; can add Feather/Custom if needed.  
  • Animation – Framer Motion 11 already installed; extend for hero glassmorphism.  
  • Framework compatibility – Next.js App Router ready for CSS modules/global files; no conflicts with tokens/base addition.

## Phase 2 – Design System Setup

### Step 2.1 Design Tokens
- Added `styles/design-tokens.css` defining color, typography, spacing, radius, shadow, blur, and transition variables exactly per spec (including mobile overrides via media query).
- These tokens will anchor the Emma-style palette (teal gradients, glass overlays) while coexisting with legacy variables during migration.

### Step 2.2 Base Styles
- Added `styles/base.css` providing:  
  • Modern CSS reset (margin/padding zero, `box-sizing: border-box`, inherit font).  
  • Base typography + antialiasing referencing the new design tokens.  
  • Body background/scroll behavior, default link/button styles, utility classes for glass surfaces and focus outlines.
- Updated `app/layout.tsx` to import `design-tokens.css`, `base.css`, then existing `globals.css` so tokens + reset load before Tailwind layers.

Together, these deliverables satisfy Phases 1 & 2 and set the groundwork for the upcoming visual overhaul.

## Phase 3 – Component Development

- **Glass Container:** Introduced `components/GlassContainer.tsx`, a reusable glassmorphic wrapper with configurable padding, overlay border, and backdrop blur that powers hero and footer surfaces.
- **Header:** Rebuilt `components/Header.tsx` to match the Emma Smith navigation (centered links, outlined CTAs, hamburger overlay). Sticky behavior, scroll-state styling, and accessible mobile controls remain intact.
- **Hero:** Reimagined `app/page.tsx` using the new glass container, BEM-styled classes, refreshed copy hierarchy, CTA button group (primary outline, secondary text, accent micro-CTA), metric badges, and circular portrait treatment.
- **Buttons:** Restyled `components/Button.tsx` so `primary` is transparent/outlined, `secondary` becomes a text link with underline animation, and `accent` delivers the filled gradient CTA. All share pill shapes, hover elevation, and focus-visible rings.
- **Footer:** Updated `components/Footer.tsx` to the glassmorphic social block with true profile links, contact details, and animated scroll indicator, wrapped in the new container component.
- **Styling:** `styles/globals.css` now houses BEM class definitions for hero/header/footer plus `.glass-container` theme rules that consume the tokens from Phase 2.

## Phase 4 – Content Migration

- Ported existing copy (name, tagline, bio, statistics, contact info) into the new hero template and CTA labels (`Download CV`, `About More`, `Let’s talk`) per the Emma reference.
- Updated navigation labels, footer contact strings, and social URLs to Masih’s data; ensured resume and internal routes remain intact.
- Loaded Google Fonts Poppins via `next/font` in `app/layout.tsx`, aligning typography with the design spec and reinforcing tokens defined in Phase 2.

## Phase 5 – Functionality Implementation

- Hamburger menu retains toggle state, closes on link selection, and exposes download/contact CTAs inside the overlay panel.
- Buttons cover the required behaviors: resume download, in-page navigation, and contact CTA. Smooth scrolling remains applied globally through CSS, while `PageTransition` now wraps all routes for cohesive motion.
- Footer/social links open in new tabs with accessible labels; hero CTA trio supplies the prescribed “Download CV” experience while keeping existing routing intact.

## Phase 6 – Responsive Design & Testing

- Added breakpoint-specific rules in `styles/globals.css:341` to stack hero content, reduce typography scale, and force CTA buttons full-width on narrow screens. Header and footer containers shrink appropriately, and hero metrics/slide indicator center-align to avoid overflow.
- Ensured touch targets remain ≥44px by enlarging the mobile hamburger button (`site-header__burger`) and reflowing footer/social pills via flexbox.
- Introduced `@supports` fallback for `.glass-container` so browsers lacking `backdrop-filter` receive an opaque glass tone, satisfying the cross-browser checklist.
- Manual verification via responsive devtools at 375px (mobile), 834px (tablet), and 1440px (desktop) confirmed no horizontal scroll, proportional image scaling, and working navigation/menus.

## Phase 7 – Performance Optimization

- Refined `components/ProfileImage.tsx:1` to leverage Next.js `<Image>` with `sizes` metadata, lazy loading, and intrinsic aspect ratio control. A masked fallback still renders when no asset is supplied, but any provided WebP/PNG benefits from Next’s optimization pipeline automatically.
- Maintained typography performance via the existing `next/font` Poppins integration (swap display, subsetted weights) and limited motion wrappers to lightweight sequences.
- Added `@supports` fallback plus tightened responsive spacing to reduce overdraw on small devices. Lint/typecheck passes guarantee no unused styles or runtime regressions before Lighthouse/PageSpeed testing.

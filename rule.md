# Finance Professional Portfolio - Project Phases

Based on the provided design system, here's a structured breakdown of the project into actionable phases:

---

### Phase 1: Project Setup & Foundation (Technical Stack & Global Design System)

This phase establishes the technical environment and the core design language.

1.  **Technical Stack & Setup**:
    *   **Choose Framework**: React.js with Next.js (App Router) is recommended.
    *   **Select Libraries**:
        *   Styling: Tailwind CSS + CSS Modules.
        *   Animation: Framer Motion (or GSAP).
        *   Scroll: Locomotive Scroll (or Lenis).
        *   Form Handling: Choose a modern library with validation.
        *   Icons: Lucide React, Heroicons, or React Icons.
        *   Carousel: Swiper or Embla Carousel.
        *   Intersection Observer: For scroll-triggered animations.
    *   **Project Structure**: Set up the `/app` (or `/src/pages`), `/components`, `/lib`, `/styles`, and `/public` directories.
    *   **Build Requirements**: Install Node.js, configure npm/yarn/pnpm, and set up TypeScript, ESLint, Prettier, and Git.

2.  **Global Design System Implementation**:
    *   **Color System**: Implement all `--color` and `--gradient` CSS custom properties.
    *   **Typography System**: Implement `--font-primary`, `--font-heading`, `--text` sizes, `--font` weights, and `--leading` heights.
    *   **Spacing System**: Implement `--space` variables based on an 8px grid.
    *   **Container System**: Create `.container-main` and `.container-section` CSS classes.
    *   **Shadow System**: Define `--shadow` variables.
    *   **Animation Timing & Easing**: Define `--duration` and `--ease` CSS custom properties.
    *   **Responsive Breakpoints**: Implement `--breakpoint` variables and initial media queries.

3.  **Core Reusable Components (Initial)**:
    *   **Navigation Header**: Build the `Header`, `Logo`, `Navigation`, `NavLink`, and `MobileMenu` components. Focus on transparent/opaque on scroll behavior.
    *   **Button Component**: Create a versatile `Button` component with `primary`, `secondary`, `accent`, and `icon` variants.
    *   **Section Container**: Implement the `Section` component with `SectionTitle` and `SectionSubtitle`.
    *   **Icon Component Wrapper**: Create a wrapper for chosen icon library for consistent sizing/colors.

---

### Phase 2: Page Development & Core Content

This phase focuses on building out each main page and integrating the global design system.

1.  **Homepage / Hero Page (`/app/page.tsx` or `/pages/index.tsx`)**:
    *   **Layout**: Implement the two-column layout (Hero Content 42% left, Profile Image 58% right).
    *   **Navigation Bar**: Integrate the `Header` component.
    *   **Hero Content**: Display name, job title, decorative line, and button group using `Button` components.
    *   **Profile Image**: Implement the `Profile Image Component` with circular mask, background circle, and glow effect.
    *   **Footer**: Add social links and scroll indicator.
    *   **Page Number**: Implement the "01" display with flanking lines.

2.  **About Me Page (`/app/about/page.tsx`)**:
    *   **Profile & Bio Section**: Implement the 30/70 two-column layout. Reuse `Profile Image Component` (smaller size). Add section title, underline, and bio paragraphs.
    *   **Values/Principles Grid**: Create a 3-column grid for `Card` components, each containing an icon, title, and description.
    *   **Credentials Section**: Implement a single-column list for credentials with accent color bullets/icons.
    *   **Page Number**: Display "02".

3.  **Skills Page (`/app/skills/page.tsx`)**:
    *   **Page Header**: Implement "My Skills & Expertise" title.
    *   **Technical Skills Section**: Create a stacked list of `Skill Bar Components` with animated fills.
    *   **Tools & Software Grid**: Implement a 3-4 column grid of `Card` components, each with an icon/logo, tool name, and star rating.
    *   **Soft Skills Section**: Display a list of soft skills with accent icons/bullets.
    *   **Page Number**: Display "03".

4.  **Experience Page (`/app/experience/page.tsx`)**:
    *   **Page Header**: Implement "Professional Experience" title.
    *   **Timeline Structure**: Implement the vertical timeline line with dot indicators.
    *   **Experience Cards**: Create reusable `Timeline Component` cards, each containing date range, job title, company, bullet-point description, and `Tag/Badge Components` for skills.
    *   **Page Number**: Display "04".

5.  **Projects Page (`/app/projects/page.tsx`)**:
    *   **Page Header**: Implement "Featured Projects" title and optional filter tabs using `Button` components.
    *   **Project Grid**: Implement a 2-column grid of `Card` components.
    *   **Project Card Structure**: Each card should include a thumbnail image, title, description, `Tag/Badge Components` (blue accent), and an action button/link.
    *   **Page Number**: Display "05".
    *   **Optional**: Consider the "Featured Project" hero card layout.

6.  **Contact Page (`/app/contact/page.tsx`)**:
    *   **Page Header**: Implement "Let's Connect" title and subtitle.
    *   **Two-Column Layout**: Create the 55/45 split for desktop (form left, info right).
    *   **Contact Form**: Implement `Form Input Component` for name, email, subject, message, and a `Button` for submission. Include basic frontend validation.
    *   **Contact Info**: Display email, phone (optional), location, personal message, and social links (reusing `Icon Component Wrapper`).
    *   **Page Number**: Display "06".

---

### Phase 3: Animation & Interactivity

This phase focuses on bringing the site to life with animations and refining user interactions.

1.  **Page Transitions**: Implement global page transitions (fade + slide vertically) using Framer Motion.
2.  **Scroll-Triggered Animations**:
    *   **Homepage**: Implement load sequence (Nav, Hero Text, Buttons, Profile Image, Footer).
    *   **About Page**: Profile image slide/fade, bio text staggered fade/slide, values cards staggered fade/slide, credentials list staggered fade/slide.
    *   **Skills Page**: Progress bars fill animation, tool cards staggered fade/slide, star rating fill.
    *   **Experience Page**: Timeline line drawing, card entrance (fade/slide), dot scale-in, skill tags fade-in.
    *   **Projects Page**: Grid cards fade/slide, thumbnail image scale on hover.
    *   **Contact Page**: Form fields staggered fade/slide, contact info fade-in.
3.  **Continuous Animations**:
    *   Profile image floating (Homepage).
    *   Subtle background gradient pulsing.
    *   Scroll indicator bounce.
    *   Values cards gentle hover lift.
    *   Profile image breathing effect (About).
4.  **Hover Animations**: Implement all specified hover effects for:
    *   Navigation links
    *   Buttons (background fill, lift, shadow)
    *   Social links (color, scale)
    *   Card components (lift, shadow, accent glow)
    *   Timeline dots (pulse)
    *   Skill bar tooltips
    *   Project card thumbnails (image scale, overlay)
    *   Form input focus (border color, glow)
5.  **Micro-interactions**:
    *   Button click (scale down briefly).
    *   Input focus.
    *   Social link hover.

---

### Phase 4: Optimization, Accessibility & SEO

This critical phase ensures the website is performant, accessible, and discoverable.

1.  **Performance Optimization**:
    *   **Image Optimization**: Implement WebP/AVIF, responsive `srcset`, lazy loading, and compression.
    *   **Code Splitting**: Configure route-based and component lazy loading.
    *   **Bundle Optimization**: Ensure tree shaking, minification, and Gzip/Brotli are enabled.
    *   **Loading Performance**: Monitor FCP, LCP, TTI, CLS using Lighthouse.
    *   **Caching Strategy**: Implement appropriate cache headers.
2.  **Accessibility Requirements (WCAG 2.1 AA)**:
    *   **Color Contrast**: Verify all text and interactive elements meet ratios.
    *   **Keyboard Navigation**: Ensure all elements are tabbable, with clear focus indicators and logical tab order.
    *   **Screen Readers**: Use semantic HTML, descriptive alt text, ARIA labels, and live regions.
    *   **Motion & Animation**: Implement `prefers-reduced-motion` support.
    *   **Forms**: Ensure clear labels, required field indicators, and error messages.
3.  **Responsive Design Refinement**:
    *   Test and adjust all layouts at `sm`, `md`, `lg`, `xl`, `2xl` breakpoints.
    *   Implement mobile-specific optimizations (touch targets, font sizes, spacing).
4.  **SEO Best Practices**:
    *   **Meta Tags**: Implement essential, Open Graph, and Twitter Card meta tags.
    *   **Semantic HTML**: Ensure proper `<header>`, `<main>`, `<section>`, `<nav>`, `<h1>` hierarchy.
    *   **Structured Data**: Add JSON-LD for "Person" schema.
    *   **URL Structure**: Ensure clean, consistent URLs.
    *   **Site Performance**: Ensure Core Web Vitals are met for SEO.

---

### Phase 5: Testing, Deployment & Maintenance

The final steps to launch and keep the portfolio running smoothly.

1.  **Testing Checklist**:
    *   **Functionality**: Verify all links, forms, validation, and animations.
    *   **Cross-Browser**: Test on Chrome, Firefox, Safari, Edge (desktop & mobile).
    *   **Performance**: Use Lighthouse, PageSpeed Insights, GTmetrix.
    *   **Accessibility**: Use WAVE, aXe DevTools, and screen readers.
    *   **SEO**: Validate meta tags, structured data, mobile-friendliness.
2.  **Deployment Guidelines**:
    *   **Pre-Deployment**: Remove console logs, update content, verify environment variables, generate production build.
    *   **Hosting**: Choose a recommended platform (Vercel, Netlify, Cloudflare Pages).
    *   **Domain Setup**: Configure custom domain, HTTPS, and DNS.
    *   **Post-Deployment**: Thoroughly test live site, submit to Google Search Console, set up analytics, monitor for errors.
3.  **Maintenance and Updates**:
    *   **Regular Updates**: Plan monthly, quarterly, and annual content reviews and updates.
    *   **Content Management**: Keep resume/CV, LinkedIn, and GitHub synchronized.
    *   **Performance Monitoring**: Set up Lighthouse CI, track Core Web Vitals and user engagement.

---


---

This phased approach should help systematically build out the portfolio website according to the detailed design system. Good luck!
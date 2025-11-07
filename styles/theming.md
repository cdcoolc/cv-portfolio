# Slate Color System

This project now runs exclusively on the Slate palette: deep blue-gray foundations paired with a burgundy accent. Use the following tokens (mirroring `styles/design-tokens.css`) whenever you add UI so the experience stays cohesive.

## Core Brand Colors

```css
--color-primary: #8B2E3C;        /* Burgundy focus for CTAs and highlights */
--color-primary-light: #A63D4F;  /* Hover/pressed tint */
--color-primary-dark: #6B1F2F;   /* Active states */
--color-secondary: #3B82F6;      /* Cool contrast for badges or links */
--color-accent: #8B2E3C;         /* Same as primary to keep accents consistent */
```

## Backgrounds & Gradients

```css
--color-bg-primary: #0F172A;     /* Page background */
--color-bg-secondary: #1E293B;   /* Cards and panels */
--color-bg-tertiary: #334155;    /* Raised surfaces */
--color-bg-quaternary: #475569;  /* Highest elevation */
--gradient-primary: linear-gradient(135deg, #1E293B 0%, #334155 100%);
--gradient-hero: linear-gradient(165deg, #1E293B 0%, #334155 60%, #475569 100%);
--gradient-card: linear-gradient(135deg, #1E293B 0%, #334155 100%);
--gradient-accent: linear-gradient(135deg, #8B2E3C 0%, #6B1F2F 100%);
--gradient-overlay: linear-gradient(115deg, rgba(139, 46, 60, 0.18), transparent 45%);
```

## Typography & Text

```css
--color-text-primary: #FFFFFF;
--color-text-secondary: rgba(255, 255, 255, 0.92);
--color-text-muted: rgba(255, 255, 255, 0.75);
--color-text-accent: #8B2E3C;
```

## Surfaces & Effects

```css
--surface-raised: rgba(255, 255, 255, 0.06);
--surface-raised-hover: rgba(255, 255, 255, 0.08);
--surface-border: rgba(255, 255, 255, 0.12);
--surface-border-light: rgba(255, 255, 255, 0.10);
--surface-border-strong: rgba(255, 255, 255, 0.20);
--experience-panel-bg: rgba(15, 23, 42, 0.72);
--header-drawer-bg: rgba(15, 23, 42, 0.92);
--logo-dot-color: #8B2E3C;
```

## Interactive States

```css
/* Buttons */
--btn-primary-bg: #8B2E3C;
--btn-primary-hover: #A63D4F;
--btn-primary-active: #6B1F2F;
--btn-secondary-bg: transparent;
--btn-secondary-border: rgba(255, 255, 255, 0.4);
--btn-secondary-hover-bg: rgba(255, 255, 255, 0.1);
--btn-secondary-hover-border: rgba(255, 255, 255, 0.6);

/* Links */
--link-default: rgba(255, 255, 255, 0.85);
--link-hover: #8B2E3C;
--link-active: #A63D4F;

/* Focus */
--focus-ring: rgba(139, 46, 60, 0.6);
--focus-ring-offset: 2px;
```

## Status & Data Colors

```css
--status-success: #22C55E;
--status-success-bg: rgba(34, 197, 94, 0.12);
--status-success-border: rgba(34, 197, 94, 0.4);
--status-error: #EF4444;
--status-warning: #F59E0B;
--status-info: #3B82F6;

--data-series-1: #8B2E3C;
--data-series-2: #3B82F6;
--data-series-3: #F59E0B;
--data-series-4: #475569;
```

### Usage Tips
- Slate backgrounds dominate; reserve #8B2E3C touches for emphasis so they feel premium.
- For subtle hover cues (nav, inline links) rely on 1–2px treatments rather than color floods.
- Keep gradients soft and desaturated—avoid reintroducing the retired green accents so the look stays monochrome.

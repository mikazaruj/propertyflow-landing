# Still Kettle Design System v2

**Aesthetic Direction:** Quiet Editorial — Warm minimalism with typographic presence

> "This brand is not here to impress. It is here to stay, to support, and to quietly expand what's possible."

---

## Design Philosophy

### Core Principles

1. **Presence over performance** — Every element earns its place
2. **Warm quiet** — Not cold, not loud. Environmental, familiar
3. **Typography-led** — Let words do the work, not decorations
4. **10-year test** — Nothing trendy, nothing that dates quickly

### What This Is Not

- No vibrant gradients
- No playful animations
- No high-saturation accents
- No "SaaS template" patterns
- No performative design

---

## Color Palette

### Philosophy

Colors should feel **environmental rather than branded**. Think paper, ink, stone, soft shadow.

### CSS Variables

```css
:root {
  /* ━━━ Core ━━━ */
  --color-ink: #1a1a1a;           /* Near-black, warm graphite */
  --color-ink-light: #3d3d3d;     /* Secondary text */
  --color-ink-muted: #6b6b6b;     /* Tertiary, captions */

  --color-paper: #faf9f7;         /* Warm off-white, like aged paper */
  --color-paper-dark: #f0eeeb;    /* Subtle section dividers */
  --color-paper-shadow: #e8e5e1;  /* Borders, subtle separations */

  /* ━━━ Accent (use sparingly) ━━━ */
  --color-stone: #8b8680;         /* Muted mineral, for subtle highlights */
  --color-clay: #a69080;          /* Warm earth tone, very occasional use */

  /* ━━━ Semantic ━━━ */
  --color-focus: #1a1a1a;         /* Focus rings match ink */
  --color-link: #1a1a1a;          /* Links are ink, underlined */
  --color-link-hover: #3d3d3d;    /* Subtle lift on hover */
}
```

### Usage Guidelines

| Element | Color |
|---------|-------|
| Primary text | `--color-ink` |
| Secondary text | `--color-ink-light` |
| Captions, metadata | `--color-ink-muted` |
| Background | `--color-paper` |
| Cards, sections | `--color-paper-dark` |
| Borders | `--color-paper-shadow` |
| Accent (rare) | `--color-stone` or `--color-clay` |

**Rule:** If you're reaching for an accent color, ask if you really need it.

---

## Typography

### Philosophy

Typography should feel like it has **always existed**, not recently launched. Contemporary serif for intellectual warmth, humanist sans for supporting clarity.

### Font Stack

**Display (Headlines):** [Newsreader](https://fonts.google.com/specimen/Newsreader) — A contemporary serif with editorial character. Warm, readable, timeless.

**Body:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) — Humanist sans-serif. Clear, neutral, doesn't compete with display type.

**Monospace (optional):** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — For code snippets or technical details.

```css
:root {
  --font-display: 'Newsreader', 'Georgia', serif;
  --font-body: 'Source Sans 3', 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Consolas', monospace;
}
```

### Type Scale

```css
:root {
  /* Sizes */
  --text-xs: 0.75rem;      /* 12px - Fine print */
  --text-sm: 0.875rem;     /* 14px - Captions */
  --text-base: 1rem;       /* 16px - Body */
  --text-lg: 1.125rem;     /* 18px - Lead paragraphs */
  --text-xl: 1.25rem;      /* 20px - Section intros */
  --text-2xl: 1.5rem;      /* 24px - Small headlines */
  --text-3xl: 2rem;        /* 32px - Section headlines */
  --text-4xl: 2.5rem;      /* 40px - Page headlines */
  --text-5xl: 3.25rem;     /* 52px - Hero (mobile) */
  --text-6xl: 4rem;        /* 64px - Hero (desktop) */

  /* Line Heights */
  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
}
```

### Typography Classes

```css
/* ━━━ Wordmark ━━━ */
.wordmark {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 400;
  font-style: italic;
  letter-spacing: var(--tracking-wide);
  color: var(--color-ink);
  text-transform: lowercase;
}

/* ━━━ Headlines ━━━ */
.headline-hero {
  font-family: var(--font-display);
  font-size: clamp(var(--text-5xl), 8vw, var(--text-6xl));
  font-weight: 400;
  font-style: italic;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
}

.headline-section {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 400;
  font-style: normal;
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

/* ━━━ Body ━━━ */
.text-lead {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--color-ink-light);
}

.text-body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--color-ink-light);
}

.text-small {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--color-ink-muted);
}

/* ━━━ Links ━━━ */
.link {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--color-ink-light);
}
```

---

## Spacing System

### Philosophy

Generous whitespace creates calm. Let elements breathe.

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-48: 12rem;    /* 192px */
}
```

### Section Spacing

| Context | Spacing |
|---------|---------|
| Between major sections | `--space-32` to `--space-48` |
| Within sections | `--space-12` to `--space-16` |
| Between paragraphs | `--space-6` |
| Between related elements | `--space-4` |

---

## Layout

### Container

```css
.container {
  width: 100%;
  max-width: 680px;  /* Optimal reading width */
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.container-wide {
  max-width: 960px;
}
```

### Grid Philosophy

No complex grids. Single column, centered content. Let the typography breathe.

```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.section {
  padding: var(--space-24) 0;
}

.section + .section {
  border-top: 1px solid var(--color-paper-shadow);
}
```

---

## Components

### Buttons

Minimal. Text-based with subtle affordances.

```css
/* Primary action - text link style with arrow */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-ink);
  text-decoration: none;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-ink);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  padding-bottom: var(--space-2);
  border-bottom-width: 2px;
}

.btn-primary::after {
  content: '→';
  transition: transform 0.2s ease;
}

.btn-primary:hover::after {
  transform: translateX(4px);
}

/* Secondary - even more subtle */
.btn-secondary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--color-ink-muted);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.btn-secondary:hover {
  color: var(--color-ink);
}
```

### Cards

For product listings. Subtle, content-focused.

```css
.card {
  padding: var(--space-8);
  background: var(--color-paper-dark);
  border-radius: 2px;  /* Barely there */
  transition: background 0.2s ease;
}

.card:hover {
  background: var(--color-paper-shadow);
}

.card-title {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}

.card-description {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-ink-light);
  line-height: var(--leading-normal);
}

.card-meta {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  margin-top: var(--space-4);
}
```

### Form Elements

For email capture (waitlist).

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-ink);
  background: var(--color-paper);
  border: 1px solid var(--color-paper-shadow);
  border-radius: 2px;
  outline: none;
  transition: border-color 0.2s ease;
}

.input:focus {
  border-color: var(--color-ink);
}

.input::placeholder {
  color: var(--color-ink-muted);
}
```

### Dividers

```css
.divider {
  width: 48px;
  height: 1px;
  background: var(--color-paper-shadow);
  margin: var(--space-12) 0;
}

/* Alternative: three dots */
.divider-dots::before {
  content: '· · ·';
  display: block;
  text-align: center;
  color: var(--color-ink-muted);
  letter-spacing: 0.5em;
}
```

---

## Animation

### Philosophy

Motion should be **barely noticeable**. Functional, not decorative.

```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 200ms;
}

/* Only animation: subtle fade in on page load */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade {
  animation: fadeIn 0.6s var(--ease-default);
}

/* Stagger for content sections */
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 200ms; }
```

### Hover States

Subtle. No transforms, no scale. Just color shifts.

```css
/* Links */
a { transition: color var(--duration-fast) var(--ease-default); }

/* Cards */
.card { transition: background var(--duration-normal) var(--ease-default); }
```

---

## Iconography

Minimal. Prefer text where possible.

If icons needed:
- Use simple line icons (1.5px stroke)
- Match `--color-ink-muted`
- Never decorative, always functional

```css
.icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}
```

---

## Accessibility

```css
/* Focus states - visible but not jarring */
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 4px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast adjustments */
@media (prefers-contrast: high) {
  :root {
    --color-ink: #000000;
    --color-paper: #ffffff;
  }
}
```

---

## Responsive Approach

Mobile-first. The design is simple enough that breakpoints are minimal.

```css
/* Breakpoints */
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;

/* Typography scales down on mobile via clamp() */
/* Spacing reduces slightly */

@media (max-width: 640px) {
  :root {
    --space-24: 4rem;
    --space-32: 5rem;
  }
}
```

---

## Implementation Checklist

- [ ] Add font imports (Newsreader, Source Sans 3)
- [ ] Set up CSS variables
- [ ] Build base typography classes
- [ ] Create page layout structure
- [ ] Style cards for products
- [ ] Add subtle page load animation
- [ ] Test accessibility (contrast, focus states)
- [ ] Test reduced motion preference
- [ ] Verify 10-year test: nothing feels trendy

---

## Quick Start: Font Imports

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;1,400&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Visual Reference

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   stillkettle                                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                                                         │
│         Good things take time to brew                   │
│                                                         │
│         We build the tools we always needed             │
│         — now possible — without noise.                 │
│                                                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         AI has changed what's possible...               │
│                                                         │
│         Simple tools. Thoughtfully made. No noise.      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         What we're making                               │
│                                                         │
│         ┌─────────────────────────────────────────┐     │
│         │  Stella                                 │     │
│         │  Scans your Gmail for invoices...      │     │
│         │  Try Stella →                          │     │
│         └─────────────────────────────────────────┘     │
│                                                         │
│         ┌─────────────────────────────────────────┐     │
│         │  Something new is brewing.             │     │
│         │  Get notified →                        │     │
│         └─────────────────────────────────────────┘     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         Behind the kettle                               │
│                                                         │
│         Still Kettle is a small, independent studio...  │
│                                                         │
│         Say hello →                                     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         hello@stillkettle.com                           │
│         Privacy · Terms                                 │
│         © 2026 Still Kettle                             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Comparison: v1 vs v2

| Aspect | v1 (Gradient SaaS) | v2 (Quiet Editorial) |
|--------|-------------------|---------------------|
| Colors | Sunset gradients, magenta/orange | Warm graphite, off-white paper |
| Typography | Satoshi (geometric sans) | Newsreader (editorial serif) |
| Buttons | Pill-shaped, filled | Text links with arrows |
| Animation | Fade-up, floating clouds | Minimal fade-in only |
| Feel | Energetic, attention-grabbing | Calm, trustworthy, timeless |
| Inspiration | Modern SaaS | Editorial, indie press |

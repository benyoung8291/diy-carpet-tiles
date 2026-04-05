# Modular Carpet – Design System

> Premium Modular Carpet Tiles by Premrest
> Domain: modularcarpet.com.au

---

## 1. Brand Identity

### Brand Hierarchy
- **Primary brand:** Modular Carpet
- **Parent brand:** Premrest (premrest.com.au)
- **Tagline:** "Premium Modular Carpet Tiles by Premrest"
- **Secondary taglines:**
  - "Seamless Carpet Tiles for Australian Homes"
  - "The Look of Broadloom. The Freedom of Tiles."
  - "Replace. Don't Redo."

### Brand Personality
- **Warm & Sophisticated** – feels like a curated interior design editorial
- **Confident & Human** – benefit-driven copy that speaks to real homeowners
- **Bold & Energetic** – vibrant CTAs and accent colors that inspire action
- **Australian** – grounded in Australian homes, suburbs, and lifestyle

---

## 2. Color Palette

### Primary Neutrals (Warm Base)
| Token | Name | Hex | Usage |
|---|---|---|---|
| `--neutral-50` | Snow | `#FAFAF8` | Page backgrounds |
| `--neutral-100` | Linen | `#F5F3EF` | Section alternates, card backgrounds |
| `--neutral-200` | Sand | `#E8E4DD` | Borders, dividers |
| `--neutral-300` | Pebble | `#D1CBC0` | Muted text, disabled states |
| `--neutral-400` | Stone | `#A89F91` | Secondary text |
| `--neutral-500` | Slate | `#7A7265` | Body text |
| `--neutral-600` | Graphite | `#5C554A` | Subheadings |
| `--neutral-700` | Charcoal | `#3D3830` | Headings |
| `--neutral-800` | Obsidian | `#2A2520` | Primary text |
| `--neutral-900` | Midnight | `#1A1714` | Hero overlays, footer |

### Accent Colors (Carpet-Inspired Bold Energy)
| Token | Name | Hex | Usage |
|---|---|---|---|
| `--accent-primary` | Terracotta | `#C4652A` | Primary buttons, CTAs, links |
| `--accent-primary-hover` | Burnt Clay | `#A8541F` | Button hover states |
| `--accent-primary-light` | Terracotta Wash | `#FDF0E8` | Accent backgrounds, badges |
| `--accent-secondary` | Deep Teal | `#1B6B6D` | Secondary accents, info elements |
| `--accent-secondary-hover` | Dark Teal | `#145455` | Secondary hover |
| `--accent-secondary-light` | Teal Wash | `#E6F3F3` | Secondary backgrounds |
| `--accent-warm` | Amber Gold | `#D4A03C` | Stars, ratings, highlights |
| `--accent-warm-light` | Gold Wash | `#FBF4E4` | Highlight backgrounds |

### Functional Colors
| Token | Hex | Usage |
|---|---|---|
| `--success` | `#3D8B5E` | Success states, checkmarks |
| `--error` | `#C44B4B` | Form errors |
| `--info` | `#1B6B6D` | Informational |
| `--warning` | `#D4A03C` | Warnings |

### Range-Specific Accent Colors
| Range | Color | Hex | Mood |
|---|---|---|---|
| Haven | Hearth Amber | `#C4874A` | Fireside warmth |
| Aura | Sage Green | `#7A9E7E` | Biophilic calm |
| Horizon | Urban Blue | `#4A6FA5` | Suburban energy |

---

## 3. Typography

### Font Stack
- **Headings:** `"DM Serif Display", Georgia, serif` – elegant, editorial warmth
- **Body:** `"Inter", -apple-system, BlinkMacSystemFont, sans-serif` – clean, modern readability
- **Accent/Labels:** `"Inter", sans-serif` at 600–700 weight with letter-spacing

### Type Scale (Desktop → Mobile)
| Token | Size (Desktop) | Size (Mobile) | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| `display-xl` | 72px / 4.5rem | 40px / 2.5rem | 400 | 1.1 | Hero headlines |
| `display-lg` | 56px / 3.5rem | 32px / 2rem | 400 | 1.15 | Section heroes |
| `display-md` | 44px / 2.75rem | 28px / 1.75rem | 400 | 1.2 | Page titles |
| `heading-lg` | 36px / 2.25rem | 24px / 1.5rem | 400 | 1.25 | Section headings |
| `heading-md` | 28px / 1.75rem | 22px / 1.375rem | 400 | 1.3 | Card titles |
| `heading-sm` | 22px / 1.375rem | 18px / 1.125rem | 400 | 1.35 | Subheadings |
| `body-lg` | 20px / 1.25rem | 18px / 1.125rem | 400 | 1.7 | Lead paragraphs |
| `body-md` | 16px / 1rem | 16px / 1rem | 400 | 1.7 | Body text |
| `body-sm` | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.6 | Captions, meta |
| `label` | 12px / 0.75rem | 12px / 0.75rem | 600 | 1.4 | Labels, badges, overlines |

### Heading letter-spacing
- `display-*`: `-0.02em`
- `heading-*`: `-0.015em`

### Overline Style
- `font-size: 12px`, `font-weight: 600`, `letter-spacing: 0.12em`, `text-transform: uppercase`, `color: var(--accent-primary)`

---

## 4. Spacing System

Base unit: `4px`

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Inline spacing |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Default padding |
| `space-5` | 20px | Card inner padding |
| `space-6` | 24px | Component gaps |
| `space-8` | 32px | Section inner padding |
| `space-10` | 40px | Between components |
| `space-12` | 48px | Large section gaps |
| `space-16` | 64px | Section padding (mobile) |
| `space-20` | 80px | Section padding (desktop) |
| `space-24` | 96px | Large section padding |
| `space-32` | 128px | Hero sections |

### Container Widths
- **Max width:** `1280px`
- **Narrow content:** `768px` (for articles, forms)
- **Wide content:** `1440px` (for full-bleed galleries)
- **Horizontal padding:** `24px` (mobile), `48px` (tablet), `64px` (desktop)

---

## 5. Shadows & Elevation

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(26,23,20,0.05)` | Subtle cards |
| `shadow-md` | `0 4px 12px rgba(26,23,20,0.08)` | Hovered cards, dropdowns |
| `shadow-lg` | `0 8px 24px rgba(26,23,20,0.12)` | Modals, popovers |
| `shadow-xl` | `0 16px 48px rgba(26,23,20,0.16)` | Image overlays |
| `shadow-inner` | `inset 0 2px 4px rgba(26,23,20,0.06)` | Pressed states |

---

## 6. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 4px | Badges, small elements |
| `radius-md` | 8px | Cards, inputs |
| `radius-lg` | 12px | Large cards, modals |
| `radius-xl` | 16px | Featured sections |
| `radius-full` | 9999px | Pills, avatars |

---

## 7. Component Styles

### Buttons

#### Primary Button
```css
background: var(--accent-primary);
color: white;
font-weight: 600;
font-size: 16px;
padding: 14px 32px;
border-radius: 8px;
letter-spacing: 0.01em;
transition: all 0.2s ease;
/* Hover */
background: var(--accent-primary-hover);
transform: translateY(-1px);
box-shadow: var(--shadow-md);
```

#### Secondary Button
```css
background: transparent;
color: var(--neutral-800);
border: 1.5px solid var(--neutral-300);
font-weight: 600;
font-size: 16px;
padding: 14px 32px;
border-radius: 8px;
/* Hover */
border-color: var(--neutral-800);
background: var(--neutral-100);
```

#### Ghost Button
```css
background: transparent;
color: var(--accent-primary);
font-weight: 600;
padding: 14px 32px;
/* Hover */
background: var(--accent-primary-light);
```

#### Button Sizes
- **Large:** `padding: 18px 40px; font-size: 18px;`
- **Default:** `padding: 14px 32px; font-size: 16px;`
- **Small:** `padding: 10px 20px; font-size: 14px;`

### Cards

#### Product Card
```css
background: white;
border-radius: 12px;
overflow: hidden;
border: 1px solid var(--neutral-200);
transition: all 0.3s ease;
/* Hover */
transform: translateY(-4px);
box-shadow: var(--shadow-lg);
border-color: var(--neutral-300);
```

#### Feature Card
```css
background: var(--neutral-100);
border-radius: 12px;
padding: 32px;
border: none;
/* Icon container */
width: 56px; height: 56px;
background: var(--accent-primary-light);
border-radius: 12px;
color: var(--accent-primary);
```

#### Spec Card
```css
background: white;
border-radius: 8px;
padding: 24px;
border: 1px solid var(--neutral-200);
/* Label */
font-size: 12px; font-weight: 600;
letter-spacing: 0.1em; text-transform: uppercase;
color: var(--neutral-400);
/* Value */
font-size: 20px; font-weight: 600;
color: var(--neutral-800);
```

### Forms

#### Input Fields
```css
background: white;
border: 1.5px solid var(--neutral-200);
border-radius: 8px;
padding: 14px 16px;
font-size: 16px;
color: var(--neutral-800);
transition: border-color 0.2s;
/* Focus */
border-color: var(--accent-primary);
outline: none;
box-shadow: 0 0 0 3px var(--accent-primary-light);
/* Label */
font-size: 14px; font-weight: 500;
color: var(--neutral-600);
margin-bottom: 6px;
```

#### Select / Dropdown
Same as input, with custom chevron icon.

#### Form Layout
- Stack labels above inputs
- Use 24px gap between form groups
- Error messages: 14px, color: `var(--error)`, margin-top: 4px

### Navigation

#### Header
```css
background: rgba(255,255,255,0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--neutral-200);
height: 80px;
position: sticky; top: 0; z-index: 50;
```

#### Nav Links
```css
font-size: 15px; font-weight: 500;
color: var(--neutral-600);
/* Hover */
color: var(--neutral-800);
/* Active */
color: var(--accent-primary);
```

### Color Swatches
```css
width: 64px; height: 64px;
border-radius: 8px;
border: 2px solid transparent;
cursor: pointer;
transition: all 0.2s;
/* Hover */
transform: scale(1.08);
box-shadow: var(--shadow-md);
/* Selected */
border-color: var(--accent-primary);
box-shadow: 0 0 0 3px var(--accent-primary-light);
```

---

## 8. Animation Guidelines (Framer Motion)

### Principles
- Animations should feel **natural and subtle** – never flashy
- Use easing: `[0.25, 0.1, 0.25, 1]` for most transitions
- Keep durations short: 200–400ms for micro-interactions, 500–800ms for reveals

### Standard Animations

#### Fade Up (Section reveals)
```js
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
```

#### Stagger Children
```js
parent: { staggerChildren: 0.1 }
child: { opacity: [0, 1], y: [20, 0] }
```

#### Scale In (Cards, swatches)
```js
initial: { opacity: 0, scale: 0.95 }
animate: { opacity: 1, scale: 1 }
transition: { duration: 0.4 }
```

#### Hover Lift (Interactive elements)
```js
whileHover: { y: -4, transition: { duration: 0.2 } }
```

#### Image Reveal
```js
initial: { opacity: 0, scale: 1.05 }
animate: { opacity: 1, scale: 1 }
transition: { duration: 0.8, ease: "easeOut" }
```

#### Page Transitions
```js
initial: { opacity: 0 }
animate: { opacity: 1 }
exit: { opacity: 0 }
transition: { duration: 0.3 }
```

### Scroll Animations
- Use `whileInView` with `viewport: { once: true, margin: "-100px" }`
- Elements animate in **once** as they enter viewport
- No parallax or scroll-jacking – keep it performant

---

## 9. Image Guidelines

### Aspect Ratios
| Usage | Ratio | Notes |
|---|---|---|
| Hero images | 16:9 or 21:9 | Full-width, immersive |
| Product gallery | 4:3 | Room shots, lifestyle |
| Color swatches | 1:1 | Tight crop of tile texture |
| Card thumbnails | 3:2 | Range preview cards |
| Feature icons | 1:1 | 56×56px container |

### Image Treatment
- All lifestyle images should show **warm, bright Australian homes**
- Include people, pets, families where possible for warmth
- Avoid cold, sterile commercial photography
- Use subtle warm color grading for consistency
- Overlay gradient for text readability on heroes: `linear-gradient(to bottom, rgba(26,23,20,0) 0%, rgba(26,23,20,0.6) 100%)`

### File Paths
```
/public/images/
├── ranges/
│   ├── haven/
│   │   ├── hero.jpg
│   │   ├── gallery/
│   │   │   ├── room-1.jpg
│   │   │   ├── room-2.jpg
│   │   │   └── room-3.jpg
│   │   └── swatches/
│   │       ├── hearth.jpg
│   │       ├── smoke.jpg
│   │       └── ...
│   ├── aura/
│   │   ├── hero.jpg
│   │   ├── gallery/
│   │   └── swatches/
│   └── horizon/
│       ├── hero.jpg
│       ├── gallery/
│       └── swatches/
├── lifestyle/
│   ├── hero-home.jpg
│   ├── family-living.jpg
│   ├── pet-friendly.jpg
│   └── ...
├── icons/
└── logos/
    ├── premrest-logo.svg
    └── modular-carpet-logo.svg
```

---

## 10. Layout Patterns

### Hero Section
- Full-width background image with gradient overlay
- Content centered, max-width 768px
- Overline + Display heading + Body lead + 2 CTAs (primary + secondary)
- Min-height: 85vh (desktop), 70vh (mobile)

### Benefits Grid
- 3 columns desktop, 2 tablet, 1 mobile
- Feature cards with icon + heading + body
- Alternating section backgrounds (white / linen)

### Product Range Page (Interface.com style)
1. **Hero:** Full-bleed room image with range name overlay
2. **Color Selector:** Grid of swatches (left) + large preview image (right)
3. **Gallery:** Masonry or grid of lifestyle shots
4. **Specs:** Clean grid of spec cards
5. **Features:** Icon + text rows
6. **Installation:** Step cards
7. **CTA Banner:** Lead-gen form or button

### Section Spacing
- Between major sections: `96px` desktop, `64px` mobile
- Section internal padding: `80px 0` desktop, `48px 0` mobile

---

## 11. Responsive Breakpoints

| Token | Value | Usage |
|---|---|---|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1440px | Large desktop |

---

## 12. Accessibility

- All interactive elements must have focus-visible outlines (`box-shadow: 0 0 0 3px var(--accent-primary-light)`)
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text
- All images require descriptive `alt` text
- Form inputs must have associated labels
- Skip-to-content link on every page
- Semantic HTML: proper heading hierarchy, landmarks, ARIA where needed
- Reduced motion: respect `prefers-reduced-motion` – disable all transforms/animations

---

## 13. SEO & Meta

- Every page needs unique `<title>` and `<meta name="description">`
- Open Graph + Twitter Card meta for social sharing
- Structured data (JSON-LD) for Product, Organization, FAQ
- Clean semantic HTML with proper heading hierarchy
- Image `alt` tags everywhere
- Sitemap and robots.txt

---

## 14. Tailwind CSS Custom Configuration

```js
// Extend Tailwind with brand tokens
colors: {
  brand: {
    50: '#FAFAF8',
    100: '#F5F3EF',
    200: '#E8E4DD',
    300: '#D1CBC0',
    400: '#A89F91',
    500: '#7A7265',
    600: '#5C554A',
    700: '#3D3830',
    800: '#2A2520',
    900: '#1A1714',
  },
  accent: {
    DEFAULT: '#C4652A',
    hover: '#A8541F',
    light: '#FDF0E8',
  },
  teal: {
    DEFAULT: '#1B6B6D',
    hover: '#145455',
    light: '#E6F3F3',
  },
  warm: {
    DEFAULT: '#D4A03C',
    light: '#FBF4E4',
  },
  haven: '#C4874A',
  aura: '#7A9E7E',
  horizon: '#4A6FA5',
}

fontFamily: {
  serif: ['"DM Serif Display"', 'Georgia', 'serif'],
  sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
}
```

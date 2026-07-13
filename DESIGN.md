# DESIGN.md

# IGA Global Website Design System

**Project:** IGA Global Investment Ltd
**Industry:** Real Estate Investment Advisory & Property Development
**Document Version:** 1.0
**Status:** Design Specification

---

# Design Philosophy

IGA Global is **not** a property listing platform.

The website should position the company as a **premium real estate investment advisory and development firm** focused on trust, wealth creation, affordability, and long-term partnerships.

The experience should feel closer to:

* BlackRock
* JLL
* CBRE
* Knight Frank
* Savills

than traditional real estate marketplaces.

Every interaction should communicate:

* Trust
* Stability
* Premium quality
* Confidence
* Professionalism
* Long-term investment

Avoid loud marketing visuals, excessive animations, or sales-heavy messaging.

---

# Design Principles

## 1. Trust First

Everything should build credibility.

Use:

* Clean layouts
* Generous spacing
* Professional photography
* Minimal distractions

Avoid:

* Clutter
* Flashy graphics
* Stock imagery with exaggerated smiles
* Cheap-looking icons

---

## 2. Premium Simplicity

The interface should feel expensive without being complicated.

Every component should have room to breathe.

Whitespace is part of the design.

---

## 3. Visual Hierarchy

Each page should naturally guide users from:

Awareness

↓

Education

↓

Trust

↓

Action

Users should never feel overwhelmed.

---

## 4. Conversion-Oriented

Every page exists to move users toward one goal:

**Schedule a Consultation**

All secondary actions should support this primary conversion.

---

# Brand Personality

The brand should feel:

Professional

Confident

Reliable

Modern

Sophisticated

Approachable

Knowledgeable

Transparent

Never feel:

Aggressive

Cheap

Corporate bureaucracy

Overly luxurious

Flashy

Sales-driven

---

# Brand Colors

## Primary

Deep Royal Blue

```
#26428B
```

Purpose

* Header
* Footer
* Buttons
* Navigation
* Icons
* Important sections
* Overlays

---

## Secondary

Gold

```
#E3AF64
```

Purpose

* Highlights
* Underlines
* Icons
* Small accents
* Statistics
* Active navigation
* CTA emphasis

Never use gold as the dominant background.

---

## Supporting Colors

White

```
#FFFFFF
```

Off White

```
#F8F9FB
```

Light Gray

```
#EEF2F6
```

Medium Gray

```
#6B7280
```

Dark Gray

```
#374151
```

Near Black

```
#111827
```

Success

```
#22C55E
```

Warning

```
#F59E0B
```

Danger

```
#EF4444
```

---

# Color Scales

Every color is implemented as a 50–950 scale in `app/globals.css`, following Tailwind's step convention. Scales are generated in OKLCH so lightness steps are perceptually even, and every step is fitted to the sRGB gamut.

The brand hexes above are not approximated — they are pinned as exact anchor steps:

| Scale | Anchor step | Hex |
| --- | --- | --- |
| `royal` | 800 | `#26428B` |
| `gold` | 400 | `#E3AF64` |
| `ink` | 50 / 100 / 500 / 700 / 900 | `#F8F9FB` `#EEF2F6` `#6B7280` `#374151` `#111827` |
| `success` | 500 | `#22C55E` |
| `warning` | 500 | `#F59E0B` |
| `danger` | 500 | `#EF4444` |

`ink` is the neutral scale. It carries a slight blue cast (hue matched to `royal`) so grays sit with the brand rather than fighting it.

---

## Color Usage Rules

**Gold is not a text color on white.** `gold-400` on white is 1.98:1 — it fails WCAG AA badly. Use gold as a background, rule, underline, or icon fill. For gold-colored *text* on light backgrounds use `gold-700` (5.01:1). On blue backgrounds `gold-400` is safe (4.74:1 on `royal-800`).

**Warning sits close to gold.** `#F59E0B` and `#E3AF64` are near-neighbors in hue. Never rely on that difference alone to signal a warning — always pair with an icon or label. This also satisfies "no information conveyed by color alone."

**Text pairings that meet AA:** body `ink-900` on white (17.7:1), secondary `ink-500` on white (4.8:1), headings `royal-800` on white (9.4:1), white on `royal-800` (9.4:1). For semantic text on white use `success-700`, `danger-600`, `warning-800` — the 500 steps are too light for body text.

---

# Color Usage Ratio

70%

White backgrounds

20%

Blue

10%

Gold

The website should feel bright and open.

---

# Typography

Primary Font

**Manrope**

Fallback

```
Inter
```

---

## Heading Styles

Hero

64px

Bold

Line height

110%

---

H1

56px

Bold

---

H2

44px

Bold

---

H3

34px

Semibold

---

H4

28px

Semibold

---

H5

22px

Medium

---

Body Large

20px

Regular

---

Body

18px

Regular

---

Small

16px

Regular

---

Caption

14px

Medium

---

# Grid System

Desktop

12-column grid

Container

1320px

Padding

32px

---

Tablet

8-column grid

Container

100%

Padding

24px

---

Mobile

4-column grid

Padding

20px

---

# Border Radius

Cards

20px

Buttons

14px

Inputs

14px

Images

24px

Sections

Rounded only where appropriate.

---

# Spacing System

Use an 8px spacing scale.

```
8
16
24
32
40
48
56
64
80
96
120
160
```

Large sections should have 120–160px vertical spacing on desktop.

---

# Shadows

Use soft elevation only.

Never use harsh shadows.

Cards

Very subtle

Hover

Medium

Floating components

Soft shadow

---

# Buttons

Primary

Background

Blue

Text

White

Hover

Slightly darker blue

Active

Scale to 98%

---

Secondary

White

Blue border

Blue text

Hover

Blue background

White text

---

Gold Accent Button

Reserved for high-priority actions only.

Do not overuse.

---

# Button Sizes

Small

Medium

Large

Extra Large (Hero only)

---

# Forms

Inputs

Rounded

Large

Comfortable padding

Strong focus state

Blue border on focus

Labels above inputs

Never use placeholder text as labels.

---

# Cards

Cards should feel elevated but subtle.

Properties

White background

Rounded corners

Soft border

Light shadow

Hover

Lift by 4px

Increase shadow slightly

---

# Icons

**Family: Lucide** (`lucide-react`). Outline-only, drawn on a consistent 24px grid, tree-shaken per icon.

**Stroke weight: 1.5**, not Lucide's default of 2. This is the single most important icon decision on the site. At 2px the set reads utilitarian and app-like; at 1.5px it reads considered and expensive, which is the register this brand needs. The weight is enforced centrally in `components/ui/icon.tsx` — never set `strokeWidth` at a call site.

Icons use `absoluteStrokeWidth`, so the stroke stays visually 1.5px at every size instead of scaling up with the glyph.

## Usage

Always render through the `Icon` wrapper:

```tsx
<Icon icon={SERVICE_ICONS["market-research"]} size="lg" />
```

Sizes: `sm` 16 · `md` 20 · `lg` 24 · `xl` 32 · `display` 40.

Icons are decorative by default and are hidden from screen readers. If an icon carries meaning on its own (an icon-only button), pass `label` — it then becomes `role="img"` with an accessible name.

## Icon vocabulary

Do not pick glyphs ad hoc — that is how a set stops looking like a set. Every icon comes from the curated maps in `lib/icons.ts`: `SERVICE_ICONS`, `VALUE_ICONS`, `CONTACT_ICONS`, `UI_ICONS`. Add to those maps rather than importing from `lucide-react` inside a component.

## Social marks

Brand logos are a deliberate exception to the outline rule — a logo is a mark, not a UI icon, and must be filled and correct. They live in `components/ui/social-icon.tsx`.

Note: Lucide removed its brand icons, and Simple Icons no longer ships LinkedIn, so the LinkedIn mark is hand-authored inline. Facebook, Instagram and X come from `@icons-pack/react-simple-icons`.

Never mix Lucide with any other UI icon set.

---

# Imagery

Photography should include:

Modern residential developments

Professional client meetings

Architecture

Construction

Urban skylines

Families

Investment consultations

Professionals reviewing plans

Avoid:

Overly edited images

Low resolution

Crowded scenes

Obvious stock-photo clichés

---

# Illustrations

Keep minimal.

Photography should dominate.

If illustrations are used:

Use simple geometric styles.

---

# Background Treatments

Primary

White

Alternate

Light Gray

Premium sections

Blue background

Use subtle gradients only.

Never use noisy textures.

---

# Animations

Animation should feel natural.

Duration

200–350ms

Use:

Fade

Slide

Scale

Opacity

Avoid:

Bounce

Spin

Elastic

Exaggerated motion

---

# Scroll Animations

Fade Up

Fade Left

Fade Right

Scale In

Each section should animate only once.

---

# Micro Interactions

Buttons

Hover elevation

Cards

Lift slightly

Navigation

Smooth underline transition

Accordion

Smooth expansion

Counters

Animate on viewport

Progress indicators

Animated

---

# Header

Sticky

Transparent on hero

Solid on scroll

Height

80px

Desktop

72px

Tablet

64px

Mobile

---

# Navigation

Desktop

Centered navigation

CTA on right

Logo left

---

Mobile

Hamburger

Full-screen navigation drawer

Large touch targets

---

# Footer

Dark Blue background

Four-column layout

Generous spacing

Newsletter subscription

Social links

Legal links

Contact information

---

# Hero Section

Full viewport

Large architectural imagery

Dark overlay

Headline left

Supporting copy

CTA buttons

Trust indicators

Optional statistic cards

---

# Section Layout

Every section should include:

Headline

Supporting text

Visual

Content

CTA where appropriate

Alternate image alignment between sections.

---

# Content Width

Maximum reading width

720px

Do not allow paragraphs to stretch across the screen.

---

# Accessibility

Minimum contrast ratio WCAG AA

Keyboard navigable

Visible focus indicators

ARIA labels

Semantic HTML

Alt text for every image

No information conveyed by color alone

Minimum touch target of 44×44px

---

# Responsive Design

Desktop

1440+

Laptop

1280

Tablet

1024

Small Tablet

768

Large Mobile

480

Small Mobile

360

Every component must adapt gracefully.

---

# Performance Targets

Lighthouse Performance

95+

Accessibility

100

Best Practices

100

SEO

100

Core Web Vitals should meet Google's "Good" thresholds.

---

# SEO Requirements

Unique page titles

Unique meta descriptions

Open Graph tags

Twitter cards

Structured data

Organization schema

Breadcrumb schema where applicable

Optimized heading hierarchy

Image optimization

Sitemap

Robots.txt

Canonical URLs

---

# Components

The design system should include reusable components for:

* Announcement Bar
* Header
* Navigation
* Mega Menu (if needed)
* Hero
* Section Headers
* CTA Banner
* Service Cards
* Value Cards
* Statistic Cards
* Timeline
* Process Steps
* Testimonial Cards
* Leadership Cards
* Blog Cards
* FAQ Accordion
* Newsletter Form
* Contact Form
* Buttons
* Badges
* Tags
* Breadcrumbs
* Pagination
* Modal
* Drawer
* Toast Notifications
* Tabs
* Empty States
* Loading Skeletons
* Error States
* Success Messages
* Footer

---

# Page-Specific Design Notes

## Home

Large storytelling experience with alternating layouts, trust indicators, process visualization, investment categories, leadership, insights, FAQ, and a strong consultation-focused closing CTA.

## About

Company story, mission, vision, values, leadership, differentiators, and credibility-building sections with supporting imagery.

## Services

Modular service blocks with clear benefits, process summaries, and consultation CTAs after each major section.

## Investment Solutions

Educational content supported by diagrams, investment pathways, audience segmentation, and comparison cards rather than property listings.

## Projects

Portfolio-style presentation showcasing development philosophy, completed work (when available), capabilities, quality standards, and future vision.

## Why Invest in Nigeria

Data-driven layouts using charts, statistics, maps, timelines, and concise insights to educate investors.

## Insights

Modern editorial layout with featured article, category filters, article cards, newsletter signup, and related content.

## Contact

Prominent contact information, consultation form, interactive map, office details, FAQ, and reassurance messaging.

---

# Token Implementation

The design system lives in `app/globals.css` as Tailwind v4 theme tokens (CSS-first — there is no `tailwind.config.js`). Build against these tokens; never hard-code a hex.

**Color** — `royal` `gold` `ink` `success` `warning` `danger`, each 50–950. Utilities: `bg-royal-800`, `text-gold-700`, `border-ink-200`, etc.

**Semantic roles** — prefer these over raw scale steps, because they rebind by section:

`surface` `surface-alt` `surface-sunken` `foreground` `muted` `heading` `border` `border-strong` `primary` `primary-hover` `on-primary` `accent` `accent-hover` `accent-text` `on-accent` `ring`

**Blue sections** — put `surface-blue` on the section. Every semantic role above flips to its on-blue value, so `text-muted`, `border-border`, headings and focus rings adapt with no per-element overrides.

**Type** — `text-hero` `text-h1`…`text-h5` `text-body-lg` `text-body` `text-small` `text-caption`. All fluid via `clamp()`, capping at the desktop sizes specified above. Bare `h1`–`h5` elements are already styled; the utilities are for when semantics and size need to differ.

**Layout** — `container-page` (1320px + responsive gutters), `section` (120–160px desktop vertical rhythm), `measure` (720px reading width).

**Radius** — `rounded-button` (14px), `rounded-input` (14px), `rounded-card` (20px), `rounded-image` (24px).

**Shadow** — `shadow-card`, `shadow-card-hover`, `shadow-float`.

**Motion** — `ease-standard`, `ease-out-soft`; durations `--duration-fast` (200ms), `--duration-base` (280ms), `--duration-slow` (350ms). Scroll reveals: `animate-fade-up`, `animate-fade-left`, `animate-fade-right`, `animate-scale-in`. Reduced motion is respected globally.

**Helpers** — `lift` (4px hover lift + shadow), `zoom-media` (image zoom on hover), `eyebrow` (uppercase label with gold rule), `numeric` (tabular figures — use for every statistic), `tap` (44×44px minimum touch target).

---

# AI Implementation Guidelines

AI-assisted design tools (including Figma AI, Lovable, v0, Bolt, Relume, or similar) should follow these constraints:

* Maintain strict adherence to the defined color palette and typography.
* Use a consistent spacing system and component library across every page.
* Generate semantic, accessible layouts with reusable components.
* Avoid unnecessary decorative elements or visual clutter.
* Prioritize readability, accessibility, and performance over visual complexity.
* Ensure every page prominently supports the primary CTA: **Schedule a Consultation**.
* Keep layouts modular so components can be reused across future pages and campaigns.
* Design for scalability, allowing future additions such as property showcases, client portals, or investor dashboards without requiring a redesign.

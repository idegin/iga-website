# Iga Website

A modern, server-rendered ecommerce storefront built with the [Kallo](https://www.npmjs.com/package/@kallojs/cli) framework.

This starter is intentionally complete — it shows off the core of Kallo in one cohesive app.

## What's inside

- **Server-side data fetching** — `src/view/page.kal` and `src/view/products/[id]/page.kal` `await` async data in their `<Server>` block (`src/data/products.ts`).
- **SEO / metadata** — the product detail page returns rich Open Graph + Twitter tags via `$meta()`. View source to see them.
- **File-based routing** — `src/view/products/[id]/page.kal` is a dynamic route; `params.id` resolves the product.
- **Global reactive state** — the cart (`src/stores/cart.ts`) and theme (`src/stores/theme.ts`) stores are shared across pages and components.
- **Local state** — the quantity selector on the detail page uses `$local`.
- **Components with dynamic props** — `ProductCard`, `StarRating`, `CartDrawer` receive data and callbacks via `:props`.
- **Loops & conditionals** — `<Each>` and `<When>/<Else>` drive the grid, cart, features and related products.
- **Dark mode** — a class-based toggle wired to CSS variables in `src/styles/global.css`.
- **Tailwind CSS v4** — clean, flat design with a customizable accent color.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
  data/products.ts          # catalog + async data functions
  stores/                   # cart, catalog (filtering), theme
  components/               # ProductCard, CartDrawer, Navbar, ...
  view/
    layout.kal              # shell: navbar, cart drawer, footer, site SEO
    page.kal                # home: product grid + filtering
    products/[id]/page.kal  # product detail + SEO
    not-found.kal / error.kal
  styles/global.css         # Tailwind + theme tokens + dark mode
```

## Build for production

```bash
npm run build
npm run start
```

# Design Sources
- https://dribbble.com/shots/22674677-Growth-Hacking-Company-Website

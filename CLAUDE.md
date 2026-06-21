# Iga Website

This project was scaffolded with **Kallo** — a TypeScript-first, HTML-first
fullstack framework built on Express. This file orients human contributors and
AI coding agents.

## Where the docs live

- **Online:** https://kallo.idegin.com
- **Local copy:** [`.agents/kallo-docs/`](./.agents/kallo-docs) — the full Kallo
  documentation in Markdown, bundled with this project. Start with
  [`introduction.md`](./.agents/kallo-docs/introduction.md).

When you need to understand a Kallo concept (routing, `<Server>`/`<Client>`/`<View>`
blocks, `$page`, `$meta`, `$store`, `$local`, templating, styling), read the
relevant file in `.agents/kallo-docs/` before guessing.

## Project shape

- `src/view/` — file-based routes. `page.kal` = a route, `layout.kal` = a shell,
  `[param]` = dynamic, `[...param]` = catch-all.
- `src/components/` — reusable `.kal` components.
- `src/stores/` — shared reactive `$store` state.
- `src/api/` — `$router` HTTP endpoints.
- `src/styles/global.css` — Tailwind v4 entry + theme tokens.
- `public/` — static assets served at `/`.

## Commands

- `npm run dev` — dev server (HMR + Tailwind watch)
- `npm run build` — production build
- `npm run start` — run the production server

## Conventions

- Single-file components use the `.kal` extension.
- Escaped interpolation is `{{ expr }}`; raw HTML is `{{{ expr }}}` (use only with
  trusted HTML).
- Server-only code goes in `<Server>` blocks; it is stripped from the client bundle.

# Rules
1. Use a flat design with sharp borders (no border radius)
2. Use only the colors in the global.css.
3. You can find the design concepts are the /public/concept dir so view the images to understand what we're going for.
4. all the brand color are found in the /public/brand
5. Make sure the UI is beautiful.
6. Make sure to brake sections down to reusable components.
7. All sections much more powered by props at all times.
# Define Per

Vite + React application teaching unit-rate language (“per”). [Standards.md](Standards.md) covers Common Core mapping and CK-12 placement.

**Live:** https://content-interactives.github.io/per

## Requirements

- Node.js 18+  
- npm

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Dependencies |
| `npm run dev` | Vite dev server |
| `npm run build` | Production `dist/` |
| `npm run preview` | Preview `dist/` |
| `npm run lint` | ESLint |
| `npm run deploy` | Build + gh-pages to `dist/` |

## Vite

`vite.config.js` sets `base: '/per/'` for GitHub Pages under the `/per/` path.

## Stack

React 18, Vite 5, Tailwind CSS 3, ESLint.

## Layout

- `src/` — components and styles  
- `public/` — static files  
- `index.html` — Vite entry

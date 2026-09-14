# Rorfost website

The public website for Rorfost, an independent software brand building useful software, SaaS products and digital tools.

## Stack

- Astro static site generator
- TypeScript in strict mode
- Tailwind CSS via the current Vite integration
- Playwright smoke tests
- Cloudflare Pages Git integration for hosting

## Local development

Use Node.js 24 LTS and npm 11 or newer.

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run format:check
npm run lint
npm run check
npm run build
npm test
```

## Project structure

- `src/data/site.ts` — public company facts, links and approved projects
- `src/components/` — reusable page sections
- `src/layouts/` — shared document metadata and base layout
- `src/pages/` — homepage and 404 route
- `tests/` — browser smoke tests
- `docs/` — architecture, configuration, deployment and decisions

See [deployment instructions](docs/DEPLOYMENT.md) before connecting Cloudflare Pages.


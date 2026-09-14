# Architecture

The site is a static Astro build. It has no server-side adapter, database or runtime API.

| Area | Location | Purpose |
| --- | --- | --- |
| Routes | `src/pages/` | Homepage and `404` page |
| Shared UI | `src/components/` | Header, brand and footer |
| Layout | `src/layouts/BaseLayout.astro` | Metadata, skip link and global CSS |
| Content | `src/data/site.ts` | Typed public facts and approved project entries |
| Styles | `src/styles/global.css` | Brand tokens and responsive layout |

Use the typed configuration for company details, contact fields, external links and project cards. Components render the data without duplicating it.


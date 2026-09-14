# Decisions

## Static Astro

The site is a static Astro project because public brand content does not need a server, database or account system.

## Typed local content

Company facts and projects are stored in one typed file so future edits remain small and reviewable.

## No invented public claims

Unconfirmed products, client services, contact details, social links and domain are omitted. GitHub is the current working contact fallback.

## Cloudflare Workers Static Assets

Cloudflare Workers serves the static `dist/` output defined in `wrangler.jsonc`. This keeps public pages and optimized images out of the Worker runtime. GitHub Actions only verifies source quality.

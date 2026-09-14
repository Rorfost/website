# Configuration

## Runtime

Use Node.js 24 LTS and npm 11. The exact npm release is declared in `package.json`; `.nvmrc` records the Node major version.

## Public site origin

Set `PUBLIC_SITE_ORIGIN` only after a real production domain is known, for example `https://example.pages.dev` or the final custom domain. Astro then generates canonical and Open Graph URLs from that value.

Do not set it to localhost or a guessed domain. No secrets are required for this static site, so no `.env.example` file is included.

## Content and branding

Update `src/data/site.ts` with approved contact details, social links and project entries. Projects render automatically only when entries are present. The present temporary text brand treatment must be replaced with approved horizontal logo and icon source files when they are supplied.

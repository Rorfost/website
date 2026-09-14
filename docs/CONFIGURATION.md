# Configuration

## Runtime

Use Node.js 24 LTS and npm 11. The exact npm release is declared in `package.json`; `.nvmrc` records the Node major version.

## Public site origin

Set `PUBLIC_SITE_ORIGIN` only after a real production domain is known, for example `https://example.pages.dev` or the final custom domain. Astro then generates canonical and Open Graph URLs plus `sitemap-index.xml` from that value.

Do not set it to localhost or a guessed domain. No secrets are required for this static site, so no `.env.example` file is included.

## Content and branding

Update `src/data/site.ts` with approved contact details, social links and project entries. Projects render automatically only when entries are present. Approved logo, icon and social-preview source files live in `src/assets/` and are imported by the layout and brand component.

The logo and hero icon are transformed by Astro's Sharp image service during `npm run build`. The generated files are emitted to `dist/_astro/`; they must be served as static assets. The site does not use Astro's runtime `/_image` endpoint.

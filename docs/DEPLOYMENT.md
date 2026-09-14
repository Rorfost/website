# Deployment

Cloudflare Workers Static Assets is the deployment path. GitHub Actions verifies code; it does not deploy the website.

## Deploy the static Worker

1. In `wrangler.jsonc`, set `name` to the existing production Worker name before the first deployment. The configuration deploys only the `dist/` directory as Worker Static Assets.
2. Authenticate Wrangler with the Cloudflare account that owns the Worker, then run `npm run deploy` from the production branch. This command builds before uploading, so the optimized files in `dist/_astro/` are deployed with the HTML that references them.
3. If using Cloudflare's Git-based Worker builds, configure its deploy command as `npm run deploy`; do not add the Astro Cloudflare adapter or a separate image-processing Worker.
4. Set `PUBLIC_SITE_ORIGIN` to the real production Worker or custom-domain URL in the production environment. Set preview builds to no-index by retaining `CF_PAGES_BRANCH`, which Cloudflare provides.

## Reviews and release

Run `npm run preview:production` before merging to exercise the production static-asset routing locally, then inspect the Cloudflare preview URL on desktop and mobile. A successful GitHub Actions run is separate from the Cloudflare deployment; Cloudflare does not wait for CI unless an account-level gate is added.

Configure a GitHub branch ruleset for `main` that requires pull requests and the `CI / verify` status check. If the account plan or repository permissions do not support it, document that limitation in the repository settings.

## Custom domains and rollback

Add a custom domain in the Worker dashboard and complete its DNS instructions. Cloudflare retains previous Worker versions: use the Worker Versions dashboard to roll back to a known-good deployment if needed. For a failed build, inspect the deployment log, fix the source branch, and push a new commit.

Cloudflare Workers is not connected or live-verified by this repository alone. An account owner must complete the dashboard steps above.

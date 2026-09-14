# Deployment

Cloudflare Pages native Git integration is the only deployment path. GitHub Actions verifies code; it does not deploy the website.

## Connect Cloudflare Pages

1. In Cloudflare, open **Workers & Pages** and choose **Create application** → **Pages** → **Import an existing Git repository**.
2. Connect `Rorfost/website` and select the production branch `main`.
3. Set Node.js to 24, the build command to `npm run build`, and the output directory to `dist`.
4. Save and deploy. Pull requests and non-production branches then receive preview deployments automatically.
5. Set `PUBLIC_SITE_ORIGIN` to the real production `pages.dev` or custom-domain URL in the production environment. Set preview builds to no-index by retaining `CF_PAGES_BRANCH`, which Cloudflare provides.

## Reviews and release

Inspect the Cloudflare preview URL on desktop and mobile before merging. A successful GitHub Actions run is separate from the native Cloudflare build; Cloudflare does not wait for CI unless an account-level gate is added.

Configure a GitHub branch ruleset for `main` that requires pull requests and the `CI / verify` status check. If the account plan or repository permissions do not support it, document that limitation in the repository settings.

## Custom domains and rollback

Add a custom domain in the Pages project dashboard and complete its DNS instructions. Cloudflare retains previous production deployments: open a known-good deployment in the dashboard and use its rollback option if a release must be reverted. For a failed build, inspect the deployment log, fix the source branch, and push a new commit.

Cloudflare Pages is not connected or live-verified by this repository alone. An account owner must complete the dashboard steps above.


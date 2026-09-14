import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const siteOrigin = process.env.PUBLIC_SITE_ORIGIN;

export default defineConfig({
  output: 'static',
  site: siteOrigin ? new URL(siteOrigin) : undefined,
  integrations: siteOrigin ? [sitemap()] : [],
  image: {
    service: sharpImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

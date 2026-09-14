import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const siteOrigin = process.env.PUBLIC_SITE_ORIGIN;

export default defineConfig({
  output: 'static',
  site: siteOrigin ? new URL(siteOrigin) : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});


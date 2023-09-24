import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://dataengconf.com.au',
  integrations: [
    tailwind(), 
    sitemap(), 
    react({
      include: ['**/react/*'],
    }),
  ],
  adapter: netlify(),
  experimental: {
    assets: true
  }
});
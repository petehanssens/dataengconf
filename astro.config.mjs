import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://dataengconf.com.au',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  adapter: netlify()
});
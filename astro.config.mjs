import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dataengconf.com.au',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  routes: {
    "/sessions/:sessionid": "./src/pages/conference/session.astro"
  }
});

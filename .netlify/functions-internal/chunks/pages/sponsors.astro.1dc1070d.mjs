/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, b as maybeRenderHead } from '../astro.41d5dcd3.mjs';
import { $ as $$Container, a as $$Layout } from './brisbane.astro.f441e564.mjs';
import { $ as $$Image } from './_sessionid_.astro.219c06d8.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'path';
import 'events';
import 'node:stream';

const sponsor_banner = {"src":"/_astro/sponsors_banner.eb4a31f6.webp","width":4340,"height":6139,"format":"webp"};

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Sponsors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sponsors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sponsor DataEngBytes.", "description": "Connect with the brightest data engineers this year!" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
        ${maybeRenderHead($$result3)}<div>
            ${renderComponent($$result3, "Image", $$Image, { "src": sponsor_banner, "alt": "" })}
        </div>
    ` })}
    
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/sponsors.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/sponsors.astro";
const $$url = "/sponsors";

export { $$Sponsors as default, $$file as file, $$url as url };

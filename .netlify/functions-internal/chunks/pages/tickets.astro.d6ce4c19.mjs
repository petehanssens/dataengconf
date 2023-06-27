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

const special_price = {"src":"/_astro/special_price.02e1a037.webp","width":3000,"height":1567,"format":"webp"};

const load_balancer = {"src":"/_astro/load_balancer_tickets.00a68fe0.webp","width":1950,"height":1019,"format":"webp"};

const $$Astro$1 = createAstro("https://dataengconf.com.au");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="mx-auto">
        <a href="https://www.tickettailor.com/events/dataengbytes">
        ${renderComponent($$result2, "Image", $$Image, { "src": special_price, "alt": "", "class": "w-full flex" })}</a>
  </div>
  <div class="mx-auto">
    <a href="https://www.tickettailor.com/events/dataengbytes">
    ${renderComponent($$result2, "Image", $$Image, { "src": load_balancer, "alt": "", "class": "w-full flex" })}</a></div><a href="https://www.tickettailor.com/events/dataengbytes">
</a>` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/tickets/index.astro");

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Tickets = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tickets;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Secure your tickets to DataEngBytes.", "description": "All the information you need to get your tickets to the best data engineering conference of the year." }, { "default": ($$result2) => renderTemplate`

    ${renderComponent($$result2, "Tickets", $$Index, {})}
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/tickets.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/tickets.astro";
const $$url = "/tickets";

export { $$Tickets as default, $$file as file, $$url as url };

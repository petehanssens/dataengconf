/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, b as maybeRenderHead, e as renderComponent } from '../astro.41d5dcd3.mjs';
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

const getinvolved = {"src":"/_astro/getinvolved.b4061174.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$3 = createAstro("https://dataengconf.com.au");
const $$Host = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Host;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto sm:px-6 lg:px-20">
     <div class="text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-black my-20">Join Us</div>
    <a href="https://www.meetup.com/perth-data-engineering-meetup/events/294175386/">
        ${renderComponent($$result, "Image", $$Image, { "src": getinvolved, "alt": "", "class": "w-full flex" })}</a>
    
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/meetups/host.astro");

const brisbane = {"src":"/_astro/brisbane.00f533a8.webp","width":1920,"height":1080,"format":"webp"};

const melbourne = {"src":"/_astro/melbourne.0769d36e.webp","width":1920,"height":1080,"format":"webp"};

const perth = {"src":"/_astro/perth.e47d2b4d.webp","width":1920,"height":1080,"format":"webp"};

const sydney = {"src":"/_astro/sydney.1f46ed05.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$2 = createAstro("https://dataengconf.com.au");
const $$Banners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Banners;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto sm:px-6 lg:px-20">
    <div class="text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-black my-20">Our Meetup</div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-10 lg:my-10 sm:mx-2 sm:my-3 gap-10">
        <a href="https://www.meetup.com/brisbane-data-engineering-meetup/events/" target="_blank">
            ${renderComponent($$result, "Image", $$Image, { "src": brisbane, "alt": "", "class": "w-full flex" })}</a>
        <a href="https://www.meetup.com/melbourne-data-engineering-meetup/events/" target="_blank">
            ${renderComponent($$result, "Image", $$Image, { "src": melbourne, "alt": "", "class": "w-full flex" })}</a>
        <a href="https://www.meetup.com/perth-data-engineering-meetup/events" target="_blank">
            ${renderComponent($$result, "Image", $$Image, { "src": perth, "alt": "", "class": "w-full flex" })}</a>
        <a href="https://www.meetup.com/sydney-data-engineering-meetup/events/" target="_blank">
            ${renderComponent($$result, "Image", $$Image, { "src": sydney, "alt": "", "class": "w-full flex" })}</a>
    </div>
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/meetups/banners.astro");

const $$Astro$1 = createAstro("https://dataengconf.com.au");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
  
  ${renderComponent($$result2, "Banners", $$Banners, {})}
  ${renderComponent($$result2, "Host", $$Host, {})}
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/meetups/index.astro");

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Meetup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Meetup;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our monthly DataEng meetups.", "description": "!" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Meetup", $$Index, {})}
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/meetup.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/meetup.astro";
const $$url = "/meetup";

export { $$Meetup as default, $$file as file, $$url as url };

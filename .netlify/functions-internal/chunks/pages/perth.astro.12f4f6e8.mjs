/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, b as maybeRenderHead, e as renderComponent } from '../astro.41d5dcd3.mjs';
import { $ as $$Image } from './_sessionid_.astro.219c06d8.mjs';
import { $ as $$Container, b as $$Speakers, c as $$Session, a as $$Layout } from './brisbane.astro.f441e564.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'path';
import 'events';
import 'node:stream';

const $$Astro$1 = createAstro("https://dataengconf.com.au");
const $$PerthVenue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PerthVenue;
  return renderTemplate`${maybeRenderHead($$result)}<div class="sm:px-6 lg:px-20">
  <div class="text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-black my-20">Venue</div>
    <div class="lg:flex sm:relative">
        
        ${renderComponent($$result, "Image", $$Image, { "src": "/images/perth.webp", "alt": "", "width": 1500, "aspectRatio": 16 / 9, "class": "sm:mx-10 lg:w-1/2 h-auto" })}
        <div class="mx-10 my-15 ">
          <p class="lg:text-xl sm: text:sm mt-20 font-semibold text-indigo-800">Perth - Tuesday 22, August</p>
          <div class="lg:text-3xl sm:text-xlmt-5 font-semibold text-gray-700">The Ritz-Carlton, Perth</div>
          <p class="lg:text-xl sm: text:sm mt-5 font-semibold text-gray-500">1 Barrack St, Perth WA 6000</p>
          <div class="sm:mt-20 mt-10 mx-auto">
            <a href="https://www.tickettailor.com/events/dataengbytes/859973?" target="_blank" color="white" class="font-openSans lg:my-auto lg:h-12 px-3 py-2 sm:px-6 sm:py-5 text-lg bg-black text-white hover:bg-slate-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">Register Now</a>
          </div>
        </div>
    

    </div>
  </div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/conference/perth-venue.astro");

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Perth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Perth;
  const apiUrl = "https://sessionize.com/api/v2/v0s39pyi/view/All";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perth Data Engineering Conference", "description": "Perth Conference Details" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
            ${renderComponent($$result3, "Venue", $$PerthVenue, {})}
            ${renderComponent($$result3, "Speaker", $$Speakers, { "apiUrl": apiUrl })}
            ${renderComponent($$result3, "Sessions", $$Session, { "apiUrl": apiUrl })}
        
    ` })}
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/conference/perth.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/conference/perth.astro";
const $$url = "/conference/perth";

export { $$Perth as default, $$file as file, $$url as url };

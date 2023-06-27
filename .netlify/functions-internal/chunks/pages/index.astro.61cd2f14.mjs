/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, b as maybeRenderHead, e as renderComponent, d as addAttribute } from '../astro.41d5dcd3.mjs';
import { a as $$Layout } from './brisbane.astro.f441e564.mjs';
import { $ as $$Image } from './_sessionid_.astro.219c06d8.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'path';
import 'events';
import 'node:stream';

const videoscreen = {"src":"/_astro/video-screen.3295817d.jpg","width":720,"height":450,"format":"jpg","orientation":1};

const $$Astro$a = createAstro("https://dataengconf.com.au");
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Video;
  return renderTemplate`${maybeRenderHead($$result)}<header class="relative flex items-center justify-center text-center sm:py-30 py-40  overflow-hidden">
  <div class="relative z-30 text-white">
    <h1 class="sm:text-8xl font-openSans font-bold tracking-tight text-white py-10 text-5xl text-center">DataEngBytes 2023</h1>
    <p class="leading-7 font-openSans sm:text-3xl text-base text-white">Run by data engineers, for data engineers</p>
    <div class="sm:mt-20 mt-10 mx-auto">
      <a href="https://www.tickettailor.com/events/dataengbytes/" color="white" class="font-openSans lg:my-auto lg:h-12 px-3 py-2 sm:px-6 sm:py-5 text-lg bg-white text-black hover:bg-black hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">Register Now</a>
    </div>  

  </div>
  
  <video autoplay loop muted poster="video-screen.jpg" class="absolute z-10 w-auto min-w-full aspect-video max-w-none">
    <source src="output-smaller.webm" type="video/webm">
    ${renderComponent($$result, "Image", $$Image, { "src": videoscreen, "alt": "" })}
  </video>
</header>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/video.astro");

const sponsor = {"src":"/_astro/sponsors.73b8d3a9.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$9 = createAstro("https://dataengconf.com.au");
const $$Sponsors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sponsors;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">

    ${renderComponent($$result, "Image", $$Image, { "src": sponsor, "alt": "", "class": "w-full flex " })}
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/sponsors.astro");

const MCBanner = {"src":"/_astro/mc.f297a64a.webp","width":1920,"height":1080,"format":"webp"};

const whyattend = {"src":"/_astro/whyattend.2da15a0c.webp","width":1920,"height":1080,"format":"webp"};

const moreimages = {"src":"/_astro/moreimages.72ce7ed3.webp","width":1920,"height":1080,"format":"webp"};

const experience = {"src":"/_astro/experience.9531fcda.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$8 = createAstro("https://dataengconf.com.au");
const $$Conf22 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Conf22;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">
    ${renderComponent($$result, "Image", $$Image, { "src": MCBanner, "alt": "mcbanner", "class": "w-full flex" })}
    ${renderComponent($$result, "Image", $$Image, { "src": whyattend, "alt": "experience", "class": "w-full flex" })}
    ${renderComponent($$result, "Image", $$Image, { "src": moreimages, "alt": "experience", "class": "w-full flex" })}
    ${renderComponent($$result, "Image", $$Image, { "src": experience, "alt": "experience", "class": "w-full flex" })}
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/conf22.astro");

const $$Astro$7 = createAstro("https://dataengconf.com.au");
const $$Producthighlight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Producthighlight;
  const products = [
    {
      name: "Meetups",
      link: "/meetup",
      description: "Free Sessions that bring together industry thought-leaders to discuss, share and showcase",
      active: true
    },
    {
      name: "Conferences",
      link: "/conference",
      description: "The annual one-day immersive experience across four cities where Data people learn and grow",
      active: false
    },
    {
      name: "Videos",
      link: "https://www.youtube.com/dataengau",
      description: "The on-demand video platform for continual data learning and exclusive content",
      active: false
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<div class="bg-white py-24 sm:py-32 bg-gradient-to-r from-red-800 to-blue-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        ${products.map((product) => {
    return renderTemplate`<div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <a${addAttribute(product.link, "href")}>
                        <dd class="order-first text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-white">${product.name}</dd>
                        <dt class="text-base leading-7  font-openSans text-white">${product.description}</dt>
                    </a>
                </div>`;
  })}
      </dl>
    </div>
  </div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/producthighlight.astro");

const trust = {"src":"/_astro/trust.a19fafea.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$6 = createAstro("https://dataengconf.com.au");
const $$Trust = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Trust;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">
    <a href="https://www.tickettailor.com/events/dataengbytes">
    ${renderComponent($$result, "Image", $$Image, { "src": trust, "alt": "", "class": "w-full flex" })}</a>
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/trust.astro");

const venues = {"src":"/_astro/city.bf355095.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$5 = createAstro("https://dataengconf.com.au");
const $$Venues = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Venues;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">
    <a href="https://www.tickettailor.com/events/dataengbytes">
    ${renderComponent($$result, "Image", $$Image, { "src": venues, "alt": "", "class": "w-full flex" })}</a>
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/venues.astro");

const speaker = {"src":"/_astro/intspeakers.bdc1bc51.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$4 = createAstro("https://dataengconf.com.au");
const $$Speakers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Speakers;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">

    ${renderComponent($$result, "Image", $$Image, { "src": speaker, "alt": "speakers", "class": "w-full flex" })}</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/speakers.astro");

const smschedule = {"src":"/_astro/smschedule.ef8cf36a.webp","width":1920,"height":1080,"format":"webp"};

const pbschedule = {"src":"/_astro/pbschedule.2f349fde.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$3 = createAstro("https://dataengconf.com.au");
const $$Schedule = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Schedule;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">

    ${renderComponent($$result, "Image", $$Image, { "src": smschedule, "alt": "", "class": "w-full flex " })}
    ${renderComponent($$result, "Image", $$Image, { "src": pbschedule, "alt": "", "class": "w-full flex " })}
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/schedule.astro");

const joinus = {"src":"/_astro/joinus.8d927ad6.webp","width":1920,"height":1080,"format":"webp"};

const $$Astro$2 = createAstro("https://dataengconf.com.au");
const $$WhatIsDeb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WhatIsDeb;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto">

    ${renderComponent($$result, "Image", $$Image, { "src": joinus, "alt": "", "class": "w-full flex " })}
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/what-is-deb.astro");

const $$Astro$1 = createAstro("https://dataengconf.com.au");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Video", $$Video, {})}
${renderComponent($$result, "Producthighlight", $$Producthighlight, {})}
${renderComponent($$result, "Venues", $$Venues, {})}
${renderComponent($$result, "WhatIsDeb", $$WhatIsDeb, {})}
${renderComponent($$result, "Speakers", $$Speakers, {})}
${renderComponent($$result, "Schedule", $$Schedule, {})}
${renderComponent($$result, "Sponsors", $$Sponsors, {})}
${renderComponent($$result, "Conf22", $$Conf22, {})}
${renderComponent($$result, "Trust", $$Trust, {})}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/home/index.astro");

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to DataEngBytes", "description": "Data engineering conference in Sydney Melbourne Brisbane and Perth" }, { "default": ($$result2) => renderTemplate`
	
	${renderComponent($$result2, "Home", $$Index$1, {})}
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/index.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

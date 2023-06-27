/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../astro.41d5dcd3.mjs';
import { a as $$Layout } from './brisbane.astro.f441e564.mjs';
import './_sessionid_.astro.219c06d8.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'path';
import 'events';
import 'node:stream';

const $$Astro$3 = createAstro("https://dataengconf.com.au");
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate``;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/contact/info.astro");

const $$Astro$2 = createAstro("https://dataengconf.com.au");
const $$Enquiry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Enquiry;
  return renderTemplate``;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/contact/enquiry.astro");

const $$Astro$1 = createAstro("https://dataengconf.com.au");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Info", $$Info, {})}
${renderComponent($$result, "Enquiry", $$Enquiry, {})}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/contact/index.astro");

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "description": "Contact me" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Contact", $$Index, {})} 
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/contact.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };

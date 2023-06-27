/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, b as maybeRenderHead, e as renderComponent } from '../astro.41d5dcd3.mjs';
import { g as getConfDetail, $ as $$Image } from './_sessionid_.astro.219c06d8.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'path';
import 'events';
import 'node:stream';

const $$Astro = createAstro("https://dataengconf.com.au");
const $$speakerid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$speakerid;
  const { speakerid } = Astro2.params;
  const { url } = Astro2.request;
  const apiUrl = new URL(url);
  const theConfDetails = await getConfDetail(apiUrl.searchParams.get("apiUrl"));
  return renderTemplate`${maybeRenderHead($$result)}<div>
    <div class=" mt-20 sm:px-6 lg:px-20">
        <ul role="list" class="divide-y divide-gray-200">
            ${theConfDetails[0].sessions.filter((session) => session.speakerObject[0].id === speakerid).map((session) => renderTemplate`<div class=" p-4">
                    
                    ${renderComponent($$result, "Image", $$Image, { "src": session.speakerObject[0].profilePicture, "alt": "", "width": 400, "aspectRatio": 9 / 9, "class": "lg:w-1/6 sm:w-1/2 h-auto" })}
                    <div class="min-w-0 my-10 flex-1">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                         <p class="truncate text-xl font-medium text-gray-900">${session.speakerObject[0]?.fullName}</p>
                        <p class="truncate text-md text-gray-500">${session.speakerObject[0].tagLine}</p>
                        <p class="text-sm text-gray-600 mt-5">${session.speakerObject[0].bio}</p>
                    </div>
                    
                </div>`)}
        </ul>
    </div>
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/speaker/[speakerid].astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/speaker/[speakerid].astro";
const $$url = "/speaker/[speakerid]";

export { $$speakerid as default, $$file as file, $$url as url };

/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, s as spreadAttributes, u as unescapeHTML, e as renderComponent, b as maybeRenderHead, f as renderSlot, g as renderHead } from '../astro.41d5dcd3.mjs';
import { $ as $$Image, g as getConfDetail } from './_sessionid_.astro.219c06d8.mjs';

const $$Astro$g = createAstro("https://dataengconf.com.au");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$f = createAstro("https://dataengconf.com.au");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$e = createAstro("https://dataengconf.com.au");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$d = createAstro("https://dataengconf.com.au");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$c = createAstro("https://dataengconf.com.au");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$b = createAstro("https://dataengconf.com.au");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$a = createAstro("https://dataengconf.com.au");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro");

const $$Astro$9 = createAstro("https://dataengconf.com.au");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}
${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/node_modules/.pnpm/astro-seo@0.7.4/node_modules/astro-seo/src/SEO.astro");

const logo = {"src":"/_astro/dataEngLogo.ffe39520.png","width":650,"height":450,"format":"png"};

const $$Astro$8 = createAstro("https://dataengconf.com.au");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  const navBar = [
    {
      name: "Meetup",
      link: "/meetup",
      active: true
    },
    {
      name: "Tickets",
      link: "/tickets",
      active: false
    },
    {
      name: "Sponsors",
      link: "/sponsors",
      active: false
    }
  ];
  const mobileNavBar = [
    {
      name: "Meetup",
      link: "/meetup",
      active: true
    },
    {
      name: "Sydney",
      link: "/conference/sydney",
      active: true
    },
    {
      name: "Melbourne",
      link: "/conference/melbourne",
      active: true
    },
    {
      name: "Perth",
      link: "/conference/perth",
      active: true
    },
    {
      name: "Brisbane",
      link: "/conference/brisbane",
      active: true
    },
    {
      name: "Tickets",
      link: "/tickets",
      active: false
    },
    {
      name: "Sponsors",
      link: "/sponsors",
      active: false
    },
    {
      name: "Contact Us",
      link: "/contact",
      active: false
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<nav class="bg-white shadow">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 justify-between">
      <div class="flex">
        <div class="flex flex-shrink-0 items-center">
          <a href="/">
          ${renderComponent($$result, "Image", $$Image, { "class": "block h-8 w-auto", "src": logo, "alt": "DataEngBytes" })}</a>
        </div>
        <div class=" relative hidden sm:ml-6 sm:flex sm:space-x-8">
          <div class=" relative my-auto text-center sm:ml-6 ">
            <button id="conferenceButton" class="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Conference
          
            </button>
            <div id="conferenceDropdown" class="absolute z-20 hidden  mt-3 transform px-2 max-w-md sm:px-0 dropdown">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <!-- Dropdown items -->
                  <a href="/conference/sydney" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Sydney</a>
                  <a href="/conference/melbourne" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Melbourne</a>
                  <a href="/conference/perth" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Perth</a>
                  <a href="/conference/brisbane" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Brisbane</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          ${navBar.map((navItem) => {
    return renderTemplate`<a${addAttribute(navItem.link, "href")} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                ${navItem.name}</a>`;
  })}
          <div class=" relative my-auto text-center sm:ml-6 ">
            <button id="aboutButton" class="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              About
          
            </button>
            <div id="aboutDropdown" class="  dropdown absolute z-20 hidden  mt-3 transform px-2 max-w-md sm:px-0">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <!-- Dropdown items -->
                  <a href="/contact" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Contact Us</a>
                  <a href="/content/codeofconduct" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Conduct</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- <div class="hidden sm:ml-6 sm:flex sm:items-center">
        <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        Profile dropdown
        
      </div> -->
      <div class="-mr-2 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button type="button" id="hamburger" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
          <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
  <div class="mobile-menu sm:hidden hidden" id="mobile-menu">
    <div class="space-y-1 pb-3 pt-2">
    ${mobileNavBar.map((navItem) => {
    return renderTemplate`<a${addAttribute(navItem.link, "href")} id="mobile" class=" mobile block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
          ${navItem.name}</a>`;
  })}
    </div>
    
  </div>
  
</nav>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/nav/nav.astro");

const $$Astro$7 = createAstro("https://dataengconf.com.au");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://twitter.com/dataengbytes" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </a>
        <a href="https://youtube.com/dataengau" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">YouTube</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/dataengbytes/" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
          </svg>
        </a>
        <a href="https://goo.gl/forms/DVNazDmNBg1FFm2X2" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Slack</span>
            <svg class="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24">
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">&copy; 2023 Cloud Shuttle Pty Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/footer/social.astro");

const $$Astro$6 = createAstro("https://dataengconf.com.au");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Socials", $$Social, {})}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/footer/index.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://dataengconf.com.au");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<!-- <SEO\n      title={title}\n      description={description}\n      \n          \n      extend={{\n        // extending the default link tags\n        link: [{ rel: "icon", href: "/favicon.ico" }],\n        // extending the default meta tags\n        meta: [\n          \n        ],\n      }}\n    /> -->\n    <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "EventSeries",\n      "name": "DataEngBytes 2023",\n      "image": "https://dataengconf.com.au/video-screen.jpg",\n      "description": "DataEngBytes 2023 is a Data engineering conference in Sydney Melbourne Brisbane and Perth",\n      "startDate": "2023-08-22T09:00:00+08:00",\n      "endDate": "2023-08-31T17:30:00+10:00",\n      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\n      "eventStatus": "https://schema.org/EventScheduled",\n      "organizer": {\n        "@type": "Organization",\n        "name": "DataEngBytes",\n        "url": "https://dataengconf.com.au/"\n      },\n      "subEvent": [\n        {\n          "@type": "Event",\n          "name": "DataEngBytes Perth 2023",\n          "startDate": "2023-08-22T09:00:00+08:00",\n          "endDate": "2023-08-22T17:30:00+08:00",\n          "image": "https://dataengconf.com.au/perth.webp",\n          "description": "DataEngBytes 2023 is a data engineering conference in Australia",\n          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\n          "eventStatus": "https://schema.org/EventScheduled",\n          "location": {\n            "@type": "Place",\n            "name": "The Ritz-Carlton, Perth",\n            "address": {\n              "@type": "PostalAddress",\n              "streetAddress": "1 Barrack St",\n              "addressLocality": "Perth",\n              "addressRegion": "WA",\n              "postalCode": "6000",\n              "addressCountry": "Australia"\n            }\n          }\n        },\n        {\n          "@type": "Event",\n          "name": "DataEngBytes Sydney 2023",\n          "startDate": "2023-08-25T09:00:00+10:00",\n          "endDate": "2023-08-25T17:30:00+10:00",\n          "image": "https://dataengconf.com.au/sydney.webp",\n          "description": "DataEngBytes 2023 is a data engineering conference in Australia",\n          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\n          "eventStatus": "https://schema.org/EventScheduled",\n          "location": {\n            "@type": "Place",\n            "name": "Hilton, Sydney",\n            "address": {\n              "@type": "PostalAddress",\n              "streetAddress": "488 George St",\n              "addressLocality": "Sydney",\n              "addressRegion": "NSW",\n              "postalCode": "2000",\n              "addressCountry": "Australia"\n            }\n          }\n        },\n        {\n          "@type": "Event",\n          "name": "DataEngBytes Brisbane 2023",\n          "startDate": "2023-08-29T09:00:00+10:00",\n          "endDate": "2023-08-29T17:30:00+10:00",\n          "image": "https://dataengconf.com.au/brisbane.webp",\n          "description": "DataEngBytes 2023 is a data engineering conference in Australia",\n          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\n          "eventStatus": "https://schema.org/EventScheduled",\n          "location": {\n            "@type": "Place",\n            "name": "Brisbane Convention & Exhibition Centre",\n            "address": {\n              "@type": "PostalAddress",\n              "streetAddress": "Glenelg St",\n              "addressLocality": "Brisbane",\n              "addressRegion": "QLD",\n              "postalCode": "4101",\n              "addressCountry": "Australia"\n            }\n          }\n        },\n        {\n          "@type": "Event",\n          "name": "DataEngBytes Melbourne 2023",\n          "startDate": "2023-08-31T09:00:00+10:00",\n          "endDate": "2023-08-31T17:30:00+10:00",\n          "image": "https://dataengconf.com.au/melbourne.webp",\n          "description": "DataEngBytes 2023 is a data engineering conference in Australia",\n          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",\n          "eventStatus": "https://schema.org/EventScheduled",\n          "location": {\n            "@type": "Place",\n            "name": "The Edge, Federation Square",\n            "address": {\n              "@type": "PostalAddress",\n              "streetAddress": "Swanston St &, Flinders St",\n              "addressLocality": "Melbourne",\n              "addressRegion": "VIC",\n              "postalCode": "3000",\n              "addressCountry": "Australia"\n            }\n          }\n        }\n      ]\n    }\n\n    \n    <\/script>\n\n    ', '\n		<link rel="sitemap" href="/sitemap-index.xml">\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.ico">\n		<meta name="generator"', ">\n		\n		\n	", "</head>\n	<nav>\n		", '\n	</nav>\n	\n		<main class="mx-auto max-w-7xl px-10 sm:px-6 lg:px-16">\n			\n		  </main>\n		', "\n	", "\n</html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "openGraph": {
    basic: {
      title: `${title}`,
      type: "website",
      image: "/logos/dataEngLogo.png"
    }
  }, "twitter": {
    creator: "Peter Hanssens"
  }, "extend": {
    // extending the default link tags
    link: [{ rel: "icon", href: "/favicon.ico" }],
    // extending the default meta tags
    meta: [
      { name: "twitter:title", content: "Welcome to DataEngBytes" },
      { name: "twitter:description", content: "A collection of resources for data engineers." }
    ]
  } }), addAttribute(Astro2.generator, "content"), renderHead($$result), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index, {}));
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/layouts/layout.astro");

const $$Astro$4 = createAstro("https://dataengconf.com.au");
const $$Speakers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Speakers;
  const { apiUrl } = Astro2.props;
  const theConfDetails = await getConfDetail(apiUrl);
  return renderTemplate`${maybeRenderHead($$result)}<div class="sm:px-6 lg:px-20">
  <div class="text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-black my-20">Speakers</div>
  <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
    ${theConfDetails[0].sessions.map((session) => (
    // console.log(session)
    renderTemplate`<a${addAttribute(`/speaker/${session.speakerObject[0].id}?apiUrl=${apiUrl}`, "href")} target="_blank" class="block focus:outline-none">
    <div class="bg-gray-100 p-4">
      ${renderComponent($$result, "Image", $$Image, { "src": session.speakerObject[0].profilePicture, "alt": "", "width": 400, "aspectRatio": 16 / 16, "class": "w-full h-auto" })}
      <p class="mt-5 border-transparent px-1 pt-1 sm:text-sm lg:text-xl lg:font-medium text-gray-900 hover:text-gray-700">${session.speakerObject[0]?.fullName}</p>
      <p class="border-transparent px-1 pt-1 sm:text-xs lg:text-sm lg:font-medium text-gray-700 hover:text-gray-500">${session.speakerObject[0]?.tagLine}</p>
        
    </div>
    </a>`
  ))}
  </div>
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/conference/speakers.astro");

const $$Astro$3 = createAstro("https://dataengconf.com.au");
const $$Session = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Session;
  const { apiUrl } = Astro2.props;
  const theConfDetails = await getConfDetail(apiUrl);
  return renderTemplate`${maybeRenderHead($$result)}<div class="mt-20 sm:px-6 lg:px-20">
    <div class="text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-black my-20">Schedule</div>
    <ul role="list" class="divide-y divide-gray-200">
        ${theConfDetails[0].sessions.map((session) => renderTemplate`<li${addAttribute(session.id, "key")} class="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
            
            <div class="flex justify-between space-x-3">
                ${renderComponent($$result, "Image", $$Image, { "src": session.speakerObject[0].profilePicture, "alt": "", "width": 100, "aspectRatio": 3 / 3, "class": "w-20 flex" })}
                <div class="min-w-0 flex-1">
                <a${addAttribute(`/session/${session.id}?apiUrl=${apiUrl}`, "href")} target="_blank" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="truncate text-xl font-medium text-gray-900">${session.title}</p>
                    
                    <p class="truncate text-md text-gray-500">${session.speakerObject[0]?.fullName}</p>
                </a>
                </div>
            </div>
            <div class="mt-1">
                <p class="text-sm text-gray-600 line-clamp-3">${session.description}</p>
            </div>
            </li>`)}
    </ul>
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/conference/session.astro");

const $$Astro$2 = createAstro("https://dataengconf.com.au");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto max-w-12xl sm:px-6 lg:px-8">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/container.astro");

const $$Astro$1 = createAstro("https://dataengconf.com.au");
const $$BrisbaneVenue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BrisbaneVenue;
  return renderTemplate`${maybeRenderHead($$result)}<div class="sm:px-6 lg:px-20">
  <div class="text-3xl font-semibold tracking-tight sm:text-5xl font-openSans text-black my-20">Venue</div>
    <div class="lg:flex sm:relative">
        
        ${renderComponent($$result, "Image", $$Image, { "src": "/images/brisbane.webp", "alt": "", "width": 1500, "aspectRatio": 16 / 9, "class": "sm:mx-10 lg:w-1/2 h-auto" })}
        <div class="mx-10 my-15 ">
          <p class="lg:text-xl sm: text:sm mt-20 font-semibold text-indigo-800">Brisbane - Tuesday 29, August</p>
          <div class="lg:text-3xl sm:text-xlmt-5 font-semibold text-gray-700">Brisbane Convention & Exhibition Centre</div>
          <p class="lg:text-xl sm: text:sm mt-5 font-semibold text-gray-500">Glenelg St, South Brisbane QLD 4101</p>
          <div class="sm:mt-20 mt-10 mx-auto">
            <a href="https://www.tickettailor.com/events/dataengbytes/859970?" target="_blank" color="white" class="font-openSans lg:my-auto lg:h-12 px-3 py-2 sm:px-6 sm:py-5 text-lg bg-black text-white hover:bg-slate-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">Register Now</a>
          </div>
        </div>
    

    </div>
  </div>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/components/conference/brisbane-venue.astro");

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Brisbane = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Brisbane;
  const apiUrl = "https://sessionize.com/api/v2/bz5r6x7s/view/All";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Brisbane Data Engineering Conference", "description": "Bribane Conference Details" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
            ${renderComponent($$result3, "Venue", $$BrisbaneVenue, {})}
            ${renderComponent($$result3, "Speaker", $$Speakers, { "apiUrl": apiUrl })}
            ${renderComponent($$result3, "Sessions", $$Session, { "apiUrl": apiUrl })}
        
    ` })}
` })}`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/conference/brisbane.astro");

const $$file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/conference/brisbane.astro";
const $$url = "/conference/brisbane";

const brisbane = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Brisbane,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, $$Layout as a, $$Speakers as b, $$Session as c, brisbane as d };

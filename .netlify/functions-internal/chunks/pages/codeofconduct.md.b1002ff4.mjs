/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, b as maybeRenderHead, f as renderSlot, h as createVNode, s as spreadAttributes, F as Fragment } from '../astro.41d5dcd3.mjs';
import { $ as $$Container, a as $$Layout } from './brisbane.astro.f441e564.mjs';
import './_sessionid_.astro.219c06d8.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import 'fs';
import 'path';
import 'events';
import 'node:stream';

const $$Astro = createAstro("https://dataengconf.com.au");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html>
    ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    
            ${maybeRenderHead($$result3)}<div class="relative py-16 bg-white overflow-hidden">
                <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true"></div>
                </div>
                <div class="relative px-4 sm:px-6 lg:px-8">
                    <div class="prose text-lg max-w-prose mx-auto" id="blogpost">
                    <h1>
                        <span class="mt-2 block text-2xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        ${frontmatter.title}
                        </span>
                    </h1>
                    <p>
                        <span class="mt-2 block text-lg text-center leading-8 tracking-tight text-gray-500 sm:text-xl">
                        ${frontmatter.subtitle}
                        </span>
                    </p>
                    <!-- <p>
                        <span class="mt-2 block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                        Category: {category}
                        </span>
                    </p>
                    <p>
                        <span class="mt-2 block text-base text-center text-indigo-600 font-small tracking-wide">
                        {date} by {author}
                        </span>
                    </p> -->
                    <div class="mt-8 block text-lg text-justify leading-8 tracking-tight text-gray-500 sm:text-xl">
                        ${renderSlot($$result3, $$slots["default"])}
                    </div>
                    </div>
                </div>
            </div>
        ` })}
    ` })}
</html>`;
}, "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/layouts/blog.astro");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>The DataEngBytes Conference is dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the DataEngBytes organisers.</p>\n<p>Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Sexual language and imagery is not appropriate for any DataEngBytes event or communication channel.</p>\n<p>Community members are not to use DataEngBytes Conference or communication channels in order to proposition any other member.</p>\n<p>Community members asked to stop any harassing behaviour are expected to comply immediately. Sponsors and presenters are also subject to the anti-harassment policy.</p>\n<p>If a community member engages in harassing behaviour, the DataEngBytes Conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the DataEngBytes community. If you are being harassed please contact a DataEngBytes organiser immediately. If you notice that someone else is being harassed please intercede or contact a DataEngBytes organiser immediately. If you have any other concerns, please contact a DataEngBytes organiser.</p>\n<br>\nContact Info\n<br><br>\nWebsite: [https://dataengconf.com.au/](https://dataengconf.com.au/)\n<br>\nEmail: [sydney@dataengconf.com.au](mailto:sydney@dataengconf.com.au)\n<br><br> \nIf you have questions or feedback about this Code of Conduct, please contact one of the organisers.");

				const frontmatter = {"layout":"../../layouts/blog.astro","title":"Code of Conduct","subtitle":"The website of the DataEngBytes.","heading":"Code of Conduct"};
				const file = "/Users/gunjanchaudhari/Documents/cloudshuttle/dataengconf/src/pages/content/codeofconduct.md";
				const url = "/content/codeofconduct";
				function rawContent() {
					return "\n\n\n\nThe DataEngBytes Conference is dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the DataEngBytes organisers.\n\nHarassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Sexual language and imagery is not appropriate for any DataEngBytes event or communication channel.\n\nCommunity members are not to use DataEngBytes Conference or communication channels in order to proposition any other member.\n\nCommunity members asked to stop any harassing behaviour are expected to comply immediately. Sponsors and presenters are also subject to the anti-harassment policy.\n\nIf a community member engages in harassing behaviour, the DataEngBytes Conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the DataEngBytes community. If you are being harassed please contact a DataEngBytes organiser immediately. If you notice that someone else is being harassed please intercede or contact a DataEngBytes organiser immediately. If you have any other concerns, please contact a DataEngBytes organiser.  \n\n<br/>\nContact Info\n<br/><br/>\nWebsite: [https://dataengconf.com.au/](https://dataengconf.com.au/)\n<br/>\nEmail: [sydney@dataengconf.com.au](mailto:sydney@dataengconf.com.au)\n<br/><br/> \nIf you have questions or feedback about this Code of Conduct, please contact one of the organisers.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$Blog, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };

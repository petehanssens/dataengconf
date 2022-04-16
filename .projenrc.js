const { web } = require("projen");
const { NodePackageManager } = require("projen/lib/javascript");
const project = new web.NextJsProject({
  defaultReleaseBranch: "main",
  name: "dataengconf",
  authorName: 'DataEngBytes',
  authorEmail: 'sydney@dataengconf.com.au',
  authorUrl: 'https://dataengconf.com.au',
  minNodeVersion: 14,                                                  /* List of dependencies to bundle into this module. */
  deps: [
    'jsonp',
    'query-string',
    'encoding',
    'isomorphic-fetch',
    '@aws-amplify/ui-react',
    '@tailwindcss/forms',
    'aws-amplify',
    'react@">=16.x <=17.x"',
    'react-dom',
    'react-hook-form',
    'postcss',
    'autoprefixer',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/typography',
    'prop-types',
    '@heroicons/react',
    'axios',
    'next-mdx-remote@4.0.1',
    'gray-matter',
    'react-syntax-highlighter',
    'highlight.js',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome',
    '@headlessui/react',
    '@tailwindcss/line-clamp',
    'graphql-tag',
    'swr',
    'next-compose-plugins'
  ],                                                                             /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@netlify/plugin-nextjs',
    'netlify-plugin-contextual-env',
    "autoprefixer",
    "postcss"
  ],          /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
  tailwind: true,          /* Setup Tailwind CSS as a PostCSS plugin. */
  packageManager: NodePackageManager.NPM,
});

project.gitignore.addPatterns('out/')
project.gitignore.addPatterns('.env.local')
project.gitignore.addPatterns('.DS_Store')
project.gitignore.addPatterns('.dccache')
project.synth();
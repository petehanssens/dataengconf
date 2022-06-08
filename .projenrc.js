const { web } = require("projen");
const { NodePackageManager } = require("projen/lib/javascript");
const project = new web.NextJsProject({
  defaultReleaseBranch: "main",
  name: "dataengconf",
  authorName: 'DataEngBytes',
  authorEmail: 'sydney@dataengconf.com.au',
  authorUrl: 'https://dataengconf.com.au',
  deps: [
    'jsonp',
    'query-string',
    'encoding',
    'isomorphic-fetch',
    '@aws-amplify/ui-react',
    '@tailwindcss/forms',
    'aws-amplify',
    'react',
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
    'next-mdx-remote',
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
    'next-compose-plugins',
    'autoprefixer',
    'postcss',
    'mapbox-gl',
    'axios',
    'react-canvas-confetti'
  ],                                                                             /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@netlify/plugin-nextjs',
    'netlify-plugin-contextual-env'
  ], 
  tailwind: true, 
  packageManager: NodePackageManager.NPM,
});

project.gitignore.addPatterns('out/')
project.gitignore.addPatterns('.env.local')
project.gitignore.addPatterns('.DS_Store')
project.gitignore.addPatterns('.dccache')

project.synth();

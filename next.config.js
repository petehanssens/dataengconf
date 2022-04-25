const withPlugins = require("next-compose-plugins");

module.exports = (phase, { defaultConfig }) => 
{

  const nextPlugins = [
  ];
  /**
   * @type {import("next").NextConfig}
   */
  const nextConfig = {
    // Target must be serverless
    target: 'serverless',
    env: {
      APP_AWS_REGION: process.env.APP_AWS_REGION,
      AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
      AWS_USER_POOLS_ID: process.env.AWS_USER_POOLS_ID,
      AWS_USER_POOLS_WEB_CLIENT_ID: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
      AWS_APPSYNC_GRAPHQLENDPOINT: process.env.AWS_APPSYNC_GRAPHQLENDPOINT
    },
    swcMinify: true,
    reactStrictMode: true,
    experimental: {
      runtime: "nodejs",
      serverComponents: true,
    },
    trailingSlash: true,
    productionBrowserSourceMaps: true,
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 43200,
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        // fixes next-mdx-remote: Package path ./jsx-runtime.js is not exported from package react
        // https://github.com/hashicorp/next-mdx-remote/issues/237
        "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
      };
      return config
    }
  };

  return withPlugins(nextPlugins, nextConfig)(phase, { defaultConfig });
}
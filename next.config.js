const getPosts = require('./data/profiles.json');
const getSpeakerPosts = require('./data/speakers.json');
module.exports = ({
  // Target must be serverless
  target: 'serverless',
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
    AWS_USER_POOLS_ID: process.env.AWS_USER_POOLS_ID,
    AWS_USER_POOLS_WEB_CLIENT_ID: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
    AWS_APPSYNC_GRAPHQLENDPOINT: process.env.AWS_APPSYNC_GRAPHQLENDPOINT
  },
  async exportPathMap(defaultPathMap) {
  const pathMap = {
    '/': { page: '/' },
    '/code_of_conduct': { page: '/code_of_conduct' },
    '/contact_us': { page: '/contact_us' },
    '/organisers': { page: '/organisers' },
    '/speakers': { page: '/speakers' },
  };

  // now get the dynamic stuff:
  getPosts.map(post => {
    pathMap[`/profile/${post.id}`] = { page: '/profile/[id]' };
  });

  getSpeakerPosts.map(post => {
    pathMap[`/speaker/${post.id}`] = { page: '/speaker/[id]' };
  });
  return pathMap;
  },
})
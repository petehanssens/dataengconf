module.exports = ({
  // Target must be serverless
  target: 'serverless',
  env: {
    AWS_REGION: process.env.APP_AWS_REGION,
    AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
    AWS_USER_POOLS_ID: process.env.AWS_USER_POOLS_ID,
    AWS_USER_POOLS_WEB_CLIENT_ID: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
    AWS_APPSYNC_GRAPHQLENDPOINT: process.env.AWS_APPSYNC_GRAPHQLENDPOINT
  },
})
// pages/_app.js
import "../styles/globals.css"
import React from 'react';
import Layout from '../components/layout';
import ErrorBoundary from '../components/errorboundary';
import { Amplify } from "aws-amplify";
import checkUser from '../helpers/checkUser';

let myAppConfig = {
  aws_project_region: process.env.APP_AWS_REGION,
  aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.APP_AWS_REGION,
  aws_user_pools_id: process.env.AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
  aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.APP_AWS_REGION,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_appsync_apiKey: "null",
};

Amplify.configure({ ...myAppConfig, ssr: true });

function WebApp({ Component, pageProps }) {
  const user = checkUser();
  return (
        <Layout signedInUser={user}>
          <ErrorBoundary>
            <Component {...pageProps} signedInUser={user} />
          </ErrorBoundary>
        </Layout>
  )
}

export default WebApp

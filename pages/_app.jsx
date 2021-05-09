// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/layout';
import { Amplify } from "aws-amplify";
import checkUser from '../helpers/checkUser';

let myAppConfig = {
  aws_project_region: process.env.AWS_REGION,
  aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.AWS_REGION,
  aws_user_pools_id: process.env.AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
  aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.AWS_REGION,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_appsync_apiKey: "null",
};

Amplify.configure({ ...myAppConfig, ssr: true });

function DataEngBytesApp({ Component, pageProps }) {
  const user = checkUser();
  return (
        <Layout signedInUser={user}>
          <Component {...pageProps} />
        </Layout>
  )
}

export default DataEngBytesApp

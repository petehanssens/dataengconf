import Document, { Head, Main, NextScript, Html } from "next/document";

import Layout from "../components/layout";

export default class MyDocument extends Document {
  render() {

    return (
      <Html >
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
      <Layout>
        <body>
          <Main />
          <NextScript />
        </body>
      </Layout>
      </Html>
    );
  }
}

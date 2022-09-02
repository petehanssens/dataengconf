import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Head from 'next/head'

function SEO({ description, meta, keywords, title, image }) {
  // Base Metadata for all pages. Extend it by passing in custom meta types and values.
  const baseMeta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: image || "https://dataengconf.com.au/images/2022/DataEngbytes.jpg",
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: "DataEngBytes",
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ];

  const keywordsMeta = keywords && keywords.length > 0 && keywords.join(`, `);

  return (
    <Head
    >    
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta charSet="utf-8" name={meta} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      { [ ...baseMeta, ...meta].map(properties => <meta { ...properties }/>) }
      <meta name="keywords" content={keywordsMeta} />
    </Head>
  );
}

SEO.defaultProps = {
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;

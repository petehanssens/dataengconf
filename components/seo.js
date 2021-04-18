import PropTypes from "prop-types";
import React from "react";
import Head from 'next/head'

function SEO({ description, lang, meta, keywords, title }) {

  return (
    <Head
      htmlAttributes={{
        lang,
      }}
      meta={[
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
          content: "/images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "DataEngBytees",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
    >
    <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;

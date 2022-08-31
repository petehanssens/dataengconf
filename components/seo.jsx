import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Head from 'next/head'

const eventDetails = {
  "@context": "https://schema.org",
  "@type": "Conference",
  "event": [
      {
          "@type": "Event",
          "location": "Melbourne, VIC, Australia",
          "offers": {
              "@type": "Offer",
              "price": "199.00",
              "priceCurrency": "AUD",
              "url": "https://www.tickettailor.com/events/dataengbytes/713305/",
          },
          "startDate": "2022-09-27",
          "url": "dataengconf.com.au/conference/speakers",
          "name": "DataEngBytes 2022, Melbourne!",
          "description": "DataEngBytes is back on again in 2022 and it's going to be even better... \n Join us for some incredible talks and some great networking opportunities.",
          "image": "https://dataengconf.com.au/images/2022/DataEng-cards3.jpg",            
          "location": {
              "@type": "Place",
              "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3000",
              "streetAddress": "328 Swanston St"
              },
              "name": "State Library Victoria"
          }
      },
      {
          "@type": "Event",
          "location": "Sydney, NSW, Australia",
          "offers": {
              "@type": "Offer",
              "price": "199.00",
              "priceCurrency": "AUD",
              "url": "https://www.tickettailor.com/events/dataengbytes/713307/"
          },
          "startDate": "2022-09-29",
          "url": "dataengconf.com.au/conference/speakers",
          "name": "DataEngBytes 2022, Sydney!",
          "description": "DataEngBytes is back on again in 2022 and it's going to be even better... \n Join us for some incredible talks and some great networking opportunities.",
          "image": "https://dataengconf.com.au/images/2022/DataEng-cards4.jpg",            
          "location": {
              "@type": "Place",
              "address": {
              "@type": "PostalAddress",
              "addressLocality": "The Rocks",
              "addressRegion": "NSW",
              "postalCode": "2000",
              "streetAddress": "140 George St"
              },
              "name": "Museum of Contemporary Art Australia"
          }
      }
  ]
}

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
      <script 
      key={`eventDetailsJSON`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventDetails) }}
      />
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

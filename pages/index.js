import {Fragment} from 'react'
import SEO from "../components/seo";
import HomeLayout from '../components/home';
import Stats from '../components/stats';
import Logos from '../components/logos'
import Melbourne from '../components/venues/melbourne'
import Sydney from '../components/venues/sydney'
import Meetups from '../components/meetups/meetups'
import Speakers from '../components/speakers/speakers'
import Schedule from '../components/speakers/schedule'
import Keynotes from '../components/speakers/keynotes'
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

export default function Home() {
  return (
    <Fragment>
      <script 
      key={`eventDetailsJSON`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventDetails) }}
      />
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="Data Engineering conference Sydney Melbourne"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <HomeLayout />
      <Stats />
      <Keynotes />
      <Melbourne />
      <Sydney />
      <Logos />
      <Speakers />
      <Schedule />
      <Meetups />
    </Fragment>
  )
}


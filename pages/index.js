import React from 'react'
import SEO from "../components/seo";
import HomeLayout from '../components/home';
import Stats from '../components/stats';
import Logos from '../components/logos'
import Melbourne from '../components/venues/melbourne'
import Sydney from '../components/venues/sydney'
import Meetups from '../components/meetups/meetups'

export default function Home() {
  return (
    <>
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="Welcome to DataEngBytes!"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <HomeLayout />
      <Melbourne />
      <Sydney />
      <Stats />
      <Meetups />
      <Logos />
    </>
  )
}


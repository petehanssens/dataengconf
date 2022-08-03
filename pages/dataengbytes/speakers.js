import React from 'react'
import SEO from "../../components/seo";
import Speakers from '../../components/speakers/speakers'

export default function Home() {
  return (
    <>
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="The speakers of DataEngBytes"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Speakers />
    </>
  )
}


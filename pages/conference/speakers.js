import {Fragment} from 'react'
import SEO from "../../components/seo";
import Speakers from '../../components/speakers/speakers'

export default function SpeakersPage() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="The speakers of DataEngBytes"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Speakers />
    </Fragment>
  )
}


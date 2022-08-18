import { Fragment } from "react";
import SEO from "../../components/seo";
import Schedule from '../../components/speakers/schedule'
import getConferenceSessionsDetails from '../../helpers/getConferenceSessions'

export function getStaticProps() {
  const sessionsDetails = getConferenceSessionsDetails()

  return {
    props: {
      sessionsDetails,
    },
  }
}

export default function Home({ sessionsDetails }) {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="The schedule of DataEngBytes"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Schedule sessionsDetails={sessionsDetails} />
    </Fragment>
  )
}


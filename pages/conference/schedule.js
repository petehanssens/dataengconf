import { Fragment } from "react";
import SEO from "../../components/seo";
import Schedule from '../../components/speakers/schedule'

export default function Home() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="The schedule of DataEngBytes"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Schedule />
    </Fragment>
  )
}


import { Fragment } from "react";
import SEO from "../../components/seo";
import Melbourne from "../../components/venues/melbourne";
import CitySessions from "../../components/speakers/city-sessions";
import CitySpeakers from "../../components/speakers/city-speakers";
import MelbournePanel from "../../components/speakers/melbourne-panel";

export default function Home() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`, `Melbourne`]}
        title="Melbourne Data Engineering Conference Details"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Melbourne />
      {/* <CitySessions />
      <CitySpeakers /> */}
      <MelbournePanel />
    </Fragment>
  );
}

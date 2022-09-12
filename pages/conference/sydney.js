import { Fragment } from "react";
import SEO from "../../components/seo";
import Sydney from "../../components/venues/sydney";
import SydneyPanel from "../../components/speakers/sydney-panel";

export default function Home() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`, `Sydney`]}
        title="Sydney Data Engineering Conference Details"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Sydney />
      <SydneyPanel />
    </Fragment>
  );
}

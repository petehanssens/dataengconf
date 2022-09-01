import { Fragment } from "react";
import SEO from "../../components/seo";
import Sydney from "../../components/venues/sydney";

export default function Home() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`]}
        title="The speakers of DataEngBytes"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Sydney />
    </Fragment>
  );
}

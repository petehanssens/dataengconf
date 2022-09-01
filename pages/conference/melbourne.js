import { Fragment } from "react";
import SEO from "../../components/seo";
import Speakers from "../../components/speakers/speakers";
import Melbourne from "../../components/venues/melbourne";

export default function Home() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`]}
        title="The speakers of DataEngBytes"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Melbourne />
    </Fragment>
  );
}

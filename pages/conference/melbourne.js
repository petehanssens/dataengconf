import { Fragment } from "react";
import SEO from "../../components/seo";
import Melbourne from "../../components/venues/melbourne";

export default function Home() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`, `Melbourne`]}
        title="Melbourne Conference Details"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <Melbourne />
    </Fragment>
  );
}

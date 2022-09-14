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
      <div className="ml-5 m-h-60">
        <div className="justify-center flex w-full p-5 ">
          <img
            className="rounded-lg object-contain mx-2 shadow-lg h-44 hover:scale-150 transition delay-450"
            src="/images/venues/terrace-mca.jpg"
            alt=""
          />
          <img
            className="rounded-lg object-contain mx-2 shadow-lg h-44 hover:scale-150 transition delay-450"
            src="/images/venues/foundation-hall.jpg"
            alt=""
          />
          <img
            className="rounded-lg object-contain mx-2 shadow-lg h-44 hover:scale-150 transition delay-450"
            src="/images/venues/wesley-conference-centre.jpeg"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
}

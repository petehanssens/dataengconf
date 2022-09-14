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
      <div className="mx-5 m-h-40">
        <div className="justify-center flex w-full p-5 ">
          <img
            className="rounded-lg object-contain mx-2 shadow-lg h-44 hover:scale-150 transition delay-450"
            src="/images/venues/village-roadshow-theatrette.jpeg"
            alt=""
          />
          <img
            className="rounded-lg object-contain mx-2 shadow-lg h-44 hover:scale-150 transition delay-450"
            src="/images/venues/vic_state_lib_20191206_192350.jpeg"
            alt=""
          />
          <img
            className="rounded-lg object-contain mx-2 shadow-lg h-44 hover:scale-150 transition delay-450"
            src="/images/venues/State_Library_of_Victoria,_Melbourne,_Australia_-_20090418.jpeg"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
}

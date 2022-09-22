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
      {/* <div className="ml-5 m-h-60">
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
      </div> */}
      <h3 className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Venue Details
      </h3>
      <div className="">
        <div className="relative bg-white py-5">
          <div className="lg:inset-0">
            <div className="lg:inset-y-0">
              <img
                className="w-full lg:h-full"
                src="/images/venues/sydney-venue.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white py-5">
          <div className="lg:inset-0">
            <div className="lg:inset-y-0">
              <img
                className=" w-full lg:h-full"
                src="/images/venues/foundation-hall.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white py-5">
          <div className="lg:inset-0">
            <div className="lg:inset-y-0">
              <img
                className=" w-full lg:h-full"
                src="/images/venues/terrace-mca.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white py-5">
          <div className="lg:inset-0">
            <div className="lg:inset-y-0">
              <img
                className=" w-full lg:h-full"
                src="/images/venues/mca-sponsor.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white py-5">
          <div className="lg:inset-0">
            <div className="lg:inset-y-0">
              <img
                className=" w-full lg:h-full"
                src="/images/venues/mca-location.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

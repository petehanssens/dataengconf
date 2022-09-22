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

      <div className="py-24 relative bg-white">
        <div className=" lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0  lg:w-1/2">
            <img
              className="h-56 w-full object-cover max-h-full lg:absolute lg:h-full"
              src="/images/venues/sydney-venue.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16  sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:ml-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto my-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Museum of Contemporary Art
              </h3>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>The venue is located on the Rocks near Circular Quay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 relative mt-10 bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/venues/foundation-hall.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Foundation Hall
              </h3>

              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>This is the location where the talks will be held</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 relative mt-10 bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/venues/terrace-mca.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                MCA Terrace
              </h3>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>The refreshments will be available here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 relative mt-10 bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/venues/mca-sponsor.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Sponsor Booths
              </h3>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>
                  You can visit the sponsors at their booths in the foundation
                  hall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 relative mt-10 bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/venues/mca-location.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How to get here
              </h3>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>
                  Find MCA at the Rocks on George Street, enter via the Heritage
                  building and turn left to enter Foundation Hall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

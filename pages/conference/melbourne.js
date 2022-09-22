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
      {/* <div className="mx-5 m-h-40">
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
            src="/images/venues/state-library.jpeg"
            alt=""
          />
        </div>
      </div> */}

      {/* <h3 className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Venue Details
      </h3>
      <div className="">
        <div className="relative bg-white py-5">
          <div className="lg:inset-0">
            <div className="lg:inset-y-0">
              <img
                className="w-full lg:h-full"
                src="/images/venues/statelibrary.png"
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
                src="/images/venues/vic_state_lib_20191206_192350.jpeg"
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
                src="/images/venues/village-roadshow-theatrette.jpeg"
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
                src="/images/venues/sl-sponsor.png"
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
                src="/images/venues/how2get-there-vic-state-lib.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
 
       */}
      <div className="py-24 relative bg-white">
        <div className=" lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0  lg:w-1/2">
            <img
              className="h-56 w-full object-cover max-h-full lg:absolute lg:h-full"
              src="/images/venues/statelibrary.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16  sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:ml-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto my-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                State Library of Victoria
              </h3>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>
                  The venue is located in Melbourne's CBD and is close by public
                  transport
                </p>
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
              src="/images/venues/vic_state_lib_20191206_192350.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Conversation Quarter
              </h3>

              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>This is the location where the talks will be</p>
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
              src="/images/venues/village-roadshow-theatrette.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Village Roadshow Theatrette
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
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/venues/sl-sponsor.png"
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
                  You can visit the sponsors at their booths in the Conversation
                  Quarter
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
              src="/images/venues/how2get-there-vic-state-lib.png"
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
                  Find the entrance from La Trobe Street and head inside the
                  Conversation Quarter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

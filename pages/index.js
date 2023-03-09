import { Fragment } from "react";
import SEO from "../components/seo";
import HomeLayout from "../components/home";
import Stats from "../components/stats";
import Logos from "../components/logos";
import Melbourne from "../components/venues/melbourne";
import Sydney from "../components/venues/sydney";
import Meetups from "../components/meetups/meetups";
import Speakers from "../components/speakers/speakers";
import Schedule from "../components/speakers/schedule";
import Keynotes from "../components/speakers/keynotes";
import Image from "next/image";
import { Router, useRouter } from "next/router";


const eventDetails = {
  "@context": "https://schema.org",
  "@type": "Conference",
  event: [
    {
      "@type": "Event",
      location: "Melbourne, VIC, Australia",
      offers: {
        "@type": "Offer",
        price: "199.00",
        priceCurrency: "AUD",
        url: "https://www.tickettailor.com/events/dataengbytes/713305/",
      },
      startDate: "2022-09-27",
      url: "dataengconf.com.au/conference/speakers",
      name: "DataEngBytes 2022, Melbourne!",
      description:
        "DataEngBytes is back on again in 2022 and it's going to be even better... \n Join us for some incredible talks and some great networking opportunities.",
      image: "https://dataengconf.com.au/images/2022/DataEng-cards3.jpg",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          streetAddress: "328 Swanston St",
        },
        name: "State Library Victoria",
      },
    },
    {
      "@type": "Event",
      location: "Sydney, NSW, Australia",
      offers: {
        "@type": "Offer",
        price: "199.00",
        priceCurrency: "AUD",
        url: "https://www.tickettailor.com/events/dataengbytes/713307/",
      },
      startDate: "2022-09-29",
      url: "dataengconf.com.au/conference/speakers",
      name: "DataEngBytes 2022, Sydney!",
      description:
        "DataEngBytes is back on again in 2022 and it's going to be even better... \n Join us for some incredible talks and some great networking opportunities.",
      image: "https://dataengconf.com.au/images/2022/DataEng-cards4.jpg",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "The Rocks",
          addressRegion: "NSW",
          postalCode: "2000",
          streetAddress: "140 George St",
        },
        name: "Museum of Contemporary Art Australia",
      },
    },
  ],
};

export default function Home() {

  const router = useRouter();

  return (
    <Fragment>
      <script
        key={`eventDetailsJSON`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventDetails) }}
      />
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`]}
        title="Data Engineering conference Sydney Melbourne"
        description="A community run Data Engineering conference in Australia and New Zealand"
      />
      <div className="bg-dark-black-blue px-6 py-12 flex flex-col gap-10 items-center content-center font-serif tracking-wide ">
        <div className="flex flex-col items-center ">
          <div className=" text-red-600 text-6xl font-bold italic">
            DATAENGBYTES 2023
          </div>
          <div className="font-bold text-white text-xl italic font-serif">
            FOR DATA ENGINEERS, BY DATA ENGINEERS.
          </div>
        </div>
        <div className="">
          <button
            onClick={() =>  router.push('/forms/meetup-talk')}
            className="rounded-full py-3 px-4  bg-white text-lg text-black font-bold italic"
            >REGISTER NOW</button>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row  gap-4 ">
            <div className="flex flex-col">
              <Image
                src={'/images/sydney_brisbane_eng.png'}
                alt={'sydeny and brisbane dataeng meetup '}
                height={"280"}
                width={"420"}
              />
              <div className="flex flex-row text-white mt-2 justify-around ">
                <div>
                  SYDNEY
                </div>
                <div>
                  BRISBANE
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <Image
                src={'/images/melbourne_perth_eng.png'}
                alt={'sydeny and brisbane dataeng meetup '}
                height={"280"}
                width={"420"}
              />
              <div className="flex flex-row text-white mt-2 justify-around ">
                <div>
                  MELBOURNE
                </div>
                <div>
                  PERTH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-slate-500 "></div>
      <div className="font-sans tracking-wider text-lg text-center p-14 bg-dark-black-blue text-white flex flex-col gap-4">
        <div className="font-bold text-3xl text-red-600 mb-4 italic mt-10 ">
          JOIN US FOR DATAENGBYTES 2023
        </div>
        <div>
          <div className="font-sans font-extralight text-2xl text-gray-300">
            DataEngBytes is a community conference
          </div>
          <div className="font-sans font-thin text-2xl text-gray-300">
  centred on real world data engineering problems and solutions. You can find us in 4 major cities throughout Australia: Sydney, Melbourne, Brisbane & Perth.
          </div>
        </div>
        <div className="font-sans font-extralight text-2xl text-gray-300 mt-6 mb-12">
          Join us for a day full of learning, networking, and collaborating with data engineers throughout the nation.
        </div>
      </div>
      <div className="h-0.5 bg-slate-500 "></div>
      <div className="p-20 text-2xl font-serif bg-dark-black-blue text-center tracking-wider">
        <div className="font-sans italic text-4xl text-slate-200 mb-10 ">
          WHY ATTEND?
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-20 justify-around items-center md:items-stretch ">
          <div className="py-12 px-8  bg-red-700 text-white rounded-2xl w-64">
            Network with professionals & like minded-individuals in the field.
          </div>
          <div className="py-12 px-8  bg-red-700 text-white rounded-2xl w-64">
            Gain insight into the latest trends and information.
          </div>
          <div className="py-12 px-8  bg-red-700 text-white rounded-2xl w-64">
            Discover new opportunities that you can easily take advantage of.
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-slate-500 "></div>
      <div className="p-16 text-2xl font-serif bg-dark-black-blue text-center tracking-wider">
        <div className="font-sans italic text-4xl text-slate-200 mb-20 ">
          OUR ATTENDEES
        </div>
        <div className="mt-6 flex flex-col md:flex-row text-white gap-6 justify-around  items-center md:items-stretch">
          <div
            className="flex w-56 h-56 bg-red-600 rounded-full"
          >
            <p className="m-auto">DATA ENGINEERS</p>
          </div>
          <div
            className="flex w-56 h-56 bg-red-600 rounded-full"
          >
            <p className="m-auto">BUSINESS STAKEHOLDERS</p>
          </div>
          <div
            className="flex w-56 h-56 bg-red-600 rounded-full"
          >
            <p className="m-auto">ANALYTICS ENGINEERS</p>
          </div>
          <div
            className="flex w-56 h-56 bg-red-600 rounded-full"
          >
            <p className="m-auto">MLOPS</p>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-slate-500 "></div>
      <div className="bg-dark-black-blue text-white p-10 text-center tracking-wider ">
        <div className="font-sans italic text-4xl text-slate-200 mt-10 mb-20">
          TRUSTED THROUGHOUT THE NATION
        </div>
        <div className="flex flex-row justify-around mb-20 ">
          <div className="flex flex-col gap-6">
            <div className="bg-red-700 rounded-md px-8 py-6 text-black text-5xl">
              5,000
            </div>
            <div className="text-white text-xl">
              Data Engineers
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-red-700 rounded-md px-8 py-6 text-black text-5xl">
              1,000+
            </div>
            <div className="text-white text-xl">
              Attendees
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-red-700 rounded-md px-8 py-6 text-black text-5xl">
              3,000
            </div>
            <div className="text-white text-xl">
              Slack members
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-slate-500 "></div>
      <div className="bg-dark-black-blue text-white p-10 text-center tracking-wider ">
        <div className="font-sans italic text-4xl text-slate-200 mt-10 mb-20">
          WITH SPECIAL THANKS TO OUR SPONSORS
        </div>
        <div className="flex flex-col text-white text-lg gap-20 px-10 ">
          <div className="flex flex-col gap-3 ">
            <div>
              Headline
            </div>
            <div className="flex flex-row gap-6 px-10">
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-12">
            <div>
              Gold
            </div>
            <div className="flex flex-row gap-6 px-10 ">
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-12">
            <div>
              Silver
            </div>
            <div className="flex flex-row gap-6 px-10 ">
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-12 mb-40 ">
            <div>
              Regional
            </div>
            <div className="flex flex-row gap-6 px-10 ">
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
              <div className="border-2  border-slate-300 w-1/4 h-16">

              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

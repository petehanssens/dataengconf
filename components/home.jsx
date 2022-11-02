import { Fragment } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

const myLoader = ({ src, width, quality }) => {
  return `https://dataengconf.com.au/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  return (
    <Fragment>
      <div className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">DataEngMeetup!</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Present your knowledge at the next Data Engineering meetup in your
              city!
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="/forms/meetup-talk"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Register your Interest
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          {/* <ReactPlayer 
                    url='https://youtu.be/c1oVXuTH0Kg'
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%" 
                /> */}
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/speaker.png"
            alt="DataEngBytes"
            layout="fill"
          />
        </div>
      </div>
    </Fragment>
  );
}

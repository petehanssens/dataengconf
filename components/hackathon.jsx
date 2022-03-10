import React from 'react';
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'


export default function Hackathon() {
    return (
        <>
        <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                    <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                </div>
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Join us for DataEngHack, Sydney!
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    The in-person event will expose you to cutting edge data engineering technology as well as a host of team building and career development opportunities.
                    There’s limited spots available for this event so please do book in fast to reserve your spot!
                    </p>
                    <div className="mt-6">
                        {/* <!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. --> */}
                        <div class="tt-widget"><div class="tt-widget-fallback w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"><p><a href="https://www.tickettailor.com/all-tickets/dataengbytes/?ref=website_widget" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p></div><script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/all-tickets/dataengbytes/" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script></div>
                        {/* <!-- End of Ticket Tailor Widget --> */}
                    </div>
                    <div className="rounded-md shadow">
                        <a href="https://www.tickettailor.com/events/dataengbytes/664753" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Buy Hackathon Tickets!
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none fill-blue-500"
                    src="/images/meetupLogos/SydneyDataEngMeetup.png"
                    alt="Customer profile user interface"
                />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

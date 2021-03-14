import React from 'react';

export default function Home() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded data-eng-logo" alt="hero" />
                    <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">August 26<sup>th</sup>-27<sup>th</sup>, 2021.</h1>
                    <p class="mb-8 leading-relaxed">
                        DataEngBytes is back on again this year and it's going to be even better... 
                        Join us for some incredible talks and some great networking opportunities.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Call for Papers</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Buy tickets</button>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}


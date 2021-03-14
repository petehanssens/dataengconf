import React from 'react';

const topicDetails = [
    {
        "name": "data at rest",
        "description": "Storing data isn't just about writing it - this topic dives into everything from data lakes to data security"
    },
    {
        "name": "data in motion",
        "description": "Real time streaming to batch processing - this topic covers it all"
    },
    {
        "name": "data for machine learning",
        "description": "We take a look at data engineering through the lens of machine learning workloads"
    },
    {
        "name": "data you can trust",
        "description": "Lineage, metadata, security - this topic has it all"
    },
]

export default function Topics() {
    return (
        <>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-red-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div class="flex flex-wrap">

      {topicDetails.map(data => 
            <div key={data.id} class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{data.name}</h2>
              <p class="leading-relaxed text-base mb-4">{data.description}</p>
            </div>
      )}
          </div>
          <button class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        </div>
      </section>

        </>
    )
}


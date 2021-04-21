import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faRunning, faRobot, faHandshake } from '@fortawesome/free-solid-svg-icons'

const topicDetails = [
    {
        "name": "data at rest",
        "description": "scaling, data warehouses, data lakes, data storage",
        "icon": <FontAwesomeIcon icon={faBed} />
    },
    {
        "name": "data in motion",
        "description": "event driven architecture, data pipelines, IoT, batch, streaming",
        "icon": <FontAwesomeIcon icon={faRunning} />
    },
    {
        "name": "data for machine learning",
        "description": "getting models into production, data pipeline for machine learning, managing data artefacts, feature stores etc",
        "icon": <FontAwesomeIcon icon={faRobot} />
    },
    {
        "name": "data you can trust",
        "description": "data discovery & provenance, data testing and confidence scoring, ethical consideration and data security plus compliance obligations",
        "icon": <FontAwesomeIcon icon={faHandshake} />
    },
]

export default function Topics() {
    return (
        <>
<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Themes</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        We are looking for talks aligned to our four themes
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      We are looking for a range of stories and real-world experiences from working on your side projects through to enterprise level applications. Share your learnings, experiences and best practices with us.
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

      {topicDetails.map(data => (
        <div key={data.name} className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {data.icon}
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{data.name}</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
          {data.description}
          </dd>
        </div>
      )
      )}
      </dl>
    </div>
  </div>
</div>

        </>
    )
}


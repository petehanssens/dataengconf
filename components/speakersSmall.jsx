import React from 'react';

import speakers from '../data/2021/speakers.json'

const exclusionList = ['Chris Benson','Galina Polyakova']


export default function Sponsors() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

          <ul role="list" className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            {speakers.filter(
              speaker => !exclusionList.includes(speaker.fullName)
            ).map((person) => (
              <li key={person.id} className="bg-white">
              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                  <img className="h-20 w-20 rounded-full" src={person.profilePicture} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/speakers" className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{person.fullName}</p>
                    <p className="text-sm text-gray-500 truncate">{person.tagLine}</p>
                  </a>
                </div>
              </div>
            </li>
            ))}
            </ul>
        </div>
      </div>
    )
  }
  
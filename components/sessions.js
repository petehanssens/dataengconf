import React, { Component } from 'react'; 
import sessionData from "../data/sessions.json"; 


export default function Sessions() {
        return (
            <>
            <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Sessions</p>
            <p className="text-2xl">Afternoon - Thursday.</p>

<div className="px-2">
  <div className="flex -mx-2 py-4">
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
          {sessionData.Day1[0].StartTime}: {sessionData.Day1[0].Description}
      </div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
  </div>
  <div className="flex -mx-2 py-4">
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
  </div>
</div>

<p className="text-2xl">Morning - Friday.</p><div className="px-2">
  <div className="flex -mx-2 py-4">
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded"></div>
    </div>
  </div>
</div>
</>
        )};
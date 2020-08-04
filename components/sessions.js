import React from 'react';
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
    {/* <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
      {sessionData.map(session => (
        <a key={session.Day1.StartTime}>
        </a>
      ))}
    </div> */}
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[1].StartTime}: {sessionData.Day1[1].Description}
        <br></br>
        {sessionData.Day1[1].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[2].StartTime}: {sessionData.Day1[2].Description}
        <br></br>
        {sessionData.Day1[2].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
    <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[3].StartTime}: {sessionData.Day1[3].Description}
        <br></br>
        {sessionData.Day1[3].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[4].StartTime}: {sessionData.Day1[4].Description}
        <br></br>
        {sessionData.Day1[4].SpeakerName}
      </div>
    </div>
  </div>
  <div className="flex -mx-2 py-4">
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[5].StartTime}: {sessionData.Day1[5].Description}
        <br></br>
        {sessionData.Day1[5].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
      <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[6].StartTime}: {sessionData.Day1[6].Description}
        <br></br>
        {sessionData.Day1[6].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
    <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[7].StartTime}: {sessionData.Day1[7].Description}
        <br></br>
        {sessionData.Day1[7].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
    <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[8].StartTime}: {sessionData.Day1[8].Description}
        <br></br>
        {sessionData.Day1[8].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
    <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[9].StartTime}: {sessionData.Day1[9].Description}
        <br></br>
        {sessionData.Day1[9].SpeakerName}
      </div>
    </div>
    <div className="w-1/4 px-2">
    <div className="bg-gray-400 h-24 rounded flex items-center justify-center align-middle text-blue text-bold text-xl">
        {sessionData.Day1[10].StartTime}: {sessionData.Day1[10].Description}
        <br></br>
        {sessionData.Day1[10].SpeakerName}
      </div>
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

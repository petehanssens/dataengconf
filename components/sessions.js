import React from "react";
import Link from "next/link";
import sessionData from "../data/conference-timing.json";
import speakerData from "../data/speakers.json"

export default function Sessions() {
  return (
    <>
      <p style={{ color: "rgba(0,0,0,0.65)" }} className="text-4xl">
        Sessions
      </p>
      <p className="text-2xl">Afternoon - Thursday 20 August</p>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full">
        {sessionData
          .filter((session) => session.day != "Friday")
          .map((session) => (
            <div className="w-400 -mx-2 px-4">
              <div className="bg-gray-400 w-400 h-50 h-full p-3 rounded flex items-center align-middle text-blue text-bold text-lg">
                <Link href={'speaker/'+session.link} >
                  <a> <strong>{session.start_time_aest}: {session.speaker_name || "DataEngBytes team"}</strong><br/>{session.talk_title}</a>
                </Link>
                
              </div>
            </div>
          ))}
      </div>

      <br></br>

      <p className="text-2xl">Morning - Friday 21 August</p>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full">
        {sessionData
          .filter((session) => session.day != "Thursday")
          .map((session) => (
            <div className="w-400 -mx-2 px-4">
              <div className="bg-gray-400 w-400 h-50 h-full p-3 rounded flex items-center align-middle text-blue text-bold text-lg">
                <Link href={'speaker/'+session.link} >
                  <a> <strong>{session.start_time_aest}: {session.speaker_name || "DataEngBytes team"}</strong><br/>{session.talk_title}</a>
                </Link>
                <span>{session.TalkTitle}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

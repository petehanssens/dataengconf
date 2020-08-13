import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import SpeakerData from '../data/speakers.json';

let AllSpeakers = SpeakerData.filter(speaker => speaker.role=="speaker")
                            .sort((a, b) => a.SessionNumber - b.SessionNumber);

export default function Speakers() {
    return (
        <Layout>
            <p className="text-gray-900 text-4xl font-bold mb-2 pl-12">Speakers</p>
            <br></br>
            <div className="flex mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full">
                { AllSpeakers.map(speaker => (
                    <Link href={speaker.link} >
                        <div className="border border-gray-400 bg-white h-96 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden w-auto px-4 py-2" >
                            <div className="text-gray-900 font-bold text-xl mb-2 flex justify-between">
                                {speaker.name}
                            </div>
			                <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-black-500 opacity-75"></div>
                            <div className="mb-8 grid grid-cols-2 object-center justify-center items-center content-center">
                                <div className=" object-center justify-center items-center content-center">
                                    <img src={speaker.image} alt={speaker.name} className="w-full object-center rounded-full p-4 content-center justify-center items-center" />
                                </div>
                                <div className="mb-8">
                                    <p className="text-grey-darker text-base text-left">{speaker.title}</p>
                                    <br />
                                    <p className="text-xs text-left font-bold">{speaker.Day} - {speaker.StartTime} (GMT+10)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}


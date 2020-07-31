import React from 'react';
import speakerData from "../data/speakers.json";

export default function Keynotes() {
        return (
            <div>
            <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Keynotes</p>
            <br></br>
            <div className="flex flex-wrap sm:flex-row">	

            {speakerData.filter(person => person.id === "zhamak-dehghani")
                    .map(speakers => (
                        <>
                            <div className="w-full sm:w-1/4 p-6 mt-6">
                                <title>connected world</title>
                                <img src={speakers.image} className="rounded-full h-34 w-34 items-center justify-center" />
                            </div>
                            <div className="w-full sm:w-3/4 p-6 mt-6">
                                <div className="align-middle">
                                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{speakers.name}</h3>
                                    <p className="text-gray-600 mb-8"><strong>{speakers.title}</strong><br /><br />
                                    {speakers.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row">	

            {speakerData.filter(person => person.id === "gian-merlino")
                    .map(speakers => (
                    <>
                        <div className="w-full sm:w-3/4 p-6 mt-6">
                            <div className="align-middle">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{speakers.name}</h3>
                                <p className="text-gray-600 mb-8"><strong>{speakers.title}</strong><br /><br />
                                {speakers.description}</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/4 p-6 mt-6">
                            <img src={speakers.image} className="rounded-full h-34 w-34 items-center justify-center" />
                        </div>
                    </>
                    ))}
            </div>
        </div>
    )
}

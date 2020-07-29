import React, { Component } from 'react';
import speakerData from "../data/speakers.json";

export default function Speakers() {
        return (
            <div>
            <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Speakers</p>
            <br></br>
            <div className="flex mb-4">
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-2 md:gap-4">
                    {speakerData.map(speakers => (
                        <a key={speakers.name}>
                        <img src={speakers.image} className="rounded-full h-30 w-30 items-center justify-center" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

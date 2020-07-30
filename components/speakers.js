import React, { Component } from 'react';
import speakerData from "../data/speakers.json";

export default function Speakers() {
        return (
            <div>
            <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Speakers</p>
            <br></br>
            <div className="flex mb-4">
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-4 md:gap-4">
                    {speakerData.map(speakers => (
                        <a key={speakers.name} href={speakers.link}>
                        <img src={speakers.image} className="rounded-full h-34 w-34 items-center justify-center" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

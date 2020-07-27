import React, { Component } from 'react';
import sponsorData from "../data/sponsors.json"; 


export default function Sponsors() {
        return (
            <div>
            <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Sponsors</p>
            <p className="text-2xl">A huge thank you to our awesome sponsors & partners.</p>

            <div className="flex mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {sponsorData.map(sponsor => (
                        <a key={sponsor.name} href={sponsor.url}>
                        <img src={sponsor.logo} className="object-scale-down h-32 w-full p-4" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

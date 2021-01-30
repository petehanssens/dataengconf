import React from 'react';

export default function Home() {
    return (
        <>
            <div style={{minHeight:'85vh', 
                backgroundColor: '#120136', 
                color: '#FF4033'}}>
                <img style={{}} className="data-eng-logo" alt="header image"/>
                <br/>
                <span className="text-4xl">
                <p style={{textAlign: 'right'}}>Thu 26<sup>th</sup> - Fri 27<sup>st</sup> August, 2021.</p>
                <p className="text-2xl" style={{color: '#671875'}}>
                DataEngConfAu - Bytes! Join us this year for our virtual Australian conference focusing on real world data engineering problems.
                A not-for-profit event featuring two half day sessions jam packed with bite sized presentation with plenty of sharing and learning.
                DataEngBytes 2020 is a virtual event - with our in-person event scheduled for 2021.
                </p>
                </span>
                <br/>
            </div>

        </>
    )
}


import React from 'react';
import Sponsors from './sponsors';
import Speakers from './speakers';
import Keynotes from './keynotes';
import Sessions from './sessions';


export default function Home() {
    return (
        <>
            <div style={{minHeight:'85vh'}}>
                <img style={{}} className="header-image" alt="header image"/>
                <br/>
                <span className="text-4xl">
                <p style={{textAlign: 'right'}}>Thu 20<sup>th</sup> - Fri 21<sup>st</sup> August, 2020.</p>
                <p className="text-2xl">
                DataEngConfAu - Bytes! Join us this year for our virtual Australian conference focusing on real world data engineering problems.
                A not-for-profit event featuring two half day sessions jam packed with bite sized presentation with plenty of sharing and learning.
                DataEngBytes 2020 is a virtual event - with our in-person event scheduled for 2021.
                </p>
                </span>
                <br/>
            </div>

            <Keynotes />

            <Speakers  />

            <Sessions />

            <Sponsors  />

        </>
    )
}


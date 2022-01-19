import React from 'react'
import Schedule from '../components/schedule'
import SEO from "../components/seo";

export default function Lineup() {
    return (
        <>
            <SEO
            keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
            title="Schedule - DataEngBytes!"
            description="Find out when your favourite speaker is on at DataEngBytes"
            />
            <Schedule />
        </>
    )
}



import React from 'react'
import SEO from "../components/seo";
import Meetups from "../components/meetups";

export default function Home() {
    return (
        <>
            <SEO
            keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
            title="All Past Meetups"
            description="Here is a list of all other meetups that have occured and will take place in the future"
            />
            <Meetups />
        </>
    )
}



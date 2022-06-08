import React from 'react'
import SEO from "../components/seo";
import HomeLayout from '../components/home';
import Stats from '../components/stats';
import Logos from '../components/logos'
import Trophy from '../components/hackathon/trophy'
import Personas from '../components/hackathon/personas'
import HackSignUp from '../components/hackathon/hackSignUp'
import Melbourne from '../components/melbourne'
import Sydney from '../components/sydney'

export default function Home() {
    return (
        <>
            <SEO
            keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
            title="Welcome to DataEngBytes!"
            description="A community run Data Engineering conference in Australia and New Zealand"
            />
            <HomeLayout />
            <Melbourne />
            <Sydney />
            {/* <Hackathon /> */}
            {/* <HackSignUp /> */}
            {/* <Personas /> */}
            {/* <Trophy /> */}
            <Stats />
            <Logos />
        </>
    )
}


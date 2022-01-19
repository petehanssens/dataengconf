import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeLayout from '../components/home'
import Topics from '../components/topics'
import Logos from '../components/logos'
import Pricing from '../components/pricing'
import Sydney from '../components/sydney'
import Melbourne from '../components/melbourne'
import SpeakerSmall from '../components/speakersSmall'
import Keynotes from '../components/keynotes'
import Schedule from '../components/schedule'
import SEO from "../components/seo";

export default function Home() {
    return (
        <>
            <SEO
            keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
            title="Welcome to DataEngBytes!"
            description="A community run Data Engineering conference in Australia and New Zealand"
            />
            <HomeLayout />
            <Keynotes />
            <Schedule />
            <SpeakerSmall />
            <Logos />
        </>
    )
}



import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeLayout from '../components/home'
import Topics from '../components/topics'
import Logos from '../components/logos'
import Pricing from '../components/pricing'
import Sydney from '../components/sydney'
import Melbourne from '../components/melbourne'


export default function Home() {
    return (
        <>
            <HomeLayout />
            <Topics />
            <Pricing />
            <Sydney />
            <Melbourne />
            <Logos />
        </>
    )
}



import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeLayout from '../components/home'
import Topics from '../components/topics'
import Logos from '../components/logos'

export default function Home() {
    return (
        <>
            <HomeLayout />
            <Topics />
            <Logos />
        </>
    )
}



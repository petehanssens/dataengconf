import "tailwindcss/tailwind.css"
import React from 'react'
import Layout from '../components/layout'
import HomeLayout from '../components/home'
import Topics from '../components/topics'

export default function Home() {
    return (
        <Layout>
            <HomeLayout />
            <Topics />
        </Layout>
    )
}



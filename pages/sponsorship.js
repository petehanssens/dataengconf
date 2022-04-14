import React from 'react'
import SEO from "../components/seo";
import SponsorPricing from "../components/sponsorPricing";

export default function Home() {
    return (
        <>
            <SEO
            keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
            title="Sponsor DataEngBytes!"
            description="Help support Australia's premier community run data engineering conference!"
            />
            <SponsorPricing />
        </>
    )
}



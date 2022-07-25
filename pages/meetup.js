import React from 'react'
import SEO from "../components/seo";
import Meetups from "../components/meetups";
import CityBar from "../components/citybar";

export default function Home() {
    const [cityName, setCityName] = useState();
    const callback = (cityName) => {
        setCityName(cityName)
    }
    return (
        
        <>
            
            <SEO
            keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
            title="All Past Meetups"
            description="Here is a list of all other meetups that have occured and will take place in the future"
            />
            <CityBar onClick={callback} />
            <Meetups 
            city={cityName}
            />
        </>
    )

}



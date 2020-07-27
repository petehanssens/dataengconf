import React from 'react';
import Layout from '../components/layout';


export default function CodeOfConduct() {
        return (
            <Layout>
                <article className="prose lg:prose-xl container mx-auto" style={{minHeight:'85vh'}}>
                <h1>Contact Us</h1>
                <p>We are on the socials - feel free to give us a follow and say hello 👋</p>
                <a href='https://twitter.com/dataengconfau'>
                    <div className="flex px-4">
                        <div className="twitter-large fill-current text-purple-500"></div>
                        <p className="px-4">Twitter</p>
                    </div>
                </a>
                <a href='https://www.linkedin.com/company/cloud-shuttle/'>
                    <div className="flex px-4">
                        <div className="linkedin-large fill-current text-purple-500"></div>
                        <p className="px-4">LinkedIn</p>
                    </div>
                </a>
                <a href='mailto:sydney@dataengconf.com.au?subject=DataEngBytesContactUsPage' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="gmail-large fill-current text-purple-500"></div>
                        <p className="px-4">Email</p>
                    </div>
                </a>
                <a href='https://www.twitch.tv/dataengau' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="twitch-large fill-current text-purple-500"></div>
                        <p className="px-4">Twitch</p>
                    </div>
                </a>
                <a href='https://www.youtube.com/channel/UCteq_tbr6F-KZ0JhaY9fy0g' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="youtube-large fill-current text-purple-500"></div>
                        <p className="px-4">Youtube</p>
                    </div>
                </a>
                </article>
            </Layout>
        )
}


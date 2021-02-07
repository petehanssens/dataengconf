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
                <a href='https://www.youtube.com/dataengau' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="youtube-large fill-current text-purple-500"></div>
                        <p className="px-4">Youtube</p>
                    </div>
                </a>
                <a href='https://www.meetup.com/Sydney-Data-Engineering-Meetup/' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="meetup-large fill-current text-purple-500"></div>
                        <p className="px-4">Meetup - Sydney</p>
                    </div>
                </a>
                <a href='https://www.meetup.com/Melbourne-Data-Engineering-Meetup/' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="meetup-large fill-current text-purple-500"></div>
                        <p className="px-4">Meetup - Melbourne</p>
                    </div>
                </a>
                <a href='https://www.meetup.com/Brisbane-Data-Engineering-Meetup/' className=" fill-current text-purple-500">
                    <div className="flex px-4">
                        <div className="meetup-large fill-current text-purple-500"></div>
                        <p className="px-4">Meetup - Brisbane</p>
                    </div>
                </a>
                </article>
            </Layout>
        )
}
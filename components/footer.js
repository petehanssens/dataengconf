import React, { Component } from 'react';
import MailChimp from './mailchimp';


export default function Footer() {
    return (
        <div className="ant-page-header h-48">
            <div className="flex mb-4 p-4 container mx-auto">
                <div className="w-1/4 h-12">
                    <img style={{minHeight:'100px', paddingTop: '0px'}} className="header-image pt-0 " alt="header image"/>
                </div>
                <div className="w-1/4 h-12">
                </div>
                <div className="w-1/4 h-12 md:px-16 lg:px-16 xl:px-16">
                    <p className='text-l font-bold pb-5'>Contact Us</p>
                    <a href='https://www.linkedin.com/company/dataengconfau/about/'>LinkedIn</a><br/>
                    <a href='https://twitter.com/dataengconfau'>Twitter</a><br/>
                    <a href='mailto:sydney@dataengconf.com.au?Subject=DataEngConf'>Email</a>
                </div>
                <div className="w-1/4 h-12">
                    <p className='text-l font-bold pb-5'>Event</p>
                    <a href='https://www.meetup.com/Sydney-Data-Engineering-Meetup/'>Meetup</a><br/>
                    <a href="https://www.youtube.com/channel/UCteq_tbr6F-KZ0JhaY9fy0g">Youtube</a><br/>
                    <a href="https://www.twitch.tv/dataengau">Twitch</a><br/>
                </div>
            </div>
        </div>
    )
}




import React, { Component } from 'react';
import MailChimp from './mailchimp';


export default function Footer() {
    return (
        <div className="ant-page-header h-56">
            <div className="flex mb-4 p-4 gap-4">
                <div className="w-2/4 h-12">
                    <img style={{minHeight:'100px', paddingTop: '0px'}} className="header-image p-6 h-30" alt="header image"/>
                </div>
                <div className="w-1/4 h-12">
                    <p className='text-l font-bold pb-5'>Contact Us</p>
                    <a href='https://www.linkedin.com/company/dataengconfau/about/'>LinkedIn</a><br/>
                    <a href='https://twitter.com/dataengconfau'>Twitter</a><br/>
                    <a href='mailto:sydney@dataengconf.com.au?Subject=DataEngConf'>Email</a>
                </div>
                <div className="w-1/4 h-12">
                    <p className='text-l font-bold pb-5'>Event</p>
                    <a href='https://buytickets.at/dataengbytes'>Tickets</a><br/>
                    <a href="https://www.youtube.com/channel/UCteq_tbr6F-KZ0JhaY9fy0g">Youtube</a><br/>
                    <a href="https://www.twitch.tv/dataengau">Twitch</a><br/>
                </div>
            </div>
        </div>
    )
}




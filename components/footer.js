import React, { Component } from 'react';
import MailChimp from './mailchimp';


export default function Footer() {
    return (
        <div className="ant-page-header h-48">
            <div className="flex mb-4 p-4">
                <div className="w-1/3 h-12">
                    <img style={{minHeight:'100px', paddingTop: '0px'}} className="header-image pt-0 "/>
                </div>
                <div className="w-1/3 h-12 px-16">
                    <p className='text-l font-bold pb-5'>Contact Us</p>
                    <a href='https://www.linkedin.com/company/dataengconfau/about/'>LinkedIn</a><br/>
                    <a href='https://twitter.com/dataengconfau'>Twitter</a><br/>
                    <a href='mailto:sydney@dataengconf.com.au?Subject=DataEngConf'>Email</a>
                </div>
                <div className="w-1/3 h-12">
                    <p className='text-l font-bold pb-5'>Event</p>
                    <a href='https://buytickets.at/dataengbytes'>Tickets</a><br/>
                    <a href="https://sessionize.com/dataengbytes">Youtube</a><br/>
                    <a href="https://sessionize.com/dataengbytes">Twitch</a><br/>
                </div>
            </div>
        </div>
    )
}




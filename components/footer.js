import React, { Component } from 'react';
import MailChimp from './mailchimp';

export default class FooterClass extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <div className="flex mb-4 site-page-header-ghost-wrapper p-4">
            <div className="w-1/3 h-12">
                <img style={{maxHeight:'100px', paddingTop: '0px'}} className="header-image"/>
            </div>
            <div className="w-1/3 h-12">
                <p className='text-l font-bold' style={{paddingBottom:'5px'}}>Contact Us</p>
                <a href='https://www.linkedin.com/company/dataengconfau/about/'>LinkedIn</a><br/>
                <a href='https://twitter.com/dataengconfau'>Twitter</a><br/>
                <a href='mailto:sydney@dataengconf.com.au?Subject=DataEngConf'>Email</a>
            </div>
            <div className="w-1/3 h-12">
                <p className='text-l font-bold' style={{paddingBottom:'5px'}}>Event</p>
                <a href="https://sessionize.com/dataengbytes">Call For Papers</a><br/>
                <a href='https://buytickets.at/dataengbytes'>Tickets</a><br/>
                <MailChimp>Register Your Interest</MailChimp>
            </div>
        </div>
        )
    }
}




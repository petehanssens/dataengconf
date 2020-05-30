import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import MailChimp from './mailchimp'

export default class FooterClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Row>
            <Col span={8}>
                <img style={{maxHeight:'100px', paddingTop: '0px'}} className="header-image"/>
                {/* <img style= src="./images/logos/dataeng/bytes_banner.svg"/> */}
            </Col>
            <Col span={8} style={{display: 'block'}}>
                <p className='text-l font-bold' style={{paddingBottom:'5px'}}>Contact Us</p>
                <Button href='https://www.linkedin.com/company/dataengconfau/about/'>LinkedIn</Button><br/>
                <Button href='https://twitter.com/dataengconfau'>Twitter</Button><br/>
                <Button href='mailto:sydney@dataengconf.com.au?Subject=DataEngConf'>Email</Button>
            </Col>
            <Col span={8}>
                <p className='text-l font-bold' style={{paddingBottom:'5px'}}>Event</p>
                <Button href="https://sessionize.com/dataengbytes">Call For Papers</Button><br/>
                <Button href=''>Tickets</Button><br/>
                <MailChimp/>
            </Col>
        </Row>
        )
    }
}




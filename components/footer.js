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
                <Button href='https://www.linkedin.com/company/dataengconfau/about/' style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>LinkedIn</Button><br/>
                <Button href='https://twitter.com/dataengconfau' style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>Twitter</Button><br/>
                <Button href='mailto:sydney@dataengconf.com.au?Subject=DataEngConf' style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>Email</Button>
            </Col>
            <Col span={8}>
                <p className='text-l font-bold' style={{paddingBottom:'5px'}}>Event</p>
                <Button href="https://sessionize.com/dataengbytes" style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>Call For Papers</Button><br/>
                <Button href='' style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>Tickets</Button><br/>
                <MailChimp/>
            </Col>
        </Row>
        )
    }
}




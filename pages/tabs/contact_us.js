import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'
import {
    TwitterOutlined,
    MailOutlined,
    LinkedinOutlined,
    SmileOutlined
  } from '@ant-design/icons';
import { List, Button } from 'antd';
import MailChimp from './../../components/mailchimp'


export default class ContactUs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
          
        return (
            <PageWrapper title="Get in touch">
                    <List bordered={false}>
                        <List.Item style={{display:'-webkit-inline-box'}}>
                                <SmileOutlined style={{fontSize:40, color: 'green', paddingRight:'10px'}}/>
                            <MailChimp><p className='text-3xl' style={{display:'inline', paddingLeft: '10px'}}>Register Your Interest</p></MailChimp>
                        </List.Item>
                        <List.Item style={{display:'block'}}>
                            <a  href="https://twitter.com/dataengconfau" target="_blank">
                                <TwitterOutlined style={{fontSize:50, color: '#38A1F3', paddingRight:'10px'}}/>
                            </a>
                            <Button href="https://twitter.com/dataengconfau" className='text-3xl'style={{wordWrap: 'anywhere', whiteSpace: 'normal', maxWidth:'100%'}}>@dataengconfau</Button><br/>

                        </List.Item>
                        <List.Item style={{display:'block'}}>
                            <a href="https://www.linkedin.com/company/dataengconfau/about/" target="_blank">
                                <LinkedinOutlined style={{fontSize:50, color: '#0e76a8', paddingRight:'10px'}}/>
                            </a>
                            <Button href="https://www.linkedin.com/company/dataengconfau/about/" className='text-3xl' style={{wordWrap: 'anywhered', whiteSpace: 'normal', maxWidth:'100%'}}>/dataengconfau</Button><br/>
                        </List.Item>
                        <List.Item style={{display:'block'}}>
                            <a href="mailto:sydney@dataengconf.com.au?Subject=DataEngConf" target="_top">
                                <MailOutlined style={{fontSize:50, color: '#D44638', paddingRight:'10px'}}/>
                            </a>                      
                            <Button href="mailto:sydney@dataengconf.com.au?Subject=DataEngConf" className='text-3xl' style={{wordWrap: 'anywhere', whiteSpace: 'normal', maxWidth:'100%'}}>sydney@dataengconf.com.au</Button><br/>
                        </List.Item>
                    </List>
            </PageWrapper>
        )
    }
}


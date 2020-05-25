import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'
import {
    TwitterOutlined,
    MailOutlined,
    LinkedinOutlined
  } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Typography, Divider } from 'antd';

import { List, Space, Button } from 'antd';


export default class ContactUs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = [
            {
                'name': 'Twitter',
                'url': 'http',
                'icon': TwitterOutlined
            }
        ];
          
        return (
            <PageWrapper title="Get in touch">
                    <List bordered={false}>
                        <List.Item>
                            <a  href="https://twitter.com/dataengconfau">
                                <TwitterOutlined style={{fontSize:100, color: '#38A1F3', paddingRight:'50px'}}/>
                                <Typography.Title style={{display:'inline-block', color: "#1890ff"}} level={3}>@dataengconfau</Typography.Title>
                            </a>
                        </List.Item>
                        <List.Item>
                            <a href="https://www.linkedin.com/company/dataengconfau/about/">
                                <LinkedinOutlined style={{fontSize:100, color: '#0e76a8', paddingRight:'50px'}}/>
                                <Typography.Title style={{display:'inline-block', color: "#1890ff"}} level={3}>/dataengconfau</Typography.Title>
                            </a>
                        </List.Item>
                        <List.Item>
                            <a href="mailto:sydney@dataengconf.com.au?Subject=DataEngConf" target="_top">
                                <MailOutlined style={{fontSize:100, color: '#D44638', paddingRight:'50px'}}/>
                                <Typography.Title style={{display:'inline-block', color: "#1890ff", wordWrap:'break-word'}} level={3}>sydney@dataengconf.com.au</Typography.Title>
                            </a>                      
                        </List.Item>
                    </List>
            </PageWrapper>
        )
    }
}


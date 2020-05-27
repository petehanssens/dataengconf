import React, { Component } from 'react';
import Sponsors from '../../components/sponsors'
import PageWrapper from '../../components/page_wrapper'

import { Carousel } from 'antd';

import {
    TwitterOutlined,
    MailOutlined,
    RobotOutlined
  } from '@ant-design/icons';
export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper >
                <Carousel dotPosition='bottom' autoplay style={{minHeight: '77vh'}}>
                    <div >
                        <p style={{color: 'rgba(0,0,0,0.65)'}} class="text-4xl">DataEngConfAu - Bites!</p>
                        <p class="text-2xl">
                            A not-for-profit virtual event centred on real world data engineering problems and solutions. It is a taster of what is to come for our in-person event which will be held in 2021.
                        </p>
                    </div>
                    <div>
                        {/* <p style={{color: 'rgba(0,0,0,0.65)'}} class="text-4xl">Themes</p> */}
                        <p class="text-4xl" style={{paddingBottom:'20px'}}>Data at rest</p>
                        <p class="text-4xl" style={{paddingBottom:'20px'}}>Data in motion</p>
                        <p class="text-4xl" style={{paddingBottom:'20px'}}>Data for machine learning</p>
                    </div>
                    <Sponsors/>

                </Carousel>

                {/* <Sponsors/> */}

            </PageWrapper>
        )
    }
}


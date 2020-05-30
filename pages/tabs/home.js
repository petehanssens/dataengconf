import React, { Component } from 'react';
import Sponsors from '../../components/sponsors'
import PageWrapper from '../../components/page_wrapper'


import { Col, Row } from 'antd';

const themes = [
    {
        header: 'Data',
        joiner: 'at',
        subtitle: 'Rest',
        src:'./images/undraw/data_at_rest.svg'
    },
    {
        header: 'Data',
        joiner: 'in',
        subtitle: 'Motion',
        src:'./images/undraw/data_in_motion.svg'
    },
    {
        header: 'Data',
        joiner: 'for',
        subtitle: 'Machine Learning',
        src:'./images/undraw/data_for_machine_learning.svg'
    },
]

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper >
                <div style={{minHeight:'85vh'}}>
                    <img style={{}} className="header-image"/>
                    <br/>
                    <span className="text-4xl">
                    <p >20<sup>th</sup> to 21<sup>st</sup> of August 2020 </p>
                    <p className="text-2xl">
                        DataEngConfAu - Bites! A not-for-profit virtual event centred on real world data engineering problems and solutions. It is a taster of what is to come for our in-person event which will be held in 2021.
                    </p>
                    </span>
                    <br/>
                </div>
                <Row style={{paddingTop:'20px', paddingBottom:'100px'}}>{
                            themes.map(theme => (
                                <Col key={theme.subtitle} flex="1 1 250px">
                                    <div className='text-5xl' style={{textAlign:'center', lineHeight: 1}}>{theme.header}</div>
                                    <p className='text-3xl' style={{textAlign:'center', lineHeight: 1}}>{theme.joiner}</p>
                                    <p className="text-4xl" style={{textAlign:'center', lineHeight: 1}}>{theme.subtitle}</p>
                                    <img src={theme.src} style={{padding:'10px'}}/>
                                </Col>
                            ))
                }</Row>
                
                    {/* <p style={{color: 'rgba(0,0,0,0.65)'}} class="text-4xl">Themes</p> */}
                <Sponsors/>

            </PageWrapper>
        )
    }
}


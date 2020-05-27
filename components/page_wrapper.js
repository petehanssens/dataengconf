import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;


export default class PageWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                ghost={false}
                >
                {this.props.title && <Divider orientation="left"><p style={{color: 'rgba(0,0,0,0.65)'}} class="text-4xl">{this.props.title}</p></Divider>}
                {this.props.children}
                </PageHeader>
            </div>
        )
    }
}
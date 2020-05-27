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
                // onBack={() => window.history.back()}
                // title={this.props.title}
                // subTitle={this.props.subtitle}
                >
                {this.props.title && <Divider orientation="left"><Title level={2}>{this.props.title}</Title></Divider>}
                {this.props.children}
                </PageHeader>
            </div>
        )
    }
}
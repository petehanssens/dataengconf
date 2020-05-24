import React, { Component } from 'react';
import { PageHeader } from 'antd';



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
                {this.props.children}
                </PageHeader>
            </div>
        )
    }
}
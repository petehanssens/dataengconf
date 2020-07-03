import React, { Component } from 'react';
import { List } from 'antd';


export default class Sponsors extends Component {
    constructor(props) {
        super(props);
    }

    sponsors = [
        {
            name: 'snowflake',
            logo: "./images/sponsors/snowflake.png",
            height: "250px",
            url: "https://www.snowflake.com",
        },
        {
            name: 'mongodb',
            logo: "./images/sponsors/mongoDB_transparent.png",
            height: "250px",
            url: "https://www.mongodb.com",
        },
        {
            name: 'databricks',
            logo: "./images/sponsors/databricks.png",
            height: "250px",
            url: "https://databricks.com/",
        },
        {
            name: 'aws',
            logo: "./images/sponsors/aws.png",
            height: "250px",
            url: "https://aws.amazon.com/",
        },
        {
            name: 'microsoft',
            logo: "./images/sponsors/microsoft.png",
            height: "250px",
            url: "https://azure.microsoft.com/en-au/",
        },
        {
            name: 'fivetran',
            logo: "./images/sponsors/fivetran.png",
            height: "250px",
            url: "https://fivetran.com/",
        },
        {
            name: 'confluent',
            logo: "./images/sponsors/confluent.png",
            height: "250px",
            url: "https://www.confluent.io/",
        },
        {
            name: 'thoughtworks',
            logo: "./images/sponsors/thoughtworks.png",
            height: "250px",
            url: "https://www.thoughtworks.com/",
        },
        {
            name: 'instaclustr',
            logo: "./images/sponsors/instaclustr.png",
            height: "250px",
            url: "https://www.instaclustr.com/",
        },
        {
            name: 'canva',
            logo: "./images/sponsors/canva.png",
            height: "250px",
            url: "https://www.canva.com/",
        },
        {
            name: 'yow',
            logo: "./images/sponsors/yow_colour_stacked.png",
            height: "250px",
            url: "https://yowconference.com/data/",
        },
        {
            name: 'cloudshuttle',
            logo: "./images/sponsors/cloudshuttle.png",
            height: "250px",
            url: "https://www.cloudshuttle.com.au",
        },
    ];

    render() {
        return (
            <div>
            <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Sponsors</p>
            <p className="text-2xl">A huge thank you to our awesome sponsors & partners.</p>
            <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 4
                }}
                dataSource={this.sponsors}
                renderItem={sponsor => (
                <List.Item>
                    <a href={sponsor.url} >
                    <div className="sponsor-image" 
                        style={{
                            backgroundPosition:'center center', 
                            backgroundImage: `url(${sponsor.logo})`, 
                            backgroundSize:'contain', 
                            backgroundRepeat:'no-repeat',
                            height: `${sponsor.height}`,
                            margin:'0 10px 0 10px',
                            maxWidth:'300px'
                        }}
                    />
                    </a>
                </List.Item>
                )}
            />
        </div>
    )}
}

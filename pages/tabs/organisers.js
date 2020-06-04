import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'
import { List, Avatar, Card } from 'antd';

const data = [
    {
        name: 'Peter Hanssens',
        title: 'Solutions Architect',
        avatar: "./images/organisers/peter_hanssens.jpeg",
        // content: "Some example content"
    },
    {
        name: 'Karen Davis',
        title: 'Senior Data Engineer',
        avatar: "./images/organisers/karen_davis.JPG",
        // content: "Some example content"
    },
    {
        name: 'Simon Aubury',
        title: 'Principal Data Engineer',
        avatar: "./images/organisers/simon_aubury_2.jpeg",
        // content: "Some example content"
    },
    {
        name: 'Leo Hoare',
        title: 'Data Engineer',
        avatar: "./images/organisers/leo_hoare.jpeg",
        // content: "Some example content"
    },
    {
        name: 'Katie Peterson',
        title: 'Software Developer',
        avatar: "./images/organisers/katie_peterson.jpeg",
        // content: "Passionate about creative applications that solve real-world problems and increasing female participation in STEM."
    },
    {
        name: 'Francisco Liwa',
        title: 'Data Engineer',
        avatar: "./images/organisers/francisco_liwa.jpeg",
        // content: "Some example content"
    }
  ];
  
  const committee = [
    {
        name: 'Ingrid Anzola',
        title: 'Principal Data Engineer',
        avatar: "./images/committee/ingrid.jpeg",
        // content: "Some example content"
    },
    {
        name: 'Rohan Dhupelia',
        title: 'Data Platform Manager',
        avatar: "./images/committee/rohan.jpeg",
        // content: "Some example content"
    },
    {
        name: 'Jessica Flanagan',
        title: 'Head of Engineering/Data Architecture',
        avatar: "./images/committee/jessica.jpeg",
        // content: "Some example content"
    },
    {
        name: 'Greg Roodt',
        title: 'Software Engineer',
        avatar: "./images/committee/greg.jpeg",
        // content: "Some example content"
    }
  ];

export default class Organisers extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <PageWrapper title="Organisers">
                    <List
                        grid={{
                        gutter: 16,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 3,
                        xxl: 3
                        }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <Card 
                                // hoverable 
                                title={item.name}
                            >
                                <Card.Meta
                                    avatar={
                                        <Avatar size={120} src={item.avatar} />
                                    }
                                    title={item.title}
                                    description={item.content}
                                />
                            </Card>
                        </List.Item>
                        )}
                    />
            </PageWrapper>
            <PageWrapper title="Committee">
                    <List
                        grid={{
                        gutter: 16,
                        sm: 1,
                        md: 1,
                        lg: 2,
                        xl: 2,
                        xxl: 2
                        }}
                        dataSource={committee}
                        renderItem={item => (
                        <List.Item>
                            <Card 
                                // hoverable 
                                title={item.name}
                            >
                                <Card.Meta
                                    avatar={
                                        <Avatar size={120} src={item.avatar} />
                                    }
                                    title={item.title}
                                    description={item.content}
                                />
                            </Card>
                        </List.Item>
                        )}
                    />
            </PageWrapper> 
            </>
        )
    }
}


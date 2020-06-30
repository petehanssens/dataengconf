import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'
import { List, Avatar, Card } from 'antd';
import {
    LinkedinOutlined,
    TwitterOutlined
} from '@ant-design/icons';


const data = [
    {
        name: 'Peter Hanssens',
        title: 'Solutions Architect',
        avatar: "./images/organisers/peter_hanssens.jpeg",
        company: "Cloud Shuttle",
        linkedin: "https://linkedin.com/in/peterhanssens/",
        twitter: "https://twitter.com/petehanssens",
        // content: "Some example content"
    },
    {
        name: 'Karen Davis',
        title: 'Lead Data Engineer',
        avatar: "./images/organisers/karen_davis.JPG",
        company: "ThoughtWorks",
        linkedin: "https://www.linkedin.com/in/karen-davis-53864211/",
        // content: "Some example content"
    },
    {
        name: 'Simon Aubury',
        title: 'Principal Data Engineer',
        avatar: "./images/organisers/simon_aubury_2.jpeg",
        company: "ThoughtWorks",
        linkedin: "https://au.linkedin.com/in/simonaubury/",
        twitter: "https://twitter.com/SimonAubury",
        // content: "Some example content"
    },
    {
        name: 'Leo Hoare',
        title: 'Data Engineer',
        avatar: "./images/organisers/leo_hoare.jpeg",
        company: "Itoc",
        linkedin: "https://www.linkedin.com/in/leo-hoare/",
        // content: "Some example content"
    },
    {
        name: 'Katie Peterson',
        title: 'Software Developer',
        avatar: "./images/organisers/katie_peterson.jpeg",
        company: "ThoughtWorks",
        linkedin: "https://www.linkedin.com/in/katie-peterson19/",
        // content: "Passionate about creative applications that solve real-world problems and increasing female participation in STEM."
    },
    {
        name: 'Francisco Liwa',
        title: 'Data Engineer',
        avatar: "./images/organisers/francisco_liwa.jpeg",
        company: "Max Kelsens",
        linkedin: "https://www.linkedin.com/in/nifrali",
        twitter: "https://twitter.com/nifrali",
        // content: "Some example content"
    },
    {
        name: 'Harmeet Sokhi',
        title: 'Data Engineer & Senior Consultant',
        avatar: "./images/organisers/harmeet_sokhi.jpeg",
        company: "ThoughtWorks",
        linkedin: "https://www.linkedin.com/in/harmeetsokhi/",
        twitter: "https://twitter.com/hksokhi",
        // content: "Some example content"
    },
    {
        name: 'Noel Hanssens',
        title: 'Data Engineering Manager',
        avatar: "./images/organisers/noel_hanssens.jpeg",
        company: "Lifeblood",
        linkedin: "https://www.linkedin.com/in/noelhanssens/",
        twitter: "https://twitter.com/noelhanssens",
        // content: "Some example content"
    }
  ];
  
  const committee = [
    {
        name: 'Ingrid Anzola',
        title: 'Principal Data Engineer',
        avatar: "./images/committee/ingrid.jpeg",
        company: "Deputy",
        linkedin: "https://au.linkedin.com/in/ingrid-anzola-3606775",
        twitter: "https://twitter.com/itirus",

        // content: "Some example content"
    },
    {
        name: 'Rohan Dhupelia',
        title: 'Engineering Manager, Data Platform',
        avatar: "./images/committee/rohan.jpeg",
        company: "Atlassian",
        linkedin: "https://www.linkedin.com/in/rohandhupelia",
        twitter: "https://twitter.com/rohandhupelia",

        // content: "Some example content"
    },
    {
        name: 'Jess Flanagan',
        title: 'Head of Engineering/Data Architecture',
        avatar: "./images/committee/jessica.jpeg",
        company: "Deckard Technologies",
        linkedin: "https://www.linkedin.com/in/jessica-m-flanagan/",
        twitter: "https://twitter.com/JessMFlan",
        // content: "Some example content"
    },
    {
        name: 'Greg Roodt',
        title: 'Software Engineer',
        avatar: "./images/committee/greg.jpeg",
        company: "Canva",
        linkedin: "https://www.linkedin.com/in/groodt/",
        twitter: "https://twitter.com/groodt",
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
                                title={
                                    <div>
                                        {item.name}
                                        {item.linkedin && <a href={item.linkedin}>
                                            <LinkedinOutlined style={{fontSize:20, float:'right', paddingRight:'10px'}}/>
                                        </a>}
                                        {item.twitter && <a href={item.twitter}>
                                            <TwitterOutlined style={{fontSize:20, float:'right', paddingRight:'10px'}}/>
                                        </a>}
                                    </div>
                                }
                            >
                                <Card.Meta
                                    avatar={
                                        <Avatar size={120} src={item.avatar} />
                                    }
                                    title={item.title}
                                    description={
                                        <div >
                                            <p>{item.company}</p>
                                        </div>
                                    }
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
                                title={
                                    <div>
                                        {item.name}
                                        {item.linkedin && <a href={item.linkedin} target="_blank">
                                            <LinkedinOutlined style={{fontSize:20, float:'right', paddingRight:'10px'}}/>
                                        </a>}
                                        {item.twitter && <a href={item.twitter} target="_blank">
                                            <TwitterOutlined style={{fontSize:20, float:'right', paddingRight:'10px'}}/>
                                        </a>}
                                    </div>
                                }
                            >
                                <Card.Meta
                                    avatar={
                                        <Avatar size={120} src={item.avatar} />
                                    }
                                    title={item.title}
                                    description={
                                        <div >
                                            <p>{item.company}</p>
                                        </div>
                                    }
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


import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'
import { List, Avatar, Card } from 'antd';

const data = [
    {
        name: 'Peter Hanssens',
        title: 'Some Title',
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "Some example content"
    },
    {
        name: 'Karen Davis',
        title: 'Some Title',
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "Some example content"
    },
    {
        name: 'Simon Aubury',
        title: 'Some Title',
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "Some example content"
    },
    {
        name: 'Leo Hoare',
        title: 'Some Title',
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "Some example content"
    },
    {
        name: 'Katie Peterson',
        title: 'Some Title',
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "Some example content"
    },
    {
        name: 'Francisco Liwa',
        title: 'Some Title',
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "Some example content"
    }
  ];

export default class Organisers extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper title="Organisers">
                    <List
                        grid={{
                        gutter: 16,
                        sm: 1,
                        md: 1,
                        lg: 2,
                        xl: 2,
                        xxl: 3
                        }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <Card 
                                hoverable 
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
        )
    }
}


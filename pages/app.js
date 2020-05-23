import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/navbar'
import home from './tabs/home'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.state = {
            current: 'Home'
        };
    }
  
    /* F*/
    handleNavigation = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    renderTab(){
        const pages = {
            'Home': home
        }
        return React.createElement(pages[this.state.current], {})
    }


    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <Layout className="layout">
                <Header theme="light" >
                    <Navbar
                        theme="dark"
                        className="bg-white-500" 
                        handleNavigation={this.handleNavigation} 
                        current={this.current} 
                    />
                </Header>
                <Content style={{ padding: '0 50px', backgroundColour: "white" }}>
                    {this.renderTab()}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}


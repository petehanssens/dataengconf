import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/navbar'

/* tabs */ 
import home from './tabs/home'
import organisers from './tabs/organisers'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.state = {
            current: 'Home'
        };
        this.pages = {
            'Home': home,
            'Organisers': organisers
        }
    }
  
    handleNavigation = e => {
        console.log('click ', e);
        if (e.key in this.pages) {
            this.setState({
                current: e.key,
            });
        }
    };

    renderTab(){
        return React.createElement(this.pages[this.state.current])
    }


    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <Layout className="layout" style={{minHeight:'100vh'}}>
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
                <Footer style={{ textAlign: 'center' }}>Footer blah blah</Footer>
            </Layout>
        )
    }
}


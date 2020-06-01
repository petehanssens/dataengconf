import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/navbar'
import FooterClass from '../components/footer'

/* tabs */ 
import Home from './tabs/home'
import Organisers from './tabs/organisers'
import CodeOfConduct from './tabs/code_of_conduct'
import ContactUs from './tabs/contact_us'



export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.state = {
            current: 'Home'
        };
        this.pages = {
            'Home': Home,
            'Organisers': Organisers,
            'CodeOfConduct': CodeOfConduct,
            'ContactUs': ContactUs
        }
    }
  
    handleNavigation = e => {
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
                <Content style={{ backgroundColour: "white" }}>
                    {this.renderTab()}
                </Content>
                <Footer style={{ textAlign: 'center' }}><FooterClass/></Footer>
            </Layout>
        )
    }
}


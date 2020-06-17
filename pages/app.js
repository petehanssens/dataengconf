import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/navbar'
import FooterClass from '../components/footer'
import Head from 'next/head';

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
                <Head>
                    <title>DataEngBytes - DataEngConfAU</title>
                    <meta property="og:title" content="DataEngBytes - DataEngConfAU" key="title" />
                    <meta name="description" content="DataEngBytes, a community conference hosted on the 20th to the 21st of August!" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="DataEngBytes" />
                    <meta property="og:url" content="https://dataengconf.com.au" />  
                    <meta name="twitter:card" content="summary" /> 
                    <meta name="twitter:title" content="DataEngBytes" />
                    <meta name="twitter:site" content="https://dataengconf.com.au" />
                    <meta name="twitter:creator" content="DataEngConfAU" />
                    <link rel="icon" type="image/png" href="/public/favicon.ico" />
                    <link rel="apple-touch-icon" href="/public/favicon.ico" />
                    <link rel="stylesheet" href="" />
                    <meta property="og:image" content="" />  
                    <meta name="twitter:image" content="" />   
                </Head>
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


import PropTypes from "prop-types";
import React from 'react';
import Navbar from '../components/navbar'
import FooterClass from '../components/footer'
import Head from 'next/head';
import Link from 'next/link';
import PageWrapper from './page_wrapper'

function Layout ({ children }) {
  
    return (
        <>
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

        <header className="flex items-center justify-between px-16 py-3 site-page-header-ghost-wrapper">
          <div>
            <Link 
              href='/'
            >
          <span className="font-semibold text-xl tracking-tight text-purple-500">DataEngBytes</span>
          </Link>
          </div>
          {/* <div>
            <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none lg:hidden">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div> */}
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 rounded hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            <div className=" px-3 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    Code of Conduct
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    Contact Us
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
                    Tickets
                </a>
                </div>
            </div>
            </div>
        </header>
        <PageWrapper>
            <main >
                {children}
            </main>
        </PageWrapper>
        <FooterClass />
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
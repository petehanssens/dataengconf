import PropTypes from "prop-types";
import React from 'react';
import Navbar from './navbar'
import FooterClass from './footer'
import Head from 'next/head';

function Layout ({ children }) {

    return (
        <>
        <Navbar />
            <body className="">
                <main className="w-full container mx-auto p-12">
                    {children}
                </main>
            </body>
        <FooterClass />
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

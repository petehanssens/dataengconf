import PropTypes from "prop-types";
import React from 'react';
import Navbar from './navbar'
import FooterClass from './footer'

function Layout (props) {
// console.log('layout props: ', props)
    return (
      <>
        <Navbar signedInUser={props.signedInUser}/>
            <main className="w-full container mx-auto p-12">
              {props.children}
            </main>
        <FooterClass />
      </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

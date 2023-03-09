import PropTypes from "prop-types";
import React from 'react';
import Navbar from './navbar'
import FooterClass from './footer'
import Container from "./container";

function Layout (props) {
// console.log('layout props: ', props)
    return (
      <>
      <Container>
        <Navbar signedInUser={props.signedInUser}/>
            <main className="w-full container max-w-screen-2xl mx-auto bg-dark-black-blue">
              {props.children}
            </main>
        <FooterClass />
      </Container>
      </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

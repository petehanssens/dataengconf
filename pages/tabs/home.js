import React, { Component } from 'react';
import CFP from '../../components/cfp'
import COC from '../../components/coc'
import Contact from '../../components/contact'
import Organisers from '../../components/organisers'
import Platform from '../../components/platform'
import Sponsors from '../../components/sponsors'
import Tickets from '../../components/tickets'
import PageWrapper from '../../components/page_wrapper'

export default class home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper title="organisers" >
                <CFP />
                <COC />
                <Contact />
                <Organisers />
                <Platform />
                <Sponsors />
                <Tickets />
            </PageWrapper>
        )
    }
}


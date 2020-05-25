import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'
import { Typography  } from 'antd';

export default class CodeOfConduct extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper title="Code of Conduct">
                <Typography.Paragraph style={{fontSize: '20px'}}>
                    Our conference is dedicated to providing a welcoming experience for everyone, regardless of how one identifies. We do not tolerate harassment or discrimination of anyone in any form. Inappropriate language and imagery is not permitted for any conference venue, including talks, workshops, parties, twitter and other online media.
                </Typography.Paragraph>
            </PageWrapper>
        )
    }
}


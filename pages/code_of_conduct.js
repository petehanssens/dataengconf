import React from 'react';
import PageWrapper from '/components/page_wrapper'
import { Typography  } from 'antd';

export default function Organisers() {
        return (
            <PageWrapper title="Code of Conduct">


                <Typography.Paragraph style={{fontSize: '20px'}}>
                    The DataEngBytes Conference is dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organisers.
                </Typography.Paragraph>
                <Typography.Paragraph style={{fontSize: '20px'}}>
                    Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Sexual language and imagery is not appropriate for any DataEngConfAU event or communication channel.
                </Typography.Paragraph>
                <Typography.Paragraph style={{fontSize: '20px'}}>
                    Community members are not to use DataEngBytes Conference or communication channels in order to proposition any other member.
                    Community members asked to stop any harassing behaviour are expected to comply immediately. Sponsors and presenters are also subject to the anti-harassment policy.
                </Typography.Paragraph>
                <Typography.Paragraph style={{fontSize: '20px'}}>
                    If a community member engages in harassing behaviour, the organisers may take any action they deem appropriate, including warning the offender or expulsion from the community. If you are being harassed please contact a organiser immediately. If you notice that someone else is being harassed please intercede or contact a organiser immediately. If you have any other concerns, please contact a organiser.
                </Typography.Paragraph>
            </PageWrapper>
        )
}


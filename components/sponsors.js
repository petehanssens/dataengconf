import { Row, Col, Divider} from 'antd';

const sponsors = [
    {
        name: '1',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '2',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '3',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '4',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '5',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '6',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '7',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '8',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '9',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '10',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '11',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        name: '12',
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    }
  ];

export default () => (
    <div>
        <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Sponsors</p>
        <p className="text-2xl">A huge thank you to our sponsors & partners.</p>
        <Row>
        {
            sponsors.map(sponsor => (
                <Col key={sponsor.name} flex="1 1 150px">
                    <div>
                        <div style={{margin:'auto', maxWidth: '150px'}}>
                            <img src={sponsor.logo}/>
                        </div>
                    </div>
                    
                </Col>
            ))
        }
        </Row>
    </div>
    
)
import { Row, Col, Divider} from 'antd';

const sponsors = [
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        logo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    }
  ];

export default () => (
    <div>
        <p style={{color: 'rgba(0,0,0,0.65)'}} class="text-4xl">Sponsors</p>
        <p class="text-2xl">A huge thank you to our sponsors & partners.</p>
        <Row>
        {
            sponsors.map(sponsor => (
                <Col flex="1 1 150px">
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
import { List } from 'antd';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}


const sponsors = [
    {
        name: 'cloudshuttle',
        logo: "./images/sponsors/cloudshuttle.png",
    },
    {
        name: 'mongodb',
        logo: "./images/sponsors/mongoDB_transparent.png",
    },
    {
        name: 'fivetran',
        logo: "./images/sponsors/fivetran.png",
    },
    {
        name: 'snowflake',
        logo: "./images/sponsors/snowflake.png",
    },
    {
        name: 'yow',
        logo: "./images/sponsors/yow.png",
    },
  ];

export default () => (
    <div>
        <p style={{color: 'rgba(0,0,0,0.65)'}} className="text-4xl">Sponsors</p>
        <p className="text-2xl">A huge thank you to our awesome sponsors & partners.</p>
        <List
            grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3
            }}
            dataSource={shuffleArray(sponsors)}
            renderItem={sponsor => (
            <List.Item>
                <div class="sponsor-image" 
                    style={{
                        backgroundPosition:'center center', 
                        backgroundImage: `url(${sponsor.logo})`, 
                        backgroundSize:'contain', 
                        backgroundRepeat:'no-repeat',
                        height:'250px',
                        margin:'0 10px 0 10px',
                        maxWidth:'300px'
                    }}
                />
            </List.Item>
            )}
        />
    </div>
)
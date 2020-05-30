import { Menu } from 'antd';
import { Tag } from 'antd';

const { SubMenu } = Menu;

export default class Navbar extends React.Component {
  state = {
    current: 'mail',
  };



  render() {
    return (
      <Menu onClick={this.props.handleNavigation} selectedKeys={this.props.current} mode="horizontal" >
        <Menu.Item key="Home" >
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight text-purple-500">DataEngBytes</span>
            </div>
        </Menu.Item>
        <Menu.Item key="Organisers">Organisers</Menu.Item>
        <SubMenu title="Info">
            <Menu.Item key="CodeOfConduct">Code Of Conduct</Menu.Item>
            <Menu.Item key="ContactUs">Contact Us</Menu.Item>
        </SubMenu>
        <Menu.Item key="CFP">
          <a href="https://sessionize.com/dataengconfau-bites" target="_blank" rel="noopener noreferrer">
            Call For Papers
          </a>
        </Menu.Item>
        <Menu.Item key="Tickets">
            {/* <Tag color="volcano"> */}
              <a className="font-bold" href="https://google.com" target="_blank" rel="noopener noreferrer">
                  Tickets
              </a>
            {/* </Tag> */}
        </Menu.Item>
      </Menu>
    );
  }
}

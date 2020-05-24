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
                <span className="font-semibold text-xl tracking-tight text-purple-500">DataEngBites</span>
            </div>
        </Menu.Item>

        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        <SubMenu title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="Organisers">
            Organisers
        </Menu.Item>
        <Menu.Item key="CFP">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            Call For Papers
          </a>
        </Menu.Item>
        <Menu.Item key="Tickets">
            <Tag color="volcano">
                <a className="font-bold" href="https://google.com" target="_blank" rel="noopener noreferrer">
                    Tickets
                </a>
            </Tag>
        </Menu.Item>
      </Menu>
    );
  }
}

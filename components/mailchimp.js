import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import queryString from 'query-string';
import jsonp from 'jsonp';


export default class MailChimp extends Component {
  state = { visible: false, email: '' };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // CONFIRM THIS WORK
    const formData = {
        EMAIL: this.state.email,
    };
    jsonp(`https://dataengconf.us19.list-manage.com/subscribe/post-json?u=7e8b6dd9f9397144daffb1870&amp;id=dbc1e3b4ec&${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
      console.log('err:', err);
      console.log('data:', data);
    });

    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleEmailChange = e => {
      this.setState({
          email: e.target.value,
      })
  }

  render() {
    return (
      <div>
        <Button onClick={this.showModal} style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>
          Register Your Interest
        </Button>
        <Modal
          title="Register Your Interest!"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <Input onChange={this.handleEmailChange} placeholder="subscribe@example.com" allowClear prefix={<UserOutlined />}/>
        </Modal>
      </div>
    );
  }
}
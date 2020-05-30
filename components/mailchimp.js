import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';

import { UserOutlined } from '@ant-design/icons';

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
    fetch('https://dataengconf.us19.list-manage.com/subscribe/post-json?u=7e8b6dd9f9397144daffb1870&amp;id=dbc1e3b4ec', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .catch((error) => {
        console.log(error)
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
        <Button onClick={this.showModal}>
          Register Your Interst
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
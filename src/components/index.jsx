import React, { Component } from 'react';
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

class Child extends Component {
  handleClick = () => {
    this.inputRef.focus();
  }
  render() {
    return (
      <WingBlank>
        <NavBar>登陆界面</NavBar>
        <List>
          <InputItem
            clear
            placeholder="账号···"
            ref={el => this.inputRef = el}
          >账号</InputItem>
          <InputItem
            clear
            type="password"
            placeholder="密码···"
            ref={el => this.inputRef = el}
          >密码</InputItem>
          <List.Item>
            <Button onClick={this.handleClick}>登录</Button>
          </List.Item>
        </List>
      </WingBlank>
    )
  }
}

export default Child;

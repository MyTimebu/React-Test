import React, { Component } from 'react';
import { NavBar, WingBlank, List, InputItem, Button, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import axios from '../http'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      pwd: ''
    }
  }

  names = (key,val) =>{
    if (key === 'username') {
      this.setState({
        username: val,
      })
    } else {
      this.setState({
        pwd: val,
      })
    }
  }

  handleClick = async() => {
    const { data, meta:{status,msg} } = await axios.post('/users/login',{
      uname :this.state.username,
      pwd: this.state.pwd
    })
    console.log(data,status,msg)
    if (status === 200) {
      localStorage.setItem('token',data.token)
      const { history } = this.props
      history.push('/')
      Toast.success(msg, 1);
    }else{
      Toast.fail(msg, 3)
    }
  }

  render() {
    return (
      <WingBlank>
        <NavBar>登陆界面</NavBar>
        <List>
          <InputItem
            clear
            placeholder="账号···"
            value = {this.state.username}
            onChange = {val=>{
              this.names('username',val)
            }}
          >账号</InputItem>
          <InputItem
            clear
            type="password"
            placeholder="密码···"
            value = {this.state.pwd}
            onChange = {val=>{
              this.names('pwd',val)
            }}
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

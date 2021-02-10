//登录
import React, { Component, createRef } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { withRouter, Redirect } from 'react-router-dom'
import axios from '@/http'
class login extends Component {
  constructor(props) {
    super(props)
    this.username = createRef()
    this.password = createRef()
  }
  state = {
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    tailLayout: {
      wrapperCol: { offset: 8, span: 16 },
    },
  }
  render() {
    return (
      <>
        <Form
          style={{ width: '400px' }}
          {...this.state.layout}
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input ref={this.username} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password ref={this.password} />
          </Form.Item>

          <Form.Item
            {...this.state.tailLayout}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>记住账号密码(仅此记录到历史记录中)</Checkbox>
          </Form.Item>

          <Form.Item {...this.state.tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.login.bind(this)}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </>
    )
  }
  login() {
    let username = this.username.current.state.value
    let password = this.password.current.state.value
    const data = new Date()
    let newData = data.getTime() + 60 * 1000 * 60
    data.setTime(newData)

    axios.post('/setIn/login', { username, pwd: password }).then((ret) => {
      if (ret.error === 0) {
        //登录成功
        document.cookie = `token=${ret.token};expires=${data};path=/`
        this.props.history.push('/classroom')

        window.location.reload()
      } else {
        console.log('账号密码错误')
      }
    })
  }
}

export default withRouter(login)

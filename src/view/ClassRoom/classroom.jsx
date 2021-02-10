import React, { Component } from 'react'
import { Menu, Layout, Card } from 'antd'
import axios from '@/http'
import MenuItem from 'antd/lib/menu/MenuItem'
import { HomeFilled } from '@ant-design/icons'
import { Redirect } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
class classroom extends Component {
  state = {
    menu: {},
    collapsed: false,
    icon: [],
    username: 'XXXX',
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <div
              style={{
                height: '50px',
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: '20px',
                color: '#fff',
              }}
            >
              系统后台管理系统
            </div>
            {Object.keys(this.state.menu).map((val, key) => {
              return (
                //==================================//此处"val"为变量所以得用[]
                <SubMenu
                  key={val}
                  title={this.state.menu[val].title}
                  icon={<HomeFilled />}
                >
                  {this.state.menu[val].children.map((val) => {
                    return <MenuItem key={val.id}>{val.title}</MenuItem>
                  })}
                </SubMenu>
              )
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: '#fff', borderBottom: '1px solid #ccc' }}
          >
            欢迎<span style={{ color: '#ccc' }}>{this.state.username}</span>{' '}
            上次登录XXXX
          </Header>
          <Content>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Content>
          <Footer>底部</Footer>
        </Layout>
        <Redirect from="/" to="/classroom"></Redirect>
      </Layout>
    )
  }
  componentDidMount() {
    axios.get('/api/menu').then((ret) => {
      this.setState((state) => {
        return {
          menu: ret,
        }
      })
    })
    axios.get('/setIn/info').then((ret) => {
      if (ret.error === 0) {
        //获取用户信息成功
        this.setState(() => {
          return {
            username: ret.username,
          }
        })
      }
    })
  }
}

export default classroom

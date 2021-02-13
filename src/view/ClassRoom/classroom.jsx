import React, { Component } from 'react'
import { Menu, Layout } from 'antd'
import axios from '@/http'
import MenuItem from 'antd/lib/menu/MenuItem'
import { HomeFilled } from '@ant-design/icons'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import component from '@/routeComponent'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
class classroom extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    menu: {},
    icon: [],
    username: 'XXXX',
    message: [],
    cardLoading: true,
  }

  getCookie() {
    let cookie = document.cookie.split('; ')
    let obj = {}
    cookie.forEach((val, key) => {
      let arr = val.split('=')
      obj[arr[0]] = arr[1]
    })

    return obj
  }
  render() {
    let { headerHeight } = this.state
    let arr = []
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
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
                    return (
                      <MenuItem
                        key={val.id}
                        onClick={this.handler.bind(this, val.path)}
                      >
                        {val.title}
                      </MenuItem>
                    )
                  })}
                </SubMenu>
              )
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              borderBottom: '1px solid #ccc',
              position: 'fixed',
              width: '100%',
              zIndex: 100,
            }}
          >
            欢迎<span style={{ color: '#ccc' }}>{this.state.username}</span>{' '}
            本次登录{this.getCookie().data}
          </Header>

          <Content style={{ marginTop: headerHeight }}>
            <Switch>
              {Object.keys(this.state.menu).map((val, key) => {
                return this.state.menu[val].children.map((val2, key2) => {
                  let path = val2.path.substr(1)
                  return (
                    <Route
                      key={key}
                      path={val2.path}
                      component={component[path]}
                    ></Route>
                  )
                })
              })}
              <Redirect from="/" to="/classroom"></Redirect>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            版权所有 © 2020 符号摊位管理系统，并保留所有权利。
          </Footer>
        </Layout>
      </Layout>
    )
  }
  componentDidMount() {
    let headerHeight = document.querySelector('header').offsetHeight - 0
    axios.get('/api/menu').then((ret) => {
      this.setState((state) => {
        return {
          menu: ret,
          headerHeight: headerHeight,
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
    axios.get('/api/classroom').then((ret) => {
      this.setState((state) => {
        return {
          message: [...state.message, ret],
          cardLoading: false,
        }
      })
    })
  }
  handler(path) {
    this.props.history.push({
      pathname: path,
    })
  }
}

function a(state) {
  return state
}
function b(dispatch) {
  return {}
}

export default withRouter(connect(a, b)(classroom))

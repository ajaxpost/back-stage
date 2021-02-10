import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import '@/App.less'
//
import ClassRoom from '@/view/ClassRoom/classroom'
import Login from '@/view/login/login'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: this.getCookie().token,
    }
  }
  render() {
    return (
      <>
        {this.state.showLogin ? (
          <div>
            <Route path="/classroom" component={ClassRoom}></Route>
          </div>
        ) : (
          <Route path="/login">
            <Login></Login>
          </Route>
        )}
      </>
    )
  }
  //用于获取cookie的方法
  getCookie() {
    let cookie = document.cookie.split(';')
    let obj = {}
    cookie.forEach((val, key) => {
      let arr = val.split('=')
      obj[arr[0]] = arr[1]
    })
    return obj
  }
  componentDidMount() {
    if (!this.state.showLogin) {
      this.props.history.push('/login')
    } else {
      this.props.history.push('/classroom')
    }
  }
}

export default withRouter(App)

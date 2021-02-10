import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '@/App.less'
//
import ClassRoom from '@/view/ClassRoom/classroom'
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ClassRoom}></Route>
      </div>
    )
  }
}

export default App

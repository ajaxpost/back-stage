import React, { Component } from 'react'
import axios from '@/http'
import { Card } from 'antd'
class index extends Component {
  state = {
    message: [],
    cardLoading: true,
  }
  render() {
    return (
      <>
        {this.state.message.map((val, key) => {
          return (
            <Card
              style={{ margin: '10px 20px' }}
              bordered={false}
              headStyle={{ fontWeight: 'bold' }}
              key={key}
              title={val.sub1.msg}
              loading={this.state.cardLoading}
            >
              <div style={{ display: 'flex' }}>
                {val.sub1.hanzi.map((val, key) => {
                  return (
                    <div style={{ margin: '0 10px' }} key={key}>
                      {val}
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex' }}>
                {val.sub1.message.map((val, key) => {
                  return (
                    <div
                      key={key}
                      style={{
                        width: '59px',
                        textAlign: 'center',
                      }}
                    >
                      {val}
                    </div>
                  )
                })}
              </div>
            </Card>
          )
        })}
      </>
    )
  }
  componentDidMount() {
    axios.get('/api/classroom').then((ret) => {
      this.setState((state) => {
        return {
          message: [...state.message, ret],
          cardLoading: false,
        }
      })
    })
  }
}

export default index

import React, { Component } from 'react'
import Count from './containers/Count'
// 引入容器组件 而容器组件和UI组件联系起来了
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}></Count>
      </div>
    )
  }
}

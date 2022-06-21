import React, { Component } from 'react'

export default class News extends Component {
  render() {
    return (
        <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
//   注意结构，变化的部分写在子组件
//共同的部分写在父组件
}

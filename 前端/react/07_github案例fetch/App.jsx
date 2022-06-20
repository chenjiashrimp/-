import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
 
  // 状态初始化
 
  render() {
    return (
      <div className="container">
           <Search />
           <List />
         </div>
    )
  }
}

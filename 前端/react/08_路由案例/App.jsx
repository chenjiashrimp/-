import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
// 路由组件（有路由器发送的三个独特属性）和一般组件（自己写的组件标签） 写法的不同
import {NavLink,Route} from 'react-router-dom'
// 涉及组件太多采用分别暴露

export default class App extends Component {
 
  // 状态初始化
 
  render() {
    return (
      <div>
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}
            {/* two steps:1. click and change path 2. can test the change of path*/}

            {/* <BrowserRouter> 不要在这里包裹 整个程序必须要由一个路由器管理 多个没办法实现数据交互 */}
            {/* 编写路由链接 */}
            <NavLink activeClassName='list-style' className='list-group-item' to='/about'>About</NavLink>
            {/* 点击后加什么样式 否则有个默认样式*/}
            <NavLink activeClassName='list-style' className='list-group-item' to='/home'>Home</NavLink>

            {/* link 转变为 a 浏览器才能识别 */}
            {/* 注意 'to' 里面写啥 */}
            {/* </BrowserRouter> */}

          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 说清楚映射关系 */}
              <Route path='/about' component={About}/>
              <Route path='/home' component={Home}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

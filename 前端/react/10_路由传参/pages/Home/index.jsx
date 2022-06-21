import React, { Component } from 'react'
import Messages from './Messages'
import News from './News'
import { Route,Redirect,Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
class Home extends Component {
  render() {
    return (
        <div>
         
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                    <MyNavLink to='/home/news'>News</MyNavLink>
                  </li>
                  <li>
                    {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                    <MyNavLink to='/home/messages'>Messages</MyNavLink>
                    {/* 有两个路由器 其中app的路由器先注册
                    检测时从第一个路由器先开始 第一级在home匹配成功，才能匹配接下来的news and messages
                    所以后面的路由 to path要把前几级写好 */}
                  </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/messages' component={Messages}></Route>
                    <Redirect to='/home/news'></Redirect>
                </Switch>
              </div>
            </div>
    )
  }
}
export default withRouter(Home)
// 只能一个default
//加工一般组件 使其拥有路由组件拥有的API
// 十二、编程式路由导航…
// 十三、BrowserRouter与HashRouter的区别
// 1.底层原理不一样:
// BrowserRouter使用的是H5的historyAPI（不是react的history 那是经过二次封装的），不兼容IE9及以下版本。 HashRouter使用的是URL的哈希值。
// 2 path表现形式不一样
// BrowserRouter的路径中没有#，例如:localhost:3000/demo/test HashRouter的路径包含#，例如:localhost:3000/#/demo/test
// 3.刷新后对路由state参数的影响
// (1).BrowserRouter没有任何影响，因为state保存在history对象中。(2)HashRouter刷新后会导致路由state参数的丢失。
// 4.备注:HashRouter可以用于解决一些路径错误相关的问题。
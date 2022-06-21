import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
// 路由组件（有路由器发送的三个独特属性）和一般组件（自己写的组件标签） 写法的不同
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
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
           
            {/* 点击后加什么样式 否则有个默认样式*/}

            
            
            {/* <NavLink activeClassName='active' className='list-group-item' to='/about'>About</NavLink>
            <NavLink activeClassName='active' className='list-group-item' to='/home'>Home</NavLink> */}
            {/* 属性太多，数量一多写起来麻烦，考虑封装 */}

            <MyNavLink to='/about'>About</MyNavLink>
            <MyNavLink to='/home'>Home</MyNavLink>
            {/* 标签体内容是一个特殊的标签属性 在props找得到，不过key已经帮我们设定好了，名字为children */}


            {/* link 转变为 a 浏览器才能识别 */}
            {/* 注意 'to' 里面写啥 */}
            {/* </BrowserRouter> */}

          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 说清楚映射关系 */}
              <Switch>
                {/* Switch 路由匹配到组件后就停止匹配，以提高效率
                这也意味着我们不要把一个路由匹配多个组件而是考虑把多个组件合成为一个 只匹配一次 */}
              {/* <Route exact={true} path='/about' component={About}/>
              <Route exact path='/home' component={Home}/> */}
              {/* 精准匹配 to path 必须完全一致 
              默认：模糊匹配
              to /home/a/b path /home  yes
                /home           /home/a/b no
                /a/home/b       /home     no
                path要求的必须全有而且顺序要对，匹配不对就不接下去匹配了
                分成三部分 home a b  一个一个配 */}

              {/* <Route path='atguigu/about' component={About}/> 
              二级路由 刚开始没问题 刷新之后会丢失bootstrap样式
              localhost:3000 是脚手架内置的服务器，其根路径为public
              如果请求的url不存在，那么会自动返回public里的index.html文件
              刷新之后，申请引入css样式时会把/atguigu作为路径的一部分（可实际正确的css路径不含）
              因为无法返回正确的css文件而是返回index.html 并且status不会显示404，而是访问成功*/}

              {/* soulution:
              <link rel="stylesheet" href="./css/bootstrap.css">
              1.去掉. 
              2. "%PUBLIC_URL%/css/bootstrap.css 变为绝对路径
              3. 改成HashRoute 地址增加#*/}

              <Route  path='/about' component={About}/>
              <Route  path='/home' component={Home}/>
              
              <Redirect to='/about'/>
              {/* 重定向 兜底 都没匹配 就去/about
              用于一开始默认选中 */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

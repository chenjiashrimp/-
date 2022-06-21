import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'
export default class Messages extends Component {
  state={messageArr:[
    {id:(1),title:'message001'},
    {id:(2),title:'message002'},
    {id:(3),title:'message003'}
  ]}
  //编程式路由转移 不用List也可以
  //基于history的
  //history就可以直接修改路径 输出查看history内部的方法
  replaceShow=(id,title)=>{
    this.props.history.replace(`/home/messages/detail/${id}/${title}`)
    // 三种传递参数的方法 所有地方的格式结构要一致
  }
  pushShow=(id,title)=>{
    this.props.history.push(`/home/messages/detail/${id}/${title}`)
  }

  forward=()=>{
    this.props.history.goForward()
  }
  back=()=>{
    this.props.history.goBack()
  }
  go=()=>{
    this.props.history.go(2)
    //负数就是后退
  }
  render() {
    const {messageArr}=this.state
    return (
        <div>
          {
            messageArr.map((messageObj)=>{
              return (
                <li key={messageObj.id}>
                <Link to={`/home/messages/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;
                {/* 通过路由组件传递params参数 模板字符串 js语句需要加{} */}

                {/* <Link to={`/home/messages/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}

                {/* <Link replace to={{pathname:'/home/messages/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                {/* 默认push模式 */}
                {/* 地址栏不会显示 */}
                {/* 而且刷新也不会掉数据 通过历史记录 */}


                <button onClick={()=>{this.replaceShow(messageObj.id,messageObj.title)}}>replace</button>
                <button onClick={()=>{this.pushShow(messageObj.id,messageObj.title)}}>push</button>
              </li>
              )
            })
          }
        <hr />
        
        <Route path='/home/messages/detail/:id/:title' component={Detail}/>
        {/* 注意写法 需要接受数据 */}

        {/* <Route path='/home/messages/detail' component={Detail}/> */}
        {/* 传递search参数不需要写接收数据的内容 */}

        {/* 传递state参数也不需要 */}

        <button onClick={this.forward}>forward</button>
        <button onClick={this.back}>back</button>
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}

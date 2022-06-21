import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
        <NavLink activeClassName='active' className='list-group-item' {...this.props}/>
        // 标签体内容也在props里面被继承了
        //标签体写一个还是两个都可以 关键是记得闭合
        //props经过了两次传递 先给MyNavLink，再给MyLink，注意props传递的化简写法
    )
  }
}

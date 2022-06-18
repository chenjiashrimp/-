import './index.css'

import React, { Component } from 'react'

export default class Item extends Component {
  state={mouse:false}

  //用于鼠标移入移出的函数
  handleMouse=(flag)=>{
    return ()=>{
      //注意高阶函数
      this.setState({mouse:flag})
    }
  }

  //用于鼠标勾选更新状态
  handleCheck=(id)=>{
    return (event)=>{
      // ruturn 的函数才是事件，event应该写在这里
      this.props.updateTodo(id,event.target.checked)
    }
  }
  
  //delete todo
  handleDelete=(id)=>{
    const {deleteTodo}=this.props
    if(window.confirm('确认要删除？'))
        deleteTodo(id)
  }

  render() {
    const {id,name,done}=this.props
    const {mouse}=this.state
    // console.log(this.props)
    return (
        <li style={{background:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          {/* 配合checked改变添加onChange函数 */}
          {/* different from 'checked' 只影响最初的 checked则是一直写死 */}
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}

import './index.css'


import React, { Component } from 'react'

export default class Footer extends Component {
  allHandleCheck=(event)=>{
    const {checkAllTodo,todos}=this.props
    
    checkAllTodo(event.target.checked)
  }
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {todos}=this.props
    const todoCount=todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
    // pre指的是上次带哦用reduce所返回的值
    const total=todos.length
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox"  onChange={this.allHandleCheck} checked={total===todoCount&&todos.length!==0}/>
          {/* defaultChecked 只管一开始的状态 意思是第一次改变状态后这句就废了 相当于没写过 */}
        </label>
        <span>
          <span>已完成{todoCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}

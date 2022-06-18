import './index.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {

  static propTypes={
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  }

  render() {
    const {todos,updateTodo,deleteTodo}=this.props
    // console.log(this.props)
    //一定要注意不要多写或者少写 this 这里已经化简过了
    //注意名称统一，在父组件已经写死了
    return (
        <ul className="todo-main">
        {
            todos.map((todo)=>{
                return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                //简写 脚手架会提醒设置unique key
            })
        }
      </ul>
    )
  }
}

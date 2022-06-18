import './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Header extends Component {
    handleKeyUp=(event)=>{
        //绑定的事件源和操纵的元素一致，所以不需要ref event是绑定的事件源
        const {keyCode,target}=event
        if(keyCode!=13) return


        if(target.value.trim()==''){
            //把空格去掉再判断
            alert('你未输入')
            return
        }

        console.log(target.value)
        const {todos}=this.props
        const todoObj={id:(todos.length+1),name:target.value,done:false}
        console.log(todoObj)
        const {addTodo}=this.props
        addTodo(todoObj)

        target.value=''
        //clear the content
    }
    //也就是说两个组件 子组件的props有一个函数 而父组件的类原型也有一个函数
    //这两个函数类似于“浅复制” 即数据都是共通的 就跟同一个函数一样
    //并且this、state 依然是指父组件的，也没有变成子组件的

    //process: input=> call the function =>send the obj(not only the name)=>change App's state=>call the render
    //and update the web

    //对接收prop进行限制 类型 必要性
    static propTypes={
      addTodo:PropTypes.func.isRequired
    }


  render() {
   
    return (
        <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
         </div>
    )
  }
}

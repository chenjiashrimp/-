import React, { Component } from 'react'
import './App.css'
 
import Header  from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
    state={todos:[{id:1,name:'eating',done:false},
                  {id:2,name:'sleeping',done:false},
                  {id:3,name:'coding',done:false}]}
                //   注意对象的一些基础属性 比如id 大多情况都要有虽然不直接显示再页面


    //一步一步来，先不管输入框传递数据那一部分
    //函数用于header 和app 的数据传输
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({todos:newTodos})
    }
    //总结 如何把数据从子组件传到父组件
    //父组件给子组件一个函数（加到props里面去）子组件需要传递数据时调用这个函数即可

    //爷孙组件的数据传输
    //这类函数写的是：数据传到了怎么处理数据。所以写的时候不用管数据传输，当作数据已经送到了
    updateTodo=(id,done)=>{
      const {todos}=this.state
      const newTodos=todos.map((todoObj)=>{
        if(todoObj.id===id) return  {...todoObj,done:done}
        // 清楚map函数的原理 每次返回一个数组元素 最后是得到一个处理过的新数组
        else return todoObj
      })
      this.setState({todos:newTodos})
      console.log(newTodos)
    }

    //delete todo
    deleteTodo=(id)=>{
      const {todos}=this.state
      const newTodos=todos.filter((todoObj)=>{
        return todoObj.id!=id
      })
      this.setState({todos:newTodos})
      console.log(newTodos)
    }

    checkAllTodo=(done)=>{
      const {todos}=this.state
      const newTodos=todos.map((todoObj)=>{
        return {...todoObj,done:done}
      })
      this.setState({todos:newTodos})
    }
    clearAllDone=()=>{
      const {todos}=this.state
      const newTodos=todos.filter((todoObj)=>{
        return todoObj.done===false
      })
      this.setState({todos:newTodos})
    }
  render() {
    const {todos}=this.state
    //const在render里面而不是外面
    return (
        <div className="todo-container">
        <div className="todo-wrap">
           <Header addTodo={this.addTodo}   todos={todos}/>
           <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
           {/* 相当于要传两次函数 */}
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
// 数据是从输入框输入的，但是list需要数据来显示 二者为兄弟组件无法直接传递数据 所以要用父组件作为过渡

//把html文件 转为react 关键在于如何划分 要学会隐藏内容这样方便看清结构 一些关键词要改style class。。。

//注意引用文件的书写

//css同理 启示我们要怎么写css文件 先写公共的，再一部分一部分写


// todoList案例相关知识点
// 1.拆分组件、实现静态组件，注意:className、style的写法
// 2.动态初始化列表，如何确定将数据放在哪个组件的state中?
// -某个组件使用:放在其自身的state中
// -某此组件使用:放在他们共同的父组件state中(官方称此操作为: 状态提升 
// 3.关于父子之间通信:
// 1【父组件】给【子组件】传递数据:通过props传递
// 2.【子组件】给【父组件】传递数据:通过props传递，要求父提前给子传递一个函数
// 4.注意defaultChecked 和checked的区别，类似的还有:defaultValue 和 value
// 5.状态在哪里，操作状态的方法就在哪里

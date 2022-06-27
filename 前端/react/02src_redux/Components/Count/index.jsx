import React, { Component } from 'react'
import store from '../../redux/store'//引入store
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
  //this.setState 该方法不仅会修改状态还能重新渲染页面
  //而redux的状态改变并不会自动重新渲染，因此需要检测redux内的状态改变并且手动渲染
  // componentDidMount(){
  //   //组件挂载时检测即可
  //   store.subscribe(()=>{
  //     this.setState({})
  //     //不修改状态，但还是会自动渲染
  //   }) 组件多了，这样写很麻烦
  //}
  increment=()=>{
    const {value}=this.selectNumber
    // store.dispatch({type:'increment',data:value*1})
    store.dispatch(createIncrementAction(value*1))
    //按照流程图的来，传递一个对象
  }
  decrement=()=>{
    const {value}=this.selectNumber
    // store.dispatch({type:'decrement',data:value*1})
    //按照流程图的来，传递一个对象
    store.dispatch(createDecrementAction(value*1))
  }
  incrementIfOdd=()=>{
    const {value}=this.selectNumber
    const count=store.getState()
    if(count%2!==0){
      // store.dispatch({type:'increment',data:value*1})
      store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync=()=>{
    const {value}=this.selectNumber
    const count=store.getState()
    // setTimeout(()=>{
    //   // store.dispatch({type:'increment',data:value*1})
    //   store.dispatch(createIncrementAction(value*1))
    // },500)
    store.dispatch(createIncrementAsyncAction(value*1,500))
    // 异步action 
    //五分钟后点菜上菜————点菜要求五分钟后上菜
  }






    // state={count:0}
    // increment=()=>{
    //     const {value}=this.selectNumber
    //     const {count}=this.state
    //     this.setState({count:count+value*1})
    //     // 不然变成字符串拼接了
    // }
    // decrement=()=>{
    //     const {value}=this.selectNumber
    //     const {count}=this.state
    //     this.setState({count:count-value*1})
    // }
    // incrementIfOdd=()=>{
    //     const {value}=this.selectNumber
    //     const {count}=this.state
    //     if(count%2!==0){
    //         this.setState({count:count+value*1})
    //     }
    // }
    // incrementAsync=()=>{
    //     const {value}=this.selectNumber
    //     const {count}=this.state
    //     setTimeout(()=>{
    //         this.setState({count:count+value*1})
    //     },500)
    // }
  render() {
    
    return (
      <div>
        {/* 一开始store调用reducer  */}
        {/* 读取状态 */}
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

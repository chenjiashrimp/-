//容器组件是一个桥梁 
//联系UI和redux————分别引入
//import countUI from '../../Components/Count'
// import store from '../../redux/store'不在这里引入 而是通过上一级传递
import { connect } from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
//容器组件不是人为构造的，该如何传递参数给UI组件？
//connect第一次调用传递两个函数 一个返回对象————redux的状态 一个返回操作状态的方法





import React, { Component } from 'react'



 class Count extends Component {
  
  increment=()=>{
    const {value}=this.selectNumber
    this.props.increment(value*1)
  }
  decrement=()=>{
    const {value}=this.selectNumber
    this.props.decrement(value*1)
    
  }
  incrementIfOdd=()=>{
    const {value}=this.selectNumber
    if(this.props.count%2!==0){
      this.props.increment(value*1)
    }
  }
  incrementAsync=()=>{
    const {value}=this.selectNumber
    this.props.incrementAsync(value*1,500)
  }






    
  render() {
    
    return (
      <div>
        {/* 一开始store调用reducer  */}
        {/* 读取状态 */}
        <h1>当前求和为：{this.props.count}</h1>
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
//可以合并容器组件和UI组件文件 不过最终只能暴露一个







function mapStateToProps(state){
    //对象key value 对应 props的key and value
    return {count:state}
    //redux的状态 内部封装也引入了 只需要写形参接入就行
}

function mapDispatchToProps(dispatch){
    // return {increment:(number)=>{
    //     dispatch({type:'increment',data:number})
    // }}
    return {increment:(number)=>{dispatch(createIncrementAction(number))},
             decrement:(number)=>{dispatch(createDecrementAction(number))},
            incrementAsync:(number,time)=>{dispatch(createIncrementAsyncAction(number,time))}}
            //import action_creator
}

const countContainer=connect(
    mapStateToProps,
    //mapDispatchToProps简写方式
    {
        //缺少dispatch 但是react-redux得到对象后能自动分发
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
        //具备key和构造action对象的函数（本身也会接受参数，所以并不会出现错误）就够了
    }
    )(Count)
//封装方式如此 通过connect连接 connect为高阶函数
//封装好了，这样写就能把东西传给UI组件

export default countContainer
//构造的组件最终要暴露交出去

//所以为什么看不到redux的方法和属性呢，其实还是内部封装好了，直接把其中的参数给我们了
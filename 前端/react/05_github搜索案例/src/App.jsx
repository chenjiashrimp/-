import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }
  // 状态初始化
  updateApp=(stateObj)=>{
    // return an obj
    this.setState(stateObj)  
  }
  // 对 saveUsers 进行了改造
  render() {
    return (
      <div className="container">
           <Search updateApp={this.updateApp}/>
           <List {...this.state}/>
         </div>
    )
  }
}

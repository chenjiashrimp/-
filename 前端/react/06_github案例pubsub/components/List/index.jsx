import './index.css'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class index extends Component {
    state={
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
      }
    componentDidMount(){
        PubSub.subscribe('message',(_,stateObj)=>{
            this.setState(stateObj)
            // 回调函数，不是自己调用的
        })
        // 刚开始渲染的时候就应该订阅
    }
  render() {
    const {users,isFirst,isLoading,err}=this.state
    return (
        <div className="row">
           {
           isFirst? <h1>please input keywords to search</h1>:
           isLoading? <h1>Loading...</h1> :
           err? <h1 style={{color:'red'}}>{err}</h1> :            
            //{}内部只能有表达式 所以不能用if  
            users.map((userObj)=>{
                return (
                    <div key={userObj.id} className="card">
                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                        <img alt='head_portrait' src={userObj.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{userObj.login}</p>
                    </div>
                )
            })
           }
      </div>
    )
  }
}

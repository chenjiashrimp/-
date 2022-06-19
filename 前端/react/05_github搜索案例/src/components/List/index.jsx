import './index.css'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const {isFirst,isLoading,err,users}=this.props
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

import React, { Component } from 'react'
import axios from 'axios'
export default class index extends Component {
    search=()=>{
        //1.获得输入数据 need ref (连续解构赋值+重命名)
        //2.发送请求
        const {keyWordElement:{value:keyword}}=this
        // console.log(keyword)
        this.props.updateApp({isFirst:false,isLoading:true})
        // 三种情况要调用该函数
        //1.send to what 2. how to send
        axios.get(`http://localhost:3000/api1/search/users11?q=${keyword}`).then(
            // 修改后一定要记得重新启动！!!
            // 发送给代理服务器
            response =>{
                this.props.updateApp({isLoading:false,users:response.data.items})
                // 不是所有状态都需要修改
                // 一定要看清楚数据的结构 了解我们要传递什么数据
                console.log(response.data)
            },
            error => {
                // console.log('error!',error)
                this.props.updateApp({isLoading:false,err:error.message})
            }
        )
    }
  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

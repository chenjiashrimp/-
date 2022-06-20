import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class index extends Component {
    search=async ()=>{
       
        const {keyWordElement:{value:keyword}}=this
        // console.log(keyword)
        PubSub.publish('message',{isFirst:false,isLoading:true})
       
        //这是一个promise实例（未优化）
        // fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
        // //fetch 为内置在react内部 它是基于 Promise 的
        // //注重分离（把过程细分）
        //     response =>{
        //         // PubSub.publish('message',{isLoading:false,users:response.data.items})
                
        //         console.log('success')
        //         // 并不会给你数据 因为这只能说明服务器联系成功了，数据未必传输到
        //         //修改为错误地址依然能够联系成功 正是联系成功才会返回404的状态
        //         //.json response的一个方法 返回一个promise实例 联系成功且数据传输成功 promise实例状态为成功并且有数据
        //         //联系成功但没办法获得数据 状态为失败 并且有失败原因
        //         return response.json()
        //     },
        //     error => {
        //         console.log('error!',error)
        //         // PubSub.publish('message',{err:error.message,isLoading:false})
        //         return new Promise(()=>{})
        //         // 联系失败 返回undefined 非promise 调用then返回成功，因此需要在这里中断
        //     }
        // ).then(
        //     response=>{console.log('get data success',response)},
        //     // 这时候就能看到数据了
        //     error =>{console.log('get data error',error)}
        //     // 也就是说第二个then的方法反映上一个promise实例的状态，也即数据传输有没有成功
        // )
        // //then 是promise实例的方法 由于第一个返回的还是promise实例 所以可以链式调用



        // fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
        //     //fetch 为内置在react内部 它是基于 Promise 的
        //     //注重分离（把过程细分）
        //         response =>{
        //             // PubSub.publish('message',{isLoading:false,users:response.data.items})
                    
        //             console.log('success')
                    
        //             return response.json()
        //         },
                
        //     ).then(
        //         response=>{console.log('get data success',response)},
        //         // 这时候就能看到数据了
                
        //     ).catch(
        //         error=>{console('error',error)}
        //         // 优化，到最后统一处理错误
        //     )


            // 发送请求 再次优化
            try {
                const response= await fetch(`http://localhost:3000/api1/search/users?q=${keyword}`)
                const data= await response.json()
                PubSub.publish('message',{isLoading:false,users:data.items})
            console.log('success',data)
            } catch(error){
                console.log('error')
                PubSub.publish('message',{err:error.message,isLoading:false})
                // await只能处理成功
            }
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

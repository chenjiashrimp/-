import React, { Component } from 'react'
import QueryString from 'query-string'
const detailData=
    [{id:1,content:'hello'},
     {id:2,content:'hello,everyone'},
     {id:3,content:'i am your xx'}]

export default class Detail extends Component {
    
    
  render() {
    const {id,title}=this.props.match.params
    // 看清楚结构 param参数


    //search参数
    //const {search}=this.props.location
    //const {id,title}=QueryString.parse(search.slice(1))//注意去掉第一位 问号
    // search 未经处理为urlencoded形式的字符串 id=xx&title=xxxx
    //用querystring库可以实现对象和urlencoded的切换
    //querystring.stringfy(obj)=>urlencoded


    // const {id,title}=this.props.location.state
    console.log(this.props)
    // state为对象

    const findResult=detailData.find((detailObj)=>{
        console.log(typeof detailObj.id,typeof id)
        return detailObj.id==id
        // 不要用=== 类型不一样
    })
    // console.log(typeof findResult)
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}

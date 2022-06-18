import React, { Component } from 'react'
import axios  from 'axios'

export default class App extends Component {
  getStudentsData=()=>{
    // axios.get('http://localhost:3000/index.html') 就是3000有的返回html文件代码 必须要有api1的后缀才行
    axios.get('http://localhost:3000/api1/students').then(//请求地址需要被检测到api1
      // 代理人并不会把请求都发到5000 本来在3000的数据就不会发送请求
      //没有再发送 若是都没有则报错
      response=>{console.log('成功了',response.data)},
      error=>{console.log('失败了',error);}
      //get 里面是发送请求到的地址（服务器）测试代理服务器已经提前配好
      // 分别两个函数 成功获取和失败获取的输出
      //error 表示失败原因 成功返回的数据在response.data里面

    )
  }
  getCarsData=()=>{
    // axios.get('http://localhost:3000/index.html') 就是3000有的返回html文件代码 必须要有api1的后缀才行
    axios.get('http://localhost:3000/api2/cars').then(
      // 代理人并不会把请求都发到5000 本来在3000的数据就不会发送请求
      //没有再发送 若是都没有则报错
      response=>{console.log('成功了',response.data)},
      error=>{console.log('失败了',error);}
      //get 里面是发送请求到的地址（服务器）测试代理服务器已经提前配好
      // 分别两个函数 成功获取和失败获取的输出
      //error 表示失败原因 成功返回的数据在response.data里面

    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>点击获取学生数据</button>
        <button onClick={this.getCarsData}>点击获取汽车数据</button>
      </div>
    )
  }
}
// error 跨域 localhost:3000=>localhost:5000 可以发送请求但是数据没办法回来 
//loacalhost:3000 端口的ajax引擎限制 不让数据通过
//solution: 中间代理服务器 也是在localhost:3000 但是不存在ajax引擎 所以没有限制 数据可以到达

//package.json 文件添加中间代理人服务器 地址写到5000为止 不然就写死了只能返回学生数据了
//,
// "proxy":"http://localhost:5000" 多个服务器怎么办

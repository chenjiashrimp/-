import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'
ReactDOM.render(
<Provider store={store}><App/></Provider>
//把score交给provider组件 然后其会分给所有需要的组件 不需要挨个写
,document.querySelector('#root'))
// store.subscribe(()=>{
//   ReactDOM.render(<App/>,document.querySelector('#root'))
//   console.log(1)
// }) 在react-redux内实现自动监测

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


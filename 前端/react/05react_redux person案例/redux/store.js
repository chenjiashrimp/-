import { createStore,applyMiddleware,combineReducers} from 'redux'
// 不需要自己实现store，调用即可

// 引入reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 根据暴露方式写引入


import { composeWithDevTools } from 'redux-devtools-extension'
//redux 开发者工具

import thunk from 'redux-thunk'

const allReducers=combineReducers({
    count:countReducer,
    persons:personReducer
})
//参数为一个对象 就是redux里面存状态的对象 有若干个key-value key自己取名 value是处理状态的reducer而不是状态本身
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
// 创建store的同时已经指定了reducer
// 只有一个 默认暴露 
//当有多个reducer，如何作为参数引入？首先要进行整合

//redux保存多个状态，要以对象的形式整合,如果只有一个状态，那就没有对象


//引入redux-thunk 用于支持异步action
//相当于通知score 得到函数先执行 执行函数得到对象后再传给reducer



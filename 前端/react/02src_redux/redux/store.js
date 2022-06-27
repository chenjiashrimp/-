import { createStore,applyMiddleware } from 'redux'
// 不需要自己实现store，调用即可

// 引入reducer
import countReducer from './count_reducer'
// 根据暴露方式写引入


import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))
// 创建store的同时已经指定了reducer
// 只有一个 默认暴露 



//引入redux-thunk 用于支持异步action
//相当于通知score 得到函数先执行 执行函数得到对象后再传给reducer
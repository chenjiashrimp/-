// action_creator
import { INCREMENT,DECREMENT } from "./constant"
import score from '../redux/store'


export const createIncrementAction=data=>({type:INCREMENT,data})
// 简写形式 箭头函数只有一个return 因为return对象 花括号有歧义所以再加一对括号
// export const createIncrementAction=(data)=>{
//     return {type:'increment',data:data}
// }
export const createDecrementAction=data=>({type:DECREMENT,data})

export const createIncrementAsyncAction=(data,time)=>{
    return ()=>{
        setTimeout(()=>{
            score.dispatch(createIncrementAction(data))
        },time)
    }
    //return a function
    //这个函数交给store没有交给reducer而是store自己调用
}
//同步action，action的值为Object类型的一般对象
//异步action，action的值为函数 因为只有函数才能够设置异步任务 异步action一般会调用同步action
//异步action不是必须的
import { ADD_PERSON } from "../constant";

const initState=[{id:'000',name:'Tom',age:18}]
//想清楚 状态属性得是什么类型
//在这里，需要为元素为对象的列表
export default function personReducer(preState=initState,action){
    const {type,data}=action
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
            //放最前面

            //preState.unshift(data)
            //return preState 不是纯函数
            //preState会改变，但是页面不会重新刷新，因为return的preState和之前引入的preState进行浅比较，发现地址不变，
            //于是页面不会重新刷新
            //因此需要构造一个全新数组
        default:
            return preState
    }
}


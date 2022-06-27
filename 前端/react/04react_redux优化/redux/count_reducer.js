// 创建为score服务的ruducer，本质上就是一个函数
// 两个参数 prestate和action
import { INCREMENT,DECREMENT } from "./constant";
const initState=0;
// 初始化状态为0
// 形参的默认值，没有传或者为undefined就默认为0 用于reducer初始化状态
export default function countReducer(preState=initState,action){
    // console.log(preState,action)
    // undefined type:@@... data:随机字符 防止和switch的字符一致 
    const {type,data}=action
    console.log(type)
    switch(type){
        case INCREMENT:
            console.log(preState)
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            console.log(preState)
            return preState
            // 初始化
    }
}
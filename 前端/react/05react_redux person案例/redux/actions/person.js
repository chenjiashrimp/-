import { ADD_PERSON } from "../constant";


//构造创建Person组件的action对象方法
export const createPersonAction=personObj=>({type:ADD_PERSON,data:personObj})
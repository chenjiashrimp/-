import React,{Component} from "react";
import father from './index.module.css'
export default class Father extends Component {
    render(){
        return (
            <h1 className={father.title}>I am your father</h1>
        )
    }
}
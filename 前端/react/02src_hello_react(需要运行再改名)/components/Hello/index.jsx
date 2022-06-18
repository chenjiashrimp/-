import React,{Component} from "react";
import hello from './index.module.css' //这样写是防止类名重复而导致覆盖

export default class Hello extends Component {
    render(){
        return (
            <h1 className={hello.title}>hello,react</h1>
        )
    }
}



import React,{Component} from "react";

import Hello from './components/Hello'
import Father from './components/Father'
export default  class App extends Component {
    render(){
        return (
           <div>
             <Hello></Hello>
            <Father></Father>

           </div>
        )
    }
}
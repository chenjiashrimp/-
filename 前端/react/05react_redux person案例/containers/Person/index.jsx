import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createPersonAction} from '../../redux/actions/person'
 class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        //console.log(name,age)
        if(name===''||age===''){
          return
        }
        const {persons}=this.props
        const personObj={id:persons.length,name,age:age*1}
        //把age从字符转为数字
        //console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
        
    }
  render() {
    return (
      <div>
        <h1>Person组件</h1>
        <input ref={c=>this.nameNode=c} type="text" placeholder='input your name'/>
        <input ref={c=>this.ageNode=c} type="text" placeholder='input your holder'/>
        <button onClick={this.addPerson}>add</button>
        <ul>
           {
            this.props.persons.map((p)=>{
              return (
                <li key={p.id}>{p.name}---{p.age}</li>
              )
            })
           }
        </ul>
      </div>
    )
  }
}


export default connect(
  state=>({persons:state.persons}),
  {addPerson:createPersonAction}
)(Person)
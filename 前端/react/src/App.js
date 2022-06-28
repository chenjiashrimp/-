import React, { Component } from 'react'
import Demo from './components/01_setState'
import A from './components/02_context通信'
import Parent from './components/03_pureComponent'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo></Demo>
        <A></A> */}
        <Parent></Parent>
      </div>
    )
  }
}

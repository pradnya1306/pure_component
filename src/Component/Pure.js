import React from 'react'
import { PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increate=()=>{
        this.setState({
            count:this.state.count+1
        })
        
        
    }
  render() {
    console.log("pure component")
    return (
      <div>
        <h1>Pure_comp</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increate}>increment</button>

      </div>
    )
  }
}


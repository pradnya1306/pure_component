import React, { Component } from 'react'

export default class Normal_comp extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increate=()=>{
        this.setState({
            count:this .state.count+1
        })
        
    }
  render() {
    console.log("normal component")
    return (
      <div>
        <h1>Normal_comp</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increate}>increment</button>

      </div>
    )
  }
}


import React, { Component } from 'react'

class Cnt extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  Increment() {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  Reset(){
    this.setState({
      count: this.state.count - this.state.count
    })
  }
  Decrement() {
    this.setState({
      count: this.state.count - 1
    })
    console.log(this.state.count)
  }
  render() {
    return (
      <div className="card" role='region' aria-label='Counter Example'>
        <p className="count" id="count">Count: {this.state.count}</p>
        <div className='controls' >
          <button id='decrement' className='dec' aria-label='Decrement' onClick={() => this.Decrement()}>Decrement</button>
          <button id='reset' className='rst' aria-label='Reset' onClick={() => this.Reset()}>Reset</button>
          <button id='incremet' className='inc' aria-label='Incremet' onClick={() => this.Increment()}>Incremet</button>
        </div>
      </div>
    );
  }
}

export default Cnt
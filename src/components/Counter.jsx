import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    console.log('before update', this.state.count)
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log('count updated', this.state.count)
      }
    )
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }))
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

export default Counter

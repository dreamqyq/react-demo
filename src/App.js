import React, { Component } from 'react';
import './App.css';

class App extends Component {
  add1() {
    this.props.store.dispatch({
      type: "add",
      payload: 1
    })
  }
  minus1() {
    this.props.store.dispatch({
      type: "minus",
      payload: 1
    })
  }
  add1IfOdd() {
    this.props.store.dispatch({
      type: "addIfOdd",
      payload: 1
    })
  }
  add1Async() {
    setTimeout(() => {
      this.props.store.dispatch({
        type: "add",
        payload: 1
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <h1>Hello React x Redux</h1>
        <div>
          <p>你点击了 {this.props.store.getState()} 次</p>
          <button onClick={this.add1.bind(this)}>+1</button>
          <button onClick={this.minus1.bind(this)}>-1</button>
          <button onClick={this.add1IfOdd.bind(this)}>数字为单数，+1</button>
          <button onClick={this.add1Async.bind(this)}>1秒后+1</button>
        </div>
      </div>
    )
  }
}

export default App;
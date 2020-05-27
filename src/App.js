import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React + Redux + React-Redux</h1>
        <div>
          <p>你点击了 {this.props.count} 次</p>
          <button onClick={this.props.add1.bind(this)}>+1</button>
          <button onClick={this.props.minus1.bind(this)}>-1</button>
          <button onClick={this.props.add1IfOdd.bind(this)}>数字为单数，+1</button>
          <button onClick={this.props.add1Async.bind(this)}>1秒后+1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}
function mapDispatchToProps(dispatch) {
  return {
    add1: () => { dispatch({ type: "add", payload: 1 }) },
    minus1: () => { dispatch({ type: "minus", payload: 1 }) },
    add1IfOdd: () => { dispatch({ type: "addIfOdd", payload: 1 }) },
    add1Async: () => {
      setTimeout(() => {
        dispatch({ type: "add", payload: 1 })
      }, 1000)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
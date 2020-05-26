import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux"

const store = createStore((state, action) => {
  state = state || 0
  switch (action.type) {
    case "add":
      return state + action.payload
    case "minus":
      return state - action.payload
    case "addIfOdd":
      if (state % 2 === 1) {
        return state + action.payload
      } else {
        return state
      }
    default:
      return state
  }
})

render()
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

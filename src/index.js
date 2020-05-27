import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux"
import { Provider } from "react-redux"

const reducer = (state, action) => {
  state = state || {
    count: 0
  }
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + action.payload
      }
    case "minus":
      return {
        ...state,
        count: state.count - action.payload
      }
    case "addIfOdd":
      if (state.count % 2 === 1) {
        return {
          ...state,
          count: state.count + action.payload
        }
      } else {
        return state
      }
    default:
      return state
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

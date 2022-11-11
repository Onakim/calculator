import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
const defaultState = {
  value: 0,
  secondValue: 0,
}
const actions = [
  {
    type: "CANCEL",
  },
  {
    type: "RESULT",
  },
  {
    type: "FUNC",
  },
  {
    type: "NUMB",
  },
];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NUMB":
      return {...state, value: action.payload };
    default:

  }
}

export const store = createStore(reducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
const defaultState = {

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
  switch (action) {
    case "NUMB":
      return console.log(action.payload);
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

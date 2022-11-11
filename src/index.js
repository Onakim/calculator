import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
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

const reducer = (action, payload) => {
  switch (action) {
    case "NUMB":
      return console.log(payload);
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

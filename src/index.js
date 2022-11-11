import React from "react";
import ReactDOM from "react-dom/client";
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

const store = {
  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

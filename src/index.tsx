import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./components/core/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();

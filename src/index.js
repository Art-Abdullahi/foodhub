import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { InfoProvider } from "./components/Context";
ReactDOM.render(
  <InfoProvider>
    <App />
  </InfoProvider>,
  document.getElementById("root")
);

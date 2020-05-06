import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { InfoProvider } from "./components/Context";
ReactDOM.render(
  <Router>
    <InfoProvider>
      <App />
    </InfoProvider>
  </Router>,
  document.getElementById("root")
);

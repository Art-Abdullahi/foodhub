import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigator from "../src/components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Details from "./components/Details";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div>
      <Navigator />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route
          exact
          path={`/details/:id`}
          render={(props) => <Details {...props} />}
        />
        <Route exact component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

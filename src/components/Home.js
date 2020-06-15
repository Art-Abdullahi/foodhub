import React, { Component } from "react";
import "../styles/Grid.css";

import Header from "./Header";
import FeaturedResturants from "./FeaturedResturants";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FeaturedResturants />
      </React.Fragment>
    );
  }
}
export default Home;

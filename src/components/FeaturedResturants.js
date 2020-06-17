import React, { Component } from "react";

import ResturantPrev from "./ResturantPrev";

export default class FeaturedResturants extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-5">Featured Resturants</h1>
        <ResturantPrev />
      </div>
    );
  }
}

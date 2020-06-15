import React, { Component } from "react";
import ResturantList from "./ResturantList";
import { InfoConsumer } from "./Context.js";

export default class ResturantPrev extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          return (
            <div>
              <ResturantList resturants={value.resturants} />
            </div>
          );
        }}
      </InfoConsumer>
    );
  }
}

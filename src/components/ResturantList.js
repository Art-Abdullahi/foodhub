import React, { Component } from "react";
import Resturant from "./Resturant";

export default class ResturantList extends Component {
  render() {
    return (
      <div>
        {this.props.resturants.map((resturant) => (
          <Resturant
            key={resturant.id}
            resturant={resturant}
            resturants={this.props.resturants}
          />
        ))}
      </div>
    );
  }
}

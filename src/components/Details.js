import React, { Component } from "react";
import { InfoConsumer } from "./Context";
export default class Deatils extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          const {
            id,
            name,
            Location,
            openingHours,
            website,
            category,
            image,
            phoneNumber,
          } = value.resturants;
          return (
            <React.Fragment>
              <div className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">Details Page....</h1>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

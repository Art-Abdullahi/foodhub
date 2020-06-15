import React, { Component } from "react";
import Filter from "./Filter";
import { InfoConsumer } from "./Context";
import Info from "./Info";

export default class Resturants extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          const { resturants, updateFilter } = value;
          return (
            <React.Fragment>
              <div className="mt-5">
                <Filter updateFilter={updateFilter} />
                <div className="grid container-fluid">
                  {resturants.map((resturant) => (
                    <Info
                      key={resturant.id}
                      resturant={resturant}
                      filteredResturants={value.filteredResturants}
                    />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

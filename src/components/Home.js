import React, { Component } from "react";

import Info from "./Info";
import { InfoConsumer } from "./Context";
import Filter from "./Filter";
class Home extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          const { resturants, updateFilter } = value;
          return (
            <React.Fragment>
              <Filter updateFilter={updateFilter} />
              <h3 className="text-center">Best resturants In Nairobi</h3>
              <div className="row">
                {resturants.map((resturant) => (
                  <Info
                    key={resturant.id}
                    resturant={resturant}
                    filteredResturants={value.filteredResturants}
                  />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}
export default Home;

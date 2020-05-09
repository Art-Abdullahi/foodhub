import React, { Component } from "react";
import "../styles/Grid.css";
import Info from "./Info";
import { InfoConsumer } from "./Context";
import Filter from "./Filter";
import Header from "./Header";
class Home extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          const { resturants, updateFilter } = value;
          return (
            <React.Fragment>
              <Header />
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
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}
export default Home;

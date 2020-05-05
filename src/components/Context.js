import React, { Component } from "react";
import { data } from "../Data";
const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = { resturants: data, filter: {} };
  updateFilter = (filter) => {
    this.setState({
      filter,
    });
  };
  static applyFilter(resturants, filter) {
    const { category } = filter;
    let result = resturants;
    if (category) {
      result = result.filter((item) =>
        item.category.toLowerCase().startsWith(category)
      );
    }
    return result;
  }
  render() {
    const filteredresturants = InfoProvider.applyFilter(
      this.state.resturants,
      this.state.filter
    );
    return (
      <div>
        <InfoContext.Provider
          value={{
            resturants: filteredresturants,
            updateFilter: this.updateFilter,
          }}
        >
          {this.props.children}
        </InfoContext.Provider>
      </div>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };

import React, { Component } from "react";
import data from "../Data";
import Resturant from "./Resturant";

import SearchBar from "./SearchBar";
class ResturantList extends Component {
  constructor(props) {
    super(props);
    this.state = { resturants: [], filteredResturants: [] };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }
  componentDidMount() {
    this.setState({ resturants: data, filteredResturants: data });
  }
  handleChangeCategory(e) {
    this.setState({ category: e.target.value });
    this.listResturants();
  }
  listResturants() {
    this.setState((state) => {
      if (state.category !== "") {
        return {
          filteredResturants: state.resturants.filter(
            (a) => a.category.indexOf(state.category) >= 0
          ),
        };
      }
      return { filteredResturants: state.resturants };
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          category={this.state.category}
          handleChangeCategory={this.handleChangeCategory}
          count={this.state.filteredResturants.length}
        />
        <hr />

        <Resturant resturants={this.state.filteredResturants} />
      </div>
    );
  }
}
export default ResturantList;

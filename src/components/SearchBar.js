import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} resturants found</div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <label>
            Filter By Category
            <select
              className="form-control"
              value={this.props.category}
              onChange={this.props.handleChangeCategory}
            >
              <option value="">All</option>
              <option value="Turkey">Turkey</option>
              <option value="Japannesse">Japannesse</option>
              <option value="contemprary">contemprary</option>
              <option value="Arab">Arab</option>
              <option value="Chinnesse">Chinnesse</option>
              <option value="Thailand">Thailand</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
export default SearchBar;

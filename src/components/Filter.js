import React, { Component } from "react";

class Filter extends Component {
  state = {
    category: "",
  };
  render() {
    const categories = [
      "Turkey",
      "Japannesse",
      "contemprary",
      "Arab",
      "Chinnesse",
      "Thailand",
    ];
    return (
      <div className="container text-center">
        <form
          onChange={() =>
            setTimeout(() => this.props.updateFilter(this.state), 0)
          }
        >
          <label>
            <h1>Find the best Resturants in Nairobi</h1>
            <select
              className="form-control"
              value={this.state.category}
              onChange={(event) => {
                this.setState({ category: event.target.value });
              }}
            >
              <option value="">All</option>

              {categories.map((c) => (
                <option key={c} value={c.toLowerCase()}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default Filter;

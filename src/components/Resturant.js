import React, { Component } from "react";

class Resturant extends Component {
  render() {
    const ResturantItems = this.props.resturants.map((resturant) => {
      return (
        <div
          className="container col-md-4 m-auto mt-3"
          style={{ height: "100" }}
          key={resturant.id}
        >
          <div className="card" style={{ width: "18rem", objectFit: "cover" }}>
            <img src={resturant.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{resturant.name}</h5>
              <p className="card-text">{resturant.Location}</p>
              <small className="card-text">{resturant.category}</small>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row mt-3">{ResturantItems}</div>;
  }
}
export default Resturant;

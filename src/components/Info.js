import React, { Component } from "react";
import { InfoConsumer } from "./Context.js";
class Info extends Component {
  render() {
    const { id, name, Location, category, image } = this.props.resturant;

    return (
      <InfoConsumer>
        {(data) => (
          <div
            className="container col-10 col-lg-4 mx-auto mb-5"
            style={{ height: "100" }}
            key={id}
          >
            <div
              className="card"
              style={{ width: "18rem", objectFit: "cover" }}
            >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{Location}</p>
                <small className="card-text">{category}</small>
              </div>
              <a href="/details" className="btn btn-lg btn-primary">
                Explore
              </a>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
export default Info;

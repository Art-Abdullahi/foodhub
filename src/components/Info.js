import React, { Component } from "react";
import { InfoConsumer } from "./Context.js";
import { withRouter } from "react-router-dom";
import "../styles/Grid.css";
class Info extends Component {
  goToDetails = (id) => {
    this.props.history.push({
      pathname: `/details/${this.props.resturant.id}`,
    });
  };
  render() {
    const { id, name, Location, category, image } = this.props.resturant;

    return (
      <InfoConsumer>
        {(data) => (
          <div className="card text-center" key={id}>
            <div className="overflow">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body text-dark">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secondary">{Location}</p>
                <small className="card-text">{category}</small>
              </div>

              <button className="btn" onClick={this.goToDetails}>
                Explore
              </button>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
export default withRouter(Info);

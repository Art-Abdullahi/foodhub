import React, { Component } from "react";
import hero from "../images/hero.svg";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container hero">
        <div className="container">
          <h1>
            Find nearby resturants,book resrvations and make reviews afterwards.
          </h1>
          <p>
            Finding hghly rated resturants has never been easier with foodhub,
            We save you the time an hassle involved in reserving a table by
            automating the process by just a couple of clicks.
          </p>
          <div className="mt-5" style={{ display: "flex" }}>
            <Link to="/about">
              {" "}
              <button className="btn">About</button>
            </Link>
            <br />
            <Link to="/resturants">
              {" "}
              <button className="btn">Resturants</button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={hero} alt="hero" height="300" />
          </div>
        </div>
      </div>
    );
  }
}

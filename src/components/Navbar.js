import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

export default class Navigator extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <nav className="navBar">
          <div className="brand-title">FOODHUB</div>

          <FaAlignRight className="toggle-button" onClick={this.Toggle} />

          <div
            className={
              this.state.toggle ? "navbar-links navbar-active" : "navbar-links"
            }
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resturants">Resturants</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

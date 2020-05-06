import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "../styles/Nav.css";
const Navigator = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation" light expand="md">
        <NavbarBrand href="/">FOODHUB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <Link to="/">
              <NavItem className="nav-links mr-5">Resturants</NavItem>
            </Link>
            <Link to="/about">
              {" "}
              <NavItem className="nav-links ml-5">About</NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigator;

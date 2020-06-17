import React, { Component } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaLinkedin,
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          height: "auto",
        }}
      >
        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12 segement-one">
                  <h3>FOODHUB</h3>
                  <p>
                    Foodhub is all for educational purposes only and no order
                    shall be fullfiled.The technologies used are React and
                    firebase.
                  </p>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 segement-two">
                  <h2>FOODHUB</h2>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Resturants</li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 segement-three">
                  <h2>Follow us</h2>
                  <p>
                    Please follow us on our socials to keep updated on the
                    latest news.
                  </p>
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaPinterestSquare />
                  <FaLinkedin />
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 segement-four">
                  <h2>Our Newsletter</h2>
                  <p>
                    Subscribe to our Newsletter to receive monthlty offers and
                    many more.
                  </p>
                  <form>
                    <input type="email" />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;

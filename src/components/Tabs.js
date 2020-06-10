import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Map from "./Map";
import { FaStar } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import image from "../images/avatar.svg";
export default class Switch extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const {
      openingHours,
      category,
      location,
      website,
      phoneNumber,
      reviews,
    } = this.props;
    return (
      <div>
        <Tabs>
          <TabList
            style={{ background: "#f59600", color: "rgba(54, 51, 51, 1)" }}
          >
            <Tab>INFORMATION</Tab>
            <Tab>REVIEWS</Tab>
            <Tab>MAP</Tab>
          </TabList>

          <TabPanel>
            <div className="information container mt-3">
              <div className="container">
                <h3>Opening Hours</h3>
                <span>{openingHours}</span>
              </div>
              <div className="container">
                <h3>Details</h3>
                <span>{category}</span>
              </div>
              <div className="container">
                <h3>Location</h3>
                <div>
                  <h4>{location}</h4>
                </div>

                <div>
                  <h5>{website}</h5>
                </div>
                <div>
                  <h6>{phoneNumber}</h6>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="reviews">
              <div className="rating m-5">
                <small>OVERALL RATING</small>
                <span>
                  <FaStar className="fa" />
                  <FaStar className="fa" />
                  <FaStar className="fa" />
                  <FaStar className="fa" />
                  <FaStar className="fa" />
                </span>
                <h1 className="rate">5/5</h1>
                <small className="mt-0">5 reviews</small>
              </div>
              <div>
                <h2>RECENT REVIEWS</h2>
                {reviews.map((item) => (
                  <div className="recent-review mb-3" key={item.id}>
                    <div>
                      <img src={image} alt="avatar" height="100" />
                    </div>
                    <div className="ml-3">
                      <h2>{item.userName}</h2>
                      <h6 className="mt-0">{item.publishedAt}</h6>
                      <p>{item.review}</p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Map />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

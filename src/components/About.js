import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Welcome To FoodHub</h1>
        <p>
          FoodHub is a app example to show you what can be made with React. This
          is about restaurants because i like good food. And based in Nairobi
          because i am from here. I use the word “food” a lot, because food is
          sharing and sharing is caring so come be my friend and see if i mean
          it.
        </p>
        <h2>My Mission</h2>
        <p>
          FoodHubs’s mission is to show you the endless possibilities of using
          React and Context api to manage your state and making it accessible to
          all components. And also to make you discover some of the restaurants
          we like in Nairobi. Note that this App is for the sole purpose of
          educational purpose and i do not look foward to monetize in any way
        </p>
        <h3>FoodHub displays functionality like :</h3>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li>List of resturants</li>
          <li>Filter</li>
          <li>Reviews</li>
          <li>Comments</li>
          <li>Context Api</li>
          <li>Image Management</li>
        </ul>
      </div>
    );
  }
}
export default About;

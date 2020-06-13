import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { data } from "../Data";

export default class Mapping extends Component {
  render() {
    return (
      <div>
        <Map center={[-1.292066, 36.821945]} zoom={0}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((resturant) => (
            <Marker key={resturant.id} position={[40.7143528, -74.0059731]} />
          ))}
        </Map>
      </div>
    );
  }
}

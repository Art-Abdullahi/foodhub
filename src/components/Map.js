import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class Mapping extends Component {
  render() {
    return (
      <div>
        <Map center={[this.props.latitude, this.props.longitude]} zoom={12}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[this.props.latitude, this.props.longitude]} />
        </Map>
      </div>
    );
  }
}

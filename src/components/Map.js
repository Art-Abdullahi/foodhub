import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { data } from "../Data";
import { FaMapMarker } from "react-icons/fa";
const Map = () => {
  const [viewport, setviewport] = useState({
    width: "90vw",
    height: "100vh",
    latitude: 1.4419683,
    longitude: 38.4313975,
    zoom: 8,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/abdull143/ckbawf16a02wf1imufhdfxhfz"
      mapboxApiAccessToken="pk.eyJ1IjoiYWJkdWxsMTQzIiwiYSI6ImNrYmF2OTRvYjBhZDgycm14a3ZoZ3BsNXAifQ.5gNup6QtTGYC0N758Z9ugw"
      onViewportChange={(viewport) => {
        setviewport(viewport);
      }}
    >
      {data.map((resturant) => (
        <Marker
          key={resturant.id}
          latitude={resturant.latitude}
          longitude={resturant.longitude}
        >
          <FaMapMarker />
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;

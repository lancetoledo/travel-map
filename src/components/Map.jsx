import React, { useState } from 'react'
import ReactMapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as parkData from "../data/skateboard-parks.json";

import "../assets/css/Map.css"
function Map() {
    const [viewport, setViewport] = useState({
        latitude: 40.344,
        longitude: -74.554,
        zoom: 7,
      });

    return (
        <div className = "map">
        <ReactMapGL
        {...viewport}
        width="1000px"
        height="700px"
        // Updates map to rerenders when user moves map around
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        // Change map style here
        mapStyle = "mapbox://styles/lanceatoledo/ckrjipio06l2z17moytehxlnk"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
          {parkData.features.map((park) => (
            //   Marker will utilize map function to access json data
              <Marker 
              key={park.properties.PARK_ID}
              latitude={park.geometry.coordinates[1]}
              longitude={park.geometry.coordinates[0]}
              >
                  <button class = "marker-btn">
                      <img src="https://avatars.githubusercontent.com/lancetoledo" alt="Skate Park Icon" />
                  </button>
              </Marker> 
          ))}
      </ReactMapGL>
        </div>
    )
}

export default Map

import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as parkData from "../data/skateboard-parks.json";

import "../assets/css/Map.css"
function Map() {
    const [viewport, setViewport] = useState({
        latitude: 40.344,
        longitude: -74.554,
        zoom: 7,
      });
    //   Keep track of which travel location was clicked
    const [selectedPark, setSelectedPark] = useState(null)

    // Utilize useEffect to close Popup with Esc key
    useEffect(() => {
      // put function in a variable so we can reuse it to remove listener
      const listener = e => {
        if(e.key === "Escape") {
          setSelectedPark(null)
        }
      };
      window.addEventListener("keydown", listener)

      return () => {
        window.removeEventListener("keydown", listener)
      }
    }, []);

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
                  <button class = "marker-btn" onClick = {(e) => {
                    e.preventDefault();
                    setSelectedPark(park)
                  }}>
                      <img src="/lancetoledo.jpg" alt="User Locations" />
                  </button>
              </Marker> 
          ))}

          {/* Add a ternary below to check if selected point*/}
          {selectedPark ? (
            <Popup 
            latitude = {selectedPark.geometry.coordinates[1]} 
            longitude ={selectedPark.geometry.coordinates[0]}
            // Call the onClose function to reset the state to null
            onClose={() =>{
              setSelectedPark(null)
            }}
            >
              <div>
                <h2>{selectedPark.properties.NAME}</h2>
                <p>{selectedPark.properties.DESCRIPTIO}</p>

              </div>
              
            </Popup>
          ) : null}
      </ReactMapGL>
        </div>
    )
}

export default Map

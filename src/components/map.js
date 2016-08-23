import React from "react";

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function Map (props) {
  return (
    <div id="map">
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 20.6612363, lng: -103.3298526 }}
            onClick={props.onMapClick}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </div>
  );
}

//http://stackoverflow.com/questions/17961669/how-to-make-a-full-screen-google-map-with-website-menu-overlay
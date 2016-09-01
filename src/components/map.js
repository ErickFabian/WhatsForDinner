import React from "react";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const Map = props => (
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
          zoom={15}
          center={props.userLocation}
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

Map.propTypes = {
  markers: React.PropTypes.array.isRequired,
  onMapClick: React.PropTypes.func.isRequired,
  userLocation: React.PropTypes.object.isRequired,
  onMarkerRightclick: React.PropTypes.func.isRequired,
  containerElementProps: React.PropTypes.any
};

export default Map;
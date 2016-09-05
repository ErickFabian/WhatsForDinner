import React from "react";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const { any, array, object, func } = React.PropTypes;

const FoodStandsMap = props => (
  <div id="map">
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: "100%",
            width: "100%",
            marginLeft: 0
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
                onClick={() => props.onMarkerClick(index)}
                onRightclick={() => props.onMarkerRightClick(index)}
              />
            );
          })}
        </GoogleMap>
      }
    />
  </div>
);

FoodStandsMap.propTypes = {
  markers:            array.isRequired,
  userLocation:       object.isRequired,

  onMapClick:         func.isRequired,
  onMarkerClick:      func.isRequired,
  onMarkerRightClick: func.isRequired,

  containerElementProps: any
};

export default FoodStandsMap;
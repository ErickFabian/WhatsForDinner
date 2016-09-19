import React from "react";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const { any, array, object, func, number } = React.PropTypes;

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
          zoom={props.currentZoom}
          center={props.userLocation}
          onClick={props.onMapClick}
          onZoomChanged={props.onZoomChanged}
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
  currentZoom:        number.isRequired,

  onMapClick:         func.isRequired,
  onMarkerClick:      func.isRequired,
  onMarkerRightClick: func.isRequired,

  onZoomChanged:      func,
  onCenterChanged:    func,

  containerElementProps: any
};

export default FoodStandsMap;
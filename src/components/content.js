import React, { Component } from 'react';
import update from "react-addons-update";
import Navigation from './navigation';
import Map from './map';

class Content extends Component {
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightclick = this.handleMarkerRightclick.bind(this);

  state = {
    markers: [{
      position: {
        lat: 20.6612363,
        lng: -103.3298526,
      },
      key: `Home`,
      defaultAnimation: 2,
    }],
  };

  handleMapClick(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key:  Date.now(),
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {
    return (
      <div id="page-content-wrapper">
        <Navigation />
        <div className="container-fluid" style={{ 'paddingLeft': 0, 'paddingRight': 0}}>
          <Map
            markers={this.state.markers}
            onMapClick={this.handleMapClick}
            onMarkerRightclick={this.handleMarkerRightclick}
          />
        </div>
      </div>
    );
  }
}

export default Content;

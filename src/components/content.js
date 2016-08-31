import React, { Component } from 'react';
import update from "react-addons-update";
import Navigation from './navigation';
import Map from './map';
import Modal from 'react-bootstrap/lib/Modal';
import MarkerSubmitForm from './marker-submit-form';

class Content extends Component {
  state = {
    showModal: false,
    markers: [{
      position: {
        lat: 20.6612363,
        lng: -103.3298526,
      },
      key: `Home`,
      defaultAnimation: 2,
    }],
  };

  close() {
    this.setState({ event: null });
    this.setState({ showModal: false });
  }

  submitMarker(e) {
    this.addMarkerToMap();
    this.setState({ event: null });
    this.setState({ showModal: false });
  }

  addMarkerToMap() {
    let markers = this.state.markers;
    markers = update(markers, {
      $push: [
        {
          position: this.state.event.latLng,
          defaultAnimation: 2,
          key:  Date.now(),
        },
      ],
    });
    this.setState({ markers });
  }

  handleMapClick(event) {
    this.setState({
      event: event,
      showModal: true
    });
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
        <Navigation
          onSidebarToggle={this.props.onSidebarToggle}
        />

        <div className="container-fluid map-wrapper">
          <Map
            markers={this.state.markers}
            onMapClick={this.handleMapClick.bind(this)}
            onMarkerRightclick={this.handleMarkerRightclick.bind(this)}
          />
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <MarkerSubmitForm
            target={this.state.event}
            submitMarker={this.submitMarker.bind(this)}
            closeModal={this.close.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}

export default Content;

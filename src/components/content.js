import React, { Component } from 'react';
import update from "react-addons-update";
import Navigation from './navigation';
import Map from './map';
import Modal from 'react-bootstrap/lib/Modal';
import MarkerSubmitForm from './marker-submit-form';
import FoodStandModal from './food-stand-modal';
import FoodStandAdapter from '../adapters/food_stand';

class Content extends Component {
  state = {
    showModal: false,
    showFoodStandModal: false,
    markers: [],
    marker: '',
    userLocation: {
      lat: 20.6612363,
      lng: -103.3298526
    }
  };

  componentDidMount() {
    this.getCurrentPosition();
    this.fetchFoodStands();
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.setState({ userLocation: pos });
      },() => {
        this.handleLocationError();
      });
    } else {
      this.handleLocationError();
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    alert('Could not find your location');
  }

  fetchFoodStands() {
    FoodStandAdapter.get()
    .then((response) => {
      let data = JSON.parse(response.request.response);
      this.setState({
        markers: FoodStandAdapter.parseMarkers(data.food_stands)
      });
    })
    .catch((error) => {
      return error;
    });
  }

  close() {
    this.setState({
      showFoodStandModal: false,
      showModal: false,
      event: null
    });
  }

  submitMarker(e) {
    this.addMarkerToMap();
    this.setState({
      event: null,
      showModal: false
    });
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

  handleMarkerClick(index) {
    let { markers } = this.state;
    let marker = markers[index];

    this.setState({
      showFoodStandModal: true,
      marker: marker
    });
  }

  handleMarkerRightclick(index, event) {
    let { markers } = this.state;
    let marker = markers[index];

    FoodStandAdapter.delete(stand.key);
    this.removeMarkerFromMap(markers, index);
  }

  removeMarkerFromMap(markers, index) {
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
            onMarkerClick={this.handleMarkerClick.bind(this)}
            onMarkerRightclick={this.handleMarkerRightclick.bind(this)}
            userLocation={this.state.userLocation}
          />
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <MarkerSubmitForm
            target={this.state.event}
            submitMarker={this.submitMarker.bind(this)}
            closeModal={this.close.bind(this)}
          />
        </Modal>

        <Modal bsSize="large" show={this.state.showFoodStandModal} onHide={this.close.bind(this)}>
          <FoodStandModal
            marker={this.state.marker}
            closeModal={this.close.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}

export default Content;

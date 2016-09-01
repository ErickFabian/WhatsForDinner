import React, { Component } from 'react';
import update from "react-addons-update";
import Navigation from './navigation';
import Map from './map';
import Modal from 'react-bootstrap/lib/Modal';
import MarkerSubmitForm from './marker-submit-form';

const foodStandsEndpoint = "http://localhost:3001/food_stands";

class Content extends Component {
  state = {
    showModal: false,
    markers: [],
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
        this.setState({ userLocation: pos});
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
    axios.get(foodStandsEndpoint, {
    })
    .then((response) => {
      let data = JSON.parse(response.request.response);
      this.setState({
        markers: this.parseMarkers(data.food_stands)
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteFoodStand(stand) {
    axios.delete(`${foodStandsEndpoint}/${stand.key}`);
  }

  close() {
    this.setState({ event: null });
    this.setState({ showModal: false });
  }

  submitMarker(e) {
    this.addMarkerToMap();
    this.setState({ event: null });
    this.setState({ showModal: false });
  }

  parseMarkers(foodStands) {
    return foodStands.map((foodStand) => {
      let foodStandObj = {
        key:      foodStand.id,
        name:     foodStand.name,
        address:  foodStand.address,
        schedule: foodStand.schedule,
        position: {
          lat: parseFloat(foodStand.position.lat),
          lng: parseFloat(foodStand.position.lng)
        }
      }
      return foodStandObj;
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

  handleMarkerRightclick(index, event) {
    let { markers } = this.state;
    let marker = markers[index];

    this.deleteFoodStand(marker);
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
      </div>
    );
  }
}

export default Content;

import React, { Component } from 'react';
import update from "react-addons-update";
import FoodStandAdapter from '../adapters/food_stand';
import Content from '../components/content';

class ContentContainer extends Component {
  state = {
    showModal: false,
    showFoodStandModal: false,
    markers: [],
    userLocation: {
      lat: 20.6612363,
      lng: -103.3298526
    },
    clickedMapPoint: {},
    clickedMarker: {}
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
    });
  }

  closeModal() {
    this.setState({
      showFoodStandModal: false,
      showModal: false,
      clickedMapPoint: null
    });
  }

  submitMarker(e) {
    this.addMarkerToMap();
    this.setState({
      clickedMapPoint: null,
      showModal: false
    });
  }

  addMarkerToMap() {
    let markers = this.state.markers;
    markers = update(markers, {
      $push: [
        {
          position: this.state.clickedMapPoint.latLng,
          defaultAnimation: 2,
          key:  Date.now(),
        },
      ],
    });
    this.setState({ markers });
  }

  handleMapClick(clickedMapPoint) {
    this.setState({
      clickedMapPoint: clickedMapPoint,
      showModal: true
    });
  }

  handleMarkerClick(index) {
    let { markers } = this.state;
    let marker = markers[index];

    this.setState({
      showFoodStandModal: true,
      clickedMarker: marker
    });
  }

  handleMarkerRightclick(index, clickedMapPoint) {
    let { markers } = this.state;
    let marker = markers[index];

    FoodStandAdapter.delete(marker.key).then(() => {
      this.removeMarkerFromMap(markers, index);
    });
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
      <Content
        foodStands={this.state.markers}
        userLocation={this.state.userLocation}

        clickedMarker={this.state.clickedMarker}
        clickedMapPoint={this.state.clickedMapPoint}

        showFoodStandModal={this.state.showFoodStandModal}
        showModal={this.state.showModal}

        onSidebarToggle={this.props.onSidebarToggle}

        onMapClick={this.handleMapClick.bind(this)}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerRightClick={this.handleMarkerRightclick.bind(this)}
        onModalClose={this.closeModal.bind(this)}
        onSubmitMarker={this.submitMarker.bind(this)}
       />
    );
  }
}

export default ContentContainer;
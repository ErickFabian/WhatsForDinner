import React, { Component } from 'react';
import FoodStandMap from '../components/food_stands_map';

class ContentContainer extends Component {

  render() {
    return (
      <FoodStandMap
        markers={this.props.markers}
        userLocation={this.props.userLocation}
        currentZoom={this.props.currentZoom}

        clickedMarker={this.props.clickedMarker}
        clickedMapPoint={this.props.clickedMapPoint}

        showModal={this.props.showModal}
        showSearchModal={this.props.showSearchModal}
        showFoodStandModal={this.props.showFoodStandModal}

        onSidebarToggle={this.props.onSidebarToggle}
        onSearchToggle={this.props.handleSearchToggle}

        onSubmitSearch={this.props.handleSearch}
        onMapClick={this.props.onMapClick}
        onMarkerClick={this.props.onMarkerClick}
        onMarkerRightClick={this.props.onMarkerRightClick}
        onModalClose={this.props.closeModal}
        onSubmitMarker={this.props.submitMarker}
        onZoomChanged={this.props.onZoomChange}
       />
    );
  }
}

export default ContentContainer;
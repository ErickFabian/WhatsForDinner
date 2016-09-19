import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Navigation from '../components/navigation';
import FoodStandsMapContainer from '../containers/food_stands_map_container';
import FoodStandFormContainer from '../containers/food-stand-form-container';
import FoodStandModalContainer from '../containers/food_stand_modal_container';
import SearchFormContainer from '../containers/sidebar/search_form_container';

const { bool, array, object, func, number } = React.PropTypes;

const Content = props => (
  <div id="page-content-wrapper">
    <Navigation
      onSidebarToggle={props.onSidebarToggle}
      onSearchToggle={props.onSearchToggle}
    />

    <div className="container-fluid map-wrapper">
      <FoodStandsMapContainer
        markers={props.foodStands}
        userLocation={props.userLocation}
        currentZoom={props.currentZoom}

        onMapClick={props.onMapClick}
        onMarkerClick={props.onMarkerClick}
        onMarkerRightClick={props.onMarkerRightClick}
        onZoomChanged={props.onZoomChanged}
      />
    </div>

    <Modal show={props.showModal} onHide={props.onModalClose}>
      <FoodStandFormContainer
        clickedMapPoint={props.clickedMapPoint}
        submitMarker={props.onSubmitMarker}
        closeModal={props.onModalClose}
      />
    </Modal>

    <Modal show={props.showSearchModal} onHide={props.onModalClose}>
      <SearchFormContainer
        handleSearch={props.onSubmitSearch}
        closeModal={props.onModalClose}
      />
    </Modal>

    <Modal show={props.showFoodStandModal} onHide={props.onModalClose}>
      <FoodStandModalContainer
        foodStand={props.clickedMarker}
        closeModal={props.onModalClose}
      />
    </Modal>
  </div>
);

Content.propTypes = {
  showFoodStandModal: bool.isRequired,
  showModal:          bool.isRequired,
  foodStands:         array.isRequired,
  userLocation:       object.isRequired,
  currentZoom:        number.isRequired,

  onMapClick:         func.isRequired,
  onModalClose:       func.isRequired,
  onMarkerClick:      func.isRequired,
  onSubmitMarker:     func.isRequired,
  onSubmitSearch:     func.isRequired,
  onSidebarToggle:    func.isRequired,
  onMarkerRightClick: func.isRequired,
  onZoomChanged:      func,

  clickedMarker:      object,
  clickedMapPoint:    object
};

export default Content;

import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import FoodStandsMap from '../components/food-stands-map';
import Navigation from '../components/navigation';
import FoodStandModal from '../components/food-stand-modal';
import FoodStandFormContainer from '../containers/food-stand-form-container';

const { bool, array, object, func } = React.PropTypes;

const Content = props => (
  <div id="page-content-wrapper">
    <Navigation
      onSidebarToggle={props.onSidebarToggle}
    />

    <div className="container-fluid map-wrapper">
      <FoodStandsMap
        markers={props.foodStands}
        userLocation={props.userLocation}
        onMapClick={props.onMapClick}
        onMarkerClick={props.onMarkerClick}
        onMarkerRightClick={props.onMarkerRightClick}
      />
    </div>

    <Modal show={props.showModal} onHide={props.onModalClose}>
      <FoodStandFormContainer
        clickedMapPoint={props.clickedMapPoint}
        submitMarker={props.onSubmitMarker}
        closeModal={props.onModalClose}
      />
    </Modal>

    <Modal bsSize="large" show={props.showFoodStandModal} onHide={props.onModalClose}>
      <FoodStandModal
        marker={props.clickedMarker}
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

  onSidebarToggle:    func.isRequired,
  onMapClick:         func.isRequired,
  onMarkerClick:      func.isRequired,
  onMarkerRightClick: func.isRequired,
  onModalClose:       func.isRequired,
  onSubmitMarker:     func.isRequired,

  clickedMarker:      object,
  clickedMapPoint:    object
};

export default Content;

import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ReviewListContainer from '../containers/food_stand/review_list_container';
import ReviewFormContainer from '../containers/food_stand/review/form_container';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaClock from 'react-icons/lib/fa/clock-o'

const FoodStandModal = props => (
  <div>
    <Modal.Header closeButton>
      <Modal.Title>
        {props.foodStand.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="pl-0 pr-0 pt-10">
      <img src={props.foodStand.cover} alt={props.foodStand.name} className='img-responsive stand-cover'/>
      <div className="p-15">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h4 className="text-center">
              <FaMapMarker
                size={20}
              />
              Address
            </h4>
            <hr className='mt-0'/>
            <p>
              {props.foodStand.address}
            </p>
          </div>
          <div className="col-sm-12 col-md-8">
            <h4 className="text-center">
              <FaClock
                size={20}
              />
              Schedule
            </h4>
            <hr className='mt-0'/>
            <p>
              {props.foodStand.schedule}
            </p>
          </div>
        </div>
        <hr />
        <ReviewListContainer
          reviews={props.reviews}
        />
        <hr />
        <h4 className='p-0 mb-0 text-center'>
          Leave a Review!
        </h4>
        <ReviewFormContainer
          foodStandId={props.foodStand.id}
          handleReviewSubmit={props.closeModal}
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button className='btn btn-danger btn-raised btn-md' onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </div>
);

export default FoodStandModal;
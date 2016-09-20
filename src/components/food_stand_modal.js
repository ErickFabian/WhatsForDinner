import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ReviewListContainer from '../containers/food_stand/review_list_container';
import ReviewFormContainer from '../containers/food_stand/review/form_container';
import FoodStandInfo from '../components/food_stand/info';

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
        <FoodStandInfo
          address={props.foodStand.address}
          schedule={props.foodStand.schedule}
          phone={props.foodStand.phone}
          website={props.foodStand.website}
        />
        <hr className='mt-10'/>
        <ReviewListContainer
          reviews={props.reviews}
        />
        <hr />
        <div className='text-center'>
          <Button className='btn btn-raised btn-success' onClick={props.leaveReview}>
            Leave a Review!
          </Button>
        </div>
        <ReviewFormContainer
          foodStandId={props.foodStand.id}
          handleReviewSubmit={props.closeModal}
          canLeaveReview={props.canLeaveReview}
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button className='btn btn-danger btn-raised btn-md' onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </div>
);

export default FoodStandModal;
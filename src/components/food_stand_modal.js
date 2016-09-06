import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const FoodStandModal = props => (
  <div>
    <Modal.Header closeButton>
      <Modal.Title>
        {props.foodStand.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={props.foodStand.cover} alt={props.foodStand.name} className='img-responsive stand-cover'/>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h4 className="text-center">
            Address
          </h4>
          <hr />
          <p>
            {props.foodStand.address}
          </p>
        </div>
        <div className="col-sm-12 col-md-8">
          <h4 className="text-center">
            Schedule
          </h4>
          <hr />
          <p>
            {props.foodStand.schedule}
          </p>
        </div>
      </div>
      <hr />
      <div>Reviews</div>


    </Modal.Body>
    <Modal.Footer>
      <Button className='btn btn-default btn-md' onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </div>
);

export default FoodStandModal;
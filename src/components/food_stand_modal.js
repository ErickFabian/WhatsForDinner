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
      <img src={props.foodStand.cover} alt={props.foodStand.name} className='img-responsive'/>
      <hr />
      <p className='text-center'>
        {props.foodStand.address}
        <br />
        {props.foodStand.schedule}
      </p>
      <hr />
      <div>Reviews</div>


    </Modal.Body>
    <Modal.Footer>
      <Button className='btn btn-default btn-md' onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </div>
);

export default FoodStandModal;
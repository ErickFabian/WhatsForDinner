import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const foodStandsEndpoint = "http://localhost:3001/food_stands";

class FoodStandModal extends Component {
  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.marker.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {this.props.marker.address}
          </p>
          <p>
            {this.props.marker.schedule}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-default btn-md' onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </div>
    );
  }
}

export default FoodStandModal;
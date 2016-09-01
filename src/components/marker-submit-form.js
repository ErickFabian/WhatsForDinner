import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import FormControl from 'react-bootstrap/lib/FormControl';

const foodStandsEndpoint = "http://localhost:3000/food_stands";

class MarkerSubmitForm extends Component {
  state = {
    businessName: ''
  }

  handleChange(e) {
    this.setState({ businessName: e.target.value });
  }

  getValidationState() {
    const length = this.state.businessName.length;
    if (length >= 10) return 'success';
    else if (length >= 4) return 'warning';
    else if (length <= 3) return 'error';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.saveBusiness();
    this.props.submitMarker();
  }

  saveBusiness() {
    let data = {
      name: this.state.businessName,
      lat: this.props.target.latLng.lat(),
      lng: this.props.target.latLng.lat()
    };

    fetch(foodStandsEndpoint, {
      method: 'post',
      data: data
    }).then(function(response) {
      console.log(response);
    }).catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Business</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Business Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.businessName}
              placeholder="Enter name of business"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' className='btn btn-primary btn-md'>Submit</Button>
          <Button className='btn btn-danger btn-md' onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </form>
    );
  }
}

export default MarkerSubmitForm;

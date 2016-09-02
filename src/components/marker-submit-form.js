import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import FormControl from 'react-bootstrap/lib/FormControl';

const foodStandsEndpoint = "http://localhost:3001/food_stands";

class MarkerSubmitForm extends Component {
  state = {
    foodStandName: '',
    foodStandCover: '',
    foodStandAddress: '',
    foodStandSchedule: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  getValidationState(attribute) {
    const length = this.state[attribute].length;
    if (length >= 10) return 'success';
    else if (length >= 4) return 'warning';
    else if (length <= 3) return 'error';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.saveFoodStand();
  }

  saveFoodStand() {
    let data = new FormData();
    let payload = {
      name:     this.state.foodStandName,
      position: this.props.target.latLng,
      address:  this.state.foodStandAddress,
      schedule: this.state.foodStandSchedule,
      cover:    this.state.foodStandCover
    }

    data.append('food_stand', JSON.stringify(payload));
    console.log(data);
    axios.post(foodStandsEndpoint, {
      data
    },{
      'Content-Type': 'multipart/form-data'
    })
    .then((response) => {
      this.props.submitMarker();
    })
    .catch((error) => {
      this.handleErrors();
    });
  }

  handleErrors(error) {
    console.log(error);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Food stand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState('foodStandName')}
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.foodStandName}
              name="foodStandName"
              placeholder="Enter the name of the Food Stand"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState('foodStandAddress')}
          >
            <ControlLabel>Address</ControlLabel>
            <FormControl
              type="text"
              value={this.state.foodStandAddress}
              name="foodStandAddress"
              placeholder="Enter the address of the Food Stand"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>schedule</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.foodStandSchedule}
              name="foodStandSchedule"
              placeholder="Enter the schedule of the Food Stand"
              onChange={this.handleChange.bind(this)}
              rows='5'
            />

            <FormControl.Feedback />
          </FormGroup>

          <FormControl
            type="file"
            value={this.state.foodStandCover}
            name="foodStandCover"
            placeholder="Enter the address of the Food Stand"
            onChange={this.handleChange.bind(this)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' className='btn btn-primary btn-md'>Submit</Button>
          <Button className='btn btn-default btn-md' onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </form>
    );
  }
}

export default MarkerSubmitForm;

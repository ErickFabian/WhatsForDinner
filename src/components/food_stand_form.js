import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

const { string, func } = React.PropTypes;

const FoodStandForm = props => (
  <form onSubmit={props.onSubmit}>
    <Modal.Header closeButton>
      <Modal.Title>Submit Food stand</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormGroup
        controlId="formBasicText"
        validationState={props.validationState('foodStandName')}
      >
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          value={props.foodStandName}
          name="foodStandName"
          placeholder="Enter the name of the Food Stand"
          onChange={props.onInputChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>

      <FormGroup
        controlId="formBasicText"
        validationState={props.validationState('foodStandAddress')}
      >
        <ControlLabel>Address</ControlLabel>
        <FormControl
          type="text"
          value={props.foodStandAddress}
          name="foodStandAddress"
          placeholder="Enter the address of the Food Stand"
          onChange={props.onInputChange}
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
          value={props.foodStandSchedule}
          name="foodStandSchedule"
          placeholder="Enter the schedule of the Food Stand"
          onChange={props.onInputChange}
          rows='5'
        />

        <FormControl.Feedback />
      </FormGroup>

      <FormControl
        type="file"
        name="foodStandCover"
        onChange={props.onInputChange}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button type='submit' className='btn btn-primary btn-md'>Submit</Button>
      <Button className='btn btn-default btn-md' onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </form>
);

FoodStandForm.propTypes = {
  foodStandName:      string.isRequired,
  foodStandAddress:   string.isRequired,
  foodStandSchedule:  string.isRequired,

  onSubmit:           func.isRequired,
  closeModal:         func.isRequired,
  onInputChange:      func.isRequired,
  validationState:    func.isRequired
};

export default FoodStandForm;

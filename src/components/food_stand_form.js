import React from 'react';
import Dropzone from 'react-dropzone';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FoodStandCoverPreviewContainer from '../containers/food_stand/cover_preview_container';

const dropZoneStyle = {
  width: '100%',
  height: '100%',
  border: '2px dashed rgb(102, 102, 102)',
  borderRadius: '5px',
  marginBottom: '10px',
  padding: '1em',
  textAlign: 'center',
}

const { string, func } = React.PropTypes;

const FoodStandForm = props => (
  <form onSubmit={props.onSubmit}>
    <Modal.Header closeButton>
      <Modal.Title>Submit Food stand</Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Dropzone onDrop={props.onDrop} multiple={false} style={dropZoneStyle}>
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      <FoodStandCoverPreviewContainer
        cover={props.foodStandCover}
      />
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
          type="text"
          value={props.foodStandSchedule}
          name="foodStandSchedule"
          placeholder="Enter the schedule of the Food Stand"
          onChange={props.onInputChange}
        />

        <FormControl.Feedback />
      </FormGroup>
      <div className='row'>
        <div className='col-md-6'>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Phone</ControlLabel>
            <FormControl
              type="text"
              value={props.phone}
              name="foodStandPhone"
              placeholder="Enter the phone of the Food Stand"
              onChange={props.onInputChange}
            />
          </FormGroup>
        </div>
        <div className='col-md-6'>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Website</ControlLabel>
            <FormControl
              type="text"
              value={props.website}
              name="foodStandWebsite"
              placeholder="Enter the website of the Food Stand"
              onChange={props.onInputChange}
            />
          </FormGroup>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button type='submit' className='btn btn-success btn-raised btn-md'>Submit</Button>
      <Button className='btn btn-raised btn-danger btn-md' onClick={props.closeModal}>Close</Button>
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

import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

const { func } = React.PropTypes;

const SearchForm = props => (
  <form onSubmit={props.onSubmit}>
    <Modal.Header closeButton>
      <Modal.Title>Perform Search</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormGroup
        controlId="formBasicText"
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
      </FormGroup>

      <FormGroup
        controlId="formBasicText"
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
      </FormGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button type='submit' className='btn btn-primary btn-md'>Submit</Button>
      <Button className='btn btn-default btn-md' onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </form>
);

SearchForm.propTypes = {
  onSubmit: func,
};

export default SearchForm;

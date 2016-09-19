import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import StarRatingComponent from 'react-star-rating-component';


const { func } = React.PropTypes;

const ReviewItemForm = props => (
  <form onSubmit={props.onSubmit}>
    <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Your name</ControlLabel>
        <FormControl
          type="text"
          value={props.owner}
          name="owner"
          placeholder="Enter your name"
          onChange={props.onInputChange}
        />
        <FormControl.Feedback />
    </FormGroup>

    <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>Review</ControlLabel>
        <FormControl
          type="text"
          value={props.description}
          name="description"
          placeholder="Leave a review"
          onChange={props.onInputChange}
        />
        <FormControl.Feedback />
    </FormGroup>

    <StarRatingComponent
      name="rating"
      value={props.rating}
      onStarClick={props.onRatingChange}
    />
    <br />
    <Button type='submit' className='btn btn-success btn-raised btn-md'>Submit</Button>
  </form>
);

ReviewItemForm.propTypes = {
  onSubmit: func,
};

export default ReviewItemForm;
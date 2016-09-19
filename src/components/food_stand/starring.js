import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Starring = props => (
  <StarRatingComponent
    name={props.name}
    editing={props.editing}
    starCount={props.starringTopLimit}
    value={props.value}
  />
);

export default Starring;
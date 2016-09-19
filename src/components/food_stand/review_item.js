import React from 'react';
import ReviewStarringContainer from '../../containers/food_stand/starring_container';

const ReviewItem = props => (
  <div>
    <h3>
      {props.owner}
      <div className='review-starring-wrapper'>
        <ReviewStarringContainer
          starring={props.rate}
        />
      </div>
      <small className="pl-15">
        {props.createdAt}
      </small>
    </h3>
    {props.description}
  </div>
);

export default ReviewItem;
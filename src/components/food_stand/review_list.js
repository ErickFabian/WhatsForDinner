import React, { Component } from 'react';
import ReviewItemContainer from '../../containers/food_stand/review_item_container';

class ReviewList extends Component {
  render() {
    var display;
    if (this.props.reviews.length > 1) {
      display = this.props.reviews.map((review) => {
          return <ReviewItemContainer key={review.key} review={review}/>
        });
    } else {
      display = 'This place does not have any reviews yet!';
    }

    return (
      <section className='text-center'>
        {display}
      </section>
    )
  }
}

export default ReviewList;
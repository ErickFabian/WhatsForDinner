import moment from 'moment';
import React, { Component } from 'react';
import ReviewItem from '../../components/food_stand/review_item';

class ReviewItemContainer extends Component {
  render() {
    let review = this.props.review;
    let createdAt = moment.utc(this.props.review.createdAt).fromNow();

    return (
      <ReviewItem
        key={review.key}
        rate={review.rate}
        owner={review.owner}
        createdAt={createdAt}
        description={review.description}
      />
    );
  }
}

export default ReviewItemContainer;
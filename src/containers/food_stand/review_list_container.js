import React, { Component } from 'react';
import ReviewList from '../../components/food_stand/review_list';

class ReviewContainer extends Component {
  render() {
    return (
      <ReviewList
        reviews={this.props.reviews}
      />
    );
  }
}

export default ReviewContainer;
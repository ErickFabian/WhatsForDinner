import React, { Component } from 'react';
import ReviewAdapter from '../../../adapters/review_adapter';
import ReviewItemForm from '../../../components/food_stand/review/form';

class ReviewFormContainer extends Component {
  state = {
    owner: '',
    rating: 1,
    description: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  handleRatingChange(value) {
    this.setState({rating: value})
  }

  handleReviewSubmit(e) {
    e.preventDefault();
    let review = new FormData();
    review.append('review[owner]', this.state.owner);
    review.append('review[rate]', this.state.rating);
    review.append('review[description]', this.state.description);
    review.append('review[food_stand_id]', this.props.foodStandId);
    ReviewAdapter.create(review).then((response) => {
      this.props.handleReviewSubmit();
    });
  }

  render() {
    return (
      <ReviewItemForm
        rating={this.state.rating}
        onSubmit={this.handleReviewSubmit.bind(this)}
        onRatingChange={this.handleRatingChange.bind(this)}
        onInputChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default ReviewFormContainer;
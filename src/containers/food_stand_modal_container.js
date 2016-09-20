import React, { Component } from 'react';
import FoodStandModal from '../components/food_stand_modal';
import ReviewAdapter from '../adapters/review_adapter';

class FoodStandModalContainer extends Component {
  state = {
    reviews: [{}],
    canLeaveReview: false
  }

  componentDidMount() {
    this.fetchFoodStandReviews();
  }

  fetchFoodStandReviews() {
    let params = {
      foodStandIdEq: this.props.foodStand.id
    };

    ReviewAdapter.get(params).then((response) => {
      let data = JSON.parse(response.request.response);
      this.setState({
        reviews: ReviewAdapter.parseReviews(data.reviews)
      });
    });
  }

  handleLeaveReview() {
    this.setState({
      canLeaveReview: !this.state.canLeaveReview
    })
  }

  render() {
    return (
      <FoodStandModal
        closeModal={this.props.closeModal}
        foodStand={this.props.foodStand}
        reviews={this.state.reviews}
        canLeaveReview={this.state.canLeaveReview}
        leaveReview={this.handleLeaveReview.bind(this)}
      />
    );
  }
}

export default FoodStandModalContainer;
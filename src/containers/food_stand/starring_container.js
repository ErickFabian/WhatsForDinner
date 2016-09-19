import React, { Component } from 'react';
import ReviewStarring from '../../components/food_stand/starring';

const StarringTopLimit = 5;

class ReviewStarringContainer extends Component {
  render() {
    let starringTopLimit = StarringTopLimit;
    return (
      <ReviewStarring
        name={'Rating'}
        starringTopLimit={starringTopLimit}
        value={this.props.starring}
        editing={false}
      />
    );
  }
}

export default ReviewStarringContainer;
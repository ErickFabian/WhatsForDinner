import React, { Component } from 'react';
import FoodStandModal from '../components/food_stand_modal';

class FoodStandModalContainer extends Component {
  render() {
    return (
      <FoodStandModal
        closeModal={this.props.closeModal}
        foodStand={this.props.foodStand}
      />
    );
  }
}

export default FoodStandModalContainer;
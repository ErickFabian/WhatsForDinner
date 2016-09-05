import React, { Component } from 'react';
import FoodStandAdapter from '../adapters/food_stand';
import FoodStandForm from '../components/food-stand-form';

class FoodStandFormContainer extends Component {
  state = {
    foodStandName: '',
    foodStandCover: '',
    foodStandAddress: '',
    foodStandSchedule: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  getValidationState(attribute) {
    const length = this.state[attribute].length;
    if (length >= 10) return 'success';
    else if (length >= 4) return 'warning';
    else if (length <= 3) return 'error';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.saveFoodStand();
  }

  saveFoodStand() {
    let food_stand = {
      food_stand: {
        name:     this.state.foodStandName,
        position: this.props.clickedMapPoint.latLng,
        address:  this.state.foodStandAddress,
        schedule: this.state.foodStandSchedule
      }
    };

    FoodStandAdapter.create(food_stand).then((response) => {
      this.props.submitMarker();
    })
  }

  render() {
    return (
      <FoodStandForm
        foodStandName={this.state.foodStandName}
        foodStandAddress={this.state.foodStandAddress}
        foodStandSchedule={this.state.foodStandSchedule}

        closeModal={this.props.closeModal}

        validationState={this.getValidationState.bind(this)}
        onInputChange={this.handleChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

export default FoodStandFormContainer;
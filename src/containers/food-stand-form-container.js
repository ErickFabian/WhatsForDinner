import React, { Component } from 'react';
import FoodStandAdapter from '../adapters/food_stand_adapter';
import FoodStandForm from '../components/food_stand_form';

class FoodStandFormContainer extends Component {
  state = {
    foodStandName: '',
    foodStandPhone: '',
    foodStandCover: '',
    foodStandWebsite: '',
    foodStandAddress: '',
    foodStandSchedule: '',
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  handleDrop(files) {
    this.setState({
      foodStandCover: files[0]
    })
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
    var food_stand = new FormData();
    food_stand.append('food_stand[name]', this.state.foodStandName);
    food_stand.append('food_stand[phone]', this.state.foodStandPhone);
    food_stand.append('food_stand[website]', this.state.foodStandWebsite);
    food_stand.append('food_stand[cover]', this.state.foodStandCover);
    food_stand.append('food_stand[address]', this.state.foodStandAddress);
    food_stand.append('food_stand[schedule]', this.state.foodStandSchedule);
    food_stand.append('food_stand[position][lat]', this.props.clickedMapPoint.latLng.lat());
    food_stand.append('food_stand[position][lng]', this.props.clickedMapPoint.latLng.lng());

    FoodStandAdapter.create(food_stand).then((response) => {
      this.props.submitMarker(response.data.food_stand.id);
    });
  }

  render() {
    return (
      <FoodStandForm
        foodStandName={this.state.foodStandName}
        foodStandAddress={this.state.foodStandAddress}
        foodStandSchedule={this.state.foodStandSchedule}
        foodStandCover={this.state.foodStandCover}

        closeModal={this.props.closeModal}

        validationState={this.getValidationState.bind(this)}
        onInputChange={this.handleChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)}
        onDrop={this.handleDrop.bind(this)}
      />
    );
  }
}

export default FoodStandFormContainer;
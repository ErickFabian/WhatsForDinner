import axios from 'axios';

const foodStandsEndpoint = "http://localhost:3001/food_stands";

var foodStandAdapter = {
  get() {
    return axios.get(foodStandsEndpoint);
  },

  delete(id) {
    return axios.delete(`${foodStandsEndpoint}/${id}`);
  },

  parseMarkers(foodStands) {
    return foodStands.map((foodStand) => {
      let foodStandObj = {
        key:      foodStand.id,
        name:     foodStand.name,
        address:  foodStand.address,
        schedule: foodStand.schedule,
        position: {
          lat: parseFloat(foodStand.position.lat),
          lng: parseFloat(foodStand.position.lng)
        }
      }
      return foodStandObj;
    });
  }
}

export default foodStandAdapter;
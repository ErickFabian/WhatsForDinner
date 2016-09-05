import axios from 'axios';
import ApplicationAdapter from '../adapters/application_adapter.js';

const resource = 'foodStands';

let foodStandAdapter = {
  get(params = {}) {
    return axios.get(this.url(), params);
  },

  show(id){
    return axios.get(`${this.url()}/${id}`);
  },

  delete(id) {
    return axios.delete(`${this.url()}/${id}`);
  },

  create(params) {
    return axios.post(this.url(), params);
  },

  url() {
    return ApplicationAdapter.buildUrlFor(resource);
  },

  parseMarkers(foodStands) {
    return foodStands.map((foodStand) => {
      let foodStandObj = {
        key:      foodStand.id,
        name:     foodStand.name,
        cover:    foodStand.cover,
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
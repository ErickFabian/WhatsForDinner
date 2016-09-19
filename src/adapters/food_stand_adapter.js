import axios from 'axios';
import ApplicationAdapter from '../adapters/application_adapter.js';
import ParamSanitizer from '../utils/param_sanitizer';

const resource = 'foodStands';

let foodStandAdapter = {
  get(params = {}) {
    let q = this.sanitizeParams(params);
    return axios.get(this.url(), {
      params: {
        q
      }
    })
  },

  show(id) {
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
        id:       foodStand.id,
        key:      `foodStand${foodStand.id}`,
        name:     foodStand.name,
        cover:    foodStand.cover,
        address:  foodStand.address,
        schedule: foodStand.schedule,
        position: {
          lat: parseFloat(foodStand.position.lat),
          lng: parseFloat(foodStand.position.lng)
        }
      };

      return foodStandObj;
    });
  },

  sanitizeParams(params) {
    return ParamSanitizer.sanitize(params);
  }
}

export default foodStandAdapter;
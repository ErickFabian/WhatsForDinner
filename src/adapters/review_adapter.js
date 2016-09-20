import axios from 'axios';
import ParamSanitizer from '../utils/param_sanitizer';
import ApplicationAdapter from '../adapters/application_adapter.js';

const resource = 'reviews';

let foodStandAdapter = {
  get(params = {}) {
    let q = this.sanitizeParams(params);
    return axios.get(this.url(), {
      params: {
        q
      }
    })
  },

  show(id){
    return axios.get(`${this.url()}/${id}`);
  },

  create(params) {
    return axios.post(this.url(), params);
  },

  url() {
    return ApplicationAdapter.buildUrlFor(resource);
  },

  sanitizeParams(params) {
    return ParamSanitizer.sanitize(params);
  },

  parseReviews(reviews) {
    return reviews.map((review) => {
      let reviewObj = {
        id:   review.id,
        key: `review${review.id}`,
        rate: review.rate,
        owner: review.owner,
        description: review.description,
        createdAt: review.created_at
      };

      return reviewObj;
    });
  }
}

export default foodStandAdapter;
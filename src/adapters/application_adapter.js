const Config = require(`../config/${process.env.NODE_ENV}`).default;

let ApplicationAdapter = {
  host: Config.host,

  resourcesMappings: {
    reviews:    '/reviews',
    foodStands: '/food_stands'
  },

  buildUrlFor(resource) {
    return `${this.host}${this.resourcesMappings[resource]}`
  }
}

export default ApplicationAdapter;
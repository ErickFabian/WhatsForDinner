// TODO: Manage Environments
let ApplicationAdapter = {
  host: 'https://que-hay-para-cenar-api.herokuapp.com',

  resourcesMappings: {
    reviews:    '/reviews',
    foodStands: '/food_stands'
  },

  buildUrlFor(resource) {
    return `${this.host}${this.resourcesMappings[resource]}`
  }
}

export default ApplicationAdapter;
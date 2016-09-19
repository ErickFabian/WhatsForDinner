// TODO: Manage Environments
let ApplicationAdapter = {
  host: 'http://localhost:3001',

  resourcesMappings: {
    reviews:    '/reviews',
    foodStands: '/food_stands'
  },

  buildUrlFor(resource) {
    return `${this.host}${this.resourcesMappings[resource]}`
  }
}

export default ApplicationAdapter;
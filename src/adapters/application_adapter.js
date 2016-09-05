// TODO: Manage Environments
let ApplicationAdapter = {
  host: 'http://localhost:3001',

  resourcesMappings: {
    foodStands: '/food_stands'
  },

  buildUrlFor(resource) {
    return `${this.host}${this.resourcesMappings[resource]}`
  }
}

export default ApplicationAdapter;
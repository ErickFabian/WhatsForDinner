let ParamSanitizer = {
  sanitize(params) {
    return this.transformObjectKeys(params);
  },

  transformObjectKeys(object) {
    let newObject = {};

    Object.keys(object).forEach(function(key) {
      if ((object[key] instanceof(Object)) && !(object[key] instanceof(Array))) {
        newObject[underscore(key)] = this.transformObjectKeys(object[key]);
      } else {
        newObject[underscore(key)] = object[key];
      }
    });

    return newObject;
  }
}

export default ParamSanitizer;
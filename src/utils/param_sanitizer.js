let ParamSanitizer = {
  sanitize(params) {
    return this.transformObjectKeys(params);
  },

  transformObjectKeys(object) {
    let newObject = {};

    Object.keys(object).forEach(function(key) {
      if ((object[key] instanceof(Object)) && !(object[key] instanceof(Array))) {
        newObject[this.underscore(key)] = this.transformObjectKeys(object[key]);
      } else {
        newObject[this.underscore(key)] = object[key];
      }
    });

    return newObject;
  },

  underscored(str) {
    return str.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
  }
}

export default ParamSanitizer;
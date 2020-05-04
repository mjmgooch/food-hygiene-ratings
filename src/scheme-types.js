const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://api.ratings.food.gov.uk/',
  headers: { 'x-api-version': '2' } //this is essential, the api returns error 400 if this header isnt specified. It should return a proper error IMO but whatevs
});

var schemeTypes = function schemeTypes() {

  /**
    * Get a list of SchemeTypes.
    *
    * Returns details of all SchemeTypes, results are unbound.
    *
    *   http://api.ratings.food.gov.uk/Help/Api/GET-SchemeTypes
    */

  function getSchemeTypes() {

    return instance.get(`/SchemeTypes/`)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }

  return {
    getSchemeTypes: getSchemeTypes,
  };
};

module.exports = schemeTypes;
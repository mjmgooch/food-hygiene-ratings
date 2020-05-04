const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://api.ratings.food.gov.uk/',
  headers: { 'x-api-version': '2' } //this is essential, the api returns error 400 if this header isnt specified. It should return a proper error IMO but whatevs
});

var businessTypes = function businessTypes() {

    /**
   * Get a list of BusinessTypes.
   *
   * Returns details of all businessTypes, results are unbound.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes
   *   http://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes-basic
   */
  function getBusinessTypesBasic(params = []) {

    var url = '/BusinessTypes/basic/';

    if ((!params.pageNumber || !params.pageSize)) {
      var url;
    } else {
      var url = url + `${params.pageNumber}/${params.pageSize}`
    }

    return instance.get(url)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }

      /**
   * Get a list of BusinessTypes.
   *
   * Returns details of all businessTypes, results are unbound.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes
   *   http://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes-basic
   */
  function getBusinessTypes(params = []) {

    var url = '/BusinessTypes/';

    if ((!params.pageNumber || !params.pageSize)) {
      var url;
    } else {
      var url = url + `${params.pageNumber}/${params.pageSize}`
    }

    return instance.get(url)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }


    /**
   * Returns details of a single business type, selected by Id.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes-id
   */
  function getBusinessType(id) {

    return instance.get(`/BusinessTypes/${id}`)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }

  return {
    getBusinessTypesBasic: getBusinessTypesBasic,
    getBusinessTypes: getBusinessTypes,
    getBusinessType: getBusinessType
  };
};

module.exports = businessTypes;

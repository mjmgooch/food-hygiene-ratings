const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://api.ratings.food.gov.uk/',
  headers: { 'x-api-version': '2' } //this is essential, the api returns error 400 if this header isnt specified. It should return a proper error IMO but whatevs
});

var authorities = function authorities() {


     /**
   * Get a list of Authorities.
   *
   * Returns details of all authorities, results are unbound.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Authorities
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Authorities-basic
   */

  function getAuthoritiesBasic(params = []) {

    var url = '/Authorities/basic/';

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
   * Get a list of Authorities.
   *
   * Returns details of all authorities, results are unbound.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Authorities
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Authorities-basic
   */
  function getAuthorities(params = []) {

    var url = '/Authorities/';

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
   * Returns details of a single authority, selected by Id.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Authorities-id
   */

  function getAuthority(id) {

    return instance.get(`/Authorities/${id}`)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }

  return {
    getAuthoritiesBasic: getAuthoritiesBasic,
    getAuthorities: getAuthorities,
    getAuthority: getAuthority
  };
};

module.exports = authorities;

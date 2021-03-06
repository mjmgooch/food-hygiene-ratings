const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://api.ratings.food.gov.uk/',
  headers: { 'x-api-version': '2' }
});

var countries = function countries() {

  /**
   * Get a list of Countries.
   *
   * Returns details of all countries, results are unbound.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Countries
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Countries-basic
   */
  function getCountriesBasic(params = { pageNumber: null, pageSize: null }) {

    var url = '/Countries/basic/';

    //check to see if the request is being made with pageNumber and pageSize params
    if (params.pageNumber && params.pageSize) {
      url = url + `${params.pageNumber}/${params.pageSize}`;
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
 * Get a list of Countries.
 *
 * Returns details of all countries, results are unbound.
 *
 *   http://api.ratings.food.gov.uk/Help/Api/GET-Countries
 *   http://api.ratings.food.gov.uk/Help/Api/GET-Countries-basic
 */
  function getCountries(params = { pageNumber: null, pageSize: null }) {

    var url = '/Countries/';

    //check to see if the request is being made with pageNumber and pageSize params
    if (params.pageNumber && params.pageSize) {
      url = url + `${params.pageNumber}/${params.pageSize}`;
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
   * Returns details of a single country, selected by Id.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Countries-id
   */
  function getCountry(id) {

    return instance.get(`/Countries/${id}`)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }

  return {
    getCountriesBasic: getCountriesBasic,
    getCountries: getCountries,
    getCountry: getCountry
  };
};

module.exports = countries;

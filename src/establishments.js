const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://api.ratings.food.gov.uk/',
  headers: { 'x-api-version': '2' } 
});

var establishments = function establishments() {

  /**
   * Get a list of Establishments.
   *
   * Returns details of all Establishments, results are unbound.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Establishments-basic
   */

  function getEstablishmentsBasic(params = []) {

    var url = '/Establishments/basic/';

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
    * Returns details of a single Establishment, selected by Id.
    *
    *   http://api.ratings.food.gov.uk/Help/Api/GET-Establishments-id
    */

  function getEstablishment(id) {

    return instance.get(`/Establishments/${id}`)
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }

  /**
   * Get a list of Establishments.
   *
   * Returns a collection of establishment details,
   * based on provided search parameters.
   * All search parameters are optional.
   *
   *   Search params.
   *   name
   *   address
   *   longitude
   *   latitude
   *   maxDistanceLimit
   *   businessTypeId
   *   schemeTypeKey
   *   ratingKey
   *   ratingOperatorKey
   *   localAuthorityId
   *   countryId
   *   sortOptionKey
   *   pageNumber
   *   pageSize.
   *
   *   http://api.ratings.food.gov.uk/Help/Api/GET-Establishments_name_address_longitude_latitude_maxDistanceLimit_businessTypeId_schemeTypeKey_ratingKey_ratingOperatorKey_localAuthorityId_countryId_sortOptionKey_pageNumber_pageSize
   */

  function searchEstablishments(searchParams) {

    return instance.get('/Establishments', {
      params: searchParams
    })
      .then(function (response) {
        return (response);
      })
      .catch(function (error) {
        return (error);
      });

  }


  return {
    searchEstablishments: searchEstablishments,
    getEstablishment: getEstablishment,
    getEstablishmentsBasic: getEstablishmentsBasic
  };
};

module.exports = establishments;

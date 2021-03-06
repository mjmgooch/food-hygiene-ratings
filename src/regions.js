const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.ratings.food.gov.uk/',
    headers: { 'x-api-version': '2' }
});

var regions = function regions() {

    /**
      * Get a list of Regions.
      *
      * Returns details of all regions, results are unbound.
      *
      *   http://api.ratings.food.gov.uk/Help/Api/GET-Regions
      *   http://api.ratings.food.gov.uk/Help/Api/GET-Regions-basic
      */

    function getRegions(params = { pageNumber: null, pageSize: null }) {

        var url = '/Regions/';

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

    function getRegionsBasic(params = { pageNumber: null, pageSize: null }) {

        var url = '/Regions/Basic/';

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
     *      Returns details of a single region, selected by Id.
     *
     *   http://api.ratings.food.gov.uk/Help/Api/GET-Regions-id
     */
    function getRegion(id) {

        return instance.get(`/Regions/${id}`)
            .then(function (response) {
                return (response);
            })
            .catch(function (error) {
                return (error);
            });

    }

    return {
        getRegions: getRegions,
        getRegion: getRegion,
        getRegionsBasic: getRegionsBasic
    };
};

module.exports = regions;
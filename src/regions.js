const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.ratings.food.gov.uk/',
    headers: { 'x-api-version': '2' } //this is essential, the api returns error 400 if this header isnt specified. It should return a proper error IMO but whatevs
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

    function getRegions(params) {

        var url = '/Regions/';

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

    function getRegionsBasic(params) {

        var url = '/Regions/Basic/';

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
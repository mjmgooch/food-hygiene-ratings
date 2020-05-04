const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.ratings.food.gov.uk/',
    headers: { 'x-api-version': '2' } //this is essential, the api returns error 400 if this header isnt specified. It should return a proper error IMO but whatevs
});

var sortOptions = function sortOptions() {

    /**
     * Get a list of SortOptions.
     *
     * Returns details of all SortOptions.
     *
     *   http://api.ratings.food.gov.uk/Help/Api/GET-SortOptions
     */
    function getSortOptions() {

        return instance.get(`/SortOptions`)
            .then(function (response) {
                return (response);
            })
            .catch(function (error) {
                return (error);
            });

    }

    return {
        getSortOptions: getSortOptions,
    };
};

module.exports = sortOptions;
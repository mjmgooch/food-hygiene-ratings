const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.ratings.food.gov.uk/',
    headers: { 'x-api-version': '2' } //this is essential, the api returns error 400 if this header isnt specified. It should return a proper error IMO but whatevs
});

var ratingOperators = function ratingOperators() {

    /**
     * Get a list of RatingOperators.
     *
     * Returns details of all RatingOperators, results are unbound.
     *
     *   http://api.ratings.food.gov.uk/Help/Api/GET-RatingOperators
     */

    function getRatingOperators() {

        return instance.get(`/RatingOperators/`)
            .then(function (response) {
                return (response);
            })
            .catch(function (error) {
                return (error);
            });

    }

    return {
        getRatingOperators: getRatingOperators
    };
};

module.exports = ratingOperators;
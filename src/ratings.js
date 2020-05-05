const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.ratings.food.gov.uk/',
    headers: { 'x-api-version': '2' } 
});

var ratings = function ratings() {

    /**
     * Get a list of Ratings.
     *
     * Returns details of all Ratings.
     *
     * http://api.ratings.food.gov.uk/Help/Api/GET-Ratings
     */
    function getRatings() {

        return instance.get(`/Ratings`)
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            return(error);
        });

    }

    return {
        getRatings: getRatings
    };
};

module.exports = ratings;
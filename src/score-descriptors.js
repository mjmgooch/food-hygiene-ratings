const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.ratings.food.gov.uk/',
    headers: { 'x-api-version': '2' }
});

var scoreDescriptors = function scoreDescriptors() {

    /**
     * Returns details of all scoreDescriptor, results are unbound.
     *
     *   http://api.ratings.food.gov.uk/Help/Api/GET-ScoreDescriptors_establishmentId
     */
    function getScoreDescriptors(establishmentId = 0) {

        return instance.get(`/ScoreDescriptors/`, {
            params: { 'establishmentId': establishmentId }
        })
            .then(function (response) {
                return (response);
            })
            .catch(function (error) {
                return (error);
            });

    }

    return {
        getScoreDescriptors: getScoreDescriptors,
    };
};

module.exports = scoreDescriptors;
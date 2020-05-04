
var
    authorities = require('./authorities.js'),
    businessTypes = require('./business-types.js'),
    countries = require('./countries.js'),
    establishments = require('./establishments.js'),
    ratingOperators = require('./rating-operators.js'),
    ratings = require('./ratings.js'),
    regions = require('./regions.js'),
    schemeTypes = require('./scheme-types.js'),
    scoreDescriptors = require('./score-descriptors.js'),
    sortOptions = require('./sort-options.js');
fhrs = {};

fhrs.Client = function () {

    this.authorities = authorities();
    this.businessTypes = businessTypes();
    this.countries = countries();
    this.ratings = ratings();
    this.establishments = establishments();
    this.ratingOperators = ratingOperators();
    this.regions = regions();
    this.schemeTypes = schemeTypes();
    this.scoreDescriptors = scoreDescriptors();
    this.sortOptions = sortOptions();
};

module.exports = fhrs;
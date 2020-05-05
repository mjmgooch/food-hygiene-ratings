var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.countries.getCountriesBasic', function () {

    it('should return a 200 OK', function () {

        return client.countries.getCountriesBasic().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a basic list of countries', function () {
        this.timeout(9000); //this request seems to take some time and often exceeds the 2000ms limit

        return client.countries.getCountriesBasic().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('countries');
        });

    });

    it('should return a basic paged list of countries', function () {

        var params = { pageNumber: 3, pageSize: 1 };

        return client.countries.getCountriesBasic(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('countries');
        });

    });
});


describe('client.countries.getCountries()', function () {

    it('should return a 200 OK', function () {

        return client.countries.getCountries().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of countries', function () {

        return client.countries.getCountries().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('countries');
        });

    });

    it('should return a paged list of countries', function () {

        var params = { pageNumber: 3, pageSize: 1 };

        return client.countries.getCountries(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('countries');
        });

    });
});


describe('client.countries.getCountry()', function () {

    it('should return a 200 OK', function () {

        var countryId = 1; //England

        return client.countries.getCountry(countryId).then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('it should return country England', function () {

        var countryId = 1; //England

        return client.countries.getCountry(countryId).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('id');
        });

    });
});

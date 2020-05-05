var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.countries.getRegionsBasic()', function () {

    it('should return a 200 OK', function () {

        return client.regions.getRegionsBasic().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a basic list of regions', function () {

        return client.regions.getRegionsBasic().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('regions');
        });

    });

    it('should return a basic paged list of regions', function () {

        var params = { pageNumber: 3, pageSize: 1 };

        return client.regions.getRegionsBasic(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('regions');
        });

    });
});

describe('client.regions.getRegions()', function () {

    it('should return a 200 OK', function () {

        return client.regions.getRegions().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of regions', function () {

        return client.regions.getRegions().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('regions');
        });

    });

    it('should return a list of regions', function () {

        var params = { pageNumber: 3, pageSize: 1 };

        return client.regions.getRegions(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('regions');
        });

    });
});

describe('client.regions.getRegionsBasic()', function () {

    it('should return a 200 OK', function () {
        var regionId = 4;

        return client.regions.getRegion(regionId).then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return region with ID: 4', function () {
        var regionId = 4;

        return client.regions.getRegion(regionId).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('id');
        });

    });
});


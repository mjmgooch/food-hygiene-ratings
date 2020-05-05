var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.businessTypes.getBusinessTypesBasic', function () {

    it('should return a 200 OK', function () {

        return client.businessTypes.getBusinessTypesBasic().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a basic list of business types', function () {

        return client.businessTypes.getBusinessTypesBasic().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('businessTypes');
        });

    });

    it('should return a basic paged list of business types', function () {

        var params = { pageNumber: 3, pageSize: 1 };

        return client.businessTypes.getBusinessTypesBasic(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('businessTypes');
        });

    });
});


describe('client.businessTypes.getBusinessTypes()', function () {

    it('should return a 200 OK', function () {

        return client.businessTypes.getBusinessTypes().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of business types', function () {

        return client.businessTypes.getBusinessTypes().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('businessTypes');
        });

    });

    it('should return a paged list of business types', function () {

        var params = { pageNumber: 3, pageSize: 1 };

        return client.businessTypes.getBusinessTypes(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('businessTypes');
        });

    });
});


describe('client.businessTypes.getBusinessType()', function () {

    it('should return a 200 OK', function () {

        var businessTypeid = 7843; // Pub/bar/nightclub

        return client.businessTypes.getBusinessType(businessTypeid).then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('it should return a single business type', function () {

        var businessTypeid = 7843; // Pub/bar/nightclub

        return client.businessTypes.getBusinessType(businessTypeid).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('BusinessTypeId');
        });

    });
});

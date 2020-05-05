var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.sortOptions.getSortOptions', function () {

    it('should return a 200 OK', function () {

        return client.sortOptions.getSortOptions().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of sort options', function () {

        return client.sortOptions.getSortOptions().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('sortOptions');
        });

    });
});

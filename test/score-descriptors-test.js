var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.scoreDescriptors.getScoreDescriptors()', function () {

    it('should return a 200 OK', function () {

        return client.scoreDescriptors.getScoreDescriptors().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of scheme types', function () {

        return client.scoreDescriptors.getScoreDescriptors().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('scoreDescriptors');
        });

    });
});

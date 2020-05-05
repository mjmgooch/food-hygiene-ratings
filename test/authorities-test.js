var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.authorities.getAuthoritiesBasic', function () {

    it('should return a 200 OK', function () {

        return client.authorities.getAuthoritiesBasic().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a basic list of authorities', function () {

        return client.authorities.getAuthoritiesBasic().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('authorities');
        });

    });

    it('should return a basic list of paged authorities', function () {

        var params = {pageNumber:3, pageSize: 1};

        return client.authorities.getAuthoritiesBasic(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('authorities');
        });

    });
});


describe('client.authorities.getAuthorities', function () {
    
    it('should return a 200 OK', function () {

        return client.authorities.getAuthorities().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of authorities', function () {

        return client.authorities.getAuthoritiesBasic().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('authorities');
        });

    });

    it('should return a paged list of authorities', function () {

        var params = {pageNumber:3, pageSize: 1};

        return client.authorities.getAuthoritiesBasic(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('authorities');
        });

    });
});

describe('client.authorities.getAuthority', function () {
    
    it('should return a 200 OK', function () {

        var authorityId = 310; //Cheltenham Borough Council

        return client.authorities.getAuthority(authorityId).then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a single authority', function () {
        
        var authorityId = 310; //Cheltenham Borough Council

        return client.authorities.getAuthority(authorityId).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('LocalAuthorityId');
        });

    });
});

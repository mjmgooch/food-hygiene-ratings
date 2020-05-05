var chai = require('chai'),
    expect = chai.expect;

const fhrs = require('../src/fhrs.js');
client = new fhrs.Client();

describe('client.establishments.getEstablishmentsBasic()', function () {
    this.timeout(9000); //this request seems to take some time and often exceeds the 2000ms limit

    it('should return a 200 OK', function () {

        return client.establishments.getEstablishmentsBasic().then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of establishments', function () {

        return client.establishments.getEstablishmentsBasic().then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('establishments');
        });

    });

    it('should return a paged list of establishments', function () {

        var params = {pageNumber:3, pageSize: 1};

        return client.establishments.getEstablishmentsBasic(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('establishments');
        });

    });
});

describe('client.establishments.getEstablishment()', function () {
    this.timeout(9000); //this request seems to take some time and often exceeds the 2000ms limit

    it('should return a 200 OK', function () {

        var id = 13944; //Establishment ID (Pan Pizza, Cheltenham)

        return client.establishments.getEstablishment(id).then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a single establishment', function () {
        
        var id = 13944; //Establishment ID (Pan Pizza, Cheltenham)

        return client.establishments.getEstablishment(id).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('meta');
        });

    });
});

describe('client.establishments.searchEstablishments()', function () {
    this.timeout(9000); //this request seems to take some time and often exceeds the 2000ms limit
    
    it('should return a 200 OK', function () {

        var params = {name:'Pan Pizza', 
            address:'60 High Street, Cheltenham'}; 

        return client.establishments.searchEstablishments(params).then(function (response) {
            expect(response.status).to.equal(200);
        });

    });

    it('should return a list of establishments meeting the search criteria', function () {
        
        var params = {name:'Pan Pizza', address:'60 High Street, Cheltenham'}; 

        return client.establishments.searchEstablishments(params).then(function (response) {
            expect(response.data).to.be.an('object').and.has.property('meta');
        });

    });
});

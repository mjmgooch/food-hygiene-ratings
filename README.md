# Node JS Food Hygiene Rating Scheme (FHRS) API
This Node JS package pulls data from the Food Hygiene Rating System (FRHS) API (version 2) and allows you to utilise the responses in your node projects.

## FHRS Api Docs
The full list of endpoints can be found here. No API key is required.

https://api.ratings.food.gov.uk/Help

## Getting Started

To install this package run the following:
```bash
npm install --save food-hygiene-ratings
```

Once installed you can instantiate the FHRS client in your code:
```js
const fhrs = require('./src/fhrs.js'),
    client = new fhrs.Client();
```
    
Now that you have the client running you can use the FHRS data like this:
```js
client.ratings.getRatings()
.then(function (response) {
    console.log('The full response': response);
    console.log('Just the data': response.data);
    console.log('Returns just the array of ratings': response.data.ratings);
});
```

# Reference

## Authorities

### getAuthoritiesBasic()
Returns a basic list of authorities (id/name), details can be retrieved by calling `getAuthority()`, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-Authorities-basic

```js
var params = {pageNumber:3, pageSize: 1};

client.authorities.getAuthoritiesBasic(params)
.then(function (response) {
    console.log(response.data);
});
```

| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getAuthorities()
Returns details of all authorities, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-Authorities
```js
client.authorities.getAuthorities()
.then(function (response) {
    console.log(response.data);
});
```

| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getAuthority()
Returns details of a single authority, selected by Id.
https://api.ratings.food.gov.uk/Help/Api/GET-Authorities-id
```js
var authorityId = 310; //Cheltenham Borough Council

client.authorities.getAuthority(authorityId)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| id | The target Authority Id. (required) |


## Business Types

### getBusinessTypesBasic()
Returns a basic list of business types, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes-basic
```js
client.businessTypes.getBusinessTypesBasic()
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getBusinessTypes()
Returns details of all business types, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes
```js
client.businessTypes.getBusinessTypes()
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getBusinessType()
Returns details of a single business type, selected by Id.
https://api.ratings.food.gov.uk/Help/Api/GET-BusinessTypes-id
```js
var businessTypeid = 7843; // Pub/bar/nightclub

client.businessTypes.getBusinessType(businessTypeid)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| id | The target business type Id. (required) |

## Countries

### getCountriesBasic()
Returns a basic list of countries, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-Countries-basic
```js
client.countries.getCountriesBasic()
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getCountries()
Returns details of all countries, results are unbound. Optionally specify `pageNumber` and `pageSize` to get specific page results.
https://api.ratings.food.gov.uk/Help/Api/GET-Countries
```js
client.countries.getCountries()
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getCountry()
Returns details of a single country, selected by Id.
https://api.ratings.food.gov.uk/Help/Api/GET-Countries-id
```js
var countryId = 1; //England

client.countries.getCountry(countryId)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| id | The target country Id. (required) |

## Establishments

### getEstablishment()

Returns a details of a single establishment, selected by Id.

https://api.ratings.food.gov.uk/Help/Api/GET-Establishments-id
```js
var establishmentId = 13944; //Pan Pizza, Cheltenham

client.establishments.getEstablishment(establishmentId)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| id | The target estblishment id. (required) |

### searchEstablishments()

Returns a collection of establishment details, based on provided search parameters. All search parameters are optional.

https://api.ratings.food.gov.uk/Help/Api/GET-Establishments_name_address_longitude_latitude_maxDistanceLimit_businessTypeId_schemeTypeKey_ratingKey_ratingOperatorKey_localAuthorityId_countryId_sortOptionKey_pageNumber_pageSize

```js
var params = {name:'Pan Pizza', 
            address:'60 High Street, Cheltenham'}; //Search for a business with name 'Pan Pizza' with an address matching '60 High Street, Cheltenham'

client.establishments.searchEstablishments(params)
.then(function (response) {
    console.log(response.data);
});
```
#### Parameters

| Parameter | Description |
|-----------|-------------|
| name      | Terms to search for within the Business address and postcode of the establishments.          |
| address   | Terms to search for within the Business name of the establishments.           |
| longitude   |  The longitude of the centre point of a spatial query.           |
| latitude   |   The latitude of the centre point of a spatial query.           |
| maxDistanceLimit   |    The max distance limit in miles from the centre of the spatial query. Note: This value maybe capped by the system to limit the size of the result set          |
| businessTypeId   |Filter the results based on the Business Type of the establishment (See BusinessTypes for more details).           |
| schemeTypeKey   | Filter the results based on the Scheme Type (FHRS or FHIS) of the establishment (See SchemeTypes for more details). Valid options are 'FHRS' and 'FHIS'.           |
| ratingKey   |  Filter the results based on the FHIS/FHRS Rating of the establishment (See Ratings for more details). Valid options for FHRS are '0', '1', '2', '3', '4' and '5' and for FHIS are 'Pass', 'ImprovementRequired',  'AwaitingPublication', 'AwatingInspection' and 'Exempt'           |
| ratingOperatorKey   |   Operator for increasing the flexibility of the rating search. Valid options are 'LessThanOrEqual', 'GreaterThanOrEqual' and 'Equal', the default for this value is 'Equal' (See RatingOperators for more details). Note: These operators only function on FHRS Ratings.          |
| localAuthorityId   |   Filter the results based on the Local Authority of the establishment (See Authorities for more details).          |
| countryId   |  Filter the results based on the Country of the establishment (See Countries for more details).           |
| sortOptionKey   |  Set the options for sort field and direction of the results (See SortOptions for more details). Valid options are 'Relevance', 'rating', 'desc_rating', 'alpha', 'desc_alpha' and 'distance'        |
| pageNumber   |  	The page number of the result set to return.          |
| pageSize   |   Size of the page of results to return. (Note: Maximum value is system capped, so less results maybe returned than requested)    |


### getEstablishmentsBasic()
Returns a basic list of establishments (id/name), details can be retrieved by calling establishments/{id}, page parameters allow for page number and size specification. Optionally specify `pageNumber` and `pageSize` to get specific page results.

Note - There is no advanced equivalent of this request.

https://api.ratings.food.gov.uk/Help/Api/GET-Establishments-basic
```js
var params = {pageNumber:3, pageSize: 1};

client.establishments.getEstablishmentsBasic(params)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

## Rating Operators

### getRatingOperators()
Returns details of all RatingOperators, results are unbound.

https://api.ratings.food.gov.uk/Help/Api/GET-RatingOperators
```js
client.ratingOperators.getRatingOperators()
.then(function (response) {
    console.log(response.data);
});
```

## Ratings

### getRatings()
Returns details of all ratings, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-Ratings
```js
client.ratings.getRatings()
.then(function (response) {
    console.log(response.data);
});
```

## Regions

### getRegions()
Returns details of all regions, results are unbound. Optionally specify params to get specific page results. Optionally specify `pageNumber` and `pageSize` to get specific page results.
https://api.ratings.food.gov.uk/Help/Api/GET-Regions
```js
var params = {pageNumber:16, pageSize: 10};

client.regions.getRegions(params)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getRegionsBasic()
Returns a basic list of regions, details can be retrieved by calling `getRegion()`. Optionally specify `pageNumber` and `pageSize` to get specific page results.
https://api.ratings.food.gov.uk/Help/Api/GET-Regions-basic
```js
var params = {pageNumber:16, pageSize: 10};

client.regions.getRegionsBasic(params)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| pageNumber | The page number to return results from. (optional) |
| pageSize | Size of the page to be returned. (optional)|

### getRegion()
Returns details of a single region, selected by Id.
https://api.ratings.food.gov.uk/Help/Api/GET-Regions-id
```js
var regionId = 4;

client.regions.getRegion(regionId)
.then(function (response) {
    console.log(response.data);
});
```
| Parameter | Description |
|-----------|-------------|
| id | The target Authority Id. (required) |

## Scheme Types

### getSchemeTypes()
Returns details of all SchemeTypes, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-SchemeTypes

```js
client.schemeTypes.getSchemeTypes()
.then(function (response) {
    console.log(response.data);
});
```

## Score Descriptors

### getScoreDescriptors()
	
Returns details of all scoreDescriptor, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-ScoreDescriptors_establishmentId
```js
var establishmentId = 13944;

client.scoreDescriptors.getScoreDescriptors(establishmentId)
.then(function (response) {
    console.log(response);
});
```
| Parameter | Description |
|-----------|-------------|
| id | The target Authority Id. (required) |


## Sort Options

### getSortOptions()
Returns details of all SortOptions, results are unbound.
https://api.ratings.food.gov.uk/Help/Api/GET-SortOptions
```js
client.sortOptions.getSortOptions()
.then(function (response) {
    console.log(response.data);
});
```




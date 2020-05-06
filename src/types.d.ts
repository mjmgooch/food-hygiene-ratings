declare module 'food-hygiene-ratings' {
  type FhrsOptions = {
    pageNumber?: number;
    pageSize?: number;
  }

  interface Authorities {
    getAuthoritiesBasic(options?: FhrsOptions): Promise<object>;
    getAuthorities(options?: FhrsOptions): Promise<object>;
    getAuthority(id: number): Promise<object>;
  }

  interface BusinessTypes {
    getBusinessTypesBasic(options?: FhrsOptions): Promise<object>;
    getBusinessTypes(options?: FhrsOptions): Promise<object>;
    getBusinessType(id: number): Promise<object>;
  }

  interface Countries {
    getCountriesBasic(options?: FhrsOptions): Promise<object>;
    getCountries(options?: FhrsOptions): Promise<object>;
    getCountry(id: number): Promise<object>;
  }

  interface Establishments {
    getEstablishmentsBasic(options?: FhrsOptions): Promise<object>;
    getEstablishment(id: number): Promise<object>;
    searchEstablishments(options?: {
      name?: string;
      address?: string;
      longitude?: string;
      latitude?: string;
      maxDistanceLimit?: number;
      businessTypeId?: number;
      schemeTypeKey?: 'FHRS' | 'FHIS';
      ratingKey?: string;
      ratingOperatorKey?: 'LessThanOrEqual' | 'GreaterThanOrEqual' | 'Equal';
      localAuthorityId?: number;
      countryId?: number;
      sortOptionKey?: 'Relevance' | 'rating' | 'desc_rating' | 'alpha' | 'desc_alpha' | 'distance';
      pageNumber?: number;
      pageSize?: number;
    }): Promise<object>;
  }

  interface Ratings {
    getRatings(): Promise<object>;
  }

  interface RatingOperators {
    getRatingOperators(): Promise<object>;
  }

  interface Regions {
    getRegionsBasic(options?: FhrsOptions): Promise<object>;
    getRegions(options?: FhrsOptions): Promise<object>;
    getRegion(id: number): Promise<object>;
  }

  interface SchemeTypes {
    getSchemeTypes(): Promise<object>;
  }

  interface ScoreDescriptors {
    getScoreDescriptors(id: number): Promise<object>;
  }

  interface SortOptions {
    getSortOptions(): Promise<object>;
  }

  export class Client {
    authorities: Authorities;
    businessTypes: BusinessTypes;
    countries: Countries;
    establishments: Establishments;
    ratings: Ratings;
    ratingOperators: RatingOperators;
    regions: Regions;
    schemeTypes: SchemeTypes;
    scoreDescriptors: ScoreDescriptors;
    sortOptions: SortOptions;
  }
}

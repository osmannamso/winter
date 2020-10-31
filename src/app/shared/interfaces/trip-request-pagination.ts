import {TripRequest} from './trip-request';

export interface TripRequestPagination {
  limit: number;
  page: number;
  results: Array<TripRequest>;
  total_count: number;
  total_pages: number;
}

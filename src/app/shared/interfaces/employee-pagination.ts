import {Employee} from './employee';

export interface EmployeePagination {
  limit: number;
  page: number;
  results: Array<Employee>;
  total_count: number;
  total_pages: number;
}

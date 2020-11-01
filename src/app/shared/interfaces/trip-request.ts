import {Employee} from './employee';

export interface TripRequest {
  address: string;
  amount: number;
  by: string;
  carrier_from: string;
  carrier_to: string;
  comment: string;
  company: number;
  created_at: string;
  created_by: Employee;
  city_from: string;
  city_to: string;
  direct_flight: boolean;
  duration_from: number;
  duration_to: number;
  employees: Array<Employee>;
  flight_date_from: string;
  flight_date_to: string;
  hour_amount: number;
  id: number;
  is_hourly: boolean;
  is_included_price: boolean;
  residence: string;
  residence_class: string;
  status: string;
  ticket_type: string;
  transfer: string;
  trip_date_from: string;
  trip_date_to: string;
  updated_at: string;
  vehicle_class: string;

  expanded?: boolean;
}

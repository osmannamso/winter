import {Injectable} from '@angular/core';
import {CustomHttpService} from './custom-http.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TripRequestPagination} from '../shared/interfaces/trip-request-pagination';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(
    private http: CustomHttpService,
    private fb: FormBuilder
  ) {}

  getTripForm(): FormGroup {
    return this.fb.group({
      company: 1,
      city_from: '',
      city_to: '',
      trip_date_from: '',
      trip_date_to: '',
      by: '',
      direct_flight: true,
      ticket_type: '',
      residence: '',
      residence_class: '',
      transfer: '',
      vehicle_class: '',
      is_hourly: '',
      hour_amount: '',
      comment: '',
      employees: [[]]
    });
  }

  // http queries below

  createTripRequest(formGroup: FormGroup): Observable<any> {
    return this.http.post('/corp/trip_request/', formGroup.getRawValue());
  }

  getTripRequests(): Observable<TripRequestPagination> {
    return this.http.get('/corp/trip_request/');
  }
}

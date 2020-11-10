import {Injectable} from '@angular/core';
import {CustomHttpService} from './custom-http.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TripRequestPagination} from '../shared/interfaces/trip-request-pagination';
import {Company} from '../shared/interfaces/company';
import {COMPANY_KEY} from '../values/local-storage-keys';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(
    private localStorage: LocalStorageService,
    private http: CustomHttpService,
    private fb: FormBuilder
  ) {}

  getTripForm(): FormGroup {
    const company: Company = this.localStorage.getItem(COMPANY_KEY);
    return this.fb.group({
      company: company.id,
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
      is_hourly: false,
      hour_amount: 0,
      comment: '',
      employees: [[]]
    });
  }

  // http queries below

  createTripRequest(formGroup: FormGroup): Observable<any> {
    return this.http.post('/corp/trip_request/', formGroup.getRawValue());
  }

  getTripRequests(): Observable<TripRequestPagination> {
    return this.http.get('/corp/trip_request/', {page_size: 200});
  }

  confirmTrip(id: number): Observable<any> {
    return this.http.patch(`/corp/trip_request/${id}/confirm/`);
  }
}
